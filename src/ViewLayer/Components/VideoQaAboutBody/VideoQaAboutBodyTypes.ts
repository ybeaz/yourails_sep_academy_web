import React from 'react'

export type VideoQaAboutBodyComponentPropsType = {
  classAdded?: string | number | symbol | any
  storeStateSlice: any
  isDisplaying?: boolean // is element present on the page and visible/ displaying?
  isVisible?: boolean // element is present on the page, but if it is visible/ displaying?
}

export type VideoQaAboutBodyPropsType = Omit<VideoQaAboutBodyComponentPropsType, 'storeStateSlice'>

export type VideoQaAboutBodyPropsOutType = Record<string, any>

/**
 * @import import { VideoQaAboutBodyComponentPropsType, VideoQaAboutBodyPropsType, VideoQaAboutBodyPropsOutType, VideoQaAboutBodyComponentType, VideoQaAboutBodyType } from './VideoQaAboutBodyTypes'
 */
export interface VideoQaAboutBodyComponentType
  extends React.FunctionComponent<VideoQaAboutBodyComponentPropsType> {
  (props: VideoQaAboutBodyComponentPropsType): React.ReactElement
}

export type VideoQaAboutBodyType = React.FunctionComponent<VideoQaAboutBodyPropsType>
