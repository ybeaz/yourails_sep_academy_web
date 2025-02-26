import { consoler } from 'yourails_common'
import {
  withTryCatchFinallyWrapper,
  FuncModeEnumType,
  WithTryCatchFinallyWrapperOptionsType,
} from 'yourails_common'
import { ModuleType } from 'yourails_common'
import { HandleEventType } from 'yourails_common'
import { DICTIONARY } from 'yourails_common'
import { getMapJourneyData } from 'yourails_common'
import { QuestionScoresPropsOutType } from './QuestionScoresTypes'
import { GetScenarioDictPropsType, GetScenarioDictResType } from './getScenarioDict'
import { RootStoreType } from '../../../Interfaces/RootStoreType'
import { getScenarioDict } from './getScenarioDict'
import { GetAnswersChecked2OutType } from 'yourails_common'
import { QuestionsScoresCaseEnumType } from 'yourails_common'

type GetQuestionScoresPropsOutParamsType = {
  modules: ModuleType[]
  moduleActive: ModuleType
  queryUrl: any
  handleEvents: HandleEventType
  navigate: any
  scenarioCase: QuestionsScoresCaseEnumType
  isEditNameVisible: boolean
  language: RootStoreType['language']
  nameFirst: RootStoreType['forms']['user']['nameFirst']
  nameMiddle: RootStoreType['forms']['user']['nameMiddle']
  nameLast: RootStoreType['forms']['user']['nameLast']

  score: GetAnswersChecked2OutType

  sub: RootStoreType['authAwsCognitoUserData']['sub']
  profiles: RootStoreType['profiles']
}

type GetQuestionScoresPropsOutOptionsType = { funcParent?: string }

type GetQuestionScoresPropsOutResType = QuestionScoresPropsOutType

interface GetQuestionScoresPropsOutType {
  (
    params: GetQuestionScoresPropsOutParamsType,
    options?: GetQuestionScoresPropsOutOptionsType
  ): GetQuestionScoresPropsOutResType
}

const optionsDefault: Required<GetQuestionScoresPropsOutOptionsType> = {
  funcParent: 'getQuestionScoresPropsOut',
}

const resDefault: GetQuestionScoresPropsOutResType | any = {}

/**
 * @description Function to getQuestionScoresPropsOut
 * @test yarn jest src/ViewLayer/__tests__/getQuestionScoresPropsOut.test.ts --coverage --collectCoverageFrom="src/ViewLayer/Components/QuestionScores/getQuestionScoresPropsOut.ts"
 * @import import { getQuestionScoresPropsOut } from './getQuestionScoresPropsOut'
 */

