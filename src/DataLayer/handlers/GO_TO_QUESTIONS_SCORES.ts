import { store } from '../store'
import { ActionEventType } from 'yourails_common'
import { actionAsync, actionSync } from '../../DataLayer/index.action'
import { getObjectSlice } from 'yourails_common'
import { getWaitedForVarChange, GetWaitedForVarChangeParamsType } from 'yourails_common'
import { getCheckedModulesAnswered } from 'yourails_common'
import { getModuleByModuleID } from 'yourails_common'
// getWaitedForVarChangeUnsafe: GetWaitedForVarChangeType = async (
//   params: GetWaitedForVarChangeParamsType,
//   options?: GetWaitedForVarChangeOptionsType
// ) => {
//   const { func, paramsFunc, path, interval, timeWait, resDefault = undefined } = params

const { dispatch, getState } = store

export const GO_TO_QUESTIONS_SCORES: ActionEventType = async (event, data) => {
  // Remove it
  const { modules, moduleIDActive } = getObjectSlice({
    entity: getState(),
    arrProps: ['sub', 'modules', 'moduleIDActive'],
  })

  if (!moduleIDActive || !modules.length) return
  const moduleActive = getModuleByModuleID(
    {
      moduleID: moduleIDActive || '',
      modules,
    },
    { parentFunction: 'QuestionScoresComponent' }
  )

  console.info('GO_TO_QUESTIONS_SCORES [32]', {
    // moduleIDActiveIn,
    moduleIDActive,
    moduleActive,
  })

  const isAnswered = getCheckedModulesAnswered([moduleActive])
  console.info('GO_TO_QUESTIONS_SCORES [36]', { isAnswered, state: getState() })
  if (!isAnswered) return

  console.info('GO_TO_QUESTIONS_SCORES [45]', { isAnswered, state: getState() })
  // return
  // sub && dispatch(actionAsync.CREATE_DOCUMENT_SCENARIO.REQUEST(data))

  const data2 = [
    {
      childName: 'QuestionScores',
      isActive: true,
      childProps: {},
    },
  ]
  dispatch(actionSync.SET_MODAL_FRAMES(data2))
}
