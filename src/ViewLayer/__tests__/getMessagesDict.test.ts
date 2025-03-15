import { consoler } from 'yourails_common'
import { QuestionsScoresCaseEnumType } from 'yourails_common'

import {
  getMessagesDict,
  GetMessagesDictParamsType,
  GetMessagesDictResType,
} from '../Components/QuestionScores/getMessagesDict'

type GetMessagesDictTestType = {
  params: GetMessagesDictParamsType
  expected: GetMessagesDictResType
}

const tests: GetMessagesDictTestType[] = [
  {
    params: {
      scenarioCase: QuestionsScoresCaseEnumType.successTrue_AuthTrue_NamesTrue,
      language: 'en',
      right: 19,
      total: 20,
      capture: 'Test capture',
      isEditNameVisible: false,
      pathNextTask: '/m/abc123/next-task',
    },
    expected: {
      message: {
        title: 'Congratulations',
        line1: '"Test capture"',
        line2: 'is completed with 19 correct answeres from 20.',
        line3: 'Keep going!',
      },
    },
  },
  {
    params: {
      scenarioCase: QuestionsScoresCaseEnumType.successTrue_AuthTrue_NamesTrue,
      language: 'en',
      right: 10,
      total: 20,
      capture: 'Test capture',
      isEditNameVisible: true,
      pathNextTask: undefined,
    },
    expected: {
      message: {
        title: 'Congratulations',
        line1: '"Test capture"',
        line2: 'is completed with 10 correct answeres from 20.',
        line3: 'Add/ edit name.',
      },
    },
  },
  {
    params: {
      scenarioCase: QuestionsScoresCaseEnumType.successTrue_AuthTrue_NamesTrue,
      language: 'en',
      right: 18,
      total: 20,
      capture: 'Test capture',
      isEditNameVisible: false,
      pathNextTask: undefined,
    },
    expected: {
      message: {
        title: 'Congratulations',
        line1: '"Test capture"',
        line2: 'is completed with 18 correct answeres from 20.',
        line3: 'You have finished the mission successfully!',
      },
    },
  },
  {
    params: {
      scenarioCase: QuestionsScoresCaseEnumType.successTrue_AuthTrue_NamesFalse,
      language: 'en',
      right: 18,
      total: 20,
      capture: 'Test capture',
      isEditNameVisible: false,
      pathNextTask: undefined,
    },
    expected: {
      message: {
        title: 'Congratulations',
        line1: '"Test capture"',
        line2: 'is completed with 18 correct answeres from 20.',
        line3: 'Add/ edit name.',
      },
    },
  },
  {
    params: {
      scenarioCase: QuestionsScoresCaseEnumType.successTrue_AuthFalse_NamesFalse,
      language: 'en',
      right: 18,
      total: 20,
      capture: 'Test capture',
      isEditNameVisible: false,
      pathNextTask: undefined,
    },
    expected: {
      message: {
        title: 'Congratulations',
        line1: '"Test capture"',
        line2: 'is completed with 18 correct answeres from 20.',
        line3: 'Authorise to receive certificate.',
      },
    },
  },
  {
    params: {
      scenarioCase: QuestionsScoresCaseEnumType.successFalse_AuthTrue_NamesTrue,
      language: 'en',
      right: 10,
      total: 20,
      capture: 'Test capture',
      isEditNameVisible: false,
      pathNextTask: undefined,
    },
    expected: {
      message: {
        title: 'You were committed to success.',
        line1: '"Test capture"',
        line2: 'and this time answered correcly 10 questions from 20.',
        line3: 'You can try once again!',
      },
    },
  },
]

/**
 * @Description Test to challenge function getMessagesDict
 * @test yarn jest getMessagesDict.test.ts --coverage --collectCoverageFrom="src/ViewLayer/Components/QuestionScores/getMessagesDict.tsx"
 *    In debugging mode:
 *       node --inspect-brk getMessagesDict.test.ts
 *       chrome://inspect/#devices > Open dedicated DevTools for Node
 */
describe('Algoritms', () => {
  it.each(tests)('-- getMessagesDict.test', ({ params, expected }) => {
    let output: GetMessagesDictResType = getMessagesDict(params)
    // consoler('getMessagesDict.test', { output })

    expect(output).toEqual(expected)
  })
})
