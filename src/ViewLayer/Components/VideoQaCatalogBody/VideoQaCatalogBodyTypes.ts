import React from 'react'

export type VideoQaCatalogBodyComponentPropsType = {
  classAdded?: string | number | symbol | any
  storeStateSlice: any
  isDisplaying?: boolean // is element present on the page and visible/ displaying?
  isVisible?: boolean // element is present on the page, but if it is visible/ displaying?
}

export type VideoQaCatalogBodyPropsType = Omit<
  VideoQaCatalogBodyComponentPropsType,
  'storeStateSlice'
>

export type VideoQaCatalogBodyPropsOutType = Record<string, any>

/**
 * @import import { VideoQaCatalogBodyComponentPropsType, VideoQaCatalogBodyPropsType, VideoQaCatalogBodyPropsOutType, VideoQaCatalogBodyComponentType, VideoQaCatalogBodyType } from './VideoQaCatalogBodyTypes'
 */
export interface VideoQaCatalogBodyComponentType
  extends React.FunctionComponent<VideoQaCatalogBodyComponentPropsType> {
  (props: VideoQaCatalogBodyComponentPropsType): React.ReactElement
}

export type VideoQaCatalogBodyType = React.FunctionComponent<VideoQaCatalogBodyPropsType>
