import React from 'react'
import { nanoid } from 'nanoid'
import { ButtonYrlPropsType } from 'yourails_common'
import { ButtonYrl } from 'yourails_common'
import {
  NavLinkWithQuery,
  NavLinkWithQueryPropsType,
} from '../Components/NavLinkWithQuery/NavLinkWithQuery'
import { FormInputNamesWithButtonsPropsType } from '../Components/FormInputNamesWithButtons/FormInputNamesWithButtons'
import { FormInputNamesWithButtons } from '../Components/FormInputNamesWithButtons/FormInputNamesWithButtons'

type GetNavLinksButtonsItemParamType = {
  navLinkProps?: NavLinkWithQueryPropsType
  buttonYrlProps?: ButtonYrlPropsType
  formInputNamesWithButtonsProps?: FormInputNamesWithButtonsPropsType
  buttonCancelEditNameProps?: ButtonYrlPropsType
  buttonConfirmEditNameProps?: ButtonYrlPropsType
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

  const COMPONENTS_DICT = {
    buttonYrlProps: ButtonYrl,
    navLinkProps: NavLinkWithQuery,
  }

  return navLinksButtonsItems.map(
    (
      {
        id,
        navLinkProps,
        buttonYrlProps,
        formInputNamesWithButtonsProps,
        buttonCancelEditNameProps,
        buttonConfirmEditNameProps,
      },
      index
    ) => {
      if (navLinkProps && buttonYrlProps)
        return (
          <NavLinkWithQuery
            key={id}
            {...navLinkProps}
            classAdded={navLinkProps?.classAdded ? `${navLinkProps.classAdded} _item` : '_item'}
          >
            <ButtonYrl {...buttonYrlProps} />
          </NavLinkWithQuery>
        )
      else if (navLinkProps && !buttonYrlProps)
        return (
          <NavLinkWithQuery
            key={id}
            {...navLinkProps}
            classAdded={navLinkProps?.classAdded ? `${navLinkProps.classAdded} _item` : '_item'}
          />
        )
      else if (buttonYrlProps)
        return (
          <ButtonYrl
            key={id}
            {...buttonYrlProps}
            classAdded={`${buttonYrlProps.classAdded} _item`}
          />
        )
      else if (formInputNamesWithButtonsProps)
        return <FormInputNamesWithButtons {...formInputNamesWithButtonsProps} />
    }
  )
}

export { getNavLinksButtonsItems }
export type {
  GetNavLinksButtonsItemParamType,
  GetNavLinksButtonsItemsOptionsType,
  GetNavLinksButtonsItemsResType,
  GetNavLinksButtonsItemsType,
}
