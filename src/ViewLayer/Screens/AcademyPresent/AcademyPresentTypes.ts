import { RootStoreType } from '../../../Interfaces/RootStoreType'

import { HeaderFramePropsType } from '../../Frames/HeaderFrame/HeaderFrame'
import { MainFramePropsType } from '../../Frames/MainFrame/MainFrame'
import { ContentSectionPropsType } from '../../Components/ContentSection/ContentSection'
import { ButtonYrlPropsType } from 'yourails_view_layer_web'
import { HandleEventType } from '../../../DataLayer/index.handleEvents'
import { TextArticleStructuredYrlPropsType } from 'yourails_view_layer_web'
import { ProfileType, ThumbnailsType } from '../../../@types/GraphqlTypes'
import { OrganizationType } from '../../../@types/OrganizationType'
import { ReaderIframeType, ReaderIframePropsType } from '../../Frames/ReaderIframe/ReaderIframe'
import {
  PlayerYoutubeIframeType,
  PlayerYoutubeIframePropsType,
} from '../../Frames/PlayerYoutubeIframe/PlayerYoutubeIframe'
import { LoaderBlurhashPropsType } from '../../Components/LoaderBlurhash'

export type AcademyPresentComponentPropsType = {
  storeStateSlice: {
    language: RootStoreType['language']
    durationMultiplier: RootStoreType['scorm']['durationMultiplier']
    moduleIDActive: RootStoreType['scorm']['courseIDActive']
    modules: RootStoreType['modules']
    mediaLoaded: RootStoreType['isLoaded']['mediaLoaded']
  }
  handleEvents: HandleEventType
}

export type AcademyPresentPropsType = Omit<
  AcademyPresentComponentPropsType,
  'storeStateSlice' | 'handleEvents'
>

export type AcademyPresentPropsM1OutType = {
  CONTENT_ASSIGNED_COMPONENT: PlayerYoutubeIframeType | ReaderIframeType
  contentAssignedComponentProps: PlayerYoutubeIframePropsType | ReaderIframePropsType | any
  loaderBlurhashProps: LoaderBlurhashPropsType
  articleProps: TextArticleStructuredYrlPropsType<OrganizationType, ProfileType, ThumbnailsType>
  summaryProps: TextArticleStructuredYrlPropsType<OrganizationType, ProfileType, ThumbnailsType>
  objectionsProps: TextArticleStructuredYrlPropsType<OrganizationType, ProfileType, ThumbnailsType>
}

export type AcademyPresentPropsOutType = {
  headerFrameProps: HeaderFramePropsType
  mainFrameProps: Omit<MainFramePropsType, 'children'>
  contentSectionProps: ContentSectionPropsType
  buttonPlayerUpProps: ButtonYrlPropsType
  buttonArticleUpProps: ButtonYrlPropsType
  buttonSummaryUpProps: ButtonYrlPropsType
  buttonObjectionsUpProps: ButtonYrlPropsType
}

/**
 * @import import { AcademyPresentType } from './AcademyPresentType'
 */
export interface AcademyPresentComponentType
  extends React.FunctionComponent<AcademyPresentComponentPropsType> {
  (props: AcademyPresentComponentPropsType): React.ReactElement
}

export type AcademyPresentType = React.FunctionComponent<AcademyPresentPropsType>
