import React from 'react'

export type YouRailsAboutBodyComponentPropsType = {
  classAdded?: string | number | symbol | any
  storeStateSlice: any
  isDisplaying?: boolean // is element present on the page and visible/ displaying?
  isVisible?: boolean // element is present on the page, but if it is visible/ displaying?
}

export type YouRailsAboutBodyPropsType = Omit<
  YouRailsAboutBodyComponentPropsType,
  'storeStateSlice'
>

export type YouRailsAboutBodyPropsOutType = Record<string, any>

/**
 * @import import { YouRailsAboutBodyComponentPropsType, YouRailsAboutBodyPropsType, YouRailsAboutBodyPropsOutType, YouRailsAboutBodyComponentType, YouRailsAboutBodyType } from './YouRailsAboutBodyTypes'
 */
export interface YouRailsAboutBodyComponentType
  extends React.FunctionComponent<YouRailsAboutBodyComponentPropsType> {
  (props: YouRailsAboutBodyComponentPropsType): React.ReactElement
}

export type YouRailsAboutBodyType = React.FunctionComponent<YouRailsAboutBodyPropsType>
