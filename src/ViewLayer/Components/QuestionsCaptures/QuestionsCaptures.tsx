import React from 'react'

import classNames from 'classnames'
import { DICTIONARY } from 'yourails_common'
import { withPropsYrl, withStoreStateSelectedYrl } from 'yourails_common'
import {
  QuestionsCapturesComponentPropsType,
  QuestionsCapturesPropsType,
  QuestionsCapturesPropsOutType,
  QuestionsCapturesComponentType,
  QuestionsCapturesType,
} from './QuestionsCapturesTypes'

/**
 * @description Component to render QuestionsCaptures
 * @import import { QuestionsCaptures, QuestionsCapturesPropsType, QuestionsCapturesPropsOutType, QuestionsCapturesType } 
             from '../Components/QuestionsCaptures/QuestionsCaptures'
 */
const QuestionsCapturesComponent: QuestionsCapturesComponentType = (
  props: QuestionsCapturesComponentPropsType
) => {
  const { classAdded, isDisplaying, isVisible, language, questions } = props

  const propsOut: QuestionsCapturesPropsOutType = {}

  return (
    <div
      className={classNames('QuestionsCaptures', {
        [classAdded]: !!classAdded,
        QuestionsCaptures_display_none: isDisplaying === false,
        QuestionsCaptures_visible_none: isVisible === false,
      })}
    >
      <div className='_capture'>{DICTIONARY.QuestionsWithIncorrectAnswers[language]}</div>
      <ul className='_ul'>
        {questions.map(question => {
          const { questionID, capture: questionCapture } = question

          return (
            <li key={questionID} className='_li'>
              {questionCapture}
            </li>
          )
        })}
      </ul>
    </div>
  )
}

const QuestionsCaptures: QuestionsCapturesType = React.memo(QuestionsCapturesComponent)

export type { QuestionsCapturesPropsType, QuestionsCapturesType }
export { QuestionsCaptures }
