import { ModuleType } from 'yourails_common'

import {
  withTryCatchFinallyWrapper,
  FuncModeEnumType,
  WithTryCatchFinallyWrapperOptionsType,
} from 'yourails_common'

import { QuestionsAnswersCaseEnumType } from 'yourails_common'
import { QuestionsScoresCaseEnumType } from 'yourails_common'

type GetQuestionScoresCaseParamsType = {
  result: QuestionsAnswersCaseEnumType
  sub: string | null | undefined
  nameFirst: string
  nameLast: string
}

type GetQuestionScoresCaseOptionsType = { funcParent?: string }

type GetQuestionScoresCaseResType = QuestionsScoresCaseEnumType

interface GetQuestionScoresCaseType {
  (
    params: GetQuestionScoresCaseParamsType,
    options?: GetQuestionScoresCaseOptionsType
  ): GetQuestionScoresCaseResType
}

const optionsDefault: Required<GetQuestionScoresCaseOptionsType> = {
  funcParent: 'getQuestionScoresCase',
}

const resDefault: GetQuestionScoresCaseResType =
  QuestionsScoresCaseEnumType.successFalse_AuthFalse_NamesFalse

/**
 * @description Function to getQuestionScoresCase
 * @import import { getQuestionScoresCase } from './getQuestionScoresCase'
 */

const getQuestionScoresCaseUnsafe: GetQuestionScoresCaseType = (
  params: GetQuestionScoresCaseParamsType,
  options?: GetQuestionScoresCaseOptionsType
) => {
  const { result, sub, nameFirst, nameLast } = params

  let scenarioCase: QuestionsScoresCaseEnumType =
    QuestionsScoresCaseEnumType.successFalse_AuthFalse_NamesFalse

  if (result === QuestionsAnswersCaseEnumType.successTrue) {
    if (sub) {
      if (nameFirst && nameLast) {
        scenarioCase = QuestionsScoresCaseEnumType.successTrue_AuthTrue_NamesTrue
      } else {
        scenarioCase = QuestionsScoresCaseEnumType.successTrue_AuthTrue_NamesFalse
      }
    } else scenarioCase = QuestionsScoresCaseEnumType.successTrue_AuthFalse_NamesFalse
  } else {
    if (sub) {
      if (nameFirst && nameLast) {
        scenarioCase = QuestionsScoresCaseEnumType.successFalse_AuthTrue_NamesTrue
      } else {
        scenarioCase = QuestionsScoresCaseEnumType.successFalse_AuthTrue_NamesFalse
      }
    } else scenarioCase = QuestionsScoresCaseEnumType.successFalse_AuthFalse_NamesFalse
  }

  return scenarioCase
}

const getQuestionScoresCase = withTryCatchFinallyWrapper(getQuestionScoresCaseUnsafe, {
  optionsDefault,
  resDefault,
  funcMode: FuncModeEnumType.common,
  isFinally: false,
})

export { getQuestionScoresCase, getQuestionScoresCaseUnsafe }
export type {
  GetQuestionScoresCaseParamsType,
  GetQuestionScoresCaseOptionsType,
  GetQuestionScoresCaseResType,
  GetQuestionScoresCaseType,
}
