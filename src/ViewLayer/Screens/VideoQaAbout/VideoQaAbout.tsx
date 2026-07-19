import classNames from 'classnames'
import React from 'react'
import { Helmet } from 'react-helmet-async'
import {
  SERVERS_MAIN,
  SITE_META_DATA,
  withPropsYrl,
  withStoreStateSelectedYrl,
} from 'yourails_common'
import { VideoQaAboutBody } from '../../Components/VideoQaAboutBody/VideoQaAboutBody'
import type {
  VideoQaAboutComponentPropsType,
  VideoQaAboutComponentType,
  VideoQaAboutPropsOutType,
  VideoQaAboutPropsType,
  VideoQaAboutType,
} from './VideoQaAboutTypes'

/**
 * @description Component to render VideoQaAbout
 * @import import { VideoQaAbout, VideoQaAboutPropsType, VideoQaAboutPropsOutType, VideoQaAboutType } 
             from '../Components/VideoQaAbout/VideoQaAbout'
 */
const VideoQaAboutComponent: VideoQaAboutComponentType = (
  props: VideoQaAboutComponentPropsType,
) => {
  const { classAdded, storeStateSlice, isDisplaying, isVisible } = props
  const { titleSite, descriptionSite, langSite, hrefFavicon } = SITE_META_DATA.VIDEO_QA
  const canonicalUrl = `${SERVERS_MAIN.remote}${decodeURIComponent(location.pathname)}`
  const propsOut: VideoQaAboutPropsOutType = {}

  return (
    <div
      className={classNames('VideoQaAbout', {
        [classAdded]: !!classAdded,
        VideoQaAbout_display_none: isDisplaying === false,
        VideoQaAbout_visible_none: isVisible === false,
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
      <VideoQaAboutBody />
    </div>
  )
}

const storeStateSliceProps: string[] = []
const VideoQaAbout: VideoQaAboutType = withStoreStateSelectedYrl(
  storeStateSliceProps,
  React.memo(VideoQaAboutComponent),
)

export type { VideoQaAboutPropsType, VideoQaAboutType }
export { VideoQaAbout as default }
