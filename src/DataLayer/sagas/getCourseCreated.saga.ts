import { takeEvery, put, select } from 'redux-saga/effects'

import { ActionReduxType } from '../../Interfaces'
import { actionSync, actionAsync } from '../../DataLayer/index.action'
import { getHeadersAuthDict } from '../../Shared/getHeadersAuthDict'
import { getResponseGraphqlAsync } from '../../../../yourails_communication_layer' // import { getResponseGraphqlAsync } from 'yourails_communication_layer'
// import { getResponseGraphqlAsync } from 'yourails_communication_layer'

import { getChainedResponsibility } from '../../Shared/getChainedResponsibility'
import { getMappedConnectionToItems } from '../../Shared/getMappedConnectionToItems'
import { RootStoreType } from '../../Interfaces/RootStoreType'
import { withDebounce } from '../../Shared/withDebounce'
import { selectGraphqlHttpClientFlag } from '../../FeatureFlags/'
import { getCourseS1MataDataCreated } from './getCourseS1MataDataCreated.saga'

import { articles } from '../../ContentMock/articlesMock'

export function* getCourseCreatedGenerator(
  params: ActionReduxType | any
): Iterable<any> {
  try {
    /* Add originUri to courseCreateProgress */
    /* Add metaData to courseCreateProgress */
    yield getCourseS1MataDataCreated()

    /* Add transcript to courseCreateProgress */

    /* Add summary to courseCreateProgress */

    /* Add questions to courseCreateProgress */

    /* Add objections to courseCreateProgress */

    /* Create course */
  } catch (error: any) {
    console.info(
      'getCourseCreated.saga  [44]',
      error.name + ': ' + error.message
    )
  }
}

export const getCourseCreated = withDebounce(getCourseCreatedGenerator, 500)

export default function* getCourseCreatedSaga() {
  yield takeEvery(
    [actionAsync.GET_COURSE_CREATED.REQUEST().type],
    getCourseCreated
  )
}
