import React from 'react'
import { QuestionType } from 'yourails_common'
import { RootStoreType } from '../../../Interfaces/RootStoreType'

export type QuestionsCapturesComponentPropsType = {
  classAdded?: string | number | symbol | any
  storeStateSlice: any
  isDisplaying?: boolean // is element present on the page and visible/ displaying?
  isVisible?: boolean // element is present on the page, but if it is visible/ displaying?
  language: RootStoreType['language']
  questions: QuestionType[]
}

export type QuestionsCapturesPropsType = Omit<
  QuestionsCapturesComponentPropsType,
  'storeStateSlice'
>

export type QuestionsCapturesPropsOutType = Record<string, any>

/**
 * @import import { QuestionsCapturesComponentPropsType, QuestionsCapturesPropsType, QuestionsCapturesPropsOutType, QuestionsCapturesComponentType, QuestionsCapturesType } from './QuestionsCapturesTypes'
 */
export interface QuestionsCapturesComponentType
  extends React.FunctionComponent<QuestionsCapturesComponentPropsType> {
  (props: QuestionsCapturesComponentPropsType): React.ReactElement
}

export type QuestionsCapturesType = React.FunctionComponent<QuestionsCapturesPropsType>
