import { isParsableFloat } from '../../Shared/isParsableFloat'
import { store } from '../store'
import { ActionEventType } from '../../Interfaces/ActionEventType'
import { actionSync, actionAsync } from '../../DataLayer/index.action'

const { dispatch } = store

export const SEP_INPUT_AGE_FROM_REQUIRED: ActionEventType = event => {
  const value = isParsableFloat(event.target.value)
    ? parseInt(event.target.value, 10)
    : ''
  dispatch(actionSync.SEP_INPUT_AGE_FROM_REQUIRED(value))
}
