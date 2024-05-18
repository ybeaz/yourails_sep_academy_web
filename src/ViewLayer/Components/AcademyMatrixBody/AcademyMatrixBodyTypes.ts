import React from 'react'

export type AcademyMatrixBodyComponentPropsType = {
  classAdded?: string | string[] | Record<string, string | string[]>
  storeStateSlice: any
}

export type AcademyMatrixBodyPropsType = Omit<
  AcademyMatrixBodyComponentPropsType,
  'storeStateSlice'
>

export type AcademyMatrixBodyPropsOutType = Record<string, any>

/**
 * @import import { AcademyMatrixBodyComponentPropsType, AcademyMatrixBodyPropsType, AcademyMatrixBodyPropsOutType, AcademyMatrixBodyComponentType, AcademyMatrixBodyType } from './AcademyMatrixBodyTypes'
 */
export interface AcademyMatrixBodyComponentType
  extends React.FunctionComponent<AcademyMatrixBodyComponentPropsType> {
  (props: AcademyMatrixBodyComponentPropsType): React.ReactElement
}

export type AcademyMatrixBodyType = React.FunctionComponent<AcademyMatrixBodyPropsType>
