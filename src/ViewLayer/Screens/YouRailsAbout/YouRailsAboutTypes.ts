import React from 'react'

export type YouRailsAboutComponentPropsType = {
  classAdded?: string | number | symbol | any
  storeStateSlice: any
  isDisplaying?: boolean // is element present on the page and visible/ displaying?
  isVisible?: boolean // element is present on the page, but if it is visible/ displaying?
}

export type YouRailsAboutPropsType = Omit<YouRailsAboutComponentPropsType, 'storeStateSlice'>

export type YouRailsAboutPropsOutType = Record<string, any>

/**
 * @import import { YouRailsAboutComponentPropsType, YouRailsAboutPropsType, YouRailsAboutPropsOutType, YouRailsAboutComponentType, YouRailsAboutType } from './YouRailsAboutTypes'
 */
export interface YouRailsAboutComponentType
  extends React.FunctionComponent<YouRailsAboutComponentPropsType> {
  (props: YouRailsAboutComponentPropsType): React.ReactElement
}

export type YouRailsAboutType = React.FunctionComponent<YouRailsAboutPropsType>
