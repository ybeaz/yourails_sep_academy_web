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
  right: number
  total: number
  capture: string
  isEditNameVisible: RootStoreType['componentsState']['isEditNameVisible']
  pathNextTask: string | undefined
}

export type GetMessagesDictResType = {
  message: { title: string; line1: string; line2: string; line3: string }
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
  const { scenarioCase, language, right, total, capture, isEditNameVisible, pathNextTask } = props

  const question = getQuesionString(language, right)

  const AuthoriseToReceiveCertificate = DICTIONARY.Authorise_to_receive_certificate[language]
  const correctAnsweresFrom = DICTIONARY.correctAnsweresFrom[language]
  const isCompletedWith = DICTIONARY.is_completed_with[language]
  const Congratulations = DICTIONARY.Congratulations[language]

  const YouCanTryOnceAgain = DICTIONARY.YouCanTryOnceAgain[language]
  const from = DICTIONARY.from[language]
  const andThisTimeAnswered = DICTIONARY.andThisTimeAnswered[language]
  const YouWereCommittedToSuccess = DICTIONARY.YouWereCommittedToSuccess[language]

  const successTrue_AuthTrue_NamesTrue = {
    message: {
      title: Congratulations,
      line1: `"${capture}"`,
      line2: `${isCompletedWith} ${right} ${correctAnsweresFrom} ${total}.`,
      line3: isEditNameVisible
        ? `${DICTIONARY.Add_edit_name[language]}.`
        : pathNextTask
          ? `${DICTIONARY.Keep_going[language]}!`
          : `${DICTIONARY.You_have_finished_the_mission_successfully[language]}!`,
    },
  }

  const successTrue_AuthTrue_NamesFalse = {
    message: {
      title: Congratulations,
      line1: `"${capture}"`,
      line2: `${isCompletedWith} ${right} ${correctAnsweresFrom} ${total}.`,
      line3: `${DICTIONARY.Add_edit_name[language]}.`,
    },
  }

  const successTrue_AuthFalse = {
    message: {
      title: Congratulations,
      line1: `"${capture}"`,
      line2: `${isCompletedWith} ${right} ${correctAnsweresFrom} ${total}.`,
      line3: `${AuthoriseToReceiveCertificate}.`,
    },
  }

  const successFalse = {
    message: {
      title: YouWereCommittedToSuccess,
      line1: `"${capture}"`,
      line2: `${andThisTimeAnswered} ${right} ${question} ${from} ${total}.`,
      line3: `${YouCanTryOnceAgain}!`,
    },
  }

  const scenarios: ScenariousType = {
    successTrue_AuthTrue_NamesTrue,
    successTrue_AuthTrue_NamesFalse,
    successTrue_AuthFalse_NamesFalse: successTrue_AuthFalse,
    successFalse_AuthTrue_NamesTrue: successFalse,
    successFalse_AuthTrue_NamesFalse: successFalse,
    successFalse_AuthFalse_NamesFalse: successFalse,
  }

  return scenarios[scenarioCase]
}
