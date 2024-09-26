import React, { useState, useEffect } from 'react'
import { Helmet } from 'react-helmet'
import { useParams } from 'react-router-dom'

import { ScreensEnumType } from '../../../Interfaces/ScreensEnumType'
import { useflagsDebug } from '../../Hooks/useflagsDebug'
import { HeaderFrame } from '../../Frames/HeaderFrame/HeaderFrame'
import { useEffectedInitialRequests } from '../../Hooks/useEffectedInitialRequests'
import { CarouselQuestions } from '../../Components/CarouselQuestions/CarouselQuestions'
import { DICTIONARY } from '../../../Constants/dictionary.const'
import { getContentComponentName } from '../../../Shared/getContentComponentName'
import { useLoadedInitialTeachContent } from '../../Hooks/useLoadedInitialTeachContent'
import { getMultipliedTimeStr } from '../../../Shared/getMultipliedTimeStr'
import { useYouTubePlayerWork } from '../../Hooks/useYouTubePlayerWork'
import { DurationObjType } from '../../../Interfaces/DurationObjType'
import { LoaderBlurhash } from '../../Components/LoaderBlurhash'
import { MainFrame } from '../../Frames/MainFrame/MainFrame'
import { PlayerIframe } from '../../Frames/PlayerIframe/PlayerIframe'
import { PlayerPanel } from '../../Components/PlayerPanel/PlayerPanel'
import { ReaderIframe } from '../../Frames/ReaderIframe/ReaderIframe'
import { VIDEO_RESOLUTION } from '../../../Constants/videoResolution.const'
import { SERVERS_MAIN } from '../../../Constants/servers.const'
import { getModuleByModuleID } from '../../../Shared/getModuleByModuleID'
import { withStoreStateSelectedYrl, ButtonYrl } from '../../ComponentsLibrary/'
import { TextArticleStructured } from '../../Components/TextArticleStructured/TextArticleStructured'
import { getParsedUrlQuery } from '../../../Shared/getParsedUrlQuery'
import { getDurationFromYoutubeSnippet } from '../../../Shared/getDurationFromYoutubeSnippet'
import { isOnLandScape } from '../../../Shared/isOnLandScape'
import { isMobile } from '../../../Shared/isMobile'
import { PlayerPanelPropsType } from '../../Components/PlayerPanel/PlayerPanel'
import { LoaderBlurhashPropsType } from '../../Components/LoaderBlurhash'
import { GenreEnumType } from '../../../@types/GenreType'
import {
  ContentSection,
  TextStructuredComponentsPropsType,
} from '../../Components/ContentSection/ContentSection'

const COMPONENT: Record<string, React.FunctionComponent<any>> = {
  ReaderIframe,
  PlayerIframe,
}

import {
  AcademyPresentComponentPropsType,
  AcademyPresentPropsType,
  AcademyPresentPropsOutType,
  AcademyPresentComponentType,
  AcademyPresentType,
} from './AcademyPresentTypes'

/**
 * @description Component to render AcademyPresent
 * @import import { AcademyPresent, AcademyPresentPropsType, AcademyPresentPropsOutType, AcademyPresentType } 
             from '../Components/AcademyPresent/AcademyPresent'
 */
