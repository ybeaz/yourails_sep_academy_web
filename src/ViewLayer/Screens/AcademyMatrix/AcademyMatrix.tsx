import React, { ReactElement } from 'react'
import { useSelector } from 'react-redux'
import { Helmet } from 'react-helmet'
import { useParams } from 'react-router-dom'

import { DICTIONARY } from '../../../Constants/dictionary.const'
import { SideNavigation } from '../../Components/SideNavigation'
import { HeaderFrame } from '../../Frames/HeaderFrame/HeaderFrame'
import { getEffectedRequests } from '../../Hooks/getEffectedRequests'
import { ContentPlate } from '../../Components/ContentPlate'
import { getContentComponentName } from '../../../Shared/getContentComponentName'
import { getInitialTeachContentLoading } from '../../Hooks/getInitialTeachContentLoading'
import { getMultipliedTimeStr } from '../../../Shared/getMultipliedTimeStr'
import { getParsedUrlQuery } from '../../../Shared/getParsedUrlQuery'
import { DurationObjType } from '../../../Interfaces/DurationObjType'
import { RootStoreType } from '../../../Interfaces/RootStoreType'
import { MainFrame } from '../../Frames/MainFrame/MainFrame'
import { SITE_META_DATA } from '../../../Constants/siteMetaData.const'
import { SERVERS_MAIN } from '../../../Constants/servers.const'

import {
  AcademyMatrixPropsType,
  AcademyMatrixPropsOutType,
  AcademyMatrixComponentType,
  AcademyMatrixType,
} from './AcademyMatrixTypes'

/**
 * @description Component to render AcademyMatrix
 * @import import { AcademyMatrix, AcademyMatrixPropsType, AcademyMatrixPropsOutType, AcademyMatrixType } 
             from '../Components/AcademyMatrix/AcademyMatrix'
 */
const AcademyMatrixComponent: AcademyMatrixComponentType = (
  props: AcademyMatrixPropsType
) => {
  const query = getParsedUrlQuery()
  // console.info('AcademyMatrix [35]', { query, location })

  // const params = useParams()

  getEffectedRequests([
    { type: 'INIT_LOADING', data: { query } },
    'GET_COURSES',
  ])
  getInitialTeachContentLoading()

  const screenType = 'AcademyMatrix'

  const { titleSite, descriptionSite, canonicalUrlSite, langSite } =
    SITE_META_DATA

  const store = useSelector((store2: RootStoreType) => store2)
  const {
    language: languageStore,
    scorm: { durationMultiplier },
    courses,
    isLoaded: { isLoadedGlobalVars, isLoadedCourses },
    forms: { searchInput },
  } = store

  const getPlateMatix: Function = (courses2: any[]): ReactElement => {
    const plates = courses2.map((item, i) => {
      const { courseID, capture: courseCapture, modules } = item
      const {
        moduleID,
        capture: moduleCapture,
        contentType,
        contentID,
        duration,
      } = modules[0]

      const isShowingPlay = false
      const contentComponentName = getContentComponentName(contentType)

      const durationObj: DurationObjType = getMultipliedTimeStr(
        duration,
        durationMultiplier
      )
      const contentPlateProps = {
        contentComponentName,
        courseID,
        courseCapture,
        moduleCapture,
        durationObj,
        moduleID,
        contentID,
        isShowingPlay,
        screenType,
      }
      return <ContentPlate {...contentPlateProps} />
    })
    return <div className='AcademyMatrix__plates'>{plates}</div>
  }

  const coursesFiltered = courses.filter((item: any) =>
    item.searchString.includes(searchInput)
  )

  const propsOut: AcademyMatrixPropsOutType = {
    headerFrameProps: {
      brandName: 'YouRails Academy',
      moto: DICTIONARY['Together_know_everything'][languageStore],
      logoPath: `${SERVERS_MAIN.remote}/images/logoYouRails.png`,
      contentComponentName: 'SearchFormSep',
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
      isInstallMobileAppGroup: false,
    },
    mainFrameProps: {
      screenType,
    },
  }

  return (
    <div className='AcademyMatrix'>
      <Helmet>
        <html lang={langSite} />
        <meta charSet='utf-8' />
        <title>{titleSite}</title>
        <link rel='canonical' href={canonicalUrlSite} />
        <meta name='description' content={descriptionSite} />
      </Helmet>
      <MainFrame {...propsOut.mainFrameProps}>
        {/* header */}
        <HeaderFrame {...propsOut.headerFrameProps} />
        {/* middle-left */}
        {null}
        {/* middle-main */}
        {courses.length && isLoadedGlobalVars && isLoadedCourses ? (
          <div>{getPlateMatix(coursesFiltered)}</div>
        ) : null}
        {/* middle-right */}
        {null}
        {/* footer */}
        {null}
      </MainFrame>
      <SideNavigation />
    </div>
  )
}

export const AcademyMatrix: AcademyMatrixType = React.memo(
  AcademyMatrixComponent
)

export type {
  AcademyMatrixPropsType,
  AcademyMatrixPropsOutType,
  AcademyMatrixComponentType,
  AcademyMatrixType,
}