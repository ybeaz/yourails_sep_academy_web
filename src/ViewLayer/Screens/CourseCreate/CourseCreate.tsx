import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'

import { DICTIONARY } from '../../../Constants/dictionary.const'
import { ImageYrl } from '../../ComponentsLibrary/ImageYrl/ImageYrl'
import { SideNavigation } from '../../Components/SideNavigation'
import { HeaderFrame } from '../../Frames/HeaderFrame/HeaderFrame'
import { FooterFrame } from '../../Frames/FooterFrame/FooterFrame'
import { MainFrame } from '../../Frames/MainFrame/MainFrame'
import { SERVERS_MAIN } from '../../../Constants/servers.const'
import { handleEvents } from '../../../DataLayer/index.handleEvents'
import { useEffectedInitialRequests } from '../../Hooks/useEffectedInitialRequests'
// import { CourseCreateBody } from '../../Components/CourseCreateBody/CourseCreateBody'

import {
  withPropsYrl,
  withStoreStateSelectedYrl,
} from '../../ComponentsLibrary/'
import { getClasses } from '../../../Shared/getClasses'
import {
  CourseCreateComponentPropsType,
  CourseCreatePropsType,
  CourseCreatePropsOutType,
  CourseCreateComponentType,
  CourseCreateType,
} from './CourseCreateTypes'

/**
 * @description Component to render CourseCreate
 * @import import { CourseCreate, CourseCreatePropsType, CourseCreatePropsOutType, CourseCreateType } 
             from '../Components/CourseCreate/CourseCreate'
 */
const CourseCreateComponent: CourseCreateComponentType = (
  props: CourseCreateComponentPropsType
) => {
  const {
    classAdded,
    storeStateSlice: { language },
  } = props

  const propsOut: CourseCreatePropsOutType = {
    headerFrameProps: {
      brandName: 'YouRails Academy',
      moto: DICTIONARY['Together_know_everything'][language],
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
      screenType: 'CourseCreate',
    },
    // courseCreateBodyProps: {

    // },
  }

  return (
    <div className={getClasses('CourseCreate', classAdded)}>
      <MainFrame {...propsOut.mainFrameProps}>
        {/* header */}
        <HeaderFrame {...propsOut.headerFrameProps} />
        {/* middle-left */}
        {null}
        {/* middle-main */}
        <div>{'<CourseCreateBody {...propsOut.courseCreateBodyProps} />'}</div>
        {/* <ProfileBody {...propsOut.profileBodyProps} /> */}
        {/* middle-right */}
        {null}
        {/* footer */}
        {null}
      </MainFrame>
      <SideNavigation />
    </div>
  )
}

const storeStateSliceProps: string[] = ['articles', 'language']
export const CourseCreate = withStoreStateSelectedYrl(
  storeStateSliceProps,
  React.memo(CourseCreateComponent)
)

export type {
  CourseCreatePropsType,
  CourseCreatePropsOutType,
  CourseCreateComponentType,
  CourseCreateType,
}
