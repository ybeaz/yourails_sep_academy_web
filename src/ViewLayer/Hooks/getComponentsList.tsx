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
import { MessageTile, MessageTilePropsType } from '../Components/MessageTile/MessageTile'
import {
  QuestionsCaptures,
  QuestionsCapturesPropsType,
} from '../Components/QuestionsCaptures/QuestionsCaptures'

type GetNavLinksButtonsItemParamType = {
  navLinkProps?: NavLinkWithQueryPropsType
  buttonYrlProps?: ButtonYrlPropsType
  formInputNamesWithButtonsProps?: FormInputNamesWithButtonsPropsType
  buttonCancelEditNameProps?: ButtonYrlPropsType
  buttonConfirmEditNameProps?: ButtonYrlPropsType
  messageTileProps?: MessageTilePropsType
  questionsCapturesProps?: QuestionsCapturesPropsType
}

type GetComponentsListOptionsType = { funcParent?: string }

type GetComponentsListResType = JSX.Element

interface GetComponentsListType {
  (params: GetNavLinksButtonsItemParamType[]): GetComponentsListResType[]
}

/**
 * @description Function to getComponentsList
 * @import import { getComponentsList } from './getComponentsList'
 */

const getComponentsList: GetComponentsListType = (
  navLinksButtonsItemsIn: GetNavLinksButtonsItemParamType[]
): GetComponentsListResType[] => {
  const navLinksButtonsItems = navLinksButtonsItemsIn.map(
    (item: GetNavLinksButtonsItemParamType) => ({ id: nanoid(), ...item })
  )

  const COMPONENTS_DICT = {
    buttonYrlProps: ButtonYrl,
    navLinkProps: NavLinkWithQuery,
  }

  return navLinksButtonsItems.map(
    ({
      id,
      navLinkProps,
      buttonYrlProps,
      formInputNamesWithButtonsProps,
      messageTileProps,
      questionsCapturesProps,
    }) => {
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
      else if (messageTileProps) return <MessageTile {...messageTileProps} />
      else if (questionsCapturesProps) return <QuestionsCaptures {...questionsCapturesProps} />
    }
  )
}

export { getComponentsList }
export type {
  GetNavLinksButtonsItemParamType,
  GetComponentsListOptionsType,
  GetComponentsListResType,
  GetComponentsListType,
}
