import { store } from '../store'
import { ActionEventType } from '../../Interfaces/ActionEventType'
import { actionSync, actionAsync } from '../../DataLayer/index.action'

const { dispatch, getState } = store

// Remove: 'READ_USERS',
// export const LOAD_PROFILES: ActionEventType = (event, data) => {
//   dispatch(actionAsync.READ_USERS.REQUEST())
// }
