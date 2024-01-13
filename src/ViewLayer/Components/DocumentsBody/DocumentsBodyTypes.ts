import React from 'react'

import { RootStoreType, HandleEventType } from '../../../Interfaces/'
import { ButtonYrlPropsType } from '../../ComponentsLibrary/'

export type DocumentsBodyComponentPropsType = {
  classAdded?: string | string[] | Record<string, string | string[]>
  documents: RootStoreType['documents']
  language: RootStoreType['language']
  handleEvents: HandleEventType
}

export type DocumentsBodyPropsType = Omit<
  DocumentsBodyComponentPropsType,
  'storeStateSlice' | 'handleEvents'
>

export type DocumentsTablePropsOutType = {
  linkToDocumentProps: any
  linkToModuleProps: any
  buttonDeactivateDocumentProps: ButtonYrlPropsType
}

export type DocumentsBodyPropsOutType = Record<string, any>

/**
 * @import import { DocumentsBodyComponentPropsType, DocumentsBodyPropsType, DocumentsBodyPropsOutType, DocumentsBodyComponentType, DocumentsBodyType } from './DocumentsBodyTypes'
 */
export interface DocumentsBodyComponentType
  extends React.FunctionComponent<DocumentsBodyComponentPropsType> {
  (props: DocumentsBodyComponentPropsType): React.ReactElement
}

export type DocumentsBodyType = React.FunctionComponent<DocumentsBodyPropsType>
