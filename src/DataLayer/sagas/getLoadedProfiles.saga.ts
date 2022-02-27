import axios from 'axios'
import { takeLatest, takeEvery, put, select } from 'redux-saga/effects'

import { actionSync, actionAsync } from '../../DataLayer/index.action'
import { getReadUsersConnector } from '../../CommunicationLayer/getReadUsers.connector'

function* getLoadedProfiles() {
  const {
    forms: { user },
  } = yield select(store => store)

  const { userIdAuth, userIdProfile } = user

  const ne = [
    {
      userIdAuth,
    },
    {
      userIdProfile,
    },
  ]

  const { method, url, payload, options } = getReadUsersConnector({
    ne,
    isActive: true,
  })

  try {
    yield put(actionSync.TOGGLE_LOADER_OVERLAY(true))

    const {
      data: { data },
    } = yield axios[method](url, payload, options)

    const { users, responseMessage } = data[payload.operationName]

    yield put(actionSync.SET_USERS(users))

    yield put(actionSync.TOGGLE_LOADER_OVERLAY(false))
  } catch (error) {
    console.info('getLoadedProfiles [29]', error.name + ': ' + error.message)
  }
}

export default function* getLoadedProfilesSaga() {
  yield takeEvery([actionAsync.READ_USERS.REQUEST().type], getLoadedProfiles)
}