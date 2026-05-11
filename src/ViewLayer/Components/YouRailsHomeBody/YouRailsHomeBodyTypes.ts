import React from 'react'

export type YouRailsHomeBodyComponentPropsType = {
  classAdded?: string | number | symbol | any
  storeStateSlice: any
  isDisplaying?: boolean // is element present on the page and visible/ displaying?
  isVisible?: boolean // element is present on the page, but if it is visible/ displaying?
}

export type YouRailsHomeBodyPropsType = Omit<YouRailsHomeBodyComponentPropsType, 'storeStateSlice'>

export type YouRailsHomeBodyPropsOutType = Record<string, any>

/**
 * @import import { YouRailsHomeBodyComponentPropsType, YouRailsHomeBodyPropsType, YouRailsHomeBodyPropsOutType, YouRailsHomeBodyComponentType, YouRailsHomeBodyType } from './YouRailsHomeBodyTypes'
 */
export interface YouRailsHomeBodyComponentType
  extends React.FunctionComponent<YouRailsHomeBodyComponentPropsType> {
  (props: YouRailsHomeBodyComponentPropsType): React.ReactElement
}

export type YouRailsHomeBodyType = React.FunctionComponent<YouRailsHomeBodyPropsType>
