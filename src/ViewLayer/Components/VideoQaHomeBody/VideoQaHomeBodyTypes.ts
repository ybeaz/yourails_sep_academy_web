import React from 'react'

export type VideoQaHomeBodyComponentPropsType = {
  classAdded?: string | number | symbol | any
  storeStateSlice: any
  isDisplaying?: boolean // is element present on the page and visible/ displaying?
  isVisible?: boolean // element is present on the page, but if it is visible/ displaying?
}

export type VideoQaHomeBodyPropsType = Omit<VideoQaHomeBodyComponentPropsType, 'storeStateSlice'>

export type VideoQaHomeBodyPropsOutType = Record<string, any>

/**
 * @import import { VideoQaHomeBodyComponentPropsType, VideoQaHomeBodyPropsType, VideoQaHomeBodyPropsOutType, VideoQaHomeBodyComponentType, VideoQaHomeBodyType } from './VideoQaHomeBodyTypes'
 */
export interface VideoQaHomeBodyComponentType
  extends React.FunctionComponent<VideoQaHomeBodyComponentPropsType> {
  (props: VideoQaHomeBodyComponentPropsType): React.ReactElement
}

export type VideoQaHomeBodyType = React.FunctionComponent<VideoQaHomeBodyPropsType>
