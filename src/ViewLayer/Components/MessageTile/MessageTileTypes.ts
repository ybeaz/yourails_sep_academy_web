import React from 'react'

export type MessageTileComponentPropsType = {
  classAdded?: string | number | symbol | any
  title: string
  line1: string
  line2: string
  line3: string
  isDisplaying?: boolean // is element present on the page and visible/ displaying?
  isVisible?: boolean // element is present on the page, but if it is visible/ displaying?
}

export type MessageTilePropsType = Omit<MessageTileComponentPropsType, 'storeStateSlice'>

export type MessageTilePropsOutType = Record<string, any>

/**
 * @import import { MessageTileComponentPropsType, MessageTilePropsType, MessageTilePropsOutType, MessageTileComponentType, MessageTileType } from './MessageTileTypes'
 */
export interface MessageTileComponentType
  extends React.FunctionComponent<MessageTileComponentPropsType> {
  (props: MessageTileComponentPropsType): React.ReactElement
}

export type MessageTileType = React.FunctionComponent<MessageTilePropsType>
