import React from 'react'
import { getQuesionString } from 'yourails_common'
import { DICTIONARY } from 'yourails_common'
import { RootStoreType } from '../../../Interfaces/RootStoreType'
import { ButtonYrlPropsType } from 'yourails_common'
import { getProfileActiveToUpdate } from 'yourails_common'
import { ModuleType, MetaCourseType } from 'yourails_common'
import { QuestionsScoresCaseEnumType } from 'yourails_common'
import { HandleEventType } from 'yourails_common'

export type GetScenarioDictPropsType = {
  scenarioCase: QuestionsScoresCaseEnumType
  language: RootStoreType['language']
  capture: string
  right: number
  total: number
  nameFirst: RootStoreType['forms']['user']['nameFirst']
  nameMiddle: RootStoreType['forms']['user']['nameMiddle']
  nameLast: RootStoreType['forms']['user']['nameLast']
  meta?: MetaCourseType | {}
  description: string
  moduleID: ModuleType['moduleID']
  contentID: ModuleType['contentID']
  sub: RootStoreType['authAwsCognitoUserData']['sub']
  handleEvents: HandleEventType
  isEditNameVisible: RootStoreType['componentsState']['isEditNameVisible']
  profiles: RootStoreType['profiles']
}

export type GetScenarioDictResType = {
  scenarioCase: string
  message: { greeting: string; line1: string; line2: string; line3: string }
  buttonBackwardProps: ButtonYrlPropsType
  buttonForwardProps: ButtonYrlPropsType
}

export type ScenariousType = Record<
  keyof typeof QuestionsScoresCaseEnumType,
  GetScenarioDictResType
>

//   {
//   keyof QuestionsScoresCaseEnumType: GetScenarioDictResType
//   successNoAuth: GetScenarioDictResType
//   failure: GetScenarioDictResType
//   debug?: GetScenarioDictResType
// }

interface GetScenarioDictType {
  (props: GetScenarioDictPropsType): GetScenarioDictResType
}

/**
 * @description Function to getScenarioDict
 * @run ts-node src/shared/utils/getScenarioDict.ts
 * @import import { getScenarioDict } from './getScenarioDict'
 */
export const getScenarioDict: GetScenarioDictType = (props: GetScenarioDictPropsType) => {
  const {
    scenarioCase,
    language,
    right,
    total,
    nameFirst,
    nameMiddle,
    nameLast,
    meta,
    capture,
    description,
    moduleID,
    contentID,
    sub,
    handleEvents,
    isEditNameVisible,
    profiles = [],
  } = props

  const question = getQuesionString(language, right)

  const AuthoriseToReceiveCertificate = DICTIONARY.Authorise_to_receive_certificate[language]
  const ToReceiveCertificateFillTheForm = DICTIONARY.ToReceiveCertificateFillTheForm[language]
  const ToReceiveCertificateLogIn = DICTIONARY.ToReceiveCertificateLogIn[language]
  const correctAnsweresFrom = DICTIONARY.correctAnsweresFrom[language]
  const isCompletedWith = DICTIONARY.is_completed_with[language]
  const Congratulations = DICTIONARY.Congratulations[language]

  const YouCanTryOnceAgain = DICTIONARY.YouCanTryOnceAgain[language]
  const andReceiveTheCertificate = DICTIONARY.andReceiveTheCertificate[language]
  const ThisIsNotEnough = DICTIONARY.ThisIsNotEnough[language]
  const from = DICTIONARY.from[language]
  const andThisTimeAnswered = DICTIONARY.andThisTimeAnswered[language]
  const YouWereCommittedToSuccess = DICTIONARY.YouWereCommittedToSuccess[language]

  const getProfileActiveToUpdateProps = {
    forms: {
      profileActive: {
        nameFirst,
        nameMiddle,
        nameLast,
      },
    },
    authAwsCognitoUserData: { sub },
    profiles,
  }

  console.info('getScenarioDict [82]', getProfileActiveToUpdateProps)

  const { profileActive, isUpdatingProfile } = getProfileActiveToUpdate(
    getProfileActiveToUpdateProps
  )

  const successTrue_AuthTrue = {
    scenarioCase,
    message: {
      greeting: Congratulations,
      line1: `"${capture}"`,
      line2: `${isCompletedWith} ${right} ${correctAnsweresFrom} ${total}`,
      line3: `${DICTIONARY.Keep_going[language]}!`,
    },
    buttonBackwardProps: {
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
    buttonForwardProps: {
      classAdded: 'Button_ConfirmEditName',
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
  }

  const successTrue_AuthFalse = {
    scenarioCase,
    message: {
      greeting: Congratulations,
      line1: `"${capture}"`,
      line2: `${isCompletedWith} ${right} ${correctAnsweresFrom} ${total}`,
      line3: `${AuthoriseToReceiveCertificate}.`,
    },
    buttonBackwardProps: {
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
    buttonForwardProps: {
      classAdded: 'Button_MdForward2',
      icon: '',
      handleEvents,
      action: {
        typeEvent: 'CLICK_ON_SIGN_IN',
        data: {},
      },
      captureLeft: DICTIONARY.Confirm[language],
      tooltipText: DICTIONARY.Confirm[language],
      isDisabled: false,
      isDisplaying: true,
    },
  }

  const successFalse = {
    scenarioCase,
    message: {
      greeting: YouWereCommittedToSuccess,
      line1: `"${capture}"`,
      line2: `${andThisTimeAnswered} ${right} ${question} ${from} ${total}`,
      line3: `${YouCanTryOnceAgain}!`,
    },
    buttonBackwardProps: {
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
    buttonForwardProps: {
      classAdded: 'Button_MdForward2',
      icon: '',
      handleEvents,
      action: {
        typeEvent: 'CLOSE_MODAL_GET_SCORES',
      },
      isDisabled: false,
      isDisplaying: true,
    },
  }

  const scenarios: ScenariousType = {
    successTrue_AuthTrue_NamesTrue: successTrue_AuthTrue,
    successTrue_AuthTrue_NamesFalse: successTrue_AuthTrue,
    successTrue_AuthFalse_NamesTrue: successTrue_AuthFalse,
    successTrue_AuthFalse_NamesFalse: successTrue_AuthFalse,
    successFalse_AuthTrue_NamesTrue: successFalse,
    successFalse_AuthTrue_NamesFalse: successFalse,
    successFalse_AuthFalse_NamesTrue: successFalse,
    successFalse_AuthFalse_NamesFalse: successFalse,
  }

  return scenarios[scenarioCase]
}
