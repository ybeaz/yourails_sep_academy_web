import classNames from 'classnames'
import React from 'react'
import { withPropsYrl, withStoreStateSelectedYrl } from 'yourails_common'
import { YouRailsAboutBody } from '../../Components/YouRailsAboutBody/YouRailsAboutBody'
import type {
  YouRailsAboutComponentPropsType,
  YouRailsAboutComponentType,
  YouRailsAboutPropsOutType,
  YouRailsAboutPropsType,
  YouRailsAboutType,
} from './YouRailsAboutTypes'

/**
 * @description Component to render YouRailsAbout
 * @import import { YouRailsAbout, YouRailsAboutPropsType, YouRailsAboutPropsOutType, YouRailsAboutType } 
             from '../Components/YouRailsAbout/YouRailsAbout'
 */
const YouRailsAboutComponent: YouRailsAboutComponentType = (
  props: YouRailsAboutComponentPropsType,
) => {
  const { classAdded, storeStateSlice, isDisplaying, isVisible } = props

  const propsOut: YouRailsAboutPropsOutType = {}

  return (
    <div
      className={classNames('YouRailsAbout', {
        [classAdded]: !!classAdded,
        YouRailsAbout_display_none: isDisplaying === false,
        YouRailsAbout_visible_none: isVisible === false,
      })}
    >
      <YouRailsAboutBody />
    </div>
  )
}

const storeStateSliceProps: string[] = []
const YouRailsAbout: YouRailsAboutType = withStoreStateSelectedYrl(
  storeStateSliceProps,
  React.memo(YouRailsAboutComponent),
)

export type { YouRailsAboutPropsType, YouRailsAboutType }
export { YouRailsAbout as default }
