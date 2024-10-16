import { takeEvery, put, select } from 'redux-saga/effects'

import { ActionReduxType } from '../../Interfaces'
import { actionSync, actionAsync } from '../../DataLayer/index.action'
import { withDebounce } from '../../Shared/withDebounce'
import { getResponseGraphqlAsync, ResolveGraphqlEnumType } from 'yourails_communication_layer'
import { getHeadersAuthDict } from '../../Shared/getHeadersAuthDict'
import { selectGraphqlHttpClientFlag } from '../../FeatureFlags/'

export function* createSiteMapGenerator(params: ActionReduxType | any): Iterable<any> {
  try {
    const createSiteMap: any = yield getResponseGraphqlAsync(
      {
        variables: {},
        resolveGraphqlName: ResolveGraphqlEnumType['createSiteMap'],
      },
      {
        ...getHeadersAuthDict(),
        clientHttpType: selectGraphqlHttpClientFlag(),
        timeout: 5000,
      }
    )
  } catch (error: any) {
    console.info('createSiteMapSaga [33] ERROR', `${error.name}: ${error.message}`)
  }
}

export const createSiteMap = withDebounce(createSiteMapGenerator, 500)

export default function* createSiteMapSaga() {
  yield takeEvery([actionAsync.CREATE_SITE_MAP.REQUEST().type], createSiteMap)
}
