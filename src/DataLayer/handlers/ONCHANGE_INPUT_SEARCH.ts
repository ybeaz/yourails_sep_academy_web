import { store } from '../store'
import { ActionEventType } from '../../Interfaces/ActionEventType'
import { actionSync } from '../../DataLayer/index.action'

const { dispatch } = store

export const ONCHANGE_INPUT_SEARCH: ActionEventType = (event, data) => {
  const { value } = event.target as HTMLInputElement
  dispatch(actionSync.SET_INPUT_SEARCH(value))
}
