import { consoler } from 'yourails_common'
import {
  withTryCatchFinallyWrapper,
  FuncModeEnumType,
  WithTryCatchFinallyWrapperOptionsType,
} from 'yourails_common'
import { getNavLinkSIngInUpToProp } from 'yourails_common'
import { ModuleType } from 'yourails_common'
import { HandleEventType } from 'yourails_common'
import { DICTIONARY } from 'yourails_common'
import { getMapJourneyData } from 'yourails_common'
import { QuestionScoresPropsOutType } from './QuestionScoresTypes'
import {
  type GetMessagesDictPropsType,
  type GetMessagesDictResType,
  getMessagesDict,
} from './getMessagesDict'
import { RootStoreType } from '../../../Interfaces/RootStoreType'
import { GetAnswersChecked2OutType } from 'yourails_common'
import { QuestionsScoresCaseEnumType } from 'yourails_common'
import { GetNavLinksButtonsItemParamType } from '../../Hooks/getComponentsList'

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

type GetQuestionScoresPropsOutResType = GetNavLinksButtonsItemParamType

interface GetQuestionScoresPropsOutType {
  (
    params: GetQuestionScoresPropsOutParamsType,
    options?: GetQuestionScoresPropsOutOptionsType
  ): GetQuestionScoresPropsOutResType[]
}

const optionsDefault: Required<GetQuestionScoresPropsOutOptionsType> = {
  funcParent: 'getQuestionScoresPropsOut',
}

