import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'

import { ImageYrl, withPropsYrl } from '../../ComponentsLibrary/'
import { handleEvents as handleEventsProp } from '../../../DataLayer/index.handleEvents'
import { getClasses } from '../../../Shared/getClasses'

import {
  AvatarPlusInfoPropsType,
  AvatarPlusInfoPropsOutType,
  AvatarPlusInfoComponentType,
  AvatarPlusInfoType,
} from './AvatarPlusInfoTypes'

const classProp2 = {
  AvatarPlusInfo: '_logoGroup',
}

/**
 * @description Component to render AvatarPlusInfo
 * @import import { AvatarPlusInfo, AvatarPlusInfoPropsType, AvatarPlusInfoPropsOutType, AvatarPlusInfoType } 
             from '../Components/AvatarPlusInfo/AvatarPlusInfo'
 */
const AvatarPlusInfoComponent: AvatarPlusInfoComponentType = (props: AvatarPlusInfoPropsType) => {
  const { classProps, pathname, handleEvents, typeEvent, imgSrc, capture, text } = props

  const navigate = useNavigate()

  const propsOut: AvatarPlusInfoPropsOutType = {
    linkProps: {
      to: pathname ? { pathname } : {},
      onClick: () => {
        handleEvents &&
          handleEvents(
            {},
            {
              typeEvent: 'GO_LINK_PATH',
              data: { navigate, pathname },
            }
          )
      },
    },
    imageProps: {
      classAdded: '_avatarPlusInfo',
      src: imgSrc,
    },
  }

  return (
    <div className={getClasses('AvatarPlusInfo', classProps)}>
      <NavLink className={getClasses('_link', classProps)} {...propsOut.linkProps}>
        <ImageYrl {...propsOut.imageProps} />
        <div className='_captureText'>
          <div className='_capture'>{capture}</div>
          <div className='_text'>{text}</div>
        </div>
      </NavLink>
    </div>
  )
}

export const AvatarPlusInfo: AvatarPlusInfoType = React.memo(
  withPropsYrl({ handleEvents: handleEventsProp })(AvatarPlusInfoComponent)
)

export type {
  AvatarPlusInfoPropsType,
  AvatarPlusInfoPropsOutType,
  AvatarPlusInfoComponentType,
  AvatarPlusInfoType,
}
