import { RootStoreType } from '../../../Interfaces/RootStoreType'
import { HandleEventType } from 'yourails_common'

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
    documentIDActive: RootStoreType['scorm']['documentIDActive']
  }
  handleEvents: HandleEventType
}

export type QuestionScoresPropsType = Omit<
  QuestionScoresComponentPropsType,
  'storeStateSlice' | 'handleEvents'
>

/**
 * @import import { QuestionScoresType } from './QuestionScoresType'
 */
export interface QuestionScoresComponentType
  extends React.FunctionComponent<QuestionScoresComponentPropsType> {
  (props: QuestionScoresComponentPropsType): React.ReactElement
}

export type QuestionScoresType = React.FunctionComponent<QuestionScoresPropsType>
