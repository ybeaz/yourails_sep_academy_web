import { takeEvery, put, select } from 'redux-saga/effects'

import { ActionReduxType } from '../../Interfaces'
import { RootStoreType } from '../../Interfaces/RootStoreType'
import { CreateDocumentInputType } from '../../@types/GraphqlTypes'
import { actionSync, actionAsync } from '../../DataLayer/index.action'
import { getResponseGraphqlAsync } from '../../../../yourails_communication_layer'
import { getHeadersAuthDict } from '../../Shared/getHeadersAuthDict'

function* createDocument(params: ActionReduxType | any): Iterable<any> {
  const {
    data: {
      capture,
      contentID,
      courseID,
      description,
      meta,
      moduleID,
      userEmail,
      nameFirst,
      nameMiddle,
      nameLast,
    },
  } = params

  const stateSelected: RootStoreType | any = yield select(
    (state: RootStoreType) => state
  )
  const {
    authAwsCognitoUserData: { sub },
  } = stateSelected as RootStoreType

  try {
    yield put(actionSync.TOGGLE_LOADER_OVERLAY(true))

    const variables: {
      createDocumentsInput: CreateDocumentInputType[]
    } = {
      createDocumentsInput: [
        {
          courseID,
          profileID: sub || '000000',
          moduleIDs: [moduleID],
          contentIDs: [contentID],
          isActive: true,
          capture,
          description,
          meta,
          profileProps: {
            nameFirst: nameFirst,
            nameMiddle: nameMiddle,
            nameLast: nameLast,
          },
          language: 'en',
        },
      ],
    }

    const createDocuments: any = yield getResponseGraphqlAsync(
      {
        variables,
        resolveGraphqlName: 'createDocuments',
      },
      getHeadersAuthDict()
    )

    yield put(actionSync.ADD_DOCUMENT(createDocuments[0]))

    yield put(actionSync.TOGGLE_LOADER_OVERLAY(false))
  } catch (error: any) {
    console.info('createDocument [40]', error.name + ': ' + error.message)
  }
}

export default function* addDocumentSaga() {
  yield takeEvery([actionAsync.CREATE_DOCUMENT.REQUEST().type], createDocument)
}
