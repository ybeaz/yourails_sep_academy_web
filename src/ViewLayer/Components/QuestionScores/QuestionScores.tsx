import React, { useEffect, ReactElement } from 'react'
import { useNavigate } from 'react-router-dom'
import { Tooltip } from 'antd'

import { NavLinkWithQuery } from '../../Components/NavLinkWithQuery/NavLinkWithQuery'
import { isParsableFloat } from 'yourails_common'
import { useIsFirstRenderYrl } from 'yourails_common'
import { getParsedUrlQuery } from 'yourails_common'
import { getParsedUrlQueryBrowserApi } from 'yourails_common'
import { getAnswersChecked2, GetAnswersChecked2OutType } from 'yourails_common'
import { getModuleByModuleID } from 'yourails_common'
import { ScenarioCaseEnumType } from 'yourails_common'
import { handleEvents as handleEventsIn } from '../../../DataLayer/index.handleEvents'
import { FormInputNamesWithButtons } from '../FormInputNamesWithButtons/FormInputNamesWithButtons'
import { withStoreStateSelectedYrl, withPropsYrl, ButtonYrl } from 'yourails_common'
import {
  getQuestionScoresPropsOut,
  GetQuestionScoresPropsOutParamsType,
} from './getQuestionScoresPropsOut'

import {
  QuestionScoresComponentPropsType,
  QuestionScoresPropsType,
  QuestionScoresPropsOutType,
  QuestionScoresComponentType,
  QuestionScoresType,
} from './QuestionScoresTypes'

/**
 * @description Component to render QuestionScores
 * @import import { QuestionScores, QuestionScoresPropsType, QuestionScoresPropsOutType, QuestionScoresType } 
             from '../Components/QuestionScores/QuestionScores'
 */
const QuestionScoresComponent: QuestionScoresComponentType = (
  props: QuestionScoresComponentPropsType
) => {
  const {
    stopVideoHandler,
    storeStateSlice: {
      language,
      moduleIDActive,
      modules,
      nameFirst: nameFirst,
      nameMiddle,
      nameLast,
      sub,
      isEditNameVisible,
      profiles,
    },
    handleEvents,
  } = props

  // const nameFirst = ''

  const isFirstRender = useIsFirstRenderYrl()
  const navigate = useNavigate()

  const moduleActive = getModuleByModuleID(
    {
      moduleID: moduleIDActive || '',
      modules,
    },
    { parentFunction: 'QuestionScoresComponent' }
  )

  const { passRate, questions: questionsActive } = moduleActive

  const { rp, pr } = getParsedUrlQuery()
  let passRateIn = rp || pr
  passRateIn = passRateIn && isParsableFloat(passRateIn) && parseFloat(passRateIn)
  passRateIn = passRateIn ? passRateIn : passRate
  passRateIn = passRateIn < 0.5 ? 0.5 : passRateIn

  const score: GetAnswersChecked2OutType = getAnswersChecked2(questionsActive, passRateIn)
  const { result } = score

  let scenarioCase: ScenarioCaseEnumType = result || ScenarioCaseEnumType.failure
  if (!sub && result === ScenarioCaseEnumType.success) {
    scenarioCase = ScenarioCaseEnumType.successNoAuth
  }

  useEffect(() => {
    stopVideoHandler && stopVideoHandler({}, {})
    if (
      scenarioCase === ScenarioCaseEnumType.success ||
      scenarioCase === ScenarioCaseEnumType.successNoAuth
    ) {
      if ((!nameFirst || !nameLast) && sub && profiles.length) {
        handleEvents(
          {},
          { typeEvent: 'SET_EDIT_NAME_VISIBILITY', data: { isEditNameVisible: true } }
        )
      }

      if (isFirstRender) handleEvents({}, { typeEvent: 'TOGGLE_IS_CONFETTI', data: true })

      setTimeout(() => handleEvents({}, { typeEvent: 'TOGGLE_IS_CONFETTI', data: false }), 5000)
    }
  }, [
    JSON.stringify({
      sub,
      profiles,
      scenarioCase,
    }),
  ])

  const queryUrl = getParsedUrlQueryBrowserApi()

  const getQuestionScoresPropsOutProps: GetQuestionScoresPropsOutParamsType = {
    modules,
    moduleActive,
    queryUrl,
    scenarioCase,
    isEditNameVisible,
    language,
    nameFirst,
    nameMiddle,
    nameLast,
    score,
    sub,
    profiles,
    handleEvents,
    navigate,
  }

  const propsOut: QuestionScoresPropsOutType = getQuestionScoresPropsOut(
    getQuestionScoresPropsOutProps
  )

  console.info('QuestionScores [123]', {
    propsOut,
    nameFirst,
    nameLast,
    isEditNameVisible,
    modules,
  })

  return (
    <div className='QuestionScores'>
      <div className='_text'>
        <div className='_greeting'>{propsOut.message.greeting}</div>
        <p>{propsOut.message.line1}</p>
        <p>{propsOut.message.line2}</p>
        <p>{propsOut.message.line3}</p>
      </div>

      <div className='_buttons'>
        <NavLinkWithQuery {...propsOut.navLinkNextTaskProps}>
          <ButtonYrl {...propsOut.buttonNextTaskProps} />
        </NavLinkWithQuery>
        <ButtonYrl {...propsOut.buttonCreditProps} />
        <ButtonYrl {...propsOut.buttonIsEditNameVisibleProps} />
        <FormInputNamesWithButtons {...propsOut.formInputNamesWithButtonsProps} />
        <NavLinkWithQuery {...propsOut.navLinkBackToTopicProps}>
          <ButtonYrl {...propsOut.buttonBackToTopicProps} />
        </NavLinkWithQuery>
        <NavLinkWithQuery {...propsOut.navLinkAchievementsProps}>
          <ButtonYrl {...propsOut.buttonAchievementsProps} />
        </NavLinkWithQuery>
      </div>
    </div>
  )
}

const storeStateSliceProps: string[] = [
  'language',
  'moduleIDActive',
  'modules',
  'nameFirst',
  'nameMiddle',
  'nameLast',
  'sub',
  'profiles',
  'isEditNameVisible',
]

export const QuestionScores = React.memo(
  withPropsYrl({ handleEvents: handleEventsIn, comp: 'QuestionScores' })(
    withStoreStateSelectedYrl(storeStateSliceProps, QuestionScoresComponent)
  )
)

export type {
  QuestionScoresPropsType,
  QuestionScoresPropsOutType,
  QuestionScoresComponentType,
  QuestionScoresType,
}
