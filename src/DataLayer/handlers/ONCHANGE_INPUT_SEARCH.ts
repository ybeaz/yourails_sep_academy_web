import { store } from '../store'
import { ActionEventType } from '../../Interfaces/ActionEventType'
import { actionSync } from '../../DataLayer/index.action'

const { dispatch } = store

export const ONCHANGE_INPUT_SEARCH: ActionEventType = (event, dataIn) => {
  const storeFormGroup = dataIn && dataIn.storeFormGroup
  const storeFormProp = dataIn && dataIn.storeFormProp
  const value =
    (dataIn && dataIn?.value) || (event?.target?.value as string) || ''

  const data = {
    storeFormGroup,
    storeFormProp,
    value,
  }
  dispatch(actionSync.SET_INPUT_TO_STORE(data))
}
