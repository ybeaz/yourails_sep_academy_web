import { store } from '../DataLayer/store'
import * as action from '../DataLayer/index.action'

import { cookie } from '../Shared/cookie'
import { mediaSizeCrossBrowser } from '../Shared/mediaSizeCrossBrowser'
import { COOKIE_ANALYTICSID_NAME } from '../Constants/cookieAnalyticsIDName'

const { dispatch } = store

export const getSavedAnanlyticsInitData: Function = () => {
  let analyticsID: string = cookie.get(COOKIE_ANALYTICSID_NAME)
  const { href, hostname, pathname, search } = location

  if (analyticsID && analyticsID !== 'null') {
    dispatch(action.SAVE_ANALYTICS.SUCCESS({ analyticsID }))
    cookie.set(COOKIE_ANALYTICSID_NAME, analyticsID, {
      domain: hostname,
      days: 1,
    })
  } else {
    const { width, height } = mediaSizeCrossBrowser(global)
    const { referrer } = document

    const dataNext: any = {
      initData: {
        width,
        height,
        search,
        pathname,
        hostname,
        href,
        referrer,
      },
    }

    dispatch(action.SAVE_ANALYTICS.REQUEST(dataNext))
  }
}