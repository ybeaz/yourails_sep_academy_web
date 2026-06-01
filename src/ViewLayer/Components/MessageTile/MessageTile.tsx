import React from 'react'

import classNames from 'classnames'
import {
  MessageTileComponentPropsType,
  MessageTilePropsType,
  MessageTilePropsOutType,
  MessageTileComponentType,
  MessageTileType,
} from './MessageTileTypes'

/**
 * @description Component to render MessageTile
 * @import import { MessageTile, MessageTilePropsType, MessageTilePropsOutType, MessageTileType } 
             from '../Components/MessageTile/MessageTile'
 */
const MessageTileComponent: MessageTileComponentType = (props: MessageTileComponentPropsType) => {
  const { classAdded, title, line1, line2, line3, isDisplaying, isVisible } = props

  const propsOut: MessageTilePropsOutType = {}

  return (
    <div
      className={classNames('MessageTile', {
        [classAdded]: !!classAdded,
        MessageTile_display_none: isDisplaying === false,
        MessageTile_visible_none: isVisible === false,
      })}
    >
      <div className="_capture">{title}</div>
      <p>{line1}</p>
      <p>{line2}</p>
      <p>{line3}</p>
    </div>
  )
}

const MessageTile: MessageTileType = React.memo(MessageTileComponent)

export type { MessageTilePropsType, MessageTileType }
export { MessageTile }
