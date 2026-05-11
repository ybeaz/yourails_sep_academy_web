import React from 'react'

export type YouRailsHomeComponentPropsType = {
  classAdded?: string | number | symbol | any
  storeStateSlice: any
  isDisplaying?: boolean // is element present on the page and visible/ displaying?
  isVisible?: boolean // element is present on the page, but if it is visible/ displaying?
}

export type YouRailsHomePropsType = Omit<YouRailsHomeComponentPropsType, 'storeStateSlice'>

export type YouRailsHomePropsOutType = Record<string, any>

/**
 * @import import { YouRailsHomeComponentPropsType, YouRailsHomePropsType, YouRailsHomePropsOutType, YouRailsHomeComponentType, YouRailsHomeType } from './YouRailsHomeTypes'
 */
export interface YouRailsHomeComponentType
  extends React.FunctionComponent<YouRailsHomeComponentPropsType> {
  (props: YouRailsHomeComponentPropsType): React.ReactElement
}

export type YouRailsHomeType = React.FunctionComponent<YouRailsHomePropsType>
