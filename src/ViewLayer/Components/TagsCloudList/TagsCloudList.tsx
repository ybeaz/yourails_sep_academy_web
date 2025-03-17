import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Tooltip } from 'antd'

import { handleEvents as handleEventsIn } from '../../../DataLayer/index.handleEvents'
import classNames from 'classnames'
import { ButtonYrl, withPropsYrl, withStoreStateSelectedYrl } from 'yourails_common'
import { getClasses } from 'yourails_common'
import { getRangeOfNumbers } from 'yourails_common'
import { getColorsRandomDarkTheme } from 'yourails_common'
import { ScreensEnumType } from 'yourails_common'
import { TagType } from 'yourails_common'
import { getExpertiseInfo, GetExpertiseInfoResType } from 'yourails_common'
import {
  TagsCloudListComponentPropsType,
  GetTagsCloudListPropsOutType,
  TagsCloudListPropsType,
  TagsCloudListPropsOutType,
  TagsCloudListComponentType,
  TagsCloudListType,
} from './TagsCloudListTypes'

/**
 * @description Component to render TagsCloudList
 * @import import { TagsCloudList, TagsCloudListPropsType, TagsCloudListPropsOutType, TagsCloudListType } 
             from '../Components/TagsCloudList/TagsCloudList'
 */
const TagsCloudListComponent: TagsCloudListComponentType = (
  props: TagsCloudListComponentPropsType
) => {
  const { classAdded, isDisplaying, isVisible, tagsCloud, handleEvents, screenActive } = props

  let navigate: any = useNavigate()
  if (screenActive === ScreensEnumType['AcademyMatrix']) navigate = null

  if (!tagsCloud.length) return null

  const range = getRangeOfNumbers({
    min: 16,
    max: 36,
    steps: tagsCloud.length,
    decimals: 2,
    isReverse: true,
  })
  const colorsRandomDarkTheme = getColorsRandomDarkTheme({
    numberOfColors: tagsCloud.length,
  })

  let gridTemplateColumns: string = 'repeat(3, 1fr)'

  if (screenActive === ScreensEnumType['AcademyMatrix']) {
    gridTemplateColumns = 'repeat(1, 1fr)'
  }

  const propsOut: TagsCloudListPropsOutType = {}

  return (
    <div
      className={classNames('TagsCloudList', {
        [classAdded]: !!classAdded,
        TagsCloudList_display_none: isDisplaying === false,
        TagsCloudList_visible_none: isVisible === false,
      })}
    >
      <div
        className='_tagsCloudWrapper'
        style={{
          gridTemplateColumns,
        }}
      >
        {tagsCloud.map((tagCloud: TagType, index: number) => {
          const { tagID, completed, count, value } = tagCloud

          const {
            level,
            name,
            min,
            max,
            iconName,
            left,
            levelNext: {
              level: nextLevel,
              name: nextName,
              min: nextMin,
              max: nextMax,
              iconName: nextIconName,
            },
          }: GetExpertiseInfoResType = getExpertiseInfo({ completed })

          const propsOut: GetTagsCloudListPropsOutType = {
            buttonTagMdCheckProps: {
              classAdded: 'Button_tagMdCheck',
              icon: 'MdCheck',
              iconColor: colorsRandomDarkTheme[index],
              handleEvents,
              action: {
                typeEvent: '',
                data: {},
              },
              isDisplaying: true,
            },
            buttonTagExpertiseProps: {
              classAdded: 'Button_tagExpertise',
              icon: iconName,
              iconColor: colorsRandomDarkTheme[index],
              handleEvents,
              action: {
                typeEvent: '',
                data: {},
              },
              isDisplaying: true,
            },
          }

          const tagsCloudBodyTooltipContentTagButton = (
            <div className='_tagsCloudBodyTooltipContentTagButton'>
              {name && (
                <div className='_tooltipRow'>
                  <b>{name}</b> level of proficiency.
                </div>
              )}
              <div className='_tooltipRow'>
                <b>{completed}</b> of <b>{count}</b> modules are completed.
              </div>
              {completed < count && (
                <>
                  <div className='_tooltipRow'>
                    <b>{left}</b> modules to the next level.
                  </div>
                  <div className='_tooltipRow'>
                    <b>{nextName}</b> is the next level.
                  </div>
                </>
              )}
              {completed >= count && (
                <div className='_tooltipRow'>You finished. Congratulations.</div>
              )}
            </div>
          )

          return (
            <div
              key={tagID}
              className='_tagCloud'
              onClick={() =>
                handleEvents({}, { type: 'CLICK_ON_TAG', data: { tagCloud, navigate } })
              }
            >
              <Tooltip className='_tooltip' title={tagsCloudBodyTooltipContentTagButton}>
                <div
                  className='_tagCloudWrapper'
                  style={{
                    fontSize: `${range[index]}px`,
                    color: colorsRandomDarkTheme[index],
                  }}
                >
                  {completed >= count && <ButtonYrl {...propsOut.buttonTagMdCheckProps} />}
                  <span className='_spanTagName'>{value}</span>
                  <span className='_spanCount'>{count}</span>
                  <span className='_spanCompleted'>{completed}</span>
                  <ButtonYrl {...propsOut.buttonTagExpertiseProps} />
                </div>
              </Tooltip>
            </div>
          )
        })}
      </div>
    </div>
  )
}

const storeStateSliceProps: string[] = []
const TagsCloudList: TagsCloudListType = withPropsYrl({ handleEvents: handleEventsIn })(
  withStoreStateSelectedYrl(storeStateSliceProps, React.memo(TagsCloudListComponent))
)

export type { TagsCloudListPropsType, TagsCloudListType }
export { TagsCloudList }
