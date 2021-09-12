import { store } from '../store'
import { actionSync, actionAsync } from '../../DataLayer/index.action'
import { getSavedAnanlyticsEvent } from '../../Analytics/getSavedAnanlyticsEvent'
import { getAzProps } from '../../Analytics/getAzProps'

const { dispatch, getState } = store

export const SELECT_COURSE_MODULE = (event: any, data: any): void => {
  getSavedAnanlyticsEvent(event, getAzProps('COURSE_PLATE_CLICKED')(data))

  dispatch(actionSync.SELECT_COURSE_MODULE(data))
}