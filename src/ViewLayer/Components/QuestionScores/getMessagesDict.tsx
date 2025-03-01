import React from 'react'
import { getQuesionString } from 'yourails_common'
import { DICTIONARY } from 'yourails_common'
import { RootStoreType } from '../../../Interfaces/RootStoreType'
import { ButtonYrlPropsType } from 'yourails_common'
import { getProfileActiveToUpdate } from 'yourails_common'
import { ModuleType, MetaCourseType } from 'yourails_common'
import { QuestionsScoresCaseEnumType } from 'yourails_common'
import { HandleEventType } from 'yourails_common'

export type GetMessagesDictPropsType = {
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

export type GetMessagesDictResType = {
  message: { greeting: string; line1: string; line2: string; line3: string }
}

export type ScenariousType = Record<
  keyof typeof QuestionsScoresCaseEnumType,
  GetMessagesDictResType
>

interface GetMessagesDictType {
  (props: GetMessagesDictPropsType): GetMessagesDictResType
}

/**
 * @description Function to getMessagesDict
 * @run ts-node src/shared/utils/getMessagesDict.ts
 * @import import { getMessagesDict } from './getMessagesDict'
 */
export const getMessagesDict: GetMessagesDictType = (props: GetMessagesDictPropsType) => {
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

  console.info('getMessagesDict [82]', getProfileActiveToUpdateProps)

  const successTrue_AuthTrue = {
    message: {
      greeting: Congratulations,
      line1: `"${capture}"`,
      line2: `${isCompletedWith} ${right} ${correctAnsweresFrom} ${total}`,
      line3: `${DICTIONARY.Keep_going[language]}!`,
    },
  }

  const successTrue_AuthFalse = {
    message: {
      greeting: Congratulations,
      line1: `"${capture}"`,
      line2: `${isCompletedWith} ${right} ${correctAnsweresFrom} ${total}`,
      line3: `${AuthoriseToReceiveCertificate}.`,
    },
  }

  const successFalse = {
    message: {
      greeting: YouWereCommittedToSuccess,
      line1: `"${capture}"`,
      line2: `${andThisTimeAnswered} ${right} ${question} ${from} ${total}`,
      line3: `${YouCanTryOnceAgain}!`,
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
