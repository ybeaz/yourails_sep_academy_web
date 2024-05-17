import { store } from '../store'
import { ActionEventType } from '../../Interfaces/ActionEventType'
import { actionSync, actionAsync } from '../../DataLayer/index.action'

const { dispatch, getState } = store

export const GET_TAGS_CLOUD_MODULES: ActionEventType = (event, data) => {
  dispatch(actionAsync.READ_TAGS_CLOUD_MODULES.REQUEST())
}
