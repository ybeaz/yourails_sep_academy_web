import { store } from '../store'
import { ActionEventType } from '../../Interfaces/ActionEventType'
import { actionSync } from '../../DataLayer/index.action'

const { dispatch } = store

export const TOGGLE_IS_MOBILE_SEARCH_INPUT: ActionEventType = (event, data) => {
  dispatch(actionSync.TOGGLE_IS_MOBILE_SEARCH_INPUT(data))
}
