import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Helmet } from 'react-helmet'

import { ScreensEnumType } from '../../../Interfaces/ScreensEnumType'
import { getDateString } from '../../../Shared/getDateString'
import { getExpertiseInfo } from '../../../Shared/getExpertiseInfo'
import { getArrayItemByProp } from '../../../Shared/getArrayItemByProp'
import { DICTIONARY } from '../../../Constants/dictionary.const'
import { TagType, ProfileType, DocumentType } from '../../../@types/index'
import { getSlug } from '../../../Shared/getSlug'
import { handleEvents } from '../../../DataLayer/index.handleEvents'
import { HeaderFrame } from '../../Frames/HeaderFrame/HeaderFrame'
import { SERVERS_MAIN } from '../../../Constants/servers.const'
import { LoaderOverlayYrl, withStoreStateSelectedYrl } from 'yourails_view_layer_web'
import {
  CertificateFrameA,
  CertificateFrameAPropsType,
  CertificateFrameAPropsOutType,
  CertificateFrameAType,
} from '../../Frames/CertificateFrames/CertificateFrameA/CertificateFrameA'

import { withPropsYrl } from 'yourails_view_layer_web'
import { getClasses } from '../../../Shared/getClasses'
import { Certificate2Body } from '../../Components/Certificate2Body/Certificate2Body'
import {
  Certificate2ComponentPropsType,
  Certificate2PropsType,
  Certificate2PropsOutType,
  Certificate2ComponentType,
  Certificate2Type,
} from './Certificate2Types'

const CERTIFICATE_FRAMES_DICT: Record<string, CertificateFrameAType> = {
  CertificateFrameA,
}

const tagCloudFoundDefault = {
  tagID: '',
  dateCreated: 0,
  dateUpdated: 0,
  dateDeactivated: null,
  isActive: true,
  value: '',
  count: 0,
  completed: 0,
  moduleIDs: [],
} as TagType

/**
 * @description Component to render Certificate2
 * @link Inspired by: https://codepen.io/darthsteevo/pen/xxRgEbq
 * @import import { Certificate2, Certificate2PropsType, Certificate2PropsOutType, Certificate2Type } 
             from '../ViewLayer/Screens/Certificate2/Certificate2'
 */
const Certificate2Component: Certificate2ComponentType = (
  props: Certificate2ComponentPropsType
) => {
  const {
    classAdded,
    storeStateSlice: { language, sub, tagsCloud, profiles },
  } = props

  const params = useParams()
  const tagID = params?.tagID

  const tagCloudFound: TagType =
    tagsCloud.find((tagCloud: TagType) => tagCloud.tagID === tagID) ||
    tagsCloud[0] ||
    tagCloudFoundDefault

  const profileFound: ProfileType = getArrayItemByProp({
    arr: profiles,
    propName: 'userID',
    propValue: sub,
  })

  const screenType = ScreensEnumType['Certificate2']

  useEffect(() => {
    handleEvents({}, { type: 'SET_SCREEN_ACTIVE', data: { screenActive: screenType } })
    if (sub)
      handleEvents(
        {},
        {
          typeEvent: 'GET_TAGS',
          data: {
            isLoaderOverlay: true,
            tagID,
          },
        }
      )
    // }
  }, [sub])

  const dateMilitaty = getDateString({
    timestamp: Date.now(),
    style: 'military',
    hours: false,
    minutes: false,
    seconds: false,
  })

  const tagCloudValue = tagCloudFound.value
  const completed = tagCloudFound.completed
  const titlePage = `${dateMilitaty}-qualification-${tagCloudFound.tagID}-${tagCloudFound.value}`
  const expertiseInfo = getExpertiseInfo({ completed })
  const borderImageSourceUrl = expertiseInfo.borderImageSourceUrl

  const CertificateFrame = CERTIFICATE_FRAMES_DICT['CertificateFrameA']

  const propsOut: Certificate2PropsOutType = {
    headerFrameProps: {
      brandName: 'YouRails',
      moto: DICTIONARY['Watch_Videos_With_a_Purpose'][language],
      logoPath: `${SERVERS_MAIN.remote}/images/logoYouRails.png`,
      contentComponentName: 'SearchFormSep',
      tagID,
      isButtonSideMenuLeft: true,
      isLogoGroup: true,
      isButtonAddCourse: false,
      isButtonAuthUser: true,
      isSelectLanguage: true,
      isButtonThemeToggle: true,
      isSeachGroup: false,
      isButtonBack: true,
      isPageActionsGroup: true,
      isButtonsShare: true,
    },
    certificateFrameProps: {
      borderImageSourceUrl,
    },
    certificate2BodyProps: {
      language,
      profile: profileFound,
      tagCloud: tagCloudFound,
      expertiseInfo,
    },
  }

  return (
    <div className={getClasses('Certificate2', classAdded)}>
      {tagCloudFound?.tagID && (
        <>
          <Helmet>
            <html lang={language} />
            <meta charSet='utf-8' />
            <meta name='viewport' content='width=device-width,initial-scale=1' />
            <meta name='google' content='notranslate' />
            <title>{titlePage}</title>
            <link rel='canonical' href={location.href} />
            <meta name='description' content={tagCloudValue} />
          </Helmet>
          <div className='_headerFrameWrapper _noPrint'>
            <HeaderFrame {...propsOut.headerFrameProps} />
          </div>
          <CertificateFrame {...propsOut.certificateFrameProps}>
            <Certificate2Body {...propsOut.certificate2BodyProps} />
          </CertificateFrame>
        </>
      )}
      <LoaderOverlayYrl />
    </div>
  )
}

const storeStateSliceProps: string[] = ['language', 'sub', 'profiles', 'tagsCloud']
export const Certificate2: Certificate2Type = withStoreStateSelectedYrl(
  storeStateSliceProps,
  React.memo(Certificate2Component)
)

export type {
  Certificate2PropsType,
  Certificate2PropsOutType,
  Certificate2ComponentType,
  Certificate2Type,
}
