import { ActionEventType } from 'yourails_common'
import { getLocalStorageSetObjTo } from 'yourails_common'

export const CLICK_ON_SIGN_IN: ActionEventType = (event, data) => {
  if (window.location.pathname !== '/')
    getLocalStorageSetObjTo({ redirectAuthFrom: decodeURIComponent(window.location.pathname) })
}
