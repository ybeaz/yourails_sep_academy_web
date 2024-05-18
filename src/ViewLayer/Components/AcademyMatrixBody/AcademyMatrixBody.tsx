import React from 'react'

import { TagsCloudBody } from '../TagsCloudBody/TagsCloudBody'
import { ModulesBody } from '../ModulesBody/ModulesBody'

import { withPropsYrl, withStoreStateSelectedYrl } from '../../ComponentsLibrary/'
import { getClasses } from '../../../Shared/getClasses'
import {
  AcademyMatrixBodyComponentPropsType,
  AcademyMatrixBodyPropsType,
  AcademyMatrixBodyPropsOutType,
  AcademyMatrixBodyComponentType,
  AcademyMatrixBodyType,
} from './AcademyMatrixBodyTypes'

/**
 * @description Component to render AcademyMatrixBody
 * @import import { AcademyMatrixBody, AcademyMatrixBodyPropsType, AcademyMatrixBodyPropsOutType, AcademyMatrixBodyType } 
             from '../Components/AcademyMatrixBody/AcademyMatrixBody'
 */
const AcademyMatrixBodyComponent: AcademyMatrixBodyComponentType = (
  props: AcademyMatrixBodyComponentPropsType
) => {
  const { classAdded, storeStateSlice } = props

  const propsOut: AcademyMatrixBodyPropsOutType = {}

  return (
    <div className={getClasses('AcademyMatrixBody', classAdded)}>
      <div className='_tagsCloudBodyWrapper'>
        <TagsCloudBody />
      </div>
      <div className='_modulesBodyWrapper'>
        <ModulesBody />
      </div>
    </div>
  )
}

const storeStateSliceProps: string[] = []
export const AcademyMatrixBody: AcademyMatrixBodyType = withStoreStateSelectedYrl(
  storeStateSliceProps,
  React.memo(AcademyMatrixBodyComponent)
)

export type {
  AcademyMatrixBodyPropsType,
  AcademyMatrixBodyPropsOutType,
  AcademyMatrixBodyComponentType,
  AcademyMatrixBodyType,
}