const AcademyPresentComponent: AcademyPresentComponentType = (
  props: AcademyPresentComponentPropsType
) => {
  const {
    storeStateSlice: {
      language: languageSite,
      durationMultiplier,
      moduleIDActive,
      modules,
      mediaLoaded,
    },
  } = props

  const params = useParams()

  const { innerWidth, innerHeight } = window
  // const { width: mediaWidth, height: mediaHeight } = useMediaQueryResYrl()
  const moduleID = params.moduleID || ''
  const canonicalUrl = `${SERVERS_MAIN.remote}${decodeURIComponent(location.pathname)}`

  const screenType = ScreensEnumType['AcademyPresent']

  const mediaLoadedModulesString = JSON.stringify([mediaLoaded, modules])

  const [windowWidth, setWindowWidth] = useState(window.innerWidth)
  const [isHeaderFrame, setIsHeaderFrame] = useState(!(isMobile() && isOnLandScape()))

  useEffectedInitialRequests([{ type: 'GET_MODULE', data: { moduleID } }])

  useLoadedInitialTeachContent()
  useflagsDebug(mediaLoadedModulesString)

  const [moduleState, setModuleState] = useState({
    CONTENT_ASSIGNED_COMPONENT: PlayerIframe,
    contentComponentName: '',
    capture: '',
    language: '',
    description: '',
    contentID: '',
    durationObj: { duration: '', units: '' },
    index: 0,
    questionsTotal: 0,
    summary: [],
    objections: [],
    article: [],
  })

  const {
    CONTENT_ASSIGNED_COMPONENT,
    contentComponentName,
    capture,
    language,
    description,
    contentID,
    durationObj,
    questionsTotal,
    summary,
    objections,
    article,
  } = moduleState

  useEffect(() => {
    if (modules.length) {
      const {
        capture: capture2,
        language: language2,
        description: description2,
        contentType,
        contentID: contentID2,
        duration: duration2,
        index: index2,
        questionsTotal: questionsTotal2,
        summary: summary2,
        objections: objections2,
        article: article2,
      } = getModuleByModuleID(
        { modules, moduleID: moduleIDActive || moduleID },
        { parentFunction: 'AcademyPresentComponent' }
      )

      const durationObj = getDurationFromYoutubeSnippet(duration2)
      const { timeReadable: duration } = durationObj
      const durationObj2: DurationObjType = getMultipliedTimeStr(duration, durationMultiplier)

      const contentComponentName2 = getContentComponentName(contentType)

      setModuleState({
        CONTENT_ASSIGNED_COMPONENT: COMPONENT[contentComponentName2],
        contentComponentName: contentComponentName2,
        capture: capture2,
        language: language2,
        description: description2,
        contentID: contentID2,
        index: index2,
        questionsTotal: questionsTotal2,
        durationObj: durationObj2,
        summary: summary2,
        objections: objections2,
        article: article2,
      })
    }
  }, [mediaLoadedModulesString])

  const isVisible = mediaLoaded[moduleIDActive || moduleID] || false

  useEffect(() => {
    const reportWindowSize = () => {
      setWindowWidth(window.innerWidth)

      if (isMobile())
        if (isOnLandScape()) setIsHeaderFrame(false)
        else setIsHeaderFrame(true)
    }
    /* Trigger this function on resize */
    window.addEventListener('resize', reportWindowSize)

    /* Cleanup for componentWillUnmount */
    return () => window.removeEventListener('resize', reportWindowSize)
  }, [])

  const { width, height } = VIDEO_RESOLUTION
  const { playVideoHandler, pauseVideoHandler, stopVideoHandler, isShowingPlay } =
    useYouTubePlayerWork({
      contentComponentName,
      moduleID,
      contentID,
      width,
      height,
    })

  const buttonPlayProps = {
    icon: 'MdPlayArrow',
    classAdded: 'Button_MdPlayArrow',
    handleEvents: playVideoHandler,
    action: {},
  }
  const buttonPauseProps = {
    icon: 'MdPause',
    classAdded: 'Button_MdPause',
    handleEvents: pauseVideoHandler,
    action: {},
  }
  const buttonStopProps = {
    icon: 'MdRemoveCircle',
    classAdded: 'Button_MdRemoveCircle',
    handleEvents: stopVideoHandler,
    action: {},
  }

  const textTooltip = DICTIONARY['pleaseRefreshWindow'][languageSite]
  const contentAssignedComponentProps: Record<string, any> = {
    ReaderIframe: {
      moduleID,
      contentID,
      isVisible,
      isIframe: true,
      screenType,
    },
    PlayerIframe: {
      contentID,
      isVisible,
      isIframe: true,
    },
  }
  const playerPanelProps: PlayerPanelPropsType = {
    capture,
    durationObj,
    screenType,
    isShowingPlay,
    buttonPlayProps,
    buttonPauseProps,
    buttonStopProps,
    isActionButtonDisplaying: false,
    questionsTotal,
  }

  const loaderBlurhashProps: LoaderBlurhashPropsType = {
    isVisibleBlurHash: !isVisible,
    textTooltip,
    isTextTooltip: true,
    delay: 500,
    contentComponentName,
  }

  const propsOutM1 = {
    CONTENT_ASSIGNED_COMPONENT,
    contentAssignedComponentProps: contentAssignedComponentProps[contentComponentName],
    playerPanelProps,
    loaderBlurhashProps,
    articleProps: {
      entities: article,
      capture: 'Article',
      genre: GenreEnumType['article'],
    },
    summaryProps: {
      entities: summary,
      capture: 'Summary',
      genre: GenreEnumType['summary'],
    },
    objectionsProps: {
      entities: objections,
      capture: 'Objections',
      genre: GenreEnumType['objections'],
    },
  }

  const contentArray: any[] = [
    {
      typeIn: 'player',
      component: (
        <CONTENT_ASSIGNED_COMPONENT {...propsOutM1.contentAssignedComponentProps}>
          <></>
          <LoaderBlurhash {...propsOutM1.loaderBlurhashProps} />
          <PlayerPanel {...propsOutM1.playerPanelProps} />
        </CONTENT_ASSIGNED_COMPONENT>
      ),
    },
    {
      typeIn: 'summary',
      component: summary && summary.length && (
        <TextArticleStructured {...propsOutM1.summaryProps} />
      ),
    },
    {
      typeIn: 'article',
      component: article && article.length && (
        <TextArticleStructured {...propsOutM1.articleProps} />
      ),
    },
    {
      typeIn: 'objections',
      component: objections && objections.length && (
        <TextArticleStructured {...propsOutM1.objectionsProps} />
      ),
    },
  ]

  const propsOut: AcademyPresentPropsOutType = {
    headerFrameProps: {
      brandName: 'YouRails Academy',
      moto: DICTIONARY['Watch_Videos_With_a_Purpose'][languageSite],
      logoPath: `${SERVERS_MAIN.remote}/images/logoYouRails.png`,
      contentComponentName: 'SearchFormSep',
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
      screenType,
    },
    contentSectionProps: {
      contentArray,
    },
    buttonPlayerUpProps: {
      icon: '',
      classAdded: 'Button_playerUp',
      captureLeft: DICTIONARY.media[language],
      handleEvents: () => {},
      isDisplaying: true,
    },
    buttonSummaryUpProps: {
      icon: '',
      classAdded: 'Button_summaryUp',
      captureLeft: DICTIONARY.summary[language],
      handleEvents: () => {},
      isDisplaying: summary && summary.length ? true : false,
    },
    buttonArticleUpProps: {
      icon: '',
      classAdded: 'Button_articleUp',
      captureLeft: DICTIONARY.article[language],
      handleEvents: () => {},
      isDisplaying: article && article.length ? true : false,
    },
    buttonObjectionsUpProps: {
      icon: '',
      captureLeft: DICTIONARY.objections[language],
      classAdded: 'Button_objectionsUp',
      handleEvents: () => {},
      isDisplaying: objections && objections.length ? true : false,
    },
  }

  return (
    <div className='AcademyPresent' id={`moduleID-${moduleID}`}>
      {modules.length ? (
        <>
          <Helmet>
            <html lang={language} />
            <meta charSet='utf-8' />
            <meta name='viewport' content='width=device-width,initial-scale=1' />
            <meta name='google' content='notranslate' />
            <title>{capture}</title>
            <link rel='canonical' href={canonicalUrl} />
            <meta name='description' content={description} />
          </Helmet>
          <MainFrame {...propsOut.mainFrameProps}>
            {/* header */}
            {isHeaderFrame ? <HeaderFrame {...propsOut.headerFrameProps} /> : null}
            {/* middle-left */}
            {null}
            {/* middle-main */}
            <div className='AcademyPresent__middle-main'>
              <div className='_buttonsWrapper'>
                <ButtonYrl {...propsOut.buttonPlayerUpProps} />
                <ButtonYrl {...propsOut.buttonArticleUpProps} />
                <ButtonYrl {...propsOut.buttonSummaryUpProps} />
                <ButtonYrl {...propsOut.buttonObjectionsUpProps} />
              </div>
              <ContentSection {...propsOut.contentSectionProps} />
            </div>
            {/* middle-right */}
            <CarouselQuestions />
            {/* footer */}
            {null}
          </MainFrame>
        </>
      ) : null}
    </div>
  )
}

const storeStateSliceProps: string[] = [
  'language',
  'durationMultiplier',
  'moduleIDActive',
  'modules',
  'mediaLoaded',
]
export const AcademyPresent: AcademyPresentType = withStoreStateSelectedYrl(
  storeStateSliceProps,
  React.memo(AcademyPresentComponent)
)

export type {
  AcademyPresentPropsType,
  AcademyPresentPropsOutType,
  AcademyPresentComponentType,
  AcademyPresentType,
}
