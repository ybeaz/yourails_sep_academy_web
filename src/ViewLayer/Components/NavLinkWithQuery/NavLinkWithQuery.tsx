import React, { Fragment } from 'react'
import { NavLink } from 'react-router-dom'
import { withPropsYrl, withStoreStateSelectedYrl } from 'yourails_common'
import { getCreatedUrlSearchQuery } from 'yourails_common'
import { getParsedUrlQuery } from 'yourails_common'
import classNames from 'classnames'

import {
  NavLinkWithQueryComponentPropsType,
  NavLinkWithQueryPropsType,
  NavLinkWithQueryPropsOutType,
  NavLinkWithQueryComponentType,
  NavLinkWithQueryType,
} from './NavLinkWithQueryTypes'

/**
 * @description Component to render NavLinkWithQuery
 * @import import { NavLinkWithQuery, NavLinkWithQueryPropsType, NavLinkWithQueryPropsOutType, NavLinkWithQueryType } 
             from '../Components/NavLinkWithQuery/NavLinkWithQuery'
 */
const NavLinkWithQueryComponent: NavLinkWithQueryComponentType = (
  props: NavLinkWithQueryComponentPropsType
) => {
  const {
    storeStateSlice: {
      urlParamsQuery: { sendCc: sendCcState, sendBcc: sendBccState },
    },
    to,
    isDisplaying,
    isVisible,
    classAdded,
    ...restProps
  } = props

  const pathname = props.to?.pathname
  const searchIn = props.to?.search

  const { sendCc: sendCcQuery, sendBcc: sendBccQuery } = getParsedUrlQuery()

  const sendCc = sendCcState || sendCcQuery
  const sendBcc = sendBccState || sendBccQuery

  const search = getCreatedUrlSearchQuery({
    ...(searchIn ? searchIn : {}),
    sendCc,
    sendBcc,
  })

  const propsOut: NavLinkWithQueryPropsOutType = {
    navLinkProps: {
      className: classNames('NavLinkWithQuery', {
        [classAdded]: !!classAdded,
        NavLinkWithQuery_display_none: isDisplaying === false,
        NavLinkWithQuery_visible_none: isVisible === false,
      }),
      ...restProps,
      ...(to
        ? {
            to: {
              pathname,
              search,
            },
          }
        : {}),
      end: true,
    },
  }

  return <NavLink {...propsOut.navLinkProps} />
}

const storeStateSliceProps: string[] = ['urlParamsQuery']
const NavLinkWithQuery: NavLinkWithQueryType = withStoreStateSelectedYrl(
  storeStateSliceProps,
  React.memo(NavLinkWithQueryComponent)
)

export type { NavLinkWithQueryPropsType, NavLinkWithQueryType }
export { NavLinkWithQuery }
