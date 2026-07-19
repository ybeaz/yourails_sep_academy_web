import React from 'react'

export type VideoQaCatalogComponentPropsType = {
  classAdded?: string | number | symbol | any
  storeStateSlice: any
  isDisplaying?: boolean // is element present on the page and visible/ displaying?
  isVisible?: boolean // element is present on the page, but if it is visible/ displaying?
}

export type VideoQaCatalogPropsType = Omit<VideoQaCatalogComponentPropsType, 'storeStateSlice'>

export type VideoQaCatalogPropsOutType = Record<string, any>

/**
 * @import import { VideoQaCatalogComponentPropsType, VideoQaCatalogPropsType, VideoQaCatalogPropsOutType, VideoQaCatalogComponentType, VideoQaCatalogType } from './VideoQaCatalogTypes'
 */
export interface VideoQaCatalogComponentType
  extends React.FunctionComponent<VideoQaCatalogComponentPropsType> {
  (props: VideoQaCatalogComponentPropsType): React.ReactElement
}

export type VideoQaCatalogType = React.FunctionComponent<VideoQaCatalogPropsType>
