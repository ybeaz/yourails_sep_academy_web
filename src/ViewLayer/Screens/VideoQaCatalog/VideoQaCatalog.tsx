import classNames from 'classnames'
import React from 'react'
import { Helmet } from 'react-helmet-async'
import {
  SERVERS_MAIN,
  SITE_META_DATA,
  withPropsYrl,
  withStoreStateSelectedYrl,
} from 'yourails_common'
import { VideoQaCatalogBody } from '../../Components/VideoQaCatalogBody/VideoQaCatalogBody'
import type {
  VideoQaCatalogComponentPropsType,
  VideoQaCatalogComponentType,
  VideoQaCatalogPropsOutType,
  VideoQaCatalogPropsType,
  VideoQaCatalogType,
} from './VideoQaCatalogTypes'

/**
 * @description Component to render VideoQaCatalog
 * @import import { VideoQaCatalog, VideoQaCatalogPropsType, VideoQaCatalogPropsOutType, VideoQaCatalogType } 
             from '../Components/VideoQaCatalog/VideoQaCatalog'
 */
const VideoQaCatalogComponent: VideoQaCatalogComponentType = (
  props: VideoQaCatalogComponentPropsType,
) => {
  const { classAdded, storeStateSlice, isDisplaying, isVisible } = props
  const { titleSite, descriptionSite, langSite, hrefFavicon } = SITE_META_DATA.VIDEO_QA
  const canonicalUrl = `${SERVERS_MAIN.remote}${decodeURIComponent(location.pathname)}`
  const propsOut: VideoQaCatalogPropsOutType = {}

  return (
    <div
      className={classNames('VideoQaCatalog', {
        [classAdded]: !!classAdded,
        VideoQaCatalog_display_none: isDisplaying === false,
        VideoQaCatalog_visible_none: isVisible === false,
      })}
    >
      <Helmet>
        <html lang={langSite} />
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <meta name="google" content="notranslate" />
        <title>{titleSite}</title>
        <link rel="canonical" href={canonicalUrl} />
        <link rel="shortcut icon" href={hrefFavicon} type="image/x-icon" />
        <meta name="description" content={descriptionSite} />
      </Helmet>
      <VideoQaCatalogBody />
    </div>
  )
}

const storeStateSliceProps: string[] = []
const VideoQaCatalog: VideoQaCatalogType = withStoreStateSelectedYrl(
  storeStateSliceProps,
  React.memo(VideoQaCatalogComponent),
)

export type { VideoQaCatalogPropsType, VideoQaCatalogType }
export { VideoQaCatalog as default }
