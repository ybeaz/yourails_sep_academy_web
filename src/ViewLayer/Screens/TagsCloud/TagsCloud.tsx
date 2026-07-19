import React, { useEffect } from 'react'
import { Helmet } from 'react-helmet-async'
import {
  DICTIONARY,
  getClasses,
  getTagLine,
  ScreensEnumType,
  SERVERS_MAIN,
  SITE_META_DATA,
  withPropsYrl,
  withStoreStateSelectedYrl,
} from 'yourails_common'
import { handleEvents as handleEventsIn } from '../../../DataLayer/index.handleEvents'
import { TagsCloudBody } from '../../Components/TagsCloudBody/TagsCloudBody'
import { FooterFrame } from '../../Frames/FooterFrame/FooterFrame'
import { HeaderFrame } from '../../Frames/HeaderFrame/HeaderFrame'
import { MainFrame } from '../../Frames/MainFrame/MainFrame'
import { useEffectedInitialRequests } from '../../Hooks/useEffectedInitialRequests'

import {
  TagsCloudComponentPropsType,
  TagsCloudComponentType,
  TagsCloudPropsOutType,
  TagsCloudPropsType,
  TagsCloudType,
} from './TagsCloudTypes'

/**
 * @description Component to render TagsCloud
 * @import import { TagsCloud, TagsCloudPropsType, TagsCloudPropsOutType, TagsCloudType } 
             from '../Components/TagsCloud/TagsCloud'
 */
const TagsCloudComponent: TagsCloudComponentType = (props: TagsCloudComponentPropsType) => {
  const {
    classAdded,
    storeStateSlice: { language },
    handleEvents,
  } = props

  const screenType = ScreensEnumType['TagsCloud']
  const { titleSite, descriptionSite, langSite } = SITE_META_DATA.ACADEMY
  const canonicalUrl = `${SERVERS_MAIN.remote}${decodeURIComponent(location.pathname)}`

  useEffectedInitialRequests([
    { type: 'SET_SCREEN_ACTIVE', data: { screenActive: screenType } },
    { type: 'SET_PARAMS_FROM_QUERY_URL_TO_STATE' },
    { type: 'GET_TAGS_CONNECTION', data: { isLoaderOverlay: true } },
  ])

  const propsOut: TagsCloudPropsOutType = {
    headerFrameProps: {
      isButtonSideMenuLeft: true,
      isLogoGroup: true,
      isButtonAddCourse: true,
      isButtonAuthUser: true,
      isSelectLanguage: true,
      isButtonThemeToggle: true,
      isSeachGroup: true,
      isButtonBack: false,
      isPageActionsGroup: false,
      isButtonsShare: false,
    },
    mainFrameProps: {
      screenType: 'TagsCloud',
    },
    tagsCloudBodyProps: {
      headline: DICTIONARY.Knowledege_tags[language],
    },
  }

  return (
    <div className={getClasses('TagsCloud')}>
      <Helmet>
        <html lang={langSite} />
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <meta name="google" content="notranslate" />
        <title>{titleSite}</title>
        <link rel="canonical" href={canonicalUrl} />
        <meta name="description" content={descriptionSite} />
      </Helmet>
      <MainFrame {...propsOut.mainFrameProps}>
        {/* header */}
        <HeaderFrame {...propsOut.headerFrameProps} />
        {/* middle-left */}
        {null}
        {/* middle-main */}
        <TagsCloudBody {...propsOut.tagsCloudBodyProps} />
        {/* middle-right */}
        {null}
        {/* footer */}
        <FooterFrame>{null}</FooterFrame>
      </MainFrame>
    </div>
  )
}

const storeStateSliceProps: string[] = ['language']
const TagsCloud: TagsCloudType = React.memo(
  withPropsYrl({ handleEvents: handleEventsIn })(
    withStoreStateSelectedYrl(storeStateSliceProps, TagsCloudComponent),
  ),
)

export type { TagsCloudComponentType, TagsCloudPropsOutType, TagsCloudPropsType, TagsCloudType }
export { TagsCloud as default }
