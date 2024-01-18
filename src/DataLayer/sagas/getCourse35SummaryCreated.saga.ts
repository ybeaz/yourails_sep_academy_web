import { takeEvery, put, select, delay } from 'redux-saga/effects'

import { ActionReduxType } from '../../Interfaces'
import { actionSync, actionAsync } from '../../DataLayer/index.action'
import {
  RootStoreType,
  CreateModuleStagesEnumType,
  CreateCourseStatusEnumType,
} from '../../Interfaces/RootStoreType'
import {
  connectionsTimeouts,
  ConnectionsTimeoutNameEnumType,
} from '../../Constants/connectionsTimeouts.const'
import { withDebounce } from '../../Shared/withDebounce'
import {
  getCourseBotResponse,
  GetCourseBotResponseParamsType,
} from './getCourseBotResponse.saga'
import { getChunkedArray } from '../../Shared/getChunkedArray'
import { CHUNKS_FROM_SUMMARY_ARRAY } from '../../Constants/chunkParamsLlm.const'

export function* getCourse35SummaryCreatedGenerator(
  params: ActionReduxType | any
): Iterable<any> {
  try {
    const transcriptChunks: any = yield select((state: RootStoreType) => {
      return state.courseCreateProgress.transcriptChunks
    })

    yield put(
      actionSync.SET_COURSE_CREATE_STATUS({
        stage: CreateModuleStagesEnumType['summary'],
        timeCalculated: Array.isArray(transcriptChunks)
          ? transcriptChunks.length *
            connectionsTimeouts.transcriptChunkToSummary
          : null,
      })
    )

    yield put(
      actionSync.SET_COURSE_CREATE_STATUS({
        stage: CreateModuleStagesEnumType['summary'],
        status: CreateCourseStatusEnumType['pending'],
      })
    )

    let summary: any[] = []
    let paramPrev = ''

    for (const transcriptChunk of transcriptChunks) {
      setTimeout(() => {
        const paramString = JSON.stringify(transcriptChunk)
        if (paramPrev !== '' && paramPrev === paramString) {
          throw new Error(
            `getCourse35SummaryCreated.saga [57] connection ${CreateModuleStagesEnumType['summary']} is timed out`
          )
        }
      }, connectionsTimeouts[ConnectionsTimeoutNameEnumType['transcriptChunkToSummary']] + 1500)

      const getCourseBotResponseParams: GetCourseBotResponseParamsType = {
        botID: 'gkHgpq771VuJ',
        profileID: 'lojNPRoL4bSQ',
        profileName: '@split_text_persona_summary',
        stage: CreateModuleStagesEnumType['summary'],
        connectionsTimeoutName:
          ConnectionsTimeoutNameEnumType['transcriptChunkToSummary'],
        userText: transcriptChunk,
      }
      const summaryItem: any = yield getCourseBotResponse(
        getCourseBotResponseParams
      )

      summary = [...summary, ...summaryItem.flat(12)]
      paramPrev === JSON.stringify(transcriptChunk)
    }

    if (summary.length === 0) {
      throw new Error(`getting summary step is failed`)
    }

    yield put(
      actionSync.ADD_COURSE_CREATE_DATA({
        summary,
      })
    )

    const summaryChunks: any[][] = getChunkedArray(
      summary,
      CHUNKS_FROM_SUMMARY_ARRAY
    )
    yield put(
      actionSync.ADD_COURSE_CREATE_DATA({
        summaryChunks,
      })
    )

    yield put(
      actionSync.SET_COURSE_CREATE_STATUS({
        stage: CreateModuleStagesEnumType['summary'],
        status: CreateCourseStatusEnumType['success'],
      })
    )
  } catch (error: any) {
    yield put(
      actionSync.SET_COURSE_CREATE_STATUS({
        stage: CreateModuleStagesEnumType['summary'],
        status: CreateCourseStatusEnumType['failure'],
      })
    )

    console.info(
      'getCourse35SummaryCreated.saga  [110] ERROR',
      `${error.name}: ${error.message}`
    )
  }
}

export const getCourse35SummaryCreated = withDebounce(
  getCourse35SummaryCreatedGenerator,
  500
)

export default function* getCourse35SummaryCreatedSaga() {
  yield takeEvery(
    [actionAsync.GET_COURSE_SUMMARY_CREATED.REQUEST().type],
    getCourse35SummaryCreated
  )
}