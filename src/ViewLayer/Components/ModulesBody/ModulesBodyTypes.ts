import React from 'react'
import { PaginationNavigationPropsType } from '../../Components/'
import { RootStoreType } from '../../../Interfaces/'
import { HandleEventType } from '../../../Interfaces/HandleEventType'
import { IconLabelWithClosePropsType } from '../IconLabelWithClose/IconLabelWithClose'
import { IconYrlPropsType } from 'yourails_view_layer_web'

export type ModulesBodyComponentPropsType = {
  classAdded?: string | string[] | Record<string, string | string[]>
  headline: string
  storeStateSlice: {
    durationMultiplier: RootStoreType['scorm']['durationMultiplier']
    modules: RootStoreType['modules']
    isLoadedGlobalVars: RootStoreType['isLoaded']['isLoadedGlobalVars']
    screenActive: RootStoreType['componentsState']['screenActive']
    tagsSearchForModules: RootStoreType['componentsState']['tagsSearchForModules']
    modulesSearchApplied: RootStoreType['componentsState']['modulesSearchApplied']
    pageModules: RootStoreType['componentsState']['pagination']['pageModules']
  }
  handleEvents: HandleEventType
}

export type ModulesBodyPropsType = Omit<
  ModulesBodyComponentPropsType,
  'storeStateSlice' | 'handleEvents'
>

export type ModulesBodyPropsOutType = {
  iconArrowForwardProps: IconYrlPropsType
  iconLabelWithCloseTagProps: IconLabelWithClosePropsType
  iconLabelWithCloseSearchProps: IconLabelWithClosePropsType
  paginationNavigationProps: PaginationNavigationPropsType
}

/**
 * @import import { ModulesBodyComponentPropsType, ModulesBodyPropsType, ModulesBodyPropsOutType, ModulesBodyComponentType, ModulesBodyType } from './ModulesBodyTypes'
 */
export interface ModulesBodyComponentType
  extends React.FunctionComponent<ModulesBodyComponentPropsType> {
  (props: ModulesBodyComponentPropsType): React.ReactElement
}

export type ModulesBodyType = React.FunctionComponent<ModulesBodyPropsType>
