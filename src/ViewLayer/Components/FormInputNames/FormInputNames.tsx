import React from 'react'

import classNames from 'classnames'
import { withPropsYrl, InputYrl } from 'yourails_common'
import { handleEvents as handleEventsIn } from '../../../DataLayer/index.handleEvents'
import { Collapse } from 'antd'
import { DICTIONARY } from 'yourails_common'

import {
  FormInputNamesPropsType,
  FormInputNamesPropsOutType,
  FormInputNamesComponentType,
  FormInputNamesType,
} from './FormInputNamesTypes'

/**
 * @description Component to render FormInputNames
 * @import import { FormInputNames, FormInputNamesPropsType, FormInputNamesType } 
             from '../Components/FormInputNames/FormInputNames'
 */
const FormInputNamesComponent: FormInputNamesComponentType = (props: FormInputNamesPropsType) => {
  const { classAdded, language, handleEvents, isDisplaying, isVisible } = props

  const nameLastLabel = DICTIONARY.nameLast[language]
  const nameFirstLabel = DICTIONARY.nameFirst[language]
  const nameMiddleLabel = DICTIONARY.nameMiddle[language]

  const propsOut: FormInputNamesPropsOutType = {
    inputFirstNameProps: {
      classAdded: 'Input_name',
      type: 'text',
      placeholder: 'first name...',
      handleEvents,
      typeEvent: 'ONCHANGE_FORMS_GROUP_PROP',
      storeFormGroup: 'profileActive',
      storeFormProp: 'nameFirst',
    },
    inputMiddleNameProps: {
      classAdded: 'Input_name',
      type: 'text',
      placeholder: 'second name...',
      handleEvents,
      typeEvent: 'ONCHANGE_FORMS_GROUP_PROP',
      storeFormGroup: 'profileActive',
      storeFormProp: 'nameMiddle',
    },
    inputLastNameProps: {
      classAdded: 'Input_name',
      type: 'text',
      placeholder: 'last name...',
      handleEvents,
      typeEvent: 'ONCHANGE_FORMS_GROUP_PROP',
      storeFormGroup: 'profileActive',
      storeFormProp: 'nameLast',
    },
  }

  return (
    <div
      className={classNames('FormInputNames', {
        [classAdded]: !!classAdded,
        FormInputNames_display_none: isDisplaying === false,
        FormInputNames_visible_none: isVisible === false,
      })}
    >
      <form className="_form">
        <Collapse
          className="_collapse"
          collapsible="icon"
          defaultActiveKey={['0', '1']}
          ghost={true}
          expandIconPosition="left"
          items={[
            {
              key: '0',
              label: <label className="_label">{nameFirstLabel} *</label>,
              children: <InputYrl {...propsOut.inputFirstNameProps} />,
              showArrow: false,
            },
            {
              key: '1',
              label: <label className="_label">{nameLastLabel} *</label>,
              children: <InputYrl {...propsOut.inputLastNameProps} />,
              showArrow: false,
            },
            {
              key: '2',
              label: <label className="_label">{nameMiddleLabel}</label>,
              children: <InputYrl {...propsOut.inputMiddleNameProps} />,
            },
          ]}
        />
      </form>
    </div>
  )
}

export const FormInputNames: FormInputNamesType = withPropsYrl({ handleEvents: handleEventsIn })(
  React.memo(FormInputNamesComponent),
)

export type {
  FormInputNamesPropsType,
  FormInputNamesPropsOutType,
  FormInputNamesComponentType,
  FormInputNamesType,
}
