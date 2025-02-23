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
import { ScenarioCaseType } from 'yourails_common'
import { QuestionScoresPropsOutType } from './QuestionScoresTypes'
import { GetScenarioDictPropsType, GetScenarioDictResType } from './getScenarioDict'
import { RootStoreType } from '../../../Interfaces/RootStoreType'
import { getScenarioDict } from './getScenarioDict'
import { GetAnswersChecked2OutType } from 'yourails_common'

type GetQuestionScoresPropsOutParamsType = {
  modules: ModuleType[]
  moduleActive: ModuleType
  queryUrl: any
  handleEvents: HandleEventType
  scenarioCase: ScenarioCaseType
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
    modules,
    queryUrl,
    handleEvents,
    isEditNameVisible,
    language,
    nameFirst,
    nameLast,
  })

  const getScenarioDictProps: GetScenarioDictPropsType = {
    scenarioCase,
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
    isEditNameVisible,
    profiles,
  }

  const scenario = getScenarioDict(getScenarioDictProps)

  const propsOut: QuestionScoresPropsOutType = {
    message: scenario.message,
    navLinkNextTaskProps: {
      to: {
        pathname: getMapJourneyData({ modules }).find(
          ({ isNextModule }: { isNextModule: boolean }) => isNextModule
        )?.pathnameModule,
        search: queryUrl,
      },
      isDisplaying: scenarioCase === 'success' && !isEditNameVisible,
    },
    buttonNextTaskProps: {
      icon: '',
      classAdded: 'Button_NextTask',
      handleEvents,
      action: {
        typeEvent: 'TEST',
        data: {},
      },
      captureLeft: DICTIONARY.Next_task[language],
      tooltipText: DICTIONARY.Next_task[language],
      tooltipPosition: 'top',
    },
    navLinkCreditProps: {
      to: { pathname: '/' },
      isDisplaying: scenarioCase === 'success' && !isEditNameVisible,
    },
    buttonCreditProps: {
      icon: '',
      classAdded: 'Button_Credit',
      handleEvents,
      action: {},
      captureLeft: DICTIONARY.View_reward[language],
      tooltipText: DICTIONARY.View_reward[language],
      tooltipPosition: 'top',
    },
    buttonIsEditNameVisibleProps: {
      icon: '',
      classAdded: 'Button_EditName',
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
      isDisplaying: !isEditNameVisible,
    },
    navLinkAchievementsProps: {
      to: { pathname: '/my-documents' },
      isDisplaying: scenarioCase === 'success' && !isEditNameVisible,
    },
    buttonAchievementsProps: {
      icon: '',
      classAdded: 'Button_Achievements',
      handleEvents,
      action: {},
      captureLeft: DICTIONARY.Achievements[language],
      tooltipText: DICTIONARY.Achievements[language],
      tooltipPosition: 'top',
    },
    navLinkAllMissionsProps: {
      to: {
        pathname: '/',
        search: queryUrl,
      },
      /* onClick: () => navigate(-1), Alternative*/
      isDisplaying: scenarioCase === 'success' && !isEditNameVisible,
    },
    buttonAllMissionsProps: {
      icon: '',
      classAdded: 'Button_BackToTopic',
      handleEvents,
      action: {},
      captureLeft: DICTIONARY.Back_to_topic[language],
      tooltipText: DICTIONARY.Back_to_topic[language],
      tooltipPosition: 'top',
    },
    formInputNamesProps: {
      language,
      handleEvents,
    },
    formInputNamesWithButtonsProps: {
      formInputNamesProps: {
        language,
        handleEvents,
      },
      buttonCancelEditNameProps: scenario.buttonBackwardProps,
      buttonConfirmEditNameProps: scenario.buttonForwardProps,
      isDisplaying: scenarioCase === ScenarioCaseType.success && isEditNameVisible,
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
