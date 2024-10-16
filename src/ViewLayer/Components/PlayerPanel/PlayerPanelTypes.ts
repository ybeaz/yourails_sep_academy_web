import React from 'react'
import { DurationObjType } from '../../../Interfaces/DurationObjType'
import { RootStoreType } from '../../../Interfaces/RootStoreType'

export type PlayerPanelComponentPropsType = {
  classAdded?: string | string[] | Record<string, string | string[]>
  capture: string
  durationObj: DurationObjType
  screenType: string
  isShowingPlay: boolean
  buttonPlayProps?: any
  buttonPauseProps?: any
  buttonStopProps?: any
  isActionButtonDisplaying: boolean
  questionsTotal?: number
  storeStateSlice: {
    language: RootStoreType['language']
  }
}

export type PlayerPanelPropsType = Omit<PlayerPanelComponentPropsType, 'storeStateSlice'>

export type PlayerPanelPropsOutType = Record<string, any>

/**
 * @import import { PlayerPanelComponentPropsType, PlayerPanelPropsType, PlayerPanelPropsOutType, PlayerPanelComponentType, PlayerPanelType } from './PlayerPanelTypes'
 */
export interface PlayerPanelComponentType
  extends React.FunctionComponent<PlayerPanelComponentPropsType> {
  (props: PlayerPanelComponentPropsType): React.ReactElement
}

export type PlayerPanelType = React.FunctionComponent<PlayerPanelPropsType>
