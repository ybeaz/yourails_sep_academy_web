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

import { articles } from '../../ContentMock/articlesMock'

export function* getCourseS4QuestionsCreatedGenerator(
  params: ActionReduxType | any
): Iterable<any> {
  try {
    /* Add originUri to courseCreateProgress */
    const inputCourseCreate: any = yield select((state: RootStoreType) => {
      return state.forms.inputCourseCreate
    })

    yield put(
      actionSync.ADD_COURSE_CREATE_DATA({ originUrl: inputCourseCreate })
    )

    /* Add metaData to courseCreateProgress */
    const variables = {
      createContentMetaDataInput: {
        originUrl: inputCourseCreate,
      },
    }

    console.info('getCourseS4QuestionsCreated.saga [33]', {
      variables,
    })

    const createContentMetaData: any = yield getResponseGraphqlAsync(
      {
        variables,
        resolveGraphqlName: 'createContentMetaData',
      },
      {
        ...getHeadersAuthDict(),
        clientHttpType: selectGraphqlHttpClientFlag(),
        timeout: 5000,
      }
    )

    console.info('getCourseS4QuestionsCreated.saga [49]', {
      createContentMetaData,
      inputCourseCreate,
    })

    yield put(
      actionSync.ADD_COURSE_CREATE_DATA({
        metaData: createContentMetaData,
      })
    )

    /* Add transcript to courseCreateProgress */

    /* Add summary to courseCreateProgress */

    /* Add questions to courseCreateProgress */

    /* Add objections to courseCreateProgress */

    /* Create course */
  } catch (error: any) {
    console.info(
      'getCourseS4QuestionsCreated.saga  [44]',
      error.name + ': ' + error.message
    )
  }
}

export const getCourseS4QuestionsCreated = withDebounce(
  getCourseS4QuestionsCreatedGenerator,
  500
)

export default function* getCourseS4QuestionsCreatedSaga() {
  yield takeEvery(
    [actionAsync.GET_COURSE_QUESTIONS_CREATED.REQUEST().type],
    getCourseS4QuestionsCreated
  )
}
