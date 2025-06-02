import { store } from '../store'
import { ActionEventType } from 'yourails_common'
import { actionAsync, actionSync } from '../../DataLayer/index.action'
// import { getObjectSlice } from 'yourails_common'
// import { getWaitedForVarChange, GetWaitedForVarChangeParamsType } from 'yourails_common'
// import { getCheckedModulesAnswered } from 'yourails_common'
// import { getModuleByModuleID } from 'yourails_common'
// getWaitedForVarChangeUnsafe: GetWaitedForVarChangeType = async (
//   params: GetWaitedForVarChangeParamsType,
//   options?: GetWaitedForVarChangeOptionsType
// ) => {
//   const { func, paramsFunc, path, interval, timeWait, resDefault = undefined } = params

const { dispatch, getState } = store

/**
 * @description Action GO_TO_QUESTIONS_SCORES
 * CREATE_DOCUMENT happens in src/ViewLayer/Components/QuestionScores/QuestionScores.tsx
      if (
        !documentIDActive &&
        (scenarioCase === QuestionsScoresCaseEnumType.successTrue_AuthTrue_NamesTrue ||
          scenarioCase === QuestionsScoresCaseEnumType.successTrue_AuthTrue_NamesFalse)
      ) {
        handleEvents({}, { typeEvent: 'CREATE_DOCUMENT', data: { isEditNameVisible: false } })
      }
 */
export const GO_TO_QUESTIONS_SCORES: ActionEventType = async (event, data) => {
  const data2 = [
    {
      childName: 'QuestionScores',
      isActive: true,
      childProps: {},
    },
  ]
  dispatch(actionSync.SET_MODAL_FRAMES(data2))
}
