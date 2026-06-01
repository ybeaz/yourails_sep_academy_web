import { RootStoreType } from '../../Interfaces/RootStoreType'
import { ReducerType } from '../../Interfaces/ReducerType'

export const SET_DOCUMENT_ID_ACTIVE: ReducerType = (
  store: RootStoreType,
  data: any,
): RootStoreType => {
  const { documentID } = data

  const { scorm } = store

  const scormNext = { ...scorm, documentIDActive: documentID }
  console.info('SET_DOCUMENT_ID_ACTIVE [19]', { data, documentID, scormNext })
  return { ...store, scorm: scormNext }
}
