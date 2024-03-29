import { store } from '../store'
import { ActionEventType } from '../../Interfaces/ActionEventType'
import { actionSync, actionAsync } from '../../DataLayer/index.action'

const { dispatch, getState } = store

export const SEP_SELECT_LANGUAGE_REQUIRED: ActionEventType = (event, data) => {
  const dataNext = data.map(item => item.value)
  dispatch(actionSync.SEP_SELECT_LANGUAGE_REQUIRED(dataNext))
}