const resDefault: GetQuestionScoresPropsOutResType[] = []

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

  const getMessagesDictProps: GetMessagesDictPropsType = {
    scenarioCase,
    isEditNameVisible,
    language,
    right,
    total,
    nameFirst,
    nameMiddle,
    nameLast,
    moduleActive,
    sub,
    handleEvents,
    profiles,
  }

  const MESSAGES_DICT = {
    successTrue_AuthTrue_NamesTrue: 'successTrue_AuthTrue_NamesTrue',
    successTrue_AuthTrue_NamesFalse: 'successTrue_AuthTrue_NamesFalse',
    successTrue_AuthFalse_NamesFalse: 'successTrue_AuthFalse_NamesFalse',
    successFalse_AuthTrue_NamesTrue: 'successFalse_AuthTrue_NamesTrue',
    successFalse_AuthTrue_NamesFalse: 'successFalse_AuthTrue_NamesFalse',
    successFalse_AuthFalse_NamesFalse: 'successFalse_AuthFalse_NamesFalse',
  }

  // I STOPPED HERE: REMOVE getMessagesDict, SIMPLIFY CODE
  const scenario = getMessagesDict(getMessagesDictProps)

  /*
  successTrue_AuthTrue_NamesTrue = 'successTrue_AuthTrue_NamesTrue',
  successTrue_AuthTrue_NamesFalse = 'successTrue_AuthTrue_NamesFalse',
                                    successTrue_AuthFalse_NamesTrue = 'successTrue_AuthFalse_NamesTrue', -
  successTrue_AuthFalse_NamesFalse = 'successTrue_AuthFalse_NamesFalse',
  successFalse_AuthTrue_NamesTrue = 'successFalse_AuthTrue_NamesTrue', 
  successFalse_AuthTrue_NamesFalse = 'successFalse_AuthTrue_NamesFalse',
                                    successFalse_AuthFalse_NamesTrue = 'successFalse_AuthFalse_NamesTrue', -
  successFalse_AuthFalse_NamesFalse = 'successFalse_AuthFalse_NamesFalse',
  */

  const propsOut: GetNavLinksButtonsItemParamType[] = [
    { messageTileProps: scenario.message },
    {
      navLinkProps: {
        classAdded: 'NavLink_SignInUp',
        to: getNavLinkSIngInUpToProp(),
        isExternal: true,
        isDisabled: false,
        isDisplaying: !isEditNameVisible,
      },
      buttonYrlProps: {
        classAdded: 'Button_SignInUp',
        icon: '',
        handleEvents,
        action: {
          typeEvent: 'CLICK_ON_SIGN_IN',
          data: {},
        },
        captureLeft: DICTIONARY.Sign_in_up[language],
        tooltipText: '',
        tooltipPosition: 'top',
        isDisabled: false,
        isDisplaying: true,
      },
    },
    {
      navLinkProps: {
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
      buttonYrlProps: {
        classAdded: 'Button_NextTask',
        icon: '',
        handleEvents,
        action: {
          typeEvent: 'TEST',
          data: {},
        },
        captureLeft: DICTIONARY.Next_task[language],
        tooltipText: '',
        tooltipPosition: 'top',
        isDisabled: false,
        isDisplaying: true,
      },
    },
    {
      buttonYrlProps: {
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
        tooltipText: '',
        tooltipPosition: 'top',
        isDisabled:
          !isEditNameVisible &&
          (scenarioCase === QuestionsScoresCaseEnumType.successTrue_AuthTrue_NamesFalse ||
            scenarioCase === QuestionsScoresCaseEnumType.successTrue_AuthFalse_NamesTrue ||
            scenarioCase === QuestionsScoresCaseEnumType.successTrue_AuthFalse_NamesFalse ||
            scenarioCase === QuestionsScoresCaseEnumType.successFalse_AuthTrue_NamesFalse ||
            scenarioCase === QuestionsScoresCaseEnumType.successFalse_AuthFalse_NamesTrue ||
            scenarioCase === QuestionsScoresCaseEnumType.successFalse_AuthFalse_NamesFalse),
        isDisplaying: !isEditNameVisible,
      },
    },
    {
      buttonYrlProps: {
        classAdded: 'Button_IsEditName',
        icon: '',
        handleEvents,
        action: {
          typeEvent: 'SET_EDIT_NAME_VISIBILITY',
          data: {
            isEditNameVisible: true,
          },
        },
        captureLeft: `${DICTIONARY.Add_edit_name[language]}`,
        tooltipText: '',
        tooltipPosition: 'top',
        isDisabled: false,
        isDisplaying: !isEditNameVisible,
      },
    },
    {
      formInputNamesWithButtonsProps: {
        formInputNamesProps: {
          language,
          handleEvents,
        },
        buttonCancelEditNameProps: {
          classAdded: 'Button_CancelEditName',
          icon: '',
          handleEvents,
          action: {
            typeEvent: 'SET_EDIT_NAME_VISIBILITY',
            data: {
              isEditNameVisible: false,
            },
          },
          captureLeft: DICTIONARY.Cancel[language],
          tooltipText: DICTIONARY.Cancel[language],
          tooltipPosition: 'top',
          isDisabled: false,
          isDisplaying: true,
        },
        buttonConfirmEditNameProps: {
          classAdded: 'Button_ConfirmForward',
          icon: '',
          handleEvents,
          action: {
            typeEvent: 'CLICK_ON_CONFIRM_NAMES',
            data: {},
          },
          captureLeft: DICTIONARY.Confirm[language],
          tooltipText: DICTIONARY.Confirm[language],
          tooltipPosition: 'top',
          isDisabled: false,
          isDisplaying: true,
        },
        isDisplaying: isEditNameVisible,
      },
    },
    {
      navLinkProps: {
        classAdded: 'NavLink_BackToTopic',
        to: {
          pathname: '/',
          search: queryUrl,
        },
        /* onClick: () => navigate(-1), Alternative */
        isDisabled: false,
        isDisplaying: !isEditNameVisible,
      },
      buttonYrlProps: {
        classAdded: 'Button_BackToTopic',
        icon: '',
        handleEvents,
        action: {},
        captureLeft: DICTIONARY.Back_to_topic[language],
        tooltipText: '',
        tooltipPosition: 'top',
        isDisabled: false,
        isDisplaying: true,
      },
    },
    {
      navLinkProps: {
        classAdded: 'NavLink_Achievements',
        to: {
          pathname: '/my-documents',
          search: queryUrl,
        },
        isDisabled:
          !isEditNameVisible &&
          (scenarioCase === QuestionsScoresCaseEnumType.successTrue_AuthTrue_NamesFalse ||
            scenarioCase === QuestionsScoresCaseEnumType.successTrue_AuthFalse_NamesTrue ||
            scenarioCase === QuestionsScoresCaseEnumType.successTrue_AuthFalse_NamesFalse ||
            scenarioCase === QuestionsScoresCaseEnumType.successFalse_AuthTrue_NamesFalse ||
            scenarioCase === QuestionsScoresCaseEnumType.successFalse_AuthFalse_NamesTrue ||
            scenarioCase === QuestionsScoresCaseEnumType.successFalse_AuthFalse_NamesFalse),
        isDisplaying: !isEditNameVisible,
      },
      buttonYrlProps: {
        classAdded: 'Button_Achievements',
        icon: '',
        handleEvents,
        action: {},
        captureLeft: DICTIONARY.Achievements[language],
        tooltipText: '',
        tooltipPosition: 'top',
        isDisabled:
          !isEditNameVisible &&
          (scenarioCase === QuestionsScoresCaseEnumType.successTrue_AuthTrue_NamesFalse ||
            scenarioCase === QuestionsScoresCaseEnumType.successTrue_AuthFalse_NamesTrue ||
            scenarioCase === QuestionsScoresCaseEnumType.successTrue_AuthFalse_NamesFalse ||
            scenarioCase === QuestionsScoresCaseEnumType.successFalse_AuthTrue_NamesFalse ||
            scenarioCase === QuestionsScoresCaseEnumType.successFalse_AuthFalse_NamesTrue ||
            scenarioCase === QuestionsScoresCaseEnumType.successFalse_AuthFalse_NamesFalse),
        isDisplaying: true,
      },
    },
    {
      buttonYrlProps: {
        classAdded: 'Button_BackToModule',
        icon: '',
        handleEvents,
        action: {
          typeEvent: 'SET_MODAL_FRAMES',
          data: [
            {
              childName: 'QuestionScores',
              isActive: false,
              childProps: {},
            },
          ],
        },
        captureLeft: DICTIONARY.Back[language],
        tooltipText: '',
        tooltipPosition: 'top',
        isDisabled: false,
        isDisplaying: !isEditNameVisible,
      },
    },
  ]

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
