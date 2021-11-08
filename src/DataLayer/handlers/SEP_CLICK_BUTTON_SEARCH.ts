import { handleEvents } from '../index.handleEvents'
import { store } from '../store'
import { IActionEvent } from '../../Interfaces/IActionEvent'
import { actionSync, actionAsync } from '../../DataLayer/index.action'
import { getSavedAnanlyticsEvent } from '../../Analytics/getSavedAnanlyticsEvent'
import { getAzProps } from '../../Analytics/getAzProps'
import { getResultDataFromStore } from '../../ViewLayer/Hooks/getResultDataFromStore'

const { dispatch, getState } = store

export const SEP_CLICK_BUTTON_SEARCH: IActionEvent = (event, data) => {
  handleEvents({}, { typeEvent: 'DEV_STAGE' })
}