import { RootStoreType } from '../../../Interfaces/RootStoreType'

import { FormInputNamesWithButtonsPropsType } from '../FormInputNamesWithButtons/FormInputNamesWithButtons'
import { ButtonYrlPropsType } from 'yourails_common'
import { HandleEventType } from 'yourails_common'
import { NavLinkWithQueryPropsType } from '../../Components/NavLinkWithQuery/NavLinkWithQuery'
import { MessageTilePropsType } from '../MessageTile/MessageTile'

export type QuestionScoresComponentPropsType = {
  classAdded?: string | string[] | Record<string, string | string[]>
  stopVideoHandler: any
  storeStateSlice: {
    language: RootStoreType['language']
    moduleIDActive: RootStoreType['scorm']['moduleIDActive']
    modules: RootStoreType['modules']
    nameFirst: RootStoreType['forms']['user']['nameFirst']
    nameMiddle: RootStoreType['forms']['user']['nameMiddle']
    nameLast: RootStoreType['forms']['user']['nameLast']
    sub: RootStoreType['authAwsCognitoUserData']['sub']
    profiles: RootStoreType['profiles']
    isEditNameVisible: RootStoreType['componentsState']['isEditNameVisible']
  }
  handleEvents: HandleEventType
}

export type QuestionScoresPropsType = Omit<
  QuestionScoresComponentPropsType,
  'storeStateSlice' | 'handleEvents'
>

export type QuestionScoresPropsOutType = {
  messageTileProps: MessageTilePropsType
  navLinkSignInUpProps: NavLinkWithQueryPropsType
  buttonSignInUpProps: ButtonYrlPropsType
  navLinkNextTaskProps: NavLinkWithQueryPropsType
  buttonNextTaskProps: ButtonYrlPropsType
  buttonCreditProps: ButtonYrlPropsType
  buttonIsEditNameVisibleProps: ButtonYrlPropsType
  formInputNamesWithButtonsProps: FormInputNamesWithButtonsPropsType
  navLinkBackToTopicProps: NavLinkWithQueryPropsType
  buttonBackToTopicProps: ButtonYrlPropsType
  navLinkAchievementsProps: NavLinkWithQueryPropsType
  buttonAchievementsProps: ButtonYrlPropsType
  buttonBackToModuleProps: ButtonYrlPropsType
}

/**
 * @import import { QuestionScoresType } from './QuestionScoresType'
 */
export interface QuestionScoresComponentType
  extends React.FunctionComponent<QuestionScoresComponentPropsType> {
  (props: QuestionScoresComponentPropsType): React.ReactElement
}

export type QuestionScoresType = React.FunctionComponent<QuestionScoresPropsType>
