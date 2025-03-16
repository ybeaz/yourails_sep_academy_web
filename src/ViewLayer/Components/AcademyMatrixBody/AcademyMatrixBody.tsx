import React from 'react'
import { Collapse } from 'antd'

import { TagsCloudBody } from '../TagsCloudBody/TagsCloudBody'
import { TagsCloudList } from '../TagsCloudList/TagsCloudList'
import { ModulesBody } from '../ModulesBody/ModulesBody'
import { handleEvents as handleEventsIn } from '../../../DataLayer/index.handleEvents'
import { withPropsYrl, withStoreStateSelectedYrl } from 'yourails_common'
import { getClasses } from 'yourails_common'
import { DICTIONARY } from 'yourails_common'

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
  const {
    classAdded,
    storeStateSlice: { language, tagsCloud, screenActive },
    handleEvents,
  } = props

  const propsOut: AcademyMatrixBodyPropsOutType = {
    tagsCloudBodyProps: {
      classAdded: 'TagsCloudBody_AcademyMatrixBody',
      headline: DICTIONARY.Tags[language],
    },
    modulesBodyProps: {
      classAdded: 'ModulesBody_AcademyMatrixBody',
      headline: DICTIONARY['See_all'][language],
    },
  }

  return (
    <div className={getClasses('AcademyMatrixBody', classAdded)}>
      <div className='_tagsCloudBodyWrapper'>
        <Collapse
          className='_collapse'
          collapsible='icon'
          defaultActiveKey={['1']}
          items={[
            {
              key: '1',
              label: <h2 className='_h2'>{DICTIONARY.Tags[language]}</h2>,
              children: <TagsCloudBody {...propsOut.tagsCloudBodyProps} />,
            },
          ]}
        />
        {/* <TagsCloudBody {...propsOut.tagsCloudBodyProps} /> */}
      </div>
      <div className='_modulesBodyWrapper'>
        <ModulesBody {...propsOut.modulesBodyProps} />
      </div>
    </div>
  )
}

const storeStateSliceProps: string[] = ['language', 'tagsCloud', 'screenActive']
export const AcademyMatrixBody: AcademyMatrixBodyType = withPropsYrl({
  handleEvents: handleEventsIn,
})(withStoreStateSelectedYrl(storeStateSliceProps, React.memo(AcademyMatrixBodyComponent)))

export type {
  AcademyMatrixBodyPropsType,
  AcademyMatrixBodyPropsOutType,
  AcademyMatrixBodyComponentType,
  AcademyMatrixBodyType,
}
