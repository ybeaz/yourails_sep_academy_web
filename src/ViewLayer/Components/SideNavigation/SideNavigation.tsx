import React from 'react'

import { handleEvents as handleEventsIn } from '../../../DataLayer/index.handleEvents'
import { LANGUAGES_APP } from 'yourails_common'
import { SelectLanguage, SelectLanguagePropsType } from '../SelectLanguage'
import {
  getSideNavigationItemsPropsArr,
  GetSideNavigationItemsPropsArrResType,
} from './getSideNavigationItemsPropsArr'
import { withStoreStateSelectedYrl } from 'yourails_common'
import { withPropsYrl } from 'yourails_common'
import { getComponentsList } from '../../Hooks/getComponentsList'

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
  props: SideNavigationComponentPropsType,
) => {
  const {
    classAdded,
    storeStateSlice: { sub, language, isSideNavLeftVisible },
    handleEvents,
  } = props

  const sideNavigationItemsPropsArr: GetSideNavigationItemsPropsArrResType[] =
    getSideNavigationItemsPropsArr({
      sub,
      language,
      handleEvents,
    })

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
      onClick={(event) => handleEvents(event, { typeEvent: 'SET_SIDE_NAVIGATION_LEFT' })}
    >
      <div
        className="__content"
        // onClick={event => handleEvents(event, { typeEvent: 'STOP_PROPAGATION' })}
      >
        <div className="__menuGroup">
          <div className="_groupItem _languageSelect">
            <SelectLanguage {...languageSelectProps} />
          </div>
          {getComponentsList(sideNavigationItemsPropsArr)}
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
