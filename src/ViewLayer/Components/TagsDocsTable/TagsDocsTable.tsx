import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'

import { DICTIONARY } from '../../../Constants/dictionary.const'
import { withPropsYrl, ButtonYrl } from '../../ComponentsLibrary/'
import { handleEvents as handleEventsIn } from '../../../DataLayer/index.handleEvents'
import { TagType } from '../../../@types/'
import { getClasses, getDateString, getSlug } from '../../../Shared/'
import { PaginationNavigation } from '../../Components/PaginationNavigation/PaginationNavigation'
import { getExpertiseInfo, GetExpertiseInfoResType } from '../../../Shared/getExpertiseInfo'
import { PaginationNameEnumType } from '../../../Interfaces'
import {
  TagsDocsTableItemPropsOutType,
  TagsDocsTableComponentPropsType,
  TagsDocsTablePropsType,
  TagsDocsTablePropsOutType,
  TagsDocsTableComponentType,
  TagsDocsTableType,
} from './TagsDocsTableTypes'

/**
 * @description Component to render TagsDocsTable
 * @import import { TagsDocsTable, TagsDocsTablePropsType, TagsDocsTablePropsOutType, TagsDocsTableType } 
             from '../Components/TagsDocsTable/TagsDocsTable'
 */
const TagsDocsTableComponent: TagsDocsTableComponentType = (
  props: TagsDocsTableComponentPropsType
) => {
  const { classAdded, handleEvents, tagsCloud, pageTags, language } = props

  const navigate = useNavigate()

  const getTagsDocsTable = (tagsCloudIn: TagType[]) => {
    const documentsRows: React.ReactElement[] = tagsCloudIn.map((tagCloud: TagType) => {
      const {
        tagID,
        isActive,
        dateCreated,
        dateUpdated,
        dateDeactivated,
        value,
        count,
        completed,
        moduleIDs,
      } = tagCloud

      const {
        level,
        name: levelName,
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

      // const dateString = getDateString({
      //   timestamp: dateCreated,
      //   style: 'US',
      // })

      // const pathnameModule = `/m/${moduleID}/${getSlug(capture)}`
      // const pathnameDocument = `/d/${documentID}`

      const propsOutItem: TagsDocsTableItemPropsOutType = {
        buttonTagMdCheckProps: {
          classAdded: 'Button_tagMdCheck',
          icon: 'MdCheck',
          // iconColor: colorsRandomDarkTheme[index],
          action: {
            typeEvent: '',
            data: {},
          },
          isDisplaying: true,
        },
        buttonTagExpertiseProps: {
          classAdded: 'Button_tagExpertise',
          icon: iconName,
          // iconColor: colorsRandomDarkTheme[index],
          action: {
            typeEvent: '',
            data: {},
          },
          isDisplaying: true,
        },
      }

      return (
        <div key={tagID} className='_row _row_tagsCloud'>
          <div className='_cell _name'>{value}</div>
          <div className='_cell _completedTotal'>
            <span className='_span'>{completed}</span>/<span className='_span'>{count}</span>
          </div>
          <div className='_cell _level'>
            <>
              <span className='_span'>
                <ButtonYrl {...propsOutItem.buttonTagExpertiseProps} />
              </span>
              <span className='_span'>{level}</span>
              <span className='_span'>{levelName}</span>
              {completed >= count && (
                <span className='_span'>
                  <ButtonYrl {...propsOutItem.buttonTagMdCheckProps} />
                </span>
              )}
            </>
          </div>
          <div className='_cell _document_link'>
            {tagID}
            {/* <NavLink {...propsOut.linkToDocumentProps} /> */}
          </div>
        </div>
      )
    })

    return (
      <section className={getClasses('_tagsCloudTable', classAdded)}>
        <header className='_row _row_header'>
          <div className='_cell _header_name'>Name</div>
          <div className='_cell _header_completedTotal'>Completed / Total</div>
          <div className='_cell _header_level'>Level</div>
          <div className='_cell _header_document_link'>Document</div>
        </header>

        {documentsRows}
      </section>
    )
  }

  const propsOut: TagsDocsTablePropsOutType = {
    paginationNavigationProps: {
      paginationName: PaginationNameEnumType['pageTags'],
    },
  }

  return (
    <div className={getClasses('TagsDocsTable', classAdded)}>
      {getTagsDocsTable(tagsCloud)}
      {!(pageTags.first === 0 && pageTags.offset > tagsCloud.length) && (
        <div className='_paginationNavigationWrapper'>
          <PaginationNavigation {...propsOut.paginationNavigationProps} />
        </div>
      )}
    </div>
  )
}

export const TagsDocsTable: TagsDocsTableType = withPropsYrl({ handleEvents: handleEventsIn })(
  React.memo(TagsDocsTableComponent)
)

export type {
  TagsDocsTablePropsType,
  TagsDocsTablePropsOutType,
  TagsDocsTableComponentType,
  TagsDocsTableType,
}