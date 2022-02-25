import React, { useState, useEffect, useRef, ReactElement } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { nanoid } from 'nanoid'
import { Select as SelectAntd } from 'antd'
import 'antd/dist/antd.css'

import { getOptionsUserLanguages } from '../../Shared/getOptionsUserLanguages'
import { getOptionsAntdStandard } from '../../Shared/getOptionsAntdStandard'
import { COUNTRIES } from '../../Constants/countries.const'
import { MEDIA } from '../../Constants/media.const'
import { GENDER } from '../../Constants/gender.const'
import { LANGUAGES } from '../../Constants/languages.const'
import { CATEGORIES_TO_EXCHANGE } from '../../Constants/categoriesToExchange.const'
import { DICTIONARY } from '../../Constants/dictionary.const'
import { IAddedProps } from '../../Interfaces/IAddedProps'
import { Button } from './Button'
import { IUser } from '../../Interfaces/IRootStore'

interface IOptionStandard {
  label: string
  value: string
}
interface IProfilePlateArgs {
  profile: IUser
  language: string
}

export const ProfilePlate: React.FunctionComponent<IProfilePlateArgs> = (
  props: IProfilePlateArgs
): ReactElement => {
  const { language, profile } = props

  const {
    userGender,
    userMedia,
    userAvatar,
    userNameNick,
    userLocaleCountry,
    userSkillsExpertise,
    userLanguages,
    userInfoAbout,
  } = profile

  const stubOnAction = () => {}

  // const optionsUserLocaleCountry = getOptionsUserLocaleCountry(
  //   userLocaleCountry,
  //   COUNTRIES,
  //   language
  // )

  // const optionsUserGender = getOptionsUserGender(
  //       userGender,
  //   COUNTRIES,
  //   language
  // )

  // const optionsUserMedia = getOptionsUserMedia(
  //   userMedia,
  //   COUNTRIES,
  //   language
  // )

  console.info('ProfilePlate [34]', {
    profile,
    language,
  })

  const filterOption = (input: any, option: IOptionStandard) =>
    option?.label?.toLowerCase().indexOf(input.toLowerCase()) >= 0 ||
    option?.value?.toLowerCase().indexOf(input.toLowerCase()) >= 0

  const getSelectAntdAddedProps = (input: string[]): any => {
    let res: any = { defaultValue: [] }
    if (input && input.length) {
      res = {
        value: input,
      }
    }
    return res
  }

  const propsOut = {
    buttonAvatarProps: {
      icon: userAvatar ? null : 'FaUserCircle',
      icon2: null,
      imageSrc: userAvatar,
      captureLeft: '',
      captureRight: '',
      classAdded: 'Button_Avatar',
      action: {},
      isDisplaying: true,
      tooltipText: '',
      tooltipPosition: '',
      isTooltipVisibleForced: false,
      isUnderlined: false,
    },
    selectCommonPart: {
      allowClear: false,
      componentId: nanoid(),
      filterOption,
      mode: 'multiple' as 'multiple' | 'tags',
      onBlur: stubOnAction,
      onChange: stubOnAction,
      onFocus: stubOnAction,
      onSearch: stubOnAction,
      optionFilterProp: 'children',
      placeholder: DICTIONARY['select'][language],
      style: { width: '100%' },
      showSearch: false,
      open: false,
      removeIcon: null,
      bordered: false,
    },
    userSkillsExpertiseProps() {
      return {
        ...this.selectCommonPart,
        ...getSelectAntdAddedProps(userSkillsExpertise),
        options: getOptionsAntdStandard(
          userSkillsExpertise,
          CATEGORIES_TO_EXCHANGE,
          language
        ),
      }
    },
    userLanguagesProps() {
      return {
        ...this.selectCommonPart,
        ...getSelectAntdAddedProps(userLanguages),
        options: getOptionsUserLanguages(userLanguages, LANGUAGES, language),
      }
    },
    userMediaProps() {
      return {
        ...this.selectCommonPart,
        ...getSelectAntdAddedProps(userMedia),
        options: getOptionsAntdStandard(userMedia, MEDIA, language),
      }
    },
    userGenderProps() {
      return {
        ...this.selectCommonPart,
        ...getSelectAntdAddedProps([userGender]),
        options: getOptionsAntdStandard([userGender], GENDER, language),
      }
    },
  }

  return (
    <div className='ProfilePlate'>
      <div className='_col'>
        <div className='_button'>
          <Button {...propsOut.buttonAvatarProps} />
        </div>
        <div className='_userNameNick'>{userNameNick}</div>
      </div>

      <div className='_col'>
        <label>Компетенции</label>
        <div className='_userSkillsExpertise'>
          <SelectAntd {...propsOut.userSkillsExpertiseProps()} />
        </div>
      </div>

      <div className='_col'>
        <label>Языки</label>
        <div className='_userLanguages'>
          <SelectAntd {...propsOut.userLanguagesProps()} />
        </div>
      </div>

      <div className='_col'>
        <label>Медиа</label>
        <div className='_userMedia'>
          <SelectAntd {...propsOut.userMediaProps()} />
        </div>
      </div>

      <div className='_col'>
        <label>Пол</label>
        <div className='_userMedia'>
          <SelectAntd {...propsOut.userGenderProps()} />
        </div>
      </div>

      <div className='_col _userLocaleCountry'>{userLocaleCountry}</div>
      <div className='_col _userInfoAbout'>{userInfoAbout}</div>
    </div>
  )
}
