import { store } from '../store'
import { ActionEventType } from 'yourails_common'
import { actionAsync } from '../../DataLayer/index.action'
import { getLocalStorageSetObjTo } from 'yourails_common'

const { dispatch } = store

export const CREATE_DOCUMENT: ActionEventType = (event, data) => {
  getLocalStorageSetObjTo({
    modulesInProgress: [],
  })
  dispatch(actionAsync.CREATE_DOCUMENT_SCENARIO.REQUEST(data))
}
