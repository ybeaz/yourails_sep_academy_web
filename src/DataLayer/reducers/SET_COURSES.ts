import { RootStoreType } from '../../Interfaces/RootStoreType'
import { ReducerType } from '../../Interfaces/ReducerType'
import { TOGGLE_MEDIA_LOADED } from './TOGGLE_MEDIA_LOADED'

export const SET_COURSES: ReducerType = (
  store: RootStoreType,
  data: any
): RootStoreType => {
  const { isLoaded } = store
  const isLoadedNext = { ...isLoaded, isLoadedCourses: true }
  let storeNext = { ...store, courses: data, isLoaded: isLoadedNext }

  data.forEach((course: any) => {
    const { modules } = course
    modules.forEach((module: any) => {
      const { contentID: mediaKey } = module
      const dataToMediaLoaded = { mediaKey, isMediaLoaded: false }
      storeNext = TOGGLE_MEDIA_LOADED(storeNext, dataToMediaLoaded)
    })
  })

  return storeNext
}