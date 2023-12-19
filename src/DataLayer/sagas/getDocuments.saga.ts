import { takeEvery, put, select } from 'redux-saga/effects'

import { ActionReduxType } from '../../Interfaces'
import { actionSync, actionAsync } from '../../DataLayer/index.action'
import { getHeadersAuthDict } from '../../Shared/getHeadersAuthDict'
import { getResponseGraphqlAsync } from '../../../../yourails_communication_layer' // import { getResponseGraphqlAsync } from 'yourails_communication_layer'
// import { getResponseGraphqlAsync } from 'yourails_communication_layer'

import { getChainedResponsibility } from '../../Shared/getChainedResponsibility'
import { getMappedConnectionToCourses } from '../../Shared/getMappedConnectionToCourses'
import { getPreparedCourses } from '../../Shared/getPreparedCourses'
import { selectCoursesStageFlag } from '../../FeatureFlags'
import { getDeletedObjFromLocalStorage } from '../../Shared/getDeletedObjFromLocalStorage'
import { RootStoreType } from '../../Interfaces/RootStoreType'

export function* getDocuments(params: ActionReduxType | any): Iterable<any> {
  const stateSelected: RootStoreType | any = yield select(
    (state: RootStoreType) => state
  )
  const {
    authAwsCognitoUserData: { sub },
  } = stateSelected as RootStoreType

  let readDocumentsConnectionInput: any = {
    first: 0,
    offset: 1000,
    profileID: sub || '000000',
    stagesPick: selectCoursesStageFlag(),
  }

  try {
    const variables = {
      readDocumentsConnectionInput,
    }
    const readDocumentsConnection: any = yield getResponseGraphqlAsync(
      {
        variables,
        resolveGraphqlName: 'readDocumentsConnection',
      },
      getHeadersAuthDict()
    )

    let documentsNext: any = getChainedResponsibility(
      readDocumentsConnection
    ).exec(getMappedConnectionToCourses, { printRes: false }).result

    if (!documentsNext.length)
      getDeletedObjFromLocalStorage({ storeStateJson: {} })

    yield put(actionSync.SET_DOCUMENTS(documentsNext))

    const pageInfo = readDocumentsConnection?.pageInfo
    yield put(
      actionSync.SET_PAGE_INFO({
        paginationName: 'pagesDocuments',
        ...pageInfo,
      })
    )
  } catch (error: any) {
    console.info('getDocuments.saga  [44]', error.name + ': ' + error.message)
  }
}

export default function* getDocumentsSaga() {
  yield takeEvery([actionAsync.GET_DOCUMENTS.REQUEST().type], getDocuments)
}