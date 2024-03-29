import { takeEvery, call, put, select } from 'redux-saga/effects'

import { ActionReduxType } from '../../Interfaces'
import { PaginationNameEnumType } from '../../Interfaces/RootStoreType'
import { actionSync, actionAsync } from '../../DataLayer/index.action'
import { getModules } from './getModulesSaga'
import { getParsedUrlQueryBrowserApi } from '../../Shared/getParsedUrlQuery'
import { paginationOffset } from '../../Constants/pagination.const'

function* getMatrixData(params: ActionReduxType | any): Iterable<any> {
  try {
    const query = getParsedUrlQueryBrowserApi()

    const inputSearch = query?.search || ''
    const tagsPick =
      (query && query?.tagspick && query?.tagspick.split(',')) || []
    const tagsOmit =
      (query && query?.tagsomit && query?.tagsomit.split(',')) || []
    const first =
      query && query?.[PaginationNameEnumType['pageModules']]
        ? parseInt(query?.[PaginationNameEnumType['pageModules']], 10) *
            paginationOffset -
          paginationOffset
        : 0

    const data = {
      storeFormProp: 'inputSearch',
      value: inputSearch,
    }
    yield put(actionSync.SET_INPUT_TO_STORE(data))

    yield put(
      actionSync.SET_TAGS_STATE({
        tagsPick,
        tagsOmit,
      })
    )

    yield put(
      actionSync.SET_PAGE_CURSOR({
        paginationName: PaginationNameEnumType['pageModules'],
        first,
      })
    )

    yield getModules()
  } catch (error: any) {
    console.info('getMatrixData [46] ERROR', `${error.name}: ${error.message}`)
  }
}

export default function* getMatrixDataSaga() {
  yield takeEvery([actionAsync.GET_MATRIX_DATA.REQUEST().type], getMatrixData)
}
