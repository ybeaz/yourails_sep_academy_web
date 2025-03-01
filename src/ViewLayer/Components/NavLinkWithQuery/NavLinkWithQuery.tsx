import React from 'react'
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
    isExternal,
    isDisabled,
    isDisplaying,
    isVisible,
    classAdded,
    ...restProps
  } = props

  const pathname = props.to?.pathname
  const searchIn = props.to?.search
  const searchStr = props.to?.searchStr

  const { sendCc: sendCcQuery, sendBcc: sendBccQuery } = getParsedUrlQuery()

  const sendCc = sendCcState || sendCcQuery
  const sendBcc = sendBccState || sendBccQuery

  const search = searchStr
    ? searchStr
    : getCreatedUrlSearchQuery({
        ...(searchIn ? searchIn : {}),
        sendCc,
        sendBcc,
      })

  const propsOut: NavLinkWithQueryPropsOutType = {
    navLinkProps: {
      className: classNames('NavLinkWithQuery', {
        [classAdded]: !!classAdded,
        NavLinkWithQuery_cursor_pointer: !isDisabled,
        NavLinkWithQuery_cursor_not_allowed: isDisabled,
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

  if (isExternal) return <a href={`${to?.pathname || ''}${search}`} {...propsOut.navLinkProps} />

  return <NavLink {...propsOut.navLinkProps} />
}

const storeStateSliceProps: string[] = ['urlParamsQuery']
const NavLinkWithQuery: NavLinkWithQueryType = withStoreStateSelectedYrl(
  storeStateSliceProps,
  React.memo(NavLinkWithQueryComponent)
)

export type { NavLinkWithQueryPropsType, NavLinkWithQueryType }
export { NavLinkWithQuery }
