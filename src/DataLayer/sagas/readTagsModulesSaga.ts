import { takeEvery, put, select } from 'redux-saga/effects'

import { QueryReadTagsModulesArgs } from '../../@types/GraphqlTypes'
import { ActionReduxType } from '../../Interfaces'
import { actionSync, actionAsync } from '../../DataLayer/index.action'
import { getResponseGraphqlAsync, ResolveGraphqlEnumType } from 'yourails_communication_layer'
import { getHeadersAuthDict } from '../../Shared/getHeadersAuthDict'
import { selectGraphqlHttpClientFlag } from '../../FeatureFlags/'
import { RootStoreType } from '../../Interfaces/RootStoreType'
import { getLocalStorageReadKeyObj } from '../../Shared/getLocalStorageReadKeyObj'
import { withDebounce } from '../../Shared/withDebounce'

/**
 * @status DEPRECIATED in favor of readTagsModulesGenerator
 * @param params @
 */
function* readTagsModulesGenerator(params: ActionReduxType | any): Iterable<any> {
  const stateSelected: RootStoreType | any = yield select((state: RootStoreType) => state)

  const {
    authAwsCognitoUserData: { sub },
  } = stateSelected as RootStoreType

  let learnerUserID: string = ''
  let sub_localStorage = getLocalStorageReadKeyObj('sub')
  sub_localStorage = sub_localStorage && sub_localStorage !== '""' ? sub_localStorage : ''
  learnerUserID = sub || sub_localStorage

  try {
    yield put(actionSync.TOGGLE_LOADER_OVERLAY(true))

    const variables: QueryReadTagsModulesArgs = {
      readTagsModulesInput: {
        learnerUserID,
        minCount: 2,
        limit: 256,
      },
    }

    const readTagsModules: any = yield getResponseGraphqlAsync(
      {
        variables,
        resolveGraphqlName: ResolveGraphqlEnumType['readTagsModules'],
      },
      {
        ...getHeadersAuthDict(),
        clientHttpType: selectGraphqlHttpClientFlag(),
        timeout: 10000,
      }
    )

    yield put(actionSync.SET_TAGS_CLOUD({ tagsCloud: readTagsModules }))

    yield put(actionSync.TOGGLE_LOADER_OVERLAY(false))
  } catch (error: any) {
    console.info('readTagsModules [35] ERROR', `${error.name}: ${error.message}`)
  }
}

export const readTagsModules = withDebounce(readTagsModulesGenerator, 500)

export default function* readTagsModulesSaga() {
  yield takeEvery([actionAsync.READ_TAGS_CLOUD_MODULES.REQUEST().type], readTagsModules)
}
