// @ts-nocheck

import { store } from '../store'
import { ActionEventType } from '../../@types/ActionEventType'
import { actionSync, actionAsync } from '../../DataLayer/index.action'

const { dispatch, getState } = store

export const GET_MODULE_DATA: ActionEventType = (event, data) => {
  dispatch(actionAsync.GET_MODULE_DATA.REQUEST())
}