const getQuestionScoresPropsOutUnsafe: GetQuestionScoresPropsOutType = ({
  modules,
  moduleActive,
  queryUrl,
  handleEvents,
  navigate,
  scenarioCase,
  isEditNameVisible,
  language,
  nameFirst,
  nameMiddle,
  nameLast,
  score,
  sub,
  profiles,
}: GetQuestionScoresPropsOutParamsType) => {
  const { capture, description, moduleID, contentID } = moduleActive

  const { total, right } = score

  console.info('getQuestionScoresPropsOut [64]', {
    nameFirst,
    props: {
      modules,
      moduleActive,
      queryUrl,
      handleEvents,
      scenarioCase,
      isEditNameVisible,
      language,
      nameFirst,
      nameMiddle,
      nameLast,
      score,
      sub,
      profiles,
    },
  })

  const getScenarioDictProps: GetScenarioDictPropsType = {
    scenarioCase,
    isEditNameVisible,
    language,
    right,
    total,
    nameFirst,
    nameMiddle,
    nameLast,
    capture: capture || '',
    description: description || '',
    moduleID: moduleID || '',
    contentID: contentID || '',
    sub,
    handleEvents,
    profiles,
  }

  const scenario = getScenarioDict(getScenarioDictProps)

  const propsOut: QuestionScoresPropsOutType = {
    message: scenario.message,
    navLinkNextTaskProps: {
      classAdded: 'NavLink_NextTask',
      to: {
        pathname: getMapJourneyData({ modules }).find(
          ({ isNextModule }: { isNextModule: boolean }) => isNextModule
        )?.pathnameModule,
        search: queryUrl,
      },
      isDisabled: false,
      isDisplaying: !isEditNameVisible,
    },

    /*
  successTrue_AuthTrue_NamesTrue = 'successTrue_AuthTrue_NamesTrue',
  successTrue_AuthTrue_NamesFalse = 'successTrue_AuthTrue_NamesFalse',
  successTrue_AuthFalse_NamesTrue = 'successTrue_AuthFalse_NamesTrue',
  successTrue_AuthFalse_NamesFalse = 'successTrue_AuthFalse_NamesFalse',
  successFalse_AuthTrue_NamesTrue = 'successFalse_AuthTrue_NamesTrue',
  successFalse_AuthTrue_NamesFalse = 'successFalse_AuthTrue_NamesFalse',
  successFalse_AuthFalse_NamesTrue = 'successFalse_AuthFalse_NamesTrue',
  successFalse_AuthFalse_NamesFalse = 'successFalse_AuthFalse_NamesFalse',
  */

    buttonNextTaskProps: {
      classAdded: 'Button_NextTask',
      icon: '',
      handleEvents,
      action: {
        typeEvent: 'TEST',
        data: {},
      },
      captureLeft: DICTIONARY.Next_task[language],
      tooltipText: DICTIONARY.Next_task[language],
      tooltipPosition: 'top',
      isDisabled: false,
      isDisplaying: true,
    },
    buttonCreditProps: {
      classAdded: 'Button_Credit',
      icon: '',
      handleEvents,
      action: {
        typeEvent: 'CREATE_DOCUMENT',
        data: {
          navigate,
        },
      },
      captureLeft: DICTIONARY.View_reward[language],
      tooltipText: DICTIONARY.View_reward[language],
      tooltipPosition: 'top',
      isDisabled:
        scenarioCase === QuestionsScoresCaseEnumType.successTrue_AuthTrue_NamesFalse &&
        isEditNameVisible,
      isDisplaying: !isEditNameVisible,
    },
    buttonIsEditNameVisibleProps: {
      classAdded: 'Button_IsEditName',
      icon: '',
      handleEvents,
      action: {
        typeEvent: 'SET_EDIT_NAME_VISIBILITY',
        data: {
          isEditNameVisible: true,
        },
      },
      captureLeft: `${DICTIONARY.Edit_name[language]}`,
      tooltipText: `${DICTIONARY.Edit_name[language]}`,
      tooltipPosition: 'top',
      isDisabled: false,
      isDisplaying: !isEditNameVisible,
    },
    formInputNamesWithButtonsProps: {
      formInputNamesProps: {
        language,
        handleEvents,
      },
      buttonCancelEditNameProps: scenario.buttonBackwardProps,
      buttonConfirmEditNameProps: scenario.buttonForwardProps,
      isDisplaying: isEditNameVisible,
    },
    navLinkBackToTopicProps: {
      classAdded: 'NavLink_BackToTopic',
      to: {
        pathname: '/',
        search: queryUrl,
      },
      /* onClick: () => navigate(-1), Alternative */
      isDisabled: false,
      isDisplaying: !isEditNameVisible,
    },
    buttonBackToTopicProps: {
      classAdded: 'Button_BackToTopic',
      icon: '',
      handleEvents,
      action: {},
      captureLeft: DICTIONARY.Back_to_topic[language],
      tooltipText: DICTIONARY.Back_to_topic[language],
      tooltipPosition: 'top',
      isDisabled: false,
      isDisplaying: true,
    },
    navLinkAchievementsProps: {
      classAdded: 'NavLink_Achievements',
      to: {
        pathname: '/my-documents',
        search: queryUrl,
      },
      isDisabled:
        !isEditNameVisible &&
        (scenarioCase === QuestionsScoresCaseEnumType.successTrue_AuthTrue_NamesFalse ||
          scenarioCase === QuestionsScoresCaseEnumType.successTrue_AuthFalse_NamesFalse ||
          scenarioCase === QuestionsScoresCaseEnumType.successFalse_AuthFalse_NamesTrue ||
          scenarioCase === QuestionsScoresCaseEnumType.successFalse_AuthFalse_NamesFalse),
      isDisplaying: !isEditNameVisible,
    },
    buttonAchievementsProps: {
      classAdded: 'Button_Achievements',
      icon: '',
      handleEvents,
      action: {},
      captureLeft: DICTIONARY.Achievements[language],
      tooltipText: DICTIONARY.Achievements[language],
      tooltipPosition: 'top',
      isDisabled:
        !isEditNameVisible &&
        (scenarioCase === QuestionsScoresCaseEnumType.successTrue_AuthTrue_NamesFalse ||
          scenarioCase === QuestionsScoresCaseEnumType.successTrue_AuthFalse_NamesFalse ||
          scenarioCase === QuestionsScoresCaseEnumType.successFalse_AuthFalse_NamesTrue ||
          scenarioCase === QuestionsScoresCaseEnumType.successFalse_AuthFalse_NamesFalse),
      isDisplaying: true,
    },
  }

  return propsOut
}

const getQuestionScoresPropsOut = withTryCatchFinallyWrapper(getQuestionScoresPropsOutUnsafe, {
  optionsDefault,
  resDefault,
  funcMode: FuncModeEnumType.common,
  isFinally: false,
})

export { getQuestionScoresPropsOut, getQuestionScoresPropsOutUnsafe }
export type {
  GetQuestionScoresPropsOutParamsType,
  GetQuestionScoresPropsOutOptionsType,
  GetQuestionScoresPropsOutResType,
  GetQuestionScoresPropsOutType,
}
