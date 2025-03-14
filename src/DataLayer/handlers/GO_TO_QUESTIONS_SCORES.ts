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

  const isAnswered = getCheckedModulesAnswered([moduleActive])

  if (!isAnswered) return

  const data2 = [
    {
      childName: 'QuestionScores',
      isActive: true,
      childProps: {},
    },
  ]
  dispatch(actionSync.SET_MODAL_FRAMES(data2))
}
