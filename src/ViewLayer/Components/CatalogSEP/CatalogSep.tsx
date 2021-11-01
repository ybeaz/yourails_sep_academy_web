import React from 'react'
import { useSelector } from 'react-redux'

import { getStdDictionaryOptions2 } from './getStdDictionaryOptions2'
import { getAgeOptions } from './getAgeOptions'
import { getLanguagesOptions } from './getLanguagesOptions'
import { getCountriesOptions } from './getCountriesOptions'
import { getStdDictionaryOptions } from './getStdDictionaryOptions'
import { handleEvents } from '../../../DataLayer/index.handleEvents'
import { DICTIONARY } from '../../../Constants/dictionary.const'
import { SORT_BY } from '../../../Constants/sortBy.const'
import { MEDIA } from '../../../Constants/media.const'
import { GENDER } from '../../../Constants/gender.const'
import { AGE } from '../../../Constants/age.const'
import { Button } from './../Button'
import { Input } from './../Input'
import { Select } from './../Select'
import { LANGUAGES } from '../../../Constants/languages.const'
import { COUNTRIES } from '../../../Constants/countries.const'
import { CATEGORIES_TO_EXCHANGE } from '../../../Constants/categoriesToExchange.const'
import { IRootStore } from '../../../Interfaces/IRootStore'
import { nanoid } from 'nanoid'

import { Select as SelectAntd } from 'antd'
import 'antd/dist/antd.css'

/**
 * @description Component Catalog for Skills Exchange Page (SEP)
 */

