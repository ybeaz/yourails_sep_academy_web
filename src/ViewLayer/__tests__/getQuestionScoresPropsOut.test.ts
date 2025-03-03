import { consoler } from 'yourails_common'

import modulesJson from '../__mocks__/2025_02_20_modules.json'
import profilesJson from '../__mocks__/2025_02_23_profiles.json'
import { expected, handleEvents, navigate } from '../__mocks__/getQuestionScoresPropsOutExpected'
import { QuestionsAnswersCaseEnumType } from 'yourails_common'
import { QuestionsScoresCaseEnumType } from 'yourails_common'

import {
  getQuestionScoresPropsOut,
  GetQuestionScoresPropsOutParamsType,
  GetQuestionScoresPropsOutResType,
} from '../Components/QuestionScores/getQuestionScoresPropsOut'

type GetQuestionScoresPropsOutTestType = {
  testScenario: string
  params: GetQuestionScoresPropsOutParamsType
  expected: GetQuestionScoresPropsOutResType[]
}

const paramsCommon = {
  modules: modulesJson as any,
  moduleActive: modulesJson.find((item: any) => item.moduleID === 'l9U7XMpux7eD') as any,
  queryUrl: {
    pageModules: '1',
    pageTags: '1',
    pageDocuments: '1',
    modulesSearch: 'animal testing',
    tagsSearch: 'animal testing',
  },
  handleEvents,
  navigate,
  language: 'en',
  nameFirst: 'Roman',
  nameMiddle: '',
  nameLast: 'Ches',
  score: {
    total: 1,
    right: 1,
    wrong: 0,
    answered: 1,
    result: QuestionsAnswersCaseEnumType.successTrue,
  },
  sub: 'f4a89478-6051-705d-e938-db84b3be0aeb',
  profiles: profilesJson as any,
}

const tests: GetQuestionScoresPropsOutTestType[] = [
  {
    testScenario: ['successTrue_AuthTrue_NamesTrue', 'isEditNameVisibleFalse'].join(', '),
    params: {
      scenarioCase: QuestionsScoresCaseEnumType.successTrue_AuthTrue_NamesTrue,
      isEditNameVisible: false,
      ...paramsCommon,
    },
    expected: expected.successTrue_AuthTrue_NamesTrue_isEditNameVisibleFalse,
  },

  {
    testScenario: ['successTrue_AuthTrue_NamesTrue', 'isEditNameVisibleTrue'].join(', '),
    params: {
      scenarioCase: QuestionsScoresCaseEnumType.successTrue_AuthTrue_NamesTrue,
      isEditNameVisible: true,
      ...paramsCommon,
    },
    expected: expected.successTrue_AuthTrue_NamesTrue_isEditNameVisibleTrue,
  },

  {
    testScenario: ['successTrue_AuthTrue_NamesFalse', 'isEditNameVisibleFalse'].join(', '),
    params: {
      scenarioCase: QuestionsScoresCaseEnumType.successTrue_AuthTrue_NamesFalse,
      isEditNameVisible: false,
      ...paramsCommon,
    },
    expected: expected.successTrue_AuthTrue_NamesFalse_isEditNameVisibleFalse,
  },

  {
    testScenario: ['successTrue_AuthTrue_NamesFalse', 'isEditNameVisibleTrue'].join(', '),
    params: {
      scenarioCase: QuestionsScoresCaseEnumType.successTrue_AuthTrue_NamesFalse,
      isEditNameVisible: true,
      ...paramsCommon,
    },
    expected: expected.successTrue_AuthTrue_NamesFalse_isEditNameVisibleTrue,
  },

  {
    testScenario: ['successTrue_AuthFalse_NamesFalse', 'isEditNameVisibleFalse'].join(', '),
    params: {
      scenarioCase: QuestionsScoresCaseEnumType.successTrue_AuthFalse_NamesFalse,
      isEditNameVisible: false,
      ...paramsCommon,
    },
    expected: expected.successTrue_AuthFalse_NamesFalse_isEditNameVisibleFalse,
  },

  {
    testScenario: ['successFalse_AuthTrue_NamesTrue', 'isEditNameVisibleFalse'].join(', '),
    params: {
      scenarioCase: QuestionsScoresCaseEnumType.successFalse_AuthTrue_NamesTrue,
      isEditNameVisible: false,
      ...paramsCommon,
      score: {
        total: 1,
        right: 0,
        wrong: 1,
        answered: 1,
        result: QuestionsAnswersCaseEnumType.successFalse,
      },
    },
    expected: expected.successFalse_AuthTrue_NamesTrue_isEditNameVisibleFalse,
  },

  {
    testScenario: ['successFalse_AuthTrue_NamesTrue', 'isEditNameVisibleTrue'].join(', '),
    params: {
      scenarioCase: QuestionsScoresCaseEnumType.successFalse_AuthTrue_NamesTrue,
      isEditNameVisible: true,
      ...paramsCommon,
      score: {
        total: 1,
        right: 0,
        wrong: 1,
        answered: 1,
        result: QuestionsAnswersCaseEnumType.successFalse,
      },
    },
    expected: expected.successFalse_AuthTrue_NamesTrue_isEditNameVisibleTrue,
  },

  {
    testScenario: ['successFalse_AuthTrue_NamesFalse', 'isEditNameVisibleFalse'].join(', '),
    params: {
      scenarioCase: QuestionsScoresCaseEnumType.successFalse_AuthTrue_NamesFalse,
      isEditNameVisible: false,
      ...paramsCommon,
      score: {
        total: 1,
        right: 0,
        wrong: 1,
        answered: 1,
        result: QuestionsAnswersCaseEnumType.successFalse,
      },
    },
    expected: expected.successFalse_AuthTrue_NamesFalse_isEditNameVisibleFalse,
  },

  {
    testScenario: ['successFalse_AuthTrue_NamesFalse', 'isEditNameVisibleTrue'].join(', '),
    params: {
      scenarioCase: QuestionsScoresCaseEnumType.successFalse_AuthTrue_NamesFalse,
      isEditNameVisible: true,
      ...paramsCommon,
      score: {
        total: 1,
        right: 0,
        wrong: 1,
        answered: 1,
        result: QuestionsAnswersCaseEnumType.successFalse,
      },
    },
    expected: expected.successFalse_AuthTrue_NamesFalse_isEditNameVisibleTrue,
  },

  {
    testScenario: ['successFalse_AuthFalse_NamesFalse', 'isEditNameVisibleFalse'].join(', '),
    params: {
      scenarioCase: QuestionsScoresCaseEnumType.successFalse_AuthFalse_NamesFalse,
      isEditNameVisible: false,
      ...paramsCommon,
      score: {
        total: 1,
        right: 0,
        wrong: 1,
        answered: 1,
        result: QuestionsAnswersCaseEnumType.successFalse,
      },
    },
    expected: expected.successFalse_AuthFalse_NamesFalse_isEditNameVisibleFalse,
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

    expect(output).toEqual(expected)
  })
})
