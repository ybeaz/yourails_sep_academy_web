import { store } from '../store'
import { ActionEventType } from 'yourails_common'
import { actionAsync, actionSync } from '../../DataLayer/index.action'
import { getObjectSlice } from 'yourails_common'

const { dispatch, getState } = store

export const CLICK_ON_TO_QUESTIONS_SCORES: ActionEventType = (event, data) => {
  const { sub } = getObjectSlice({
    entity: getState(),
    arrProps: ['sub'],
  })

  sub && dispatch(actionAsync.CREATE_DOCUMENT_SCENARIO.REQUEST(data))

  const data2 = [
    {
      childName: 'QuestionScores',
      isActive: true,
      childProps: {},
    },
  ]
  dispatch(actionSync.SET_MODAL_FRAMES(data2))
}
