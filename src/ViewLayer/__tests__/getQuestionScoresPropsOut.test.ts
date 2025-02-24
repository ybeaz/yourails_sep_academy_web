import { consoler } from 'yourails_common'

import { DICTIONARY } from 'yourails_common'
import modulesJson from '../__mocks__/2025_02_20_modules.json'
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
      modules: modulesJson,
      moduleActive: {
        moduleID: 'l9U7XMpux7eD',
        creatorID: 'aBpOdEr8M6gN',
        organizationID: '1___oooOOOooo000',
        channelID: 'UC8butISFwT-Wl7EV0hUK0BQ',
        playlistID: 'PLWKjhJtqVAbkK24EaPurzMq0-kw5U9pJh',
        contentID: 'C0DPdy98e4c',
        isActive: true,
        isCompleted: true,
        capture: 'Test module',
        description: 'Introduction to Test module',
        language: 'en',
        dateCreated: 1262304000000,
        dateUpdated: 1738982519796,
        dateDeactivated: null,
        stages: [],
        tags: [
          'animal testing',
          'Test',
          'Test Test',
          'Test Testing',
          'Testing',
          'Testing Test',
          'Testing Testing',
        ],
        index: 0,
        contentType: 'ytID',
        captureChannel: 'test.org',
        capturePlaylist: 'test playlist',
        duration: 'PT9M3S',
        questionNumber: 6,
        passRate: 0.75,
        thumbnails: {
          default: {
            url: 'https://i.ytimg.com/vi/C0DPdy98e4c/default.jpg',
            width: 120,
            height: 90,
          },
          medium: {
            url: 'https://i.ytimg.com/vi/C0DPdy98e4c/mqdefault.jpg',
            width: 320,
            height: 180,
          },
          high: {
            url: 'https://i.ytimg.com/vi/C0DPdy98e4c/hqdefault.jpg',
            width: 480,
            height: 360,
          },
          standard: null,
          maxres: null,
        },
        objections: [],
        article: [],
        questions: [
          {
            questionID: 'LYSawUltP8cK',
            capture: 'What is that?',
            isActive: true,
            options: [
              {
                optionID: 'EvznNSFIyyI2',
                label: 'This is when',
                status: false,
                answer: false,
              },
              {
                optionID: 'HmbPgZFrjCE4',
                label: 'This is who',
                status: false,
                answer: false,
              },
              {
                optionID: 'nM6WBnAXddE1',
                label: 'This is that',
                status: true,
                answer: true,
              },
              {
                optionID: 'AfbmBbgAWpA3',
                label: 'This is where',
                status: false,
                answer: false,
              },
            ],
          },
        ],
        questionsTotal: 1,
      },
      queryUrl: {
        pageModules: '1',
        pageTags: '1',
        pageDocuments: '1',
        modulesSearch: 'animal testing',
        tagsSearch: 'animal testing',
      },
      scenarioCase: 'success',
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
        result: 'success',
      },
      sub: 'f4a89478-6051-705d-e938-db84b3be0aeb',
      profiles: [
        {
          profileID: 'aBpOdEr8M6gN',
          userID: 'f4a89478-6051-705d-e938-db84b3be0aeb',
          botID: null,
          isActive: true,
          dateCreated: 1709265714782,
          dateUpdated: 1740200713671,
          dateDeactivated: null,
          profileNature: 'human',
          profileName: '@r1',
          nameFirst: 'Roman',
          nameMiddle: '',
          nameLast: 'Ches',
          position: 0,
          avatarSrc: null,
          avatarSize: null,
          phones: [],
          emails: ['r1@userto.com'],
          messengers: [],
          locations: [],
          serviceSpecs: [],
          description: null,
          imagePendingSrc: null,
          pendingText: null,
          help: null,
          promptExamples: [],
          disclaimer: null,
          affiliation: null,
          jobTitle: null,
          awards: [],
          urls: ['https://r1.userto.com'],
        },
      ],
    },

    // {
    //   modules: modulesJson as any,
    //   queryUrl: {
    //     pageModules: '1',
    //     pageTags: '1',
    //     pageDocuments: '1',
    //     modulesSearch: 'animal testing',
    //     tagsSearch: 'animal testing',
    //   },
    //   handleEvents,
    //   scenario: {
    //     scenarioCase: 'success',
    //     message: 'scenario test success',
    //     buttonForwardProps: {
    //       icon: 'MdForward',
    //       classAdded: 'Button_ConfirmEditName',
    //       handleEvents,
    //       action: {
    //         typeEvent: 'CLICK_ON_CONFIRM_NAMES',
    //         data: {},
    //       },
    //       tooltipText: DICTIONARY.Confirm[language] as any,
    //       tooltipPosition: 'top',
    //       captureLeft: DICTIONARY.Confirm[language],
    //       isDisplaying: true,
    //     },
    //   },
    //   isEditNameVisible: false,
    //   language: 'en',
    //   nameFirst: '',
    //   nameLast: '',
    // },
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
