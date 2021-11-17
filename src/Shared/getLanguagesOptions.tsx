import React from 'react'
import { Select as SelectAntd } from 'antd'

import { ImageSvg } from '../ViewLayer/Components/ImageSvg'
import { ILanguages } from '../Interfaces/ILanguages'
import { IDictionary } from '../Constants/dictionary.const'
import { ISelectOptionAntD } from '../Interfaces/ISelectOptionAntD'

const { Option } = SelectAntd

interface IGetLanguagesOptionsJsx {
  (
    LANGUAGES: ILanguages,
    language: string,
    svgFileDir: string,
    classAdded: string
  ): JSX.Element[]
}

/**
 * @description Funciton to get array of JSX option elements - language options
 */
export const getLanguagesOptionsJsx: IGetLanguagesOptionsJsx = (
  LANGUAGES,
  language,
  svgFileDir,
  classAdded
) => {
  console.info('getLanguagesOptions [29]', {
    language,
    LANGUAGES,
  })

  return Object.keys(LANGUAGES).map((ln: string) => {
    const value = LANGUAGES[ln]['639-1']
    const [label] = LANGUAGES[ln][language]
    const twoChar6391 = LANGUAGES[ln]['639-1']

    let labelNext = label
    labelNext = LANGUAGES[ln][twoChar6391]
      ? LANGUAGES[ln][twoChar6391]
      : labelNext

    const { svgFile } = LANGUAGES[ln]

    const imageSvgProps = {
      classAdded: `ImageSvg_languagesOptions ${classAdded}`,
      src: `${svgFileDir}${svgFile}`,
    }

    return (
      <Option
        className={`_optionsAntd ${classAdded}`}
        value={value}
        isSelectOption={true}
      >
        <ImageSvg {...imageSvgProps} />
        {labelNext}
      </Option>
    )
  })
}

interface IGetLanguagesOptions {
  (
    LANGUAGES: ILanguages,
    languages: string[],
    defaultOption2: IDictionary
  ): ISelectOptionAntD[]
}

/**
 * @description Funciton to get array of option objects - language options
 */
export const getLanguagesOptions: IGetLanguagesOptions = (
  LANGUAGES,
  languages
) => {
  const lagnguagesMapped = Object.keys(LANGUAGES).map((ln: string) => {
    const [label] = LANGUAGES[ln]['en']
    return { label, value: ln }
  })

  const lagnguagesMappedNext = lagnguagesMapped.filter(itemMapped => {
    return languages.includes(itemMapped.value)
  })

  return lagnguagesMappedNext
}

interface IGetLanguagesOptions2 {
  (
    languages2: ILanguages,
    language2: string,
    defaultOption2: IDictionary
  ): ISelectOptionAntD[]
}

/**
 * @description Funciton to get array of option objects - language options
 */
export const getLanguagesOptions2: IGetLanguagesOptions2 = (
  languages2,
  language2,
  defaultOption2
) => {
  const lagnguagesMapped = Object.keys(languages2).map((ln: string) => {
    const [label] = languages2[ln][language2]
    return { label, value: ln }
  })

  const defaultOptionNext = {
    label: defaultOption2[language2],
    value: defaultOption2['en'],
  }

  return [defaultOptionNext, ...lagnguagesMapped]
}
