import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Tooltip } from 'antd'

import { ScreensEnumType } from 'yourails_common'
import { SCREENS_DICT } from 'yourails_common'
import { PaginationNameEnumType } from 'yourails_common'
import { TagType } from 'yourails_common'
import { ButtonYrl, InputGroupYrl, withPropsYrl, withStoreStateSelectedYrl } from 'yourails_common'
import { handleEvents as handleEventsIn } from '../../../DataLayer/index.handleEvents'
import { getClasses } from 'yourails_common'
import { PaginationNavigation } from '../../Components/PaginationNavigation/PaginationNavigation'
import { getExpertiseInfo, GetExpertiseInfoResType } from 'yourails_common'
import { getRangeOfNumbers } from 'yourails_common'
import { getColorsRandomDarkTheme } from 'yourails_common'
import { TagsCloudList } from '../TagsCloudList/TagsCloudList'
import {
  TagsCloudBodyComponentPropsType,
  TagsCloudBodyPropsType,
  GetTagsCloudListType,
  TagsCloudBodyPropsOutType,
  TagsCloudBodyComponentType,
  TagsCloudBodyType,
} from './TagsCloudBodyTypes'

/**
 * @description Component to render TagsCloudBody
 * @link https://www.npmjs.com/package/react-tagcloud
 * @import import { TagsCloudBody, TagsCloudBodyPropsType, TagsCloudBodyPropsOutType, TagsCloudBodyType } 
             from '../Components/TagsCloudBody/TagsCloudBody'
 */
const TagsCloudBodyComponent: TagsCloudBodyComponentType = (
  props: TagsCloudBodyComponentPropsType
) => {
  const {
    classAdded,
    headline,
    storeStateSlice: { tagsCloud, pageTags, screenActive },
    handleEvents,
  } = props

  const propsOut: TagsCloudBodyPropsOutType = {
    paginationNavigationProps: {
      paginationName: PaginationNameEnumType['pageTags'],
    },
    inputGroupProps: {
      inputProps: {
        classAdded: 'Input_search',
        type: 'text',
        placeholder: SCREENS_DICT[ScreensEnumType['TagsCloud']].placeholder,
        typeEvent: 'ONCHANGE_INPUT_SEARCH',
        typeEventOnEnter: 'CLICK_ON_SEARCH_BUTTON',
        handleEvents,
        dataEventOnEnter: {
          storeFormProp: SCREENS_DICT[ScreensEnumType['TagsCloud']].storeFormProp,
        },
        storeFormProp: SCREENS_DICT[ScreensEnumType['TagsCloud']].storeFormProp,
      },
      buttonSubmitProps: {
        icon: 'MdSearch',
        classAdded: 'Button_MdSearch',
        handleEvents,
        action: {
          typeEvent: 'CLICK_ON_SEARCH_BUTTON',
          data: { storeFormProp: SCREENS_DICT[ScreensEnumType['TagsCloud']].storeFormProp },
        },
      },
    },
  }

  let gridTemplateColumns: string = 'repeat(3, 1fr)'

  if (screenActive === ScreensEnumType['AcademyMatrix']) {
    gridTemplateColumns = 'repeat(1, 1fr)'
  }

  return (
    <div className={getClasses('TagsCloudBody', classAdded)}>
      {screenActive !== ScreensEnumType['AcademyMatrix'] && (
        <>
          <div className='_inputGroupYrlWrapper'>
            <InputGroupYrl {...propsOut.inputGroupProps} />
          </div>
          <div className='_headlineWrapper'>
            <h2 className='_h2' onClick={() => handleEvents({}, { type: 'CLICK_ON_ALL_TAGS' })}>
              {headline}
            </h2>
          </div>
        </>
      )}
      <div
        className='_tagsCloudWrapper'
        style={{
          gridTemplateColumns,
        }}
      >
        <TagsCloudList
          tagsCloud={tagsCloud}
          handleEvents={handleEvents}
          screenActive={screenActive}
        />
      </div>
      {screenActive !== ScreensEnumType['AcademyMatrix'] &&
        !(pageTags.first === 0 && pageTags.offset > tagsCloud.length) && (
          <div className='_paginationNavigationWrapper'>
            <PaginationNavigation {...propsOut.paginationNavigationProps} />
          </div>
        )}
    </div>
  )
}

const storeStateSliceProps: string[] = ['tagsCloud', 'pageTags', 'screenActive']
export const TagsCloudBody: TagsCloudBodyType = withPropsYrl({ handleEvents: handleEventsIn })(
  withStoreStateSelectedYrl(storeStateSliceProps, React.memo(TagsCloudBodyComponent))
)

export type {
  TagsCloudBodyPropsType,
  TagsCloudBodyPropsOutType,
  TagsCloudBodyComponentType,
  TagsCloudBodyType,
}
