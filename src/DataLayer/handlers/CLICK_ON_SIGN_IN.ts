import { ActionEventType } from 'yourails_common'
import { getLocalStorageSetObjTo } from 'yourails_common'
import { getObjectSlice } from 'yourails_common'
import { store } from '../store'
import { actionAsync } from '../../DataLayer/index.action'

const { dispatch, getState } = store

export const CLICK_ON_SIGN_IN: ActionEventType = (event, data) => {
  /* Redirect implements wtth NavLink. Here we do only supplimentary actions */

  const regex = /\/m\/[a-zA-Z0-9]{12}/

  if (regex.test(window.location.pathname)) {
    // Remove it
    // const { sub } = getObjectSlice({
    //   entity: getState(),
    //   arrProps: ['sub'],
    // })

    // console.info('CLICK_ON_SIGN_IN [20]', { sub })

    // sub && dispatch(actionAsync.CREATE_DOCUMENT_SCENARIO.REQUEST(data))

    getLocalStorageSetObjTo({
      redirectAuthFrom: decodeURIComponent(`${window.location.pathname}${window.location.search}`),
    })
  }
}
