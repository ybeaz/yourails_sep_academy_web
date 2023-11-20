import React, { useEffect, ReactElement } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { isParsableFloat } from '../../Shared/isParsableFloat'
import { getParsedUrlQuery } from '../../Shared/getParsedUrlQuery'
import { getQuesionString } from '../../Shared/getQuesionString'
import { DICTIONARY } from '../../Constants/dictionary.const'
import { getQuestionsWrongAnswered } from '../../Shared/getQuestionsWrongAnswered'
import {
  getAnswersChecked2,
  GetAnswersChecked2OutType,
} from '../../Shared/getAnswersChecked2'
import { getActiveCourseData } from '../../Shared/getActiveCourseData'
import { handleEvents } from '../../DataLayer/index.handleEvents'
import { RootStoreType } from '../../Interfaces/RootStoreType'
import { InputYrl } from '../ComponentsLibrary/InputYrl/InputYrl'
import { ButtonYrl } from '../ComponentsLibrary/ButtonYrl/ButtonYrl'

export const QuestionScores: React.FunctionComponent<any> = props => {
  let navigate = useNavigate()

  const { stopVideoHandler } = props
  const store = useSelector((store2: RootStoreType) => store2)
  const {
    language,
    documents,
    scorm: { moduleIDActive },
    courses,
    componentsState: { isDocumentAdded },
    forms: {
      user: { userNameFirst, userNameMiddle, userNameLast },
    },
  } = store

  const documentsLen = documents.length
  const pathName = documentsLen && documents[documentsLen - 1]?.pathName

  const {
    courseActive: {
      passRate,
      courseID,
      capture: courseCapture,
      description,
      meta,
    },
    moduleActive,
    questionsActive,
  } = getActiveCourseData(courses, moduleIDActive)

  const { rp, pr } = getParsedUrlQuery()
  let passRateIn = rp || pr
  passRateIn =
    passRateIn && isParsableFloat(passRateIn) && parseFloat(passRateIn)
  passRateIn = passRateIn ? passRateIn : passRate
  passRateIn = passRateIn < 0.5 ? 0.5 : passRateIn

  const score: GetAnswersChecked2OutType = getAnswersChecked2(
    questionsActive,
    passRateIn
  )
  const questionsWrongAnswered = getQuestionsWrongAnswered(questionsActive)
  const { total, right, wrong, result } = score
  const { moduleID, contentID } = moduleActive

  useEffect(() => {
    stopVideoHandler && stopVideoHandler({}, {})
  }, [])

  useEffect(() => {
    if (pathName && isDocumentAdded === true) {
      handleEvents({}, { typeEvent: 'TOGGLE_IS_DOCUMENT_ADDED', data: false })
      navigate(pathName)
    }
  }, [pathName])

  const inputFirstNameProps = {
    classAdded: 'Input_name',
    type: 'text',
    placeholder: 'first name...',
    typeEvent: 'ONCHANGE_FIRST_NAME_MODAL',
    storeFormProp: 'userNameFirst',
  }

  const inputMiddleNameProps = {
    classAdded: 'Input_name',
    type: 'text',
    placeholder: 'second name...',
    typeEvent: 'ONCHANGE_MIDDLE_NAME_MODAL',
    storeFormProp: 'userNameMiddle',
  }

  const inputLastNameProps = {
    classAdded: 'Input_name',
    type: 'text',
    placeholder: 'last name...',
    typeEvent: 'ONCHANGE_LAST_NAME_MODAL',
    storeFormProp: 'userNameLast',
  }

  const ToReceiveCertificate = DICTIONARY.ToReceiveCertificate[language]
  const correctAnsweresFrom = DICTIONARY.correctAnsweresFrom[language]
  const andPassedTheTestWith = DICTIONARY.andPassedTheTestWith[language]
  const YouCompletedTheCourse = DICTIONARY.YouCompletedTheCourse[language]
  const Congratulations = DICTIONARY.Congratulations[language]

  const lastNameLabel = DICTIONARY.userNameLast[language]
  const firstNameLabel = DICTIONARY.userNameFirst[language]
  const middleNameLabel = DICTIONARY.userNameMiddle[language]

  const QuestionsWithIncorrectAnswers =
    DICTIONARY.QuestionsWithIncorrectAnswers[language]
  const YouCanTryOnceAgain = DICTIONARY.YouCanTryOnceAgain[language]
  const andReceiveTheCertificate = DICTIONARY.andReceiveTheCertificate[language]
  const ThisIsNotEnough = DICTIONARY.ThisIsNotEnough[language]
  const from = DICTIONARY.from[language]
  const andThisTimeAnswered = DICTIONARY.andThisTimeAnswered[language]
  const YouWereCommittedToSuccess =
    DICTIONARY.YouWereCommittedToSuccess[language]

  const question = getQuesionString(language, right)

  let scenario: Record<string, any> = {
    success: {
      message: (
        <>
          <div className='_greet'>{Congratulations}</div>
          <p>{YouCompletedTheCourse}</p>
          <p>"{courseCapture}"</p>
          <p>
            {andPassedTheTestWith} {right} {correctAnsweresFrom} {total}
          </p>
          <p>{ToReceiveCertificate}</p>
        </>
      ),
      buttonForwardProps: {
        icon: 'MdForward',
        classAdded: 'Button_MdForward2',
        action: {
          typeEvent: 'ADD_DOCUMENT',
          data: {
            screenType: 'Certificate',
            userNameFirst,
            userNameMiddle,
            userNameLast,
            meta,
            capture: courseCapture,
            description,
            courseID,
            moduleID,
            contentID,
          },
        },
      },
    },
    failure: {
      message: (
        <>
          <div className='_greet'>{YouWereCommittedToSuccess}</div>
          <p>
            {andThisTimeAnswered} {right} {question} {from} {total}.
          </p>
          <p>{ThisIsNotEnough}</p>
          <p>{andReceiveTheCertificate}</p>
          <p>{YouCanTryOnceAgain}</p>
        </>
      ),
      buttonForwardProps: {
        icon: 'MdForward',
        classAdded: 'Button_MdForward2',
        action: {
          typeEvent: 'CLOSE_MODAL_GET_SCORES',
        },
      },
    },
  }[result]

  // REMOVE after debugging
  const dataForButton = {
    screenType: 'Certificate',
    userNameFirst,
    userNameMiddle,
    userNameLast,
    meta,
    capture: courseCapture,
    description,
    courseID,
    moduleID,
    contentID,
  }

  // console.info('QuestionScores [192]', { dataForButton })

  // const scenario2 = {
  scenario = {
    message: (
      <>
        <div className='_greet'>{Congratulations}</div>
        <p>{YouCompletedTheCourse}</p>
        <p>"{courseCapture}"</p>
        <p>
          {andPassedTheTestWith} {right} {correctAnsweresFrom} {total}
        </p>
        <p>{ToReceiveCertificate}</p>
      </>
    ),
    buttonForwardProps: {
      icon: 'MdForward',
      classAdded: 'Button_MdForward2',
      action: {
        typeEvent: 'ADD_DOCUMENT',
        data: dataForButton,
      },
    },
  }

  const getRendedQuestionsWrongAnswered: Function = (
    questions: any[]
  ): ReactElement => {
    return (
      <ul className='_ul'>
        {questions.map(question => {
          const { capture: questionCapture } = question

          return <li className='_li'>{questionCapture}</li>
        })}
      </ul>
    )
  }

  return (
    <div className='QuestionScores'>
      {' '}
      <div className='_text'>{scenario.message}</div>
      <form className='_form'>
        {result === 'success' ? (
          <>
            <div className='_group'>
              <label className='_label'>{lastNameLabel}*</label>
              <InputYrl {...inputLastNameProps} />
            </div>
            <div className='_group'>
              <label className='_label'>{firstNameLabel}*</label>
              <InputYrl {...inputFirstNameProps} />
            </div>
            <div className='_group'>
              <label className='_label'>{middleNameLabel}</label>
              <InputYrl {...inputMiddleNameProps} />
            </div>
          </>
        ) : null}
        <div className='_buttons'>
          {/* <ButtonYrl {...buttonCancelProps} /> */}
          <ButtonYrl {...scenario.buttonForwardProps} />
        </div>
      </form>
      {result === 'failure' ? (
        <div className='_qwa'>
          <div className='_capture'>{QuestionsWithIncorrectAnswers}</div>
          {getRendedQuestionsWrongAnswered(questionsWrongAnswered)}
        </div>
      ) : null}
    </div>
  )
}