export const CatalogSep: React.FunctionComponent<any> = (props: any) => {
  const { language } = useSelector((store2: IRootStore) => store2)

  const defaultOption2 = {
    text: DICTIONARY.notSelected[language],
    value: 'notSelected',
    selected: false,
  }

  const defaultOption = DICTIONARY.notSelected

  const stubOnAction = () => console.info('CatalogSep [306]')

  const childrenProps = {
    selectSkillsOfferedProps: {
      allowClear: true,
      componentId: nanoid(),
      defaultValue: [],
      filterOption: (input, option) =>
        option?.children.toLowerCase().indexOf(input.toLowerCase()) >= 0,
      mode: null,
      onBlur: stubOnAction,
      onChange: stubOnAction,
      onFocus: stubOnAction,
      onSearch: stubOnAction,
      optionFilterProp: 'children',
      options: getStdDictionaryOptions(
        CATEGORIES_TO_EXCHANGE,
        language,
        defaultOption
      ),
      placeholder: DICTIONARY['select'][language],
      showSearch: true,
      style: { width: '100%' },
    },
    selectSkillsRequiredProps: {
      allowClear: true,
      componentId: nanoid(),
      defaultValue: [],
      filterOption: (input, option) =>
        option?.children.toLowerCase().indexOf(input.toLowerCase()) >= 0,
      mode: 'multiple' as 'multiple' | 'tags',
      onBlur: stubOnAction,
      onChange: stubOnAction,
      onFocus: stubOnAction,
      onSearch: stubOnAction,
      optionFilterProp: 'children',
      options: getStdDictionaryOptions(
        CATEGORIES_TO_EXCHANGE,
        language,
        defaultOption
      ),
      placeholder: DICTIONARY['select'][language],
      showSearch: true,
      style: { width: '100%' },
    },
    selectCountryRequiredProps: {
      classAdded: 'Select_countryRequired',
      sizeOnBlur: 1,
      size: 6,
      options: getCountriesOptions(COUNTRIES, language, defaultOption2),
      multiple: true,
      componentId: nanoid(),
      language,
      typeEvent: 'SELECT_SKILLS_REQ_COUNTRY',
    },
    selectLanguageRequiredProps: {
      classAdded: 'Select_languageRequired',
      sizeOnBlur: 1,
      size: 6,
      options: getLanguagesOptions(LANGUAGES, language, defaultOption2),
      multiple: true,
      componentId: nanoid(),
      language,
      typeEvent: 'SELECT_SKILLS_REQ_LANG',
    },
    inputAgeFromRequiredProps: {
      classAdded: 'Input_ageFromToRequired',
      type: 'text',
      placeholder: DICTIONARY['optional'][language],
      typeEvent: 'string',
      storeFormProp: 'string',
    },
    inputAgeToRequiredProps: {
      classAdded: 'Input_ageFromToRequired',
      type: 'text',
      placeholder: DICTIONARY['optional'][language],
      typeEvent: 'string',
      storeFormProp: 'string',
    },
    selectGenderRequiredProps: {
      allowClear: true,
      componentId: nanoid(),
      defaultValue: [], // defaultOption['en']
      filterOption: (input, option) =>
        option?.children.toLowerCase().indexOf(input.toLowerCase()) >= 0,
      mode: null,
      onBlur: stubOnAction,
      onChange: stubOnAction,
      onFocus: stubOnAction,
      onSearch: stubOnAction,
      optionFilterProp: 'children',
      options: getStdDictionaryOptions(GENDER, language, defaultOption),
      placeholder: DICTIONARY['select'][language],
      showSearch: true,
      style: { width: '100%' },
    },
    selectMediaRequiredProps: {
      allowClear: true,
      componentId: nanoid(),
      defaultValue: [],
      filterOption: (input, option) =>
        option?.children.toLowerCase().indexOf(input.toLowerCase()) >= 0,
      mode: 'multiple' as 'multiple' | 'tags',
      onBlur: stubOnAction,
      onChange: stubOnAction,
      onFocus: stubOnAction,
      onSearch: stubOnAction,
      optionFilterProp: 'children',
      options: getStdDictionaryOptions(MEDIA, language, defaultOption),
      placeholder: DICTIONARY['select'][language],
      showSearch: true,
      style: { width: '100%' },
    },
    inputDescriptionRequiredProps: {
      classAdded: 'Input_descriptionRequired',
      type: 'text',
      placeholder: DICTIONARY['optional'][language],
      typeEvent: 'string',
      storeFormProp: 'string',
    },
    selectSortByProps: {
      allowClear: true,
      componentId: nanoid(),
      defaultValue: SORT_BY['descending'][language],
      filterOption: (input, option) =>
        option?.children.toLowerCase().indexOf(input.toLowerCase()) >= 0,
      mode: null,
      onBlur: stubOnAction,
      onChange: stubOnAction,
      onFocus: stubOnAction,
      onSearch: stubOnAction,
      optionFilterProp: 'children',
      options: getStdDictionaryOptions(SORT_BY, language, defaultOption),
      placeholder: DICTIONARY['select'][language],
      showSearch: true,
      style: { width: '100%' },
    },
    buttonSearchSepProps: {
      classAdded: 'Button_searchSep',
      icon: null,
      icon2: null,
      captureLeft: DICTIONARY['Search'][language],
      captureRight: '',
      action: { typeEvent: 'DEV_STAGE' },
      isDisplaying: true,
      tooltipText: '',
      tooltipPosition: '',
      isTooltipVisible: false,
      isUnderlined: false,
    },
  }

  const classCol01 = '_col_1 _titleForm'
  const classCol02 = '_col_1'

  return (
    <div className='CatalogSep'>
      <h1 className='__titleScreen'>
        {DICTIONARY['Members Search - Find a Skill Exchange Partner'][language]}
      </h1>
      <form className='__searchForm'>
        <div className='_row'>
          <div className={classCol01}>
            {DICTIONARY['You are suggesting to exchange'][language]}
            {' *'}
          </div>
          <div className={classCol02}>
            <SelectAntd {...childrenProps.selectSkillsOfferedProps} />
          </div>
        </div>
        <div className='_row'>
          <div className={classCol01}>
            {DICTIONARY['Find a skill exchange partner who has'][language]}
          </div>
          <div className={classCol02}>
            <SelectAntd {...childrenProps.selectSkillsRequiredProps} />
          </div>
        </div>
        <div className='_row'>
          <div className={classCol01}>
            {DICTIONARY['Country'][language]}
            {' *'}
          </div>
          <div className={classCol02}>
            <Select {...childrenProps.selectCountryRequiredProps} />
          </div>
        </div>
        <div className='_row'>
          <div className={classCol01}>
            {DICTIONARY['Speaking language'][language]}
            {' *'}
          </div>
          <div className={classCol02}>
            <Select {...childrenProps.selectLanguageRequiredProps} />
          </div>
        </div>
        <div className='_row'>
          <div className={classCol01}>{DICTIONARY['Age'][language]}</div>
          <div className={classCol02}>
            <span>{DICTIONARY['fromStart'][language]}:&nbsp;&nbsp;</span>
            <Input {...childrenProps.inputAgeFromRequiredProps} />
            <span>&nbsp;&nbsp;{DICTIONARY['to'][language]}:&nbsp;&nbsp;</span>
            <Input {...childrenProps.inputAgeToRequiredProps} />
          </div>
        </div>
        <div className='_row'>
          <div className={classCol01}>
            {DICTIONARY['Prefered gender'][language]}
          </div>
          <div className={classCol02}>
            <SelectAntd {...childrenProps.selectGenderRequiredProps} />
          </div>
        </div>
        <div className='_row'>
          <div className={classCol01}>
            {DICTIONARY['Prefered media or mean'][language]}
            {' *'}
          </div>
          <div className={classCol02}>
            <SelectAntd {...childrenProps.selectMediaRequiredProps} />
          </div>
        </div>
        <div className='_row'>
          <div className={classCol01}>
            {DICTIONARY['Description contains'][language]}
          </div>
          <div className={classCol02}>
            <Input {...childrenProps.inputDescriptionRequiredProps} />
          </div>
        </div>
        <div className='_row'>
          <div className={classCol01}>
            {DICTIONARY['Sort results by'][language]}
          </div>
          <div className={classCol02}>
            <SelectAntd {...childrenProps.selectSortByProps} />
          </div>
        </div>
        <div className='_row'>
          <div className={classCol01}></div>
          <div className={classCol02}>
            <Button {...childrenProps.buttonSearchSepProps} />
          </div>
        </div>
        <div className='_row'>
          <div className={classCol01}>
            {'* '}
            {DICTIONARY['Multi choice'][language]}
          </div>
        </div>
      </form>
    </div>
  )
}
