import React from 'react'
import { nanoid } from 'nanoid'
import { ButtonYrlPropsType } from 'yourails_common'
import { ButtonYrl } from 'yourails_common'
import {
  NavLinkWithQuery,
  NavLinkWithQueryPropsType,
} from '../Components/NavLinkWithQuery/NavLinkWithQuery'

type GetNavLinksButtonsItemParamType = {
  navLinkProps?: NavLinkWithQueryPropsType
  buttonYrlProps: ButtonYrlPropsType
}

type GetNavLinksButtonsItemsOptionsType = { funcParent?: string }

type GetNavLinksButtonsItemsResType = JSX.Element

interface GetNavLinksButtonsItemsType {
  (params: GetNavLinksButtonsItemParamType[]): GetNavLinksButtonsItemsResType[]
}

/**
 * @description Function to getNavLinksButtonsItems
 * @import import { getNavLinksButtonsItems } from './getNavLinksButtonsItems'
 */

const getNavLinksButtonsItems: GetNavLinksButtonsItemsType = (
  navLinksButtonsItemsIn: GetNavLinksButtonsItemParamType[]
): GetNavLinksButtonsItemsResType[] => {
  const navLinksButtonsItems = navLinksButtonsItemsIn.map(
    (item: GetNavLinksButtonsItemParamType) => ({ id: nanoid(), ...item })
  )

  return navLinksButtonsItems.map(({ id, navLinkProps, buttonYrlProps }, index) => {
    return navLinkProps ? (
      <NavLinkWithQuery
        key={id}
        {...navLinkProps}
        classAdded={navLinkProps?.classAdded ? `${navLinkProps.classAdded} _item` : '_item'}
      >
        <ButtonYrl {...buttonYrlProps} />
      </NavLinkWithQuery>
    ) : (
      <ButtonYrl key={id} {...buttonYrlProps} classAdded={`${buttonYrlProps.classAdded} _item`} />
    )
  })
}

export { getNavLinksButtonsItems }
export type {
  GetNavLinksButtonsItemParamType,
  GetNavLinksButtonsItemsOptionsType,
  GetNavLinksButtonsItemsResType,
  GetNavLinksButtonsItemsType,
}
