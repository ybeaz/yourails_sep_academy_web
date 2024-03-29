import React from 'react'

import { ArticleType } from '../../../@types/ArticleMockType'
import { TextStructuredPropsType } from '../TextStructured/TextStructured'

export type ArticlePresentBodyComponentPropsType = {
  classAdded?: string | string[] | Record<string, string | string[]>
  article: ArticleType
}

export type ArticlePresentBodyPropsType = Omit<
  ArticlePresentBodyComponentPropsType,
  'storeStateSlice'
>

export type ArticlePresentBodyPropsOutType = {
  textStructuredProps: TextStructuredPropsType
}

/**
 * @import import { ArticlePresentBodyComponentPropsType, ArticlePresentBodyPropsType, ArticlePresentBodyPropsOutType, ArticlePresentBodyComponentType, ArticlePresentBodyType } from './ArticlePresentBodyTypes'
 */
export interface ArticlePresentBodyComponentType
  extends React.FunctionComponent<ArticlePresentBodyComponentPropsType> {
  (props: ArticlePresentBodyComponentPropsType): React.ReactElement
}

export type ArticlePresentBodyType =
  React.FunctionComponent<ArticlePresentBodyPropsType>
