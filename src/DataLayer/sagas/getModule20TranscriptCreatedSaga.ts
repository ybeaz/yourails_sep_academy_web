import { takeEvery, put, select } from 'redux-saga/effects'

import { MutationCreateYoutubeTranscriptArgs } from '../../@types/GraphqlTypes'
import { ActionReduxType } from '../../Interfaces'
import { actionSync, actionAsync } from '../../DataLayer/index.action'
import { getHeadersAuthDict } from '../../Shared/getHeadersAuthDict'
import { getResponseGraphqlAsync, ResolveGraphqlEnumType } from 'yourails_communication_layer'

import {
  RootStoreType,
  CreateModuleStagesEnumType,
  CreateModuleStatusEnumType,
} from '../../Interfaces/RootStoreType'
import { withDebounce } from '../../Shared/withDebounce'
import { selectGraphqlHttpClientFlag } from '../../FeatureFlags/'
import { getChunkedString } from '../../Shared/getChunkedString'
import {
  connectionsTimeouts,
  ConnectionsTimeoutNameEnumType,
} from '../../Constants/connectionsTimeouts.const'
import { CHUNKS_FROM_TRANSCRIPT_STRING } from '../../Constants/chunkParamsLlm.const'

export function* getModule20TranscriptCreatedGenerator(
  params: ActionReduxType | any
): Iterable<any> {
  try {
    /* Add transcript to moduleCreateProgress */
    const inputCourseCreate: any = yield select((state: RootStoreType) => {
      return state.forms.inputCourseCreate
    })

    yield put(
      actionSync.SET_MODULE_CREATE_STATUS({
        stage: CreateModuleStagesEnumType['transcript'],
        status: CreateModuleStatusEnumType['pending'],
      })
    )

    let variables: MutationCreateYoutubeTranscriptArgs = {
      createYoutubeTranscriptInput: {
        originID: inputCourseCreate,
      },
    }

    if (inputCourseCreate.includes('youtube.com'))
      variables = {
        createYoutubeTranscriptInput: {
          originUrl: inputCourseCreate,
        },
      }

    const createYoutubeTranscript: any = yield getResponseGraphqlAsync(
      {
        variables,
        resolveGraphqlName: ResolveGraphqlEnumType['createYoutubeTranscript'],
      },
      {
        ...getHeadersAuthDict(),
        clientHttpType: selectGraphqlHttpClientFlag(),
        timeout: connectionsTimeouts[ConnectionsTimeoutNameEnumType.transcript],
      }
    )

    yield put(
      actionSync.ADD_MODULE_CREATE_DATA({
        transcript: createYoutubeTranscript.transcript,
        transcriptList: createYoutubeTranscript.transcriptList,
      })
    )

    const params = {
      input: createYoutubeTranscript.transcript,
    }

    const transcriptChunks = getChunkedString(params, {
      printRes: false,
      ...CHUNKS_FROM_TRANSCRIPT_STRING,
    })

    yield put(
      actionSync.ADD_MODULE_CREATE_DATA({
        transcriptChunks,
      })
    )

    yield put(
      actionSync.SET_MODULE_CREATE_STATUS({
        stage: CreateModuleStagesEnumType['transcript'],
        status: CreateModuleStatusEnumType['success'],
      })
    )
  } catch (error: any) {
    yield put(
      actionSync.SET_MODULE_CREATE_STATUS({
        stage: CreateModuleStagesEnumType['transcript'],
        status: CreateModuleStatusEnumType['failure'],
      })
    )

    console.info('getModule20TranscriptCreatedSaga [69] ERROR', `${error.name}: ${error.message}`)
  }
}

export const getModule20TranscriptCreated = withDebounce(getModule20TranscriptCreatedGenerator, 500)

export default function* getModule20TranscriptCreatedSaga() {
  yield takeEvery(
    [actionAsync.GET_MODULE_TRANSCRIPT_CREATED.REQUEST().type],
    getModule20TranscriptCreated
  )
}
