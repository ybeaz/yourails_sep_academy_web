import React, { useEffect, ReactElement } from 'react'

import { withPropsYrl, ImageYrl } from 'yourails_view_layer_web'
import { handleEvents as handleEventsIn, HandleEventType } from '../../DataLayer/index.handleEvents'
import { FooterFrame } from '../Frames/FooterFrame/FooterFrame'
import { HeaderFrame } from '../Frames/HeaderFrame/HeaderFrame'
import { StubUserGoodbye } from '../Components/StubUserGoodbye'
import { MainFrame } from '../Frames/MainFrame/MainFrame'
import { SERVERS_MAIN } from '../../Constants/servers.const'
import { DICTIONARY } from '../../Constants/dictionary.const'

interface StubForUserResearchPropsType {
  routeProps: {
    location: {
      pathname: string
    }
  }
  themeDafault: string
  handleEvents: HandleEventType
}

export const StubForUserResearchComponent: React.FunctionComponent<
  StubForUserResearchPropsType
> = ({ handleEvents, themeDafault }: StubForUserResearchPropsType): ReactElement => {
  useEffect(() => {
    handleEvents({}, { typeEvent: 'SET_THEME', data: themeDafault })
  }, [])

  const headerFrameProps = {
    brandName: 'YouRails',
    moto: DICTIONARY['Watch_Videos_With_a_Purpose']['en'], // TODO: make it dynamic from store
    logoPath: `${SERVERS_MAIN.remote}/images/logoYouRailsV21.png`,
    contentComponentName: 'StubForUserResearch',
    isButtonSideMenuLeft: true,
    isLogoGroup: true,
    isButtonAddCourse: false,
    isButtonAuthUser: false,
    isSelectLanguage: true,
    isButtonThemeToggle: true,
    isSeachGroup: false,
    isButtonBack: false,
    isPageActionsGroup: false,
    isButtonsShare: false,
  }

  const mainFrameProps = {
    screenType: 'StubForUserResearch',
    contentComponentName: 'none',
    brandName: 'YouRails',
  }

  const imageBottomProps = {
    classAdded: 'Image_bottom',
    src: `${SERVERS_MAIN.remote}/images/city.svg`,
    handleEvents,
  }

  return (
    <div className='StubForUserResearch'>
      <MainFrame {...mainFrameProps}>
        {/* header */}
        <HeaderFrame {...headerFrameProps} />
        {/* middle-left */}
        {null}
        {/* middle-main */}
        <StubUserGoodbye />
        {/* middle-right */}
        {null}
        {/* footer */}
        <FooterFrame>
          <ImageYrl {...imageBottomProps} />
        </FooterFrame>
      </MainFrame>
    </div>
  )
}

export const StubForUserResearch: React.FunctionComponent<StubForUserResearchPropsType> =
  withPropsYrl({
    handleEvents: handleEventsIn,
  })(React.memo(StubForUserResearchComponent))
