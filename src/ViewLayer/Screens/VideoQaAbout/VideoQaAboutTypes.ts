import React from 'react'

export type VideoQaAboutComponentPropsType = {
  classAdded?: string | number | symbol | any
  storeStateSlice: any
  isDisplaying?: boolean // is element present on the page and visible/ displaying?
  isVisible?: boolean // element is present on the page, but if it is visible/ displaying?
}

export type VideoQaAboutPropsType = Omit<VideoQaAboutComponentPropsType, 'storeStateSlice'>

export type VideoQaAboutPropsOutType = Record<string, any>

/**
 * @import import { VideoQaAboutComponentPropsType, VideoQaAboutPropsType, VideoQaAboutPropsOutType, VideoQaAboutComponentType, VideoQaAboutType } from './VideoQaAboutTypes'
 */
export interface VideoQaAboutComponentType
  extends React.FunctionComponent<VideoQaAboutComponentPropsType> {
  (props: VideoQaAboutComponentPropsType): React.ReactElement
}

export type VideoQaAboutType = React.FunctionComponent<VideoQaAboutPropsType>
