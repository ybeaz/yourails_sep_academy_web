type GetArrayItemByIdPropsType = {
  arr: any[]
  propName: string
  propValue: any
}

type GetArrayItemByIdOptionsType = {}

interface GetArrayItemByIdType {
  (
    params: GetArrayItemByIdPropsType,
    options?: GetArrayItemByIdOptionsType
  ): any | undefined
}

/**
 * @description Function to getArrayItemByProp
 * @import import { getArrayItemByProp } from '../../Shared/getArrayItemByProp'
 */

export const getArrayItemByProp: GetArrayItemByIdType = (
  params: GetArrayItemByIdPropsType,
  options?: GetArrayItemByIdOptionsType
) => {
  let output = undefined
  const { arr, propName, propValue } = params

  try {
    output = arr.find((item: any) => item[propName] === propValue)
  } catch (error) {
  } finally {
    return output
  }
}
