import { Middleware } from '@reduxjs/toolkit'

import { AWS_COGNITO_REFRESH_AUTH_TOKEN_DELAY } from '../../Constants/aws.const'
import { getDebouncedFunc } from '../..//Shared/getDebouncedFunc'
import { actionAsync } from '../../DataLayer/index.action'
import { getConvertedType } from '../../Shared/getConvertedType'
import { getLocalStorageStoreStateRead } from '../../Shared/getLocalStorageStoreStateRead'

/**
 * @description Function to run refreshAuthMiddleware
 * @import import { getRefreshedAuthAwsCongito } from './middlewares/getRefreshedAuthAwsCongito'
 */
const getRefreshedAuthAwsCongito = (...args: any) => {
  const store = args[0]
  const refresh_token = args[1]
  const { dispatch } = store
  dispatch(
    actionAsync.GET_AUTH_AWS_COGNITO_USER_REFRESHED.REQUEST({
      refresh_token,
    })
  )
}

const debouncedFunc = getDebouncedFunc(
  getRefreshedAuthAwsCongito,
  AWS_COGNITO_REFRESH_AUTH_TOKEN_DELAY
)

/**
 * @description Middleware to refreshAuthMiddleware
 * @import import { refreshAuthMiddleware } from './middlewares/refreshAuthMiddleware'
 */
export const refreshAuthMiddleware: Middleware = store => next => action => {
  const result = next(action)

  const { type: actionType } = action
  const actionsNotToRefreshAuth = [
    'INIT_LOADING',
    'GET_AUTH_AWS_COGNITO_USER_DATA',
    'GET_AUTH_AWS_COGNITO_USER_REFRESHED',
    'GET_AUTH_AWS_COGNITO_USER_REVOKED',
  ]

  if (!actionType.includes(actionsNotToRefreshAuth)) {
    debouncedFunc(store)
  }

  return result
}
