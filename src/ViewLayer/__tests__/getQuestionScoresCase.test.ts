import { consoler } from 'yourails_common'

import {
  getQuestionScoresCase,
  GetQuestionScoresCaseParamsType,
  GetQuestionScoresCaseOptionsType,
  GetQuestionScoresCaseResType,
} from '../Components/QuestionScores/getQuestionScoresCase'

type GetQuestionScoresCaseTestType = {
  params: GetQuestionScoresCaseParamsType
  options: GetQuestionScoresCaseOptionsType
  expected: GetQuestionScoresCaseResType
}

const tests: GetQuestionScoresCaseTestType[] = [{ params: '', options: {}, expected: '' }]

/**
 * @Description Test to challenge function getQuestionScoresCase
 * @test yarn jest getQuestionScoresCase.test.ts --coverage --collectCoverageFrom="src/Shared/getQuestionScoresCase.ts"
 *    In debugging mode:
 *       node --inspect-brk getQuestionScoresCase.test.ts
 *       chrome://inspect/#devices > Open dedicated DevTools for Node
 */
describe('Algoritms', () => {
  it.each(tests)('-- getQuestionScoresCase.test', ({ params, options, expected }) => {
    let output: GetQuestionScoresCaseResType = getQuestionScoresCase(params, options)
    consoler('getQuestionScoresCase.test', { output })

    expect(output).toEqual(expected)
  })
})
