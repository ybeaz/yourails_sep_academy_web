import { consoler } from 'yourails_common'
import { QuestionsAnswersCaseEnumType } from 'yourails_common'
import { QuestionsScoresCaseEnumType } from 'yourails_common'

import {
  getQuestionScoresCase,
  GetQuestionScoresCaseParamsType,
  GetQuestionScoresCaseOptionsType,
  GetQuestionScoresCaseResType,
} from '../Components/QuestionScores/getQuestionScoresCase'

type GetQuestionScoresCaseTestType = {
  params: GetQuestionScoresCaseParamsType
  expected: GetQuestionScoresCaseResType
}

const tests: GetQuestionScoresCaseTestType[] = [
  {
    params: {
      result: QuestionsAnswersCaseEnumType.successTrue,
      sub: 'sub',
      nameFirst: 'first',
      nameLast: 'last',
    },
    expected: QuestionsScoresCaseEnumType.successTrue_AuthTrue_NamesTrue,
  },
  {
    params: {
      result: QuestionsAnswersCaseEnumType.successTrue,
      sub: 'sub',
      nameFirst: '',
      nameLast: '',
    },
    expected: QuestionsScoresCaseEnumType.successTrue_AuthTrue_NamesFalse,
  },
  {
    params: {
      result: QuestionsAnswersCaseEnumType.successTrue,
      sub: null,
      nameFirst: '',
      nameLast: '',
    },
    expected: QuestionsScoresCaseEnumType.successTrue_AuthFalse_NamesFalse,
  },
  {
    params: {
      result: QuestionsAnswersCaseEnumType.successFalse,
      sub: 'sub',
      nameFirst: 'first',
      nameLast: 'last',
    },
    expected: QuestionsScoresCaseEnumType.successFalse_AuthTrue_NamesTrue,
  },
  {
    params: {
      result: QuestionsAnswersCaseEnumType.successFalse,
      sub: 'sub',
      nameFirst: '',
      nameLast: '',
    },
    expected: QuestionsScoresCaseEnumType.successFalse_AuthTrue_NamesFalse,
  },
  {
    params: {
      result: QuestionsAnswersCaseEnumType.successFalse,
      sub: null,
      nameFirst: '',
      nameLast: '',
    },
    expected: QuestionsScoresCaseEnumType.successFalse_AuthFalse_NamesFalse,
  },
]

/**
 * @Description Test to challenge function getQuestionScoresCase
 * @test yarn jest getQuestionScoresCase.test.ts --coverage --collectCoverageFrom="src/ViewLayer/Components/QuestionScores/getQuestionScoresCase.ts"
 *    In debugging mode:
 *       node --inspect-brk getQuestionScoresCase.test.ts
 *       chrome://inspect/#devices > Open dedicated DevTools for Node
 */
describe('Algoritms', () => {
  it.each(tests)('-- getQuestionScoresCase.test', ({ params, expected }) => {
    let output: GetQuestionScoresCaseResType = getQuestionScoresCase(params)
    // consoler('getQuestionScoresCase.test', { output })

    expect(output).toEqual(expected)
  })
})
