import { UserType } from '../Interfaces/UserType'
import {
  CourseCreateProgressType,
  CreateModuleStatusEnumType,
  ComponentsStateType,
  SearchFormSepType,
  FormsType,
  RootStoreType,
} from '../Interfaces/RootStoreType'

import { paginationOffset } from '../Constants/pagination.const'

import { isObjectionsStageForCourseCreateFlag } from '../FeatureFlags'

export const userStoreDefault: UserType = {
  userAvatar: '',
  userBirthYear: null,
  userDateCreated: '',
  userDateDeleted: '',
  userDateUpdated: '',
  userEmail: '',
  userGender: '',
  userIdProfile: '',
  userIdAuth: '',
  userIdExternal: '',
  userInfoAbout: '',
  userLanguages: [],
  userLocaleCity: '',
  userLocaleCountry: '',
  userLoginSource: '',
  userMedia: [],
  userName: '',
  userNameNick: '',
  nameFirst: '',
  nameLast: '',
  nameMiddle: '',
  userPasswordAuth: '',
  userPasswordAuth2: '',
  userPhone: null,
  userRoles: [],
  userSkillsExpertise: [],
  userStatus: '',
  userWebLink: '',
  userWebTokenAuth: '',
  userZoneInfo: '',
  userAwsCognitoAuth: {
    id_token: '',
    access_token: '',
    refresh_token: '',
    expires_in: 0,
    token_type: '',
  },
}

export const searchFormSepDefault: SearchFormSepType = {
  selectSkillsOffered: [],
  selectSkillsRequired: '',
  selectCountryRequired: [],
  selectLanguageRequired: [],
  inputAgeFromRequired: 0,
  inputAgeToRequired: 100,
  selectGenderRequired: [],
  selectMediaRequired: [],
  inputDescriptionRequired: '',
  selectSortBy: '',
}

export const componentsStateDefault: ComponentsStateType = {
  screenActive: 'AcademyMatrix',
  isObjections: false,
  isSummary: true,
  isConfetti: false,
  isSepAdvancedSearch: false,
  isShownPalette: false,
  questionsSlideNumber: 0,
  isModalFrameVisible: false,
  isSideNavLeftVisible: false,
  isLoaderOverlayVisible: false,
  isModuleStarted: false,
  isOAuthFacebookScriptLoaded: false,
  isOAuthVKontakteScriptLoaded: false,
  isOAuthGoogleScriptLoaded: false,
  isMobileSearchInput: false,
  oAuthStage: null,
  modalFrames: [
    {
      childName: 'AuthUser',
      isActive: false,
      childProps: {
        scenario: { branch: 'signInManually', step: '' }, // signInWithVkontakte signInWithFacebook signInWithGoogle signInManually
      },
    },
  ],
  pagination: {
    pageModules: {
      first: 0,
      offset: paginationOffset,
      hasNextPage: true,
      endCursor: '',
    },
    pageDocuments: {
      first: 0,
      offset: paginationOffset,
      hasNextPage: true,
      endCursor: '',
    },
  },
  createModuleStages: {
    metaData: {
      isActive: true,
      status: CreateModuleStatusEnumType['todo'],
      timeCalculated: null,
    },
    transcript: {
      isActive: true,
      status: CreateModuleStatusEnumType['todo'],
      timeCalculated: null,
    },
    summary: {
      isActive: true,
      status: CreateModuleStatusEnumType['todo'],
      timeCalculated: null,
    },
    questions: {
      isActive: true,
      status: CreateModuleStatusEnumType['todo'],
      timeCalculated: null,
    },
    objections: {
      isActive: isObjectionsStageForCourseCreateFlag(),
      status: CreateModuleStatusEnumType['todo'],
      timeCalculated: null,
    },
    courseModule: {
      isActive: true,
      status: CreateModuleStatusEnumType['todo'],
      timeCalculated: null,
    },
  },
}

export const formsDefault: FormsType = {
  inputCourseCreate: '',
  inputSearch: '',
  sendTo: '',
  sendCc: '',
  userPrev: userStoreDefault,
  user: userStoreDefault,
  tagsPick: [],
  tagsOmit: [],
  profileActive: {
    nameFirst: '',
    nameLast: '',
    nameMiddle: '',
  },
}

export const courseCreateProgressDefault: CourseCreateProgressType = {
  originUrl: '',
  course: {},
  metaData: {},
  questions: [],
  questionsChunks: [],
  summary: [],
  summaryChunks: [],
  transcript: [],
  transcriptChunks: [],
}

export const rootStoreDefault: RootStoreType = {
  analyticsID: null,
  componentsState: componentsStateDefault,
  modules: [],
  courses: [],
  moduleCreateProgress: courseCreateProgressDefault,
  documents: [],
  articles: [],
  profiles: [],
  scorm: {
    courseIDActive: null,
    moduleIDActive: null,
    numberQuestionsInSlide: 2,
    durationMultiplier: 1,
  },
  forms: formsDefault,
  isLoaded: {
    isLoadedGlobalVars: true,
    isLoadedCourses: false,
    mediaLoaded: {},
  },
  language: 'en',
  authAwsCognitoUserData: {
    cognito_groups: [],
    email: null,
    exp: 0,
    message: null,
    preferred_username: null,
    refresh_token: null,
    sub: null,
  },
  globalVars: {
    titleSite: 'Academy YouRails - Teach curious; Learn from inspired',
    descriptionSite:
      'Behind every great human achievement there are teachers who helped to get on top. Courses, tests, certificates',
    canonicalUrlSite: 'https://yourails.com',
    langSite: 'en',
    theme: 'Dark',
  },
}
