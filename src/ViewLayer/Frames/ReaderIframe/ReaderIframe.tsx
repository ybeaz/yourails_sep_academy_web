import React from 'react'

import { handleEvents } from '../../../DataLayer/index.handleEvents'

import {
  ReaderIframePropsType,
  ReaderIframePropsOutType,
  ReaderIframeComponentType,
  ReaderIframeType,
} from './ReaderIframeTypes'

/**
 * @description Component to render ReaderIframe
 * @import import { ReaderIframe, ReaderIframePropsType, ReaderIframePropsOutType, ReaderIframeType } 
             from '../Components/ReaderIframe/ReaderIframe'
 */
const ReaderIframeComponent: ReaderIframeComponentType = (
  props: ReaderIframePropsType
) => {
  const { contentID, isVisible, screenType } = props

  let isVisibleClass = isVisible ? '_blockVisible' : '_blockHided'

  const classAdded =
    screenType === 'AcademyPresent' ? 'ReaderIframe_AcademyPresent' : ''

  return (
    <div className={`ReaderIframe ${classAdded}`}>
      <div className={`__wrapper ${isVisibleClass}`}>
        <iframe
          className='_reader'
          src={`${contentID}`}
          width='640'
          height='340'
          frameBorder='0'
          onLoad={event =>
            handleEvents(event, {
              typeEvent: 'TOGGLE_MEDIA_LOADED',
              data: { mediaKey: contentID, isMediaLoaded: true },
            })
          }
        ></iframe>
        {props.children[0]}
      </div>
      <div className='__panel'>{props.children[1]}</div>
    </div>
  )

  const {} = props

  const propsOut: ReaderIframePropsOutType = {}

  return <div className='ReaderIframe'>ReaderIframe</div>
}

export const ReaderIframe: ReaderIframeType = React.memo(ReaderIframeComponent)

export type {
  ReaderIframePropsType,
  ReaderIframePropsOutType,
  ReaderIframeComponentType,
  ReaderIframeType,
}