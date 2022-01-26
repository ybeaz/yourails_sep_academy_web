export const profileStoreDefault = {
  email: undefined,
  familyName: undefined,
  givenName: undefined,
  loginSource: undefined,
  phone: undefined,
  picture: undefined,
  roles: undefined,
  status: undefined,
  uid: undefined,
  uidExternal: undefined,
  userName: undefined,
  webToken: null,
}

export const searchFormSepDefault = {
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

export const componentsStateDefault = {
  isSepAdvancedSearch: false,
  isShownPalette: false,
  questionsSlideNumber: 0,
  isModalFrameVisible: false,
  isSideNavVisible: false,
  isLoaderOverlayVisible: false,
  isDocumentAdded: false,
  isCourseStarted: false,
  isOAuthFacebookScriptLoaded: false,
  isOAuthVKontakteScriptLoaded: false,
  isOAuthGoogleScriptLoaded: false,
  oAuthStage: null,
  modalFrames: [
    {
      childName: 'SkillExchangeIntro',
      isActive: false,
      childProps: {},
    },
    {
      childName: 'AuthUser',
      isActive: false,
      childProps: {
        scenario: { branch: 'signInManually', step: '' }, // signInWithVkontakte signInWithFacebook signInWithGoogle signInManually
      },
    },
  ],
}

export const formsDefault = {
  userNameAuth: '',
  emailAuth: '',
  passwordAuth: '',
  passwordAuth2: '',
  searchInput: '',
  firstName: '',
  middleName: '',
  lastName: '',
  sendTo: '',
  sendCc: '',
  searchFormSep: searchFormSepDefault,
  profile: profileStoreDefault,
}

export const rootStoreDefault = {
  analyticsID: null,
  componentsState: componentsStateDefault,
  courses: [],
  documents: [],
  globalVars: {
    theme: 'Dark',
    numberQuestionsInSlide: 2,
    durationMultiplier: 1,
  },
  forms: formsDefault,
  isLoaded: {
    isLoadedGlobalVars: false,
    isLoadedCourses: false,
    mediaLoading: {},
  },
  language: localStorage.getItem('language') || 'ru',
}
