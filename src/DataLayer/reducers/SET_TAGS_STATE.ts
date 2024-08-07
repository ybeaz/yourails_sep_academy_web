import { RootStoreType } from '../../Interfaces/RootStoreType'
import { ReducerType } from '../../Interfaces/ReducerType'
import {
  getSetUrlQueryBrowserApi,
  GetSetUrlQueryBrowserApiParamsType,
} from '../../Shared/getSetUrlQueryBrowserApi'

export const SET_TAGS_STATE: ReducerType = (store: RootStoreType, data: any): RootStoreType => {
  const { forms } = store
  const { tagsPick: tagsPickState, tagsOmit: tagsOmitState } = forms

  const { tagsPick, tagsOmit } = data

  let tagsPickNext = tagsPickState
  let tagsOmitNext = tagsOmitState

  if (tagsPick) tagsPickNext = tagsPick
  if (tagsOmit) tagsOmitNext = tagsOmit

  const formsNext = { ...forms, tagsPick: tagsPickNext, tagsOmit: tagsOmitNext }

  const getSetUrlQueryBrowserApiParams: GetSetUrlQueryBrowserApiParamsType = {
    searchParamsName: 'tagsPick',
    searchParamsValue: (tagsPick && tagsPick.length && tagsPick.join(',')) || undefined,
  }

  getSetUrlQueryBrowserApi(getSetUrlQueryBrowserApiParams)

  const getSetUrlQueryBrowserApiParams2: GetSetUrlQueryBrowserApiParamsType = {
    searchParamsName: 'tagsOmit',
    searchParamsValue: (tagsOmit && tagsOmit.length && tagsOmit.join(',')) || undefined,
  }

  getSetUrlQueryBrowserApi(getSetUrlQueryBrowserApiParams2)

  return { ...store, forms: formsNext }
}
