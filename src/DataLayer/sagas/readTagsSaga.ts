import { takeEvery, put, select } from 'redux-saga/effects'

import { QueryReadTagsArgs } from '../../@types/GraphqlTypes'
import { ActionReduxType } from '../../Interfaces'
import { actionSync, actionAsync } from '../../DataLayer/index.action'
import { getResponseGraphqlAsync, ResolveGraphqlEnumType } from 'yourails_communication_layer'
import { getHeadersAuthDict } from '../../Shared/getHeadersAuthDict'
import { selectGraphqlHttpClientFlag } from '../../FeatureFlags/'
import { RootStoreType, PaginationNameEnumType } from '../../Interfaces/RootStoreType'
import { getLocalStorageReadKeyObj } from '../../Shared/getLocalStorageReadKeyObj'
import { withDebounce } from '../../Shared/withDebounce'
import { getChainedResponsibility } from '../../Shared/getChainedResponsibility'
import { getMappedConnectionToItems } from '../../Shared/getMappedConnectionToItems'

function* readTagsGenerator(params: ActionReduxType | any): Iterable<any> {
  const isLoaderOverlay = params?.data?.isLoaderOverlay
  const tagID = params?.data?.tagID

  const stateSelected: RootStoreType | any = yield select((state: RootStoreType) => state)

  const {
    authAwsCognitoUserData: { sub },
  } = stateSelected as RootStoreType

  let learnerUserID: string = ''
  let sub_localStorage = getLocalStorageReadKeyObj('sub')
  sub_localStorage = sub_localStorage && sub_localStorage !== '""' ? sub_localStorage : ''
  learnerUserID = sub || sub_localStorage

  try {
    if (isLoaderOverlay) yield put(actionSync.TOGGLE_LOADER_OVERLAY(true))

    const variables: QueryReadTagsArgs = {
      readTagsInput: [
        {
          tagID,
          learnerUserID: sub_localStorage,
        },
      ],
    }

    const readTags: any = yield getResponseGraphqlAsync(
      {
        variables,
        resolveGraphqlName: ResolveGraphqlEnumType['readTags'],
      },
      {
        ...getHeadersAuthDict(),
        clientHttpType: selectGraphqlHttpClientFlag(),
        timeout: 10000,
      }
    )

    yield put(actionSync.SET_TAGS_CLOUD({ tagsCloud: readTags }))

    if (isLoaderOverlay) yield put(actionSync.TOGGLE_LOADER_OVERLAY(false))
  } catch (error: any) {
    console.info('readTags [35] ERROR', `${error.name}: ${error.message}`)
  }
}

export const readTags = withDebounce(readTagsGenerator, 500)

export default function* readTagsSaga() {
  yield takeEvery([actionAsync.READ_TAGS.REQUEST().type], readTags)
}
