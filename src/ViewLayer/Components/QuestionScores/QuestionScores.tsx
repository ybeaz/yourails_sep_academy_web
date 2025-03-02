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
import { handleEvents as handleEventsIn } from '../../../DataLayer/index.handleEvents'
import { FormInputNamesWithButtons } from '../FormInputNamesWithButtons/FormInputNamesWithButtons'
import { withStoreStateSelectedYrl, withPropsYrl, ButtonYrl } from 'yourails_common'
import { getQuestionScoresCase } from './getQuestionScoresCase'
import { QuestionsScoresCaseEnumType } from 'yourails_common'
import {
  getQuestionScoresPropsOut,
  GetQuestionScoresPropsOutParamsType,
  GetQuestionScoresPropsOutResType,
} from './getQuestionScoresPropsOut'
import { getComponentsList } from '../../Hooks/getComponentsList'

import {
  QuestionScoresComponentPropsType,
  QuestionScoresPropsType,
  QuestionScoresComponentType,
  QuestionScoresType,
} from './QuestionScoresTypes'

/**
 * @description Component to render QuestionScores
 * @import import { QuestionScores, QuestionScoresPropsType, QuestionScoresType } 
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

  let scenarioCase: QuestionsScoresCaseEnumType = getQuestionScoresCase({
    result,
    sub,
    nameFirst,
    nameLast,
  })

  useEffect(() => {
    stopVideoHandler && stopVideoHandler({}, {})
    if (
      scenarioCase === QuestionsScoresCaseEnumType.successTrue_AuthTrue_NamesTrue ||
      scenarioCase === QuestionsScoresCaseEnumType.successTrue_AuthTrue_NamesFalse ||
      scenarioCase === QuestionsScoresCaseEnumType.successTrue_AuthFalse_NamesFalse
    ) {
      if (scenarioCase === QuestionsScoresCaseEnumType.successTrue_AuthTrue_NamesFalse) {
        handleEvents(
          {},
          { typeEvent: 'SET_EDIT_NAME_VISIBILITY', data: { isEditNameVisible: true } }
        )
      } else {
        handleEvents(
          {},
          { typeEvent: 'SET_EDIT_NAME_VISIBILITY', data: { isEditNameVisible: false } }
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

  const componentsListProps: GetQuestionScoresPropsOutResType[] = getQuestionScoresPropsOut(
    getQuestionScoresPropsOutProps
  )

  console.info('QuestionScores [145]', { componentsListProps })

  return <div className='QuestionScores'>{getComponentsList(componentsListProps)}</div>
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

export type { QuestionScoresPropsType, QuestionScoresComponentType, QuestionScoresType }
