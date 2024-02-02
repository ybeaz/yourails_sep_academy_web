import { takeEvery, put, select } from 'redux-saga/effects'

import { ActionReduxType } from '../../Interfaces'
import { actionSync, actionAsync } from '../../DataLayer/index.action'
import {
  RootStoreType,
  CreateModuleStagesEnumType,
  CreateModuleStatusEnumType,
} from '../../Interfaces/RootStoreType'
import {
  connectionsTimeouts,
  ConnectionsTimeoutNameEnumType,
} from '../../Constants/connectionsTimeouts.const'
import { withDebounce } from '../../Shared/withDebounce'
import {
  getCourseBotResponse,
  GetCourseBotResponseParamsType,
} from './getCourseBotResponseSaga'

export function* getCourse55ObjectionsCreatedGenerator(
  params: ActionReduxType | any
): Iterable<any> {
  try {
    const { summary, summaryChunks }: any = yield select(
      (state: RootStoreType) => {
        return {
          summary: state.moduleCreateProgress.summary,
          summaryChunks: state.moduleCreateProgress.summaryChunks,
        }
      }
    )

    yield put(
      actionSync.SET_COURSE_CREATE_STATUS({
        stage: CreateModuleStagesEnumType['objections'],
        timeCalculated: Array.isArray(summary)
          ? summaryChunks.length * connectionsTimeouts.summaryChunkToObjections
          : null,
      })
    )

    yield put(
      actionSync.SET_COURSE_CREATE_STATUS({
        stage: CreateModuleStagesEnumType['objections'],
        status: CreateModuleStatusEnumType['pending'],
      })
    )

    let objections: any[] = []
    let objectionsChunks: any[][] = []
    let paramPrev = ''

    for (const summaryChunk of summaryChunks) {
      setTimeout(() => {
        const paramString = JSON.stringify(summaryChunk)
        if (paramPrev !== '' && paramPrev === paramString) {
          throw new Error(
            `getCourse35SummaryCreatedSaga [57] connection ${CreateModuleStagesEnumType['objections']} is timed out`
          )
        }
      }, connectionsTimeouts[ConnectionsTimeoutNameEnumType['summaryChunkToObjections']] + 1500)

      const userText =
        typeof summaryChunk === 'string'
          ? summaryChunk
          : JSON.stringify(summaryChunk, null, 2)

      const getCourseBotResponseParams: GetCourseBotResponseParamsType = {
        botID: 'g3lccRJtksaE',
        profileID: 'y9WjMwhdhr31',
        profileName: '@objector_persona',
        stage: CreateModuleStagesEnumType['objections'],
        connectionsTimeoutName:
          ConnectionsTimeoutNameEnumType['summaryChunkToObjections'],
        userText,
      }
      const objectionsChunk: any = yield getCourseBotResponse(
        getCourseBotResponseParams
      )

      if (!Array.isArray(objectionsChunk) || objectionsChunk.length === 0)
        throw new Error(
          `getCourse55ObjectionsCreatedSaga [73] objectionsChunk is not an array or array empty, ${JSON.stringify(
            objectionsChunk
          )}`
        )

      objections = [...objections, ...objectionsChunk.flat(12)]
      objectionsChunks = [...objectionsChunks, objectionsChunk.flat(12)]
      paramPrev === JSON.stringify(summaryChunk)
    }

    if (objections.length === 0) {
      throw new Error(`getting questions step is failed`)
    }

    yield put(
      actionSync.ADD_COURSE_CREATE_DATA({
        objections,
      })
    )

    yield put(
      actionSync.ADD_COURSE_CREATE_DATA({
        objectionsChunks,
      })
    )

    yield put(
      actionSync.SET_COURSE_CREATE_STATUS({
        stage: CreateModuleStagesEnumType['objections'],
        status: CreateModuleStatusEnumType['success'],
      })
    )
  } catch (error: any) {
    yield put(
      actionSync.SET_COURSE_CREATE_STATUS({
        stage: CreateModuleStagesEnumType['objections'],
        status: CreateModuleStatusEnumType['failure'],
      })
    )

    console.info(
      'getCourse55ObjectionsCreatedSaga  [110] ERROR',
      `${error.name}: ${error.message}`
    )
  }
}

export const getCourse55ObjectionsCreated = withDebounce(
  getCourse55ObjectionsCreatedGenerator,
  500
)

export default function* getCourse55ObjectionsCreatedSaga() {
  yield takeEvery(
    [actionAsync.GET_COURSE_OBJECTIONS_CREATED.REQUEST().type],
    getCourse55ObjectionsCreated
  )
}