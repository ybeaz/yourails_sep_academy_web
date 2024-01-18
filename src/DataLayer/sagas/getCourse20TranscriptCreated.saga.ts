import { takeEvery, put, select } from 'redux-saga/effects'

import { ActionReduxType } from '../../Interfaces'
import { actionSync, actionAsync } from '../../DataLayer/index.action'
import { getHeadersAuthDict } from '../../Shared/getHeadersAuthDict'
import { getResponseGraphqlAsync } from '../../../../yourails_communication_layer'

import {
  RootStoreType,
  CreateModuleStagesEnumType,
  CreateCourseStatusEnumType,
} from '../../Interfaces/RootStoreType'
import { withDebounce } from '../../Shared/withDebounce'
import { selectGraphqlHttpClientFlag } from '../../FeatureFlags/'
import { getChunkedString } from '../../Shared/getChunkedString'
import {
  connectionsTimeouts,
  ConnectionsTimeoutNameEnumType,
} from '../../Constants/connectionsTimeouts.const'
import { CHUNKS_FROM_TRANSCRIPT_STRING } from '../../Constants/chunkParamsLlm.const'

export function* getCourse20TranscriptCreatedGenerator(
  params: ActionReduxType | any
): Iterable<any> {
  try {
    /* Add transcript to courseCreateProgress */
    const originUrl: any = yield select((state: RootStoreType) => {
      return state.courseCreateProgress.originUrl
    })

    yield put(
      actionSync.SET_COURSE_CREATE_STATUS({
        stage: CreateModuleStagesEnumType['transcript'],
        status: CreateCourseStatusEnumType['pending'],
      })
    )

    const variables = {
      createYoutubeTranscriptInput: {
        originUrl,
      },
    }

    const createYoutubeTranscript: any = yield getResponseGraphqlAsync(
      {
        variables,
        resolveGraphqlName: 'createYoutubeTranscript',
      },
      {
        ...getHeadersAuthDict(),
        clientHttpType: selectGraphqlHttpClientFlag(),
        timeout: connectionsTimeouts[ConnectionsTimeoutNameEnumType.transcript],
      }
    )

    yield put(
      actionSync.ADD_COURSE_CREATE_DATA({
        transcript: createYoutubeTranscript.transcript,
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
      actionSync.ADD_COURSE_CREATE_DATA({
        transcriptChunks,
      })
    )

    yield put(
      actionSync.SET_COURSE_CREATE_STATUS({
        stage: CreateModuleStagesEnumType['transcript'],
        status: CreateCourseStatusEnumType['success'],
      })
    )
  } catch (error: any) {
    yield put(
      actionSync.SET_COURSE_CREATE_STATUS({
        stage: CreateModuleStagesEnumType['transcript'],
        status: CreateCourseStatusEnumType['failure'],
      })
    )

    console.info(
      'getCourse20TranscriptCreated.saga [69] ERROR',
      `${error.name}: ${error.message}`
    )
  }
}

export const getCourse20TranscriptCreated = withDebounce(
  getCourse20TranscriptCreatedGenerator,
  500
)

export default function* getCourse20TranscriptCreatedSaga() {
  yield takeEvery(
    [actionAsync.GET_COURSE_TRANSCRIPT_CREATED.REQUEST().type],
    getCourse20TranscriptCreated
  )
}