import { store } from '../store'
import { ActionEventType } from '../../Interfaces/ActionEventType'
import { getParsedUrlQuery } from '../../Shared/getParsedUrlQuery'
import { actionSync } from '../../DataLayer/index.action'

const { dispatch, getState } = store

export const SELECT_LANGUAGE_APP_INIT: ActionEventType = (event, data) => {
  const { language } = getState()

  const { ln, language: lnLong } = getParsedUrlQuery()

  const languageOut = !!ln ? ln : !!lnLong ? lnLong : language

  dispatch(actionSync.SELECT_LANGUAGE_APP(languageOut))
}
