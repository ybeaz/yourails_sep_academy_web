import { consoler } from 'yourails_common'

import { ScenarioCaseEnumType } from 'yourails_common'
import modulesJson from '../__mocks__/2025_02_20_modules.json'
import profilesJson from '../__mocks__/2025_02_23_profiles.json'
import * as expectedDict from '../__mocks__/getQuestionScoresPropsOutExpected'

import {
  getQuestionScoresPropsOut,
  GetQuestionScoresPropsOutParamsType,
  GetQuestionScoresPropsOutOptionsType,
  GetQuestionScoresPropsOutResType,
} from '../Components/QuestionScores/getQuestionScoresPropsOut'

type GetQuestionScoresPropsOutTestType = {
  testScenario: string
  params: GetQuestionScoresPropsOutParamsType
  expected: GetQuestionScoresPropsOutResType
}

const language = 'en'
const handleEvents = () => {}

const tests: GetQuestionScoresPropsOutTestType[] = [
  {
    testScenario: ['success (auth)', 'no names'].join(', '),
    params: {
      modules: modulesJson as any,
      moduleActive: modulesJson.find((item: any) => item.moduleID === 'l9U7XMpux7eD') as any,
      queryUrl: {
        pageModules: '1',
        pageTags: '1',
        pageDocuments: '1',
        modulesSearch: 'animal testing',
        tagsSearch: 'animal testing',
      },
      handleEvents: () => {},
      navigate: () => {},
      scenarioCase: ScenarioCaseEnumType.success,
      isEditNameVisible: false,
      language: 'en',
      nameFirst: 'Roman',
      nameMiddle: '',
      nameLast: 'Ches',
      score: {
        total: 1,
        right: 1,
        wrong: 0,
        answered: 1,
        result: ScenarioCaseEnumType.success,
      },
      sub: 'f4a89478-6051-705d-e938-db84b3be0aeb',
      profiles: profilesJson as any,
    },
    expected: expectedDict.expected01,
  },
]

/**
 * @Description Test to challenge function getQuestionScoresPropsOut
 * @test yarn jest src/ViewLayer/__tests__/getQuestionScoresPropsOut.test.ts
 * yarn jest src/ViewLayer/__tests__/getQuestionScoresPropsOut.test.ts --coverage --collectCoverageFrom="src/ViewLayer/Components/QuestionScores/getQuestionScoresPropsOut.ts"
 *    In debugging mode:
 *       node --inspect-brk getQuestionScoresPropsOut.test.ts
 *       chrome://inspect/#devices > Open dedicated DevTools for Node
 */
describe('Algoritms', () => {
  beforeEach(() => {})

  it.each(tests)(`-- getQuestionScoresPropsOut.test: $testScenario`, ({ params, expected }) => {
    let output: GetQuestionScoresPropsOutResType = getQuestionScoresPropsOut(params)
    // consoler('getQuestionScoresPropsOut.test', { output })

    expect(JSON.stringify(output)).toEqual(JSON.stringify(expected))
  })
})
