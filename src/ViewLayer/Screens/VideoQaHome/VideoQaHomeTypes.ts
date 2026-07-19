import React from 'react'

export type VideoQaHomeComponentPropsType = {
  classAdded?: string | number | symbol | any
  storeStateSlice: any
  isDisplaying?: boolean // is element present on the page and visible/ displaying?
  isVisible?: boolean // element is present on the page, but if it is visible/ displaying?
}

export type VideoQaHomePropsType = Omit<VideoQaHomeComponentPropsType, 'storeStateSlice'>

export type VideoQaHomePropsOutType = Record<string, any>

/**
 * @import import { VideoQaHomeComponentPropsType, VideoQaHomePropsType, VideoQaHomePropsOutType, VideoQaHomeComponentType, VideoQaHomeType } from './VideoQaHomeTypes'
 */
export interface VideoQaHomeComponentType
  extends React.FunctionComponent<VideoQaHomeComponentPropsType> {
  (props: VideoQaHomeComponentPropsType): React.ReactElement
}

export type VideoQaHomeType = React.FunctionComponent<VideoQaHomePropsType>
