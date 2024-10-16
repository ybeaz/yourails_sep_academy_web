import React, { ReactElement } from 'react'

import { useNavigate } from 'react-router-dom'
import { nanoid } from 'nanoid'

import { handleEvents as handleEventsIn } from '../../../DataLayer/index.handleEvents'
import { LANGUAGES_APP } from '../../../Constants/languagesApp.const'
import { SelectLanguage, SelectLanguagePropsType } from '../SelectLanguage'
import { getSideNavigationButtons } from './getSideNavigationButtons'

import { ButtonYrl, ButtonYrlPropsType, withStoreStateSelectedYrl } from 'yourails_view_layer_web'
import { withPropsYrl } from 'yourails_view_layer_web'

import {
  SideNavigationComponentPropsType,
  SideNavigationPropsType,
  SideNavigationPropsOutType,
  SideNavigationComponentType,
  SideNavigationType,
} from './SideNavigationTypes'

/**
 * @description Component to render SideNavigation
 * @import import { SideNavigation, SideNavigationPropsType, SideNavigationPropsOutType, SideNavigationType } 
             from '../Components/SideNavigation/SideNavigation'
 */
const SideNavigationComponent: SideNavigationComponentType = (
  props: SideNavigationComponentPropsType
) => {
  const {
    classAdded,
    storeStateSlice: { sub, language, isSideNavLeftVisible },
    handleEvents,
  } = props

  const navigate = useNavigate()

  const buttonPropsArr: ButtonYrlPropsType[] = getSideNavigationButtons({
    navigate,
    sub,
    language,
  })

  const getButtons: Function = (buttonPropsArr2: any[]): ReactElement[] => {
    return buttonPropsArr2.map(buttonProps => {
      const key = nanoid()
      return (
        <div key={key} className='_item'>
          <ButtonYrl {...buttonProps} />
        </div>
      )
    })
  }

  const classNameAdd = isSideNavLeftVisible ? 'SideNavigation_show' : ''

  const languageSelectProps: SelectLanguagePropsType = {
    LANGUAGES: LANGUAGES_APP,
    language,
    mode: null,
    typeEvent: 'SELECT_LANGUAGE_APP',
    classAdded: 'SelectLanguage__AppLanguage',
    languagesSelected: [{ value: language }],
  }

  const propsOut: SideNavigationPropsOutType = {}

  return (
    <div
      className={`SideNavigation ${classNameAdd}`}
      onClick={event => handleEvents(event, { typeEvent: 'SET_SIDE_NAVIGATION_LEFT' })}
    >
      <div
        className='__content'
        onClick={event => handleEvents(event, { typeEvent: 'STOP_PROPAGATION' })}
      >
        <div className='__menuGroup'>
          <div className='_groupItem _languageSelect'>
            <SelectLanguage {...languageSelectProps} />
          </div>
          {getButtons(buttonPropsArr)}
        </div>
      </div>
    </div>
  )
}

const storeStateSliceProps: string[] = ['sub', 'language', 'isSideNavLeftVisible']

export const SideNavigation: React.FunctionComponent = withPropsYrl({
  handleEvents: handleEventsIn,
})(withStoreStateSelectedYrl(storeStateSliceProps, React.memo(SideNavigationComponent)))

export type {
  SideNavigationPropsType,
  SideNavigationPropsOutType,
  SideNavigationComponentType,
  SideNavigationType,
}
