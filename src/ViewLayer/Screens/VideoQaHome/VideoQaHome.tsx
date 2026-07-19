import classNames from 'classnames'
import React from 'react'
import { Helmet } from 'react-helmet-async'
import {
  SERVERS_MAIN,
  SITE_META_DATA,
  withPropsYrl,
  withStoreStateSelectedYrl,
} from 'yourails_common'
import { VideoQaHomeBody } from '../../Components/VideoQaHomeBody/VideoQaHomeBody'
import type {
  VideoQaHomeComponentPropsType,
  VideoQaHomeComponentType,
  VideoQaHomePropsOutType,
  VideoQaHomePropsType,
  VideoQaHomeType,
} from './VideoQaHomeTypes'

/**
 * @description Component to render VideoQaHome
 * @import import { VideoQaHome, VideoQaHomePropsType, VideoQaHomePropsOutType, VideoQaHomeType } 
             from '../Components/VideoQaHome/VideoQaHome'
 */
const VideoQaHomeComponent: VideoQaHomeComponentType = (props: VideoQaHomeComponentPropsType) => {
  const { classAdded, storeStateSlice, isDisplaying, isVisible } = props

  const { titleSite, descriptionSite, langSite, hrefFavicon } = SITE_META_DATA.VIDEO_QA
  const canonicalUrl = `${SERVERS_MAIN.remote}${decodeURIComponent(location.pathname)}`
  const propsOut: VideoQaHomePropsOutType = {}

  return (
    <div
      className={classNames('VideoQaHome', {
        [classAdded]: !!classAdded,
        VideoQaHome_display_none: isDisplaying === false,
        VideoQaHome_visible_none: isVisible === false,
      })}
    >
      <Helmet>
        <html lang={langSite} />
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <meta name="google" content="notranslate" />
        <title>{titleSite}</title>
        <link rel="canonical" href={canonicalUrl} />
        <meta name="description" content={descriptionSite} />
        <link rel="shortcut icon" href={hrefFavicon} type="image/x-icon" />
      </Helmet>
      <VideoQaHomeBody />
    </div>
  )
}

const storeStateSliceProps: string[] = []
const VideoQaHome: VideoQaHomeType = withStoreStateSelectedYrl(
  storeStateSliceProps,
  React.memo(VideoQaHomeComponent),
)

export type { VideoQaHomePropsType, VideoQaHomeType }
export { VideoQaHome, VideoQaHome as default }
