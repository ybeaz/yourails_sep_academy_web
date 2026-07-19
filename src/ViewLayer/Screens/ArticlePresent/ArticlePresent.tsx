import React, { useEffect } from 'react'
import { Helmet } from 'react-helmet-async'
import { useParams } from 'react-router-dom'
import {
  DICTIONARY,
  getClasses,
  getTagLine,
  ScreensEnumType,
  SERVERS_MAIN,
  SITE_META_DATA,
  withStoreStateSelectedYrl,
} from 'yourails_common'
import { handleEvents } from '../../../DataLayer/index.handleEvents'
import { ArticlePresentBody } from '../../Components/ArticlePresentBody/ArticlePresentBody'
import { HeaderFrame } from '../../Frames/HeaderFrame/HeaderFrame'
import { MainFrame } from '../../Frames/MainFrame/MainFrame'
import { useEffectedInitialRequests } from '../../Hooks/useEffectedInitialRequests'
import {
  ArticlePresentComponentPropsType,
  ArticlePresentComponentType,
  ArticlePresentPropsOutType,
  ArticlePresentPropsType,
  ArticlePresentType,
} from './ArticlePresentTypes'

/**
 * @description Component to render ArticlePresent
 * @import import { ArticlePresent, ArticlePresentPropsType, ArticlePresentPropsOutType, ArticlePresentType } 
             from '../Components/ArticlePresent/ArticlePresent'
 */
const ArticlePresentComponent: ArticlePresentComponentType = (
  props: ArticlePresentComponentPropsType,
) => {
  const {
    classAdded,
    storeStateSlice: { articles, language },
  } = props

  const screenType = ScreensEnumType['ArticlePresent']
  const canonicalUrl = `${SERVERS_MAIN.remote}${decodeURIComponent(location.pathname)}`
  const { titleSite, descriptionSite, langSite } = SITE_META_DATA.ACADEMY

  const params = useParams()
  const articleID = params?.articleID

  const articleFound =
    articles.find((article: any) => article.articleID === articleID) || articles[0]

  useEffectedInitialRequests([{ type: 'SET_SCREEN_ACTIVE', data: { screenActive: screenType } }])

  useEffect(() => {
    if (Array.isArray(articles) && !articleFound) {
      handleEvents({}, { typeEvent: 'FIND_ARTICLE', data: articleID })
    }
  }, [])

  const propsOut: ArticlePresentPropsOutType = {
    headerFrameProps: {
      isButtonSideMenuLeft: true,
      isLogoGroup: true,
      isButtonAddCourse: true,
      isButtonAuthUser: true,
      isSelectLanguage: true,
      isButtonThemeToggle: true,
      isSeachGroup: false,
      isButtonBack: false,
      isPageActionsGroup: false,
      isButtonsShare: false,
    },
    mainFrameProps: {
      screenType: 'ArticlePresent',
    },
    articlePresentBodyProps: {
      article: articleFound,
    },
  }

  return (
    <div className={getClasses('ArticlePresent', classAdded)} id={articleID}>
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
        <div>
          {articleFound && articleFound.articleItemID ? (
            <ArticlePresentBody {...propsOut.articlePresentBodyProps} />
          ) : null}
        </div>
        {/* <ProfileBody {...propsOut.profileBodyProps} /> */}
        {/* middle-right */}
        {null}
        {/* footer */}
        {null}
      </MainFrame>
    </div>
  )
}

const storeStateSliceProps: string[] = ['articles', 'language']
const ArticlePresent = withStoreStateSelectedYrl(
  storeStateSliceProps,
  React.memo(ArticlePresentComponent),
)

export type {
  ArticlePresentComponentType,
  ArticlePresentPropsOutType,
  ArticlePresentPropsType,
  ArticlePresentType,
}
export { ArticlePresent as default }
