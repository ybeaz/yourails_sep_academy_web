import React, { ReactElement, useMemo } from 'react'
import { nanoid } from 'nanoid'
import { DICTIONARY } from '../../../Constants/dictionary.const'
import { QuestionType } from '../../../@types/GraphqlTypes'
import {
  getActiveCourseData,
  getQuesionString,
  getArrayElemPickedRandomly,
  getButtonsClassString,
  getChunkedArray,
} from '../../../Shared/'
import { CheckRadioGroup } from '../CheckRadioGroup'
import { ButtonYrl, withStoreStateSelectedYrl } from '../../ComponentsLibrary/'
import { handleEvents } from '../../../DataLayer/index.handleEvents'

import { getClasses } from '../../../Shared/getClasses'

import {
  CarouselQuestionsComponentPropsType,
  CarouselQuestionsPropsType,
  CarouselQuestionsPropsOutType,
  CarouselQuestionsComponentType,
  CarouselQuestionsType,
} from './CarouselQuestionsTypes'

/**
 * @description Component to render CarouselQuestions
 * @import import { CarouselQuestions, CarouselQuestionsPropsType, CarouselQuestionsPropsOutType, CarouselQuestionsType } 
             from '../Components/CarouselQuestions/CarouselQuestions'
 */
const CarouselQuestionsComponent: CarouselQuestionsComponentType = (
  props: CarouselQuestionsComponentPropsType
) => {
  const {
    storeStateSlice: {
      moduleIDActive,
      numberQuestionsInSlide,
      questionsSlideNumber,
      isCourseStarted,
      courses,
      language,
    },
  } = props

  const {
    courseActive: { capture: courseCapture, courseID },
    moduleActive: { moduleID, contentID, questionNumber },
    questionsActive,
  } = getActiveCourseData(courses, moduleIDActive)

  const questionsPickedRandomlyAndFrozen = useMemo(
    () =>
      getArrayElemPickedRandomly({
        inputArray: questionsActive,
        numberToPick: questionNumber || 6,
      }),
    [moduleID]
  )

  const questionsIDsPicked = questionsPickedRandomlyAndFrozen.map(
    (question: QuestionType) => question.questionID
  )

  const questionsPickedRandomly = questionsActive.filter((question: any) =>
    questionsIDsPicked.includes(question?.questionID)
  )

  const questionsChunked = getChunkedArray(
    questionsPickedRandomly,
    numberQuestionsInSlide
  )

  const getDots: Function = (questions: any[]): ReactElement => {
    const dotsJSX = questions.map((question, index) => {
      const { questionID } = question
      const classNameToggleHighlight =
        index === questionsSlideNumber ? 'active' : ''
      return (
        <span
          key={`${questionID}-${index}`}
          className={`_dot ${classNameToggleHighlight}`}
          onClick={event =>
            handleEvents(event, {
              typeEvent: 'SET_QUESTION_SLIDE',
              data: index,
            })
          }
        ></span>
      )
    })

    return <div className='__dots'>{dotsJSX}</div>
  }

  const getSlidesChunk: Function = (questions: any[]): ReactElement[] => {
    return questions.map(question => {
      const { questionID } = question
      const checkRadioGroupProps = { ...question }
      return (
        <div key={questionID}>
          <CheckRadioGroup {...checkRadioGroupProps} />
        </div>
      )
    })
  }

  const getSlides: Function = (questionsChunked2: any[]): ReactElement => {
    const questionsJSX = questionsChunked2.map((questions, index) => {
      const classNameToggleShow = index === questionsSlideNumber ? '_show' : ''
      return (
        /* Adding a unique key here causes blinking, because the content is changing every time */
        <div key={`${index}`} className={`_slides fade ${classNameToggleShow}`}>
          {getSlidesChunk(questions)}
        </div>
      )
    })

    return <div className='__slideshow'>{questionsJSX}</div>
  }

  const {
    buttonsClassString,
    isButtonSlideStart,
    isButtonSlideBackward,
    isButtonSlideForward,
    isButtonToCertificate,
    isButtonBlockProps,
  } = getButtonsClassString(
    questionsSlideNumber,
    questionsChunked.length,
    questionsPickedRandomly,
    questionsChunked,
    isCourseStarted
  )

  const CertificateDash = DICTIONARY['Certificate'][language]
  const questionStr = getQuesionString(language, questionsActive.length)

  const youCanCheckYourUnderstanding =
    DICTIONARY.youCanCheckYourUnderstanding[language]

  const propsOut: CarouselQuestionsPropsOutType = {
    buttonStartProps: {
      captureLeft: (
        <div>
          <div>{`${CertificateDash}\u00A0\u00A0\u00A0-\u00A0\u00A0\u00A0${questionNumber} ${questionStr}`}</div>
          {/* <div>{`${CertificateDash} ${duration} ${units} /`}</div>
          <div>{`${questionsActive.length} ${questionStr}`}</div> */}
        </div>
      ),
      icon: 'MdForward',
      classAdded: 'Button_startModule',
      action: {
        typeEvent: 'TOGGLE_START_COURSE',
        data: {
          isStarting: true,
          courseCapture,
          courseID,
          moduleID,
          contentID,
        },
      },
      isDisplaying: isButtonSlideStart,
      tooltipText: youCanCheckYourUnderstanding,
      tooltipPosition: 'bottom',
      isTooltipVisibleForced: true,
    },
    buttonSlideBackwardProps: {
      icon: 'MdForward',
      classAdded: 'Button_MdBackward2',
      action: {
        typeEvent: 'PLUS_QUESTION_SLIDE',
        data: { step: -1 },
      },
      isDisplaying: isButtonSlideBackward,
    },
    buttonSlideForwardProps: {
      icon: 'MdForward',
      classAdded: 'Button_MdForward2',
      action: {
        typeEvent: 'PLUS_QUESTION_SLIDE',
        data: { step: 1 },
      },
      isDisplaying: isButtonSlideForward,
    },
    buttonToCertificateProps: {
      icon: 'MdForward',
      icon2: 'HiOutlineAcademicCap',
      classAdded: 'Button_MdForward',
      action: {
        typeEvent: 'SET_MODAL_FRAMES',
        data: [
          {
            childName: 'QuestionScores',
            isActive: true,
            childProps: { questionsIDsPicked },
          },
        ],
      },
      isDisplaying: isButtonToCertificate,
    },
    buttonBlockProps: {
      icon: 'MdForward',
      classAdded: 'Button_downLeft',
      action: {
        typeEvent: 'TOGGLE_START_COURSE',
        data: {
          isStarting: false,
          courseCapture,
          courseID,
          moduleID,
          contentID,
        },
      },
      isDisplaying: isButtonBlockProps,
    },
  }

  return (
    <div className={getClasses('CarouselQuestions', [buttonsClassString])}>
      {questionsActive.length ? getDots(questionsChunked) : null}
      <div className={`__buttons`}>
        <div className='_backward'>
          <ButtonYrl {...propsOut.buttonSlideBackwardProps} />
        </div>
        <div className='_forward'>
          <ButtonYrl {...propsOut.buttonSlideForwardProps} />
        </div>
        <div className='_toCertificate'>
          <ButtonYrl {...propsOut.buttonToCertificateProps} />
        </div>
        <div className='_downLeft'>
          <ButtonYrl {...propsOut.buttonBlockProps} />
        </div>
        <div className='_startModule'>
          <ButtonYrl {...propsOut.buttonStartProps} />
        </div>
      </div>
      {isCourseStarted && getSlides(questionsChunked)}
    </div>
  )
}

const storeStateSliceProps: string[] = [
  'moduleIDActive',
  'numberQuestionsInSlide',
  'questionsSlideNumber',
  'isCourseStarted',
  'courses',
  'language',
]
export const CarouselQuestions = withStoreStateSelectedYrl(
  storeStateSliceProps,
  React.memo(CarouselQuestionsComponent)
)

export type {
  CarouselQuestionsPropsType,
  CarouselQuestionsPropsOutType,
  CarouselQuestionsComponentType,
  CarouselQuestionsType,
}
