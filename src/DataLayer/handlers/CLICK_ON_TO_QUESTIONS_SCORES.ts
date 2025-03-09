import { store } from '../store'
import { ActionEventType } from 'yourails_common'
import { actionAsync, actionSync } from '../../DataLayer/index.action'

const { dispatch, getState } = store

export const CLICK_ON_TO_QUESTIONS_SCORES: ActionEventType = (event, data) => {
  dispatch(actionAsync.CREATE_DOCUMENT_SCENARIO.REQUEST(data))
  const data2 = [
    {
      childName: 'QuestionScores',
      isActive: true,
      childProps: {},
    },
  ]
  dispatch(actionSync.SET_MODAL_FRAMES(data2))
}
