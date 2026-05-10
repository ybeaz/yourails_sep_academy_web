import React from 'react'
import { ScreensEnumType } from 'yourails_common'
import { TagType } from 'yourails_common'
import { ButtonYrlPropsType } from 'yourails_common'
import { HandleEventType } from 'yourails_common'

export type TagsCloudListComponentPropsType = {
  classAdded?: string | number | symbol | any
  storeStateSlice: any
  isDisplaying?: boolean // is element present on the page and visible/ displaying?
  isVisible?: boolean // element is present on the page, but if it is visible/ displaying?
  tagsCloud: TagType[]
  handleEvents: HandleEventType
  screenActive: ScreensEnumType
}

export type GetTagsCloudListPropsOutType = {
  buttonTagMdCheckProps: ButtonYrlPropsType
  buttonTagExpertiseProps: ButtonYrlPropsType
}

export type TagsCloudListPropsType = Omit<TagsCloudListComponentPropsType, 'storeStateSlice'>

export type TagsCloudListPropsOutType = Record<string, any>

/**
 * @import import { TagsCloudListComponentPropsType, TagsCloudListPropsType, TagsCloudListPropsOutType, TagsCloudListComponentType, TagsCloudListType } from './TagsCloudListTypes'
 */
export interface TagsCloudListComponentType
  extends React.FunctionComponent<TagsCloudListComponentPropsType> {
  (props: TagsCloudListComponentPropsType): React.ReactElement
}

export type TagsCloudListType = React.FunctionComponent<TagsCloudListPropsType>
