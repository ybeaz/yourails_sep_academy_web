import React from 'react'
import { NavLinkProps } from 'react-router-dom'
import { RootStoreType } from '../../../Interfaces/'

export type NavLinkWithQueryComponentPropsType = Omit<NavLinkProps, 'to'> & {
  classAdded?: string | number | symbol | any
  storeStateSlice: {
    urlParamsQuery: RootStoreType['urlParamsQuery']
  }
  to?: {
    pathname?: string
    search?: Record<string, string | number>
    searchStr?: string
  }
  isExternal?: boolean // is the link external
  isDisabled?: boolean // is the button disabled
  isDisplaying?: boolean // is element present on the page and visible/ displaying?
  isVisible?: boolean // element is present on the page, but if it is visible/ displaying?
}

export type NavLinkWithQueryPropsType = Omit<NavLinkWithQueryComponentPropsType, 'storeStateSlice'>

export type NavLinkWithQueryPropsOutType = Record<string, any>

/**
 * @import import { NavLinkWithQueryComponentPropsType, NavLinkWithQueryPropsType, NavLinkWithQueryPropsOutType, NavLinkWithQueryComponentType, NavLinkWithQueryType } from './NavLinkWithQueryTypes'
 */
export interface NavLinkWithQueryComponentType
  extends React.FunctionComponent<NavLinkWithQueryComponentPropsType> {
  (props: NavLinkWithQueryComponentPropsType): React.ReactElement
}

export type NavLinkWithQueryType = React.FunctionComponent<NavLinkWithQueryPropsType>
