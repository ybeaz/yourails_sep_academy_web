import { store } from '../DataLayer/store'
import * as action from '../DataLayer/index.action'

import { IAzProps } from '../Interfaces/IAzProps'

export const getSavedAnanlyticsEvent: Function = (
  event: any,
  props: IAzProps
): void => {
  const { type, name, value: valueIn, level } = props
  const { hostname, pathname } = location
  const dataNext: any = {
    event: {
      type,
      ...(name && { name }),
      ...((valueIn || event?.target?.value) && {
        value: valueIn || event?.target?.value,
      }),
      ...(level && { level }),
      pathname,
    },
  }

  store.dispatch(action.SAVE_ANALYTICS.REQUEST(dataNext))
}