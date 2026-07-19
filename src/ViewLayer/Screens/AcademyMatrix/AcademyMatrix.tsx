import React from 'react'
import { Helmet } from 'react-helmet-async'
import { useParams } from 'react-router-dom'
import {
  DICTIONARY,
  getNestedProp,
  getParsedUrlQueryBrowserApi,
  ScreensEnumType,
  SERVERS_MAIN,
  SITE_META_DATA,
  withPropsYrl,
  withStoreStateSelectedYrl,
} from 'yourails_common'
import { handleEvents as handleEventsIn } from '../../../DataLayer/index.handleEvents'
import { AcademyMatrixBody } from '../../Components/AcademyMatrixBody/AcademyMatrixBody'
import { HeaderFrame } from '../../Frames/HeaderFrame/HeaderFrame'
import { MainFrame } from '../../Frames/MainFrame/MainFrame'
import { useEffectedInitialRequests } from '../../Hooks/useEffectedInitialRequests'
import { useLoadedInitialTeachContent } from '../../Hooks/useLoadedInitialTeachContent'
import {
  AcademyMatrixComponentType,
  AcademyMatrixPropsOutType,
  AcademyMatrixPropsType,
  AcademyMatrixType,
} from './AcademyMatrixTypes'

/**
 * @description Component to render AcademyMatrix
 * @import import { AcademyMatrix, AcademyMatrixPropsType, AcademyMatrixPropsOutType, AcademyMatrixType } 
             from '../Components/AcademyMatrix/AcademyMatrix'
 */
const AcademyMatrixComponent: AcademyMatrixComponentType = (props: AcademyMatrixPropsType) => {
  const {
    storeStateSlice: {},
  } = props

  const screenType = ScreensEnumType['AcademyMatrix']
  const params = useParams()
  const { titleSite, descriptionSite, langSite } = SITE_META_DATA.ACADEMY
  const canonicalUrl = `${SERVERS_MAIN.remote}${decodeURIComponent(location.pathname)}`

  const query = getParsedUrlQueryBrowserApi()
  const tagsPickQuery = getNestedProp({ entity: query, path: 'tagsPick', resDefault: '' })
  const modulesSearchQuery = getNestedProp({ entity: query, path: 'modulesSearch', resDefault: '' })
  const tagsSearchQuery = getNestedProp({ entity: query, path: 'tagsSearch', resDefault: '' })

  useEffectedInitialRequests(
    [
      { type: 'SET_SCREEN_ACTIVE', data: { screenActive: screenType } },
      { type: 'SET_PARAMS_FROM_QUERY_URL_TO_STATE' },
      { type: 'GET_TAGS_CONNECTION' },
      { type: 'GET_MODULES_CONNECTION' },
    ],
    [JSON.stringify({ params, tagsPickQuery, modulesSearchQuery, tagsSearchQuery })],
  )

  useLoadedInitialTeachContent({ isSkipping: false })

  const propsOut: AcademyMatrixPropsOutType = {
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
      screenType,
    },
  }

  return (
    <div className="AcademyMatrix">
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
        <AcademyMatrixBody />
        {/* middle-right */}
        {null}
        {/* footer */}
        {null}
      </MainFrame>
    </div>
  )
}

const storeStateSliceProps: string[] = [
  'language',
  'queryUrl',
  'tagsPick',
  'componentsState',
  'urlParamsQuery',
]
const AcademyMatrix: AcademyMatrixType = withPropsYrl({
  handleEvents: handleEventsIn,
})(withStoreStateSelectedYrl(storeStateSliceProps, React.memo(AcademyMatrixComponent)))

export type {
  AcademyMatrixComponentType,
  AcademyMatrixPropsOutType,
  AcademyMatrixPropsType,
  AcademyMatrixType,
}
export { AcademyMatrix as default }
