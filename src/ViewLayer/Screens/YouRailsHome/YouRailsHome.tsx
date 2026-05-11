import React from 'react'
import classNames from 'classnames'
import { YouRailsHomeBody } from '../../Components/YouRailsHomeBody/YouRailsHomeBody'

import { withPropsYrl, withStoreStateSelectedYrl } from 'yourails_common'
import {
  YouRailsHomeComponentPropsType,
  YouRailsHomePropsType,
  YouRailsHomePropsOutType,
  YouRailsHomeComponentType,
  YouRailsHomeType,
} from './YouRailsHomeTypes'

/**
 * @description Component to render YouRailsHome
 * @import import { YouRailsHome, YouRailsHomePropsType, YouRailsHomePropsOutType, YouRailsHomeType } 
             from '../Components/YouRailsHome/YouRailsHome'
 */
const YouRailsHomeComponent: YouRailsHomeComponentType = (
  props: YouRailsHomeComponentPropsType,
) => {
  const { classAdded, storeStateSlice, isDisplaying, isVisible } = props

  const propsOut: YouRailsHomePropsOutType = {}

  return (
    <div
      className={classNames('YouRailsHome', {
        [classAdded]: !!classAdded,
        YouRailsHome_display_none: isDisplaying === false,
        YouRailsHome_visible_none: isVisible === false,
      })}
    >
      <YouRailsHomeBody />
    </div>
  )
}

const storeStateSliceProps: string[] = []
const YouRailsHome: YouRailsHomeType = withStoreStateSelectedYrl(
  storeStateSliceProps,
  React.memo(YouRailsHomeComponent),
)

export type { YouRailsHomePropsType, YouRailsHomeType }
export { YouRailsHome }
export { YouRailsHome as default }
