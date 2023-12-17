import { ClientHttpType } from '../@types/ClientHttpType'
import { getDetectedEnv } from '../Shared/getDetectedEnv'
import { CoursesStageEnumType } from '../@types/CoursesStageEnumType'

const envType: string = getDetectedEnv()

export interface FeatureFlagType {
  (envTypeIn?: string): boolean | any
}

/**
 * @description Flag to toggle isLoadingLocalStorageStoreState
 *      where or not to load initially local storage store state
 */
export const selectCoursesStageFlag: FeatureFlagType = (
  envTypeIn = envType
) => [CoursesStageEnumType['production2023']]

export const isLoadingLocalStorageStoreState: FeatureFlagType = (
  envTypeIn = envType
) => false

/** @description Flag to select Http client for graphql connection */
export const selectGraphqlHttpClientFlag: FeatureFlagType = (
  envTypeIn = envType
) => ClientHttpType['apolloClient']

/** @description Flag to toggle display of the Cognito signin option in the Header */
export const isAwsCognitoAuth: FeatureFlagType = (envTypeIn = envType) => true

/** @description Flag to toggle option to save analytics to the proprietor server, service statee TODO */
export const isGetingSavedAnanlyticsEvent: FeatureFlagType = (
  envTypeIn = envType
) => false

/** @description Flag template */
export const isTemplate: FeatureFlagType = (envTypeIn = envType) => false

/**
 * @description Feature flag for development and debugging
 */

/** @description Flag isDebugModalWindowQuestionScoresSuccess */
export const isDebugModalWindowQuestionScoresSuccess: FeatureFlagType = (
  envTypeIn = envType
) => true

/** @description Flag isDebugModalWindowQuestionScoresFailure */
export const isDebugModalWindowQuestionScoresFailure: FeatureFlagType = (
  envTypeIn = envType
) => false

/** @description Flag isDebugCertificateRedirectTo */
export const isDebugCertificateRedirectTo: FeatureFlagType = (
  envTypeIn = envType
) => false
