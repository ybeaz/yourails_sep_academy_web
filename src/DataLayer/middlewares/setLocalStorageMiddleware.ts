import { Middleware } from '@reduxjs/toolkit'

import { AWS_COGNITO_REFRESH_AUTH_TOKEN_DELAY } from '../../Constants/aws.const'
import { getDebouncedFunc } from '../..//Shared/getDebouncedFunc'
import { getLocalStorageStoreStateSet } from '../../Shared/getLocalStorageStoreStateSet'

/**
 * @description Function to run setLocalStorageMiddleware
 * @import import { getRefreshedAuthAwsCongito } from './middlewares/getRefreshedAuthAwsCongito'
 */
const getLocalStorageStoreStateSetCallback = (...args: any) => {
  const storeState = args[0]
  getLocalStorageStoreStateSet(
    {
      source: 'getLocalStorageStoreStateSetCallback [13]',
      storeState,
    },
    { printRes: false }
  )
}

const debouncedFunc = getDebouncedFunc(
  getLocalStorageStoreStateSetCallback,
  AWS_COGNITO_REFRESH_AUTH_TOKEN_DELAY
)

/**
 * @description Middleware to setLocalStorageMiddleware
 * @import import { setLocalStorageMiddleware } from './middlewares/setLocalStorageMiddleware'
 */
export const setLocalStorageMiddleware: Middleware =
  store => next => action => {
    const result = next(action)

    const { type: actionType } = action
    const actionsMandatoryToSetLocalStorage = [
      'SET_AUTH_AWS_COGNITO_USER_DATA',
      'ADD_DOCUMENT',
    ]

    const storeState = store.getState()

    if (actionsMandatoryToSetLocalStorage.includes(actionType)) {
      getLocalStorageStoreStateSetCallback(storeState)
    } else if (storeState) debouncedFunc(storeState)

    return result
  }
