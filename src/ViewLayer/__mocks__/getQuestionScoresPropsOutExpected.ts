import { getClonedDeep } from 'yourails_common'

import { GetQuestionScoresPropsOutResType } from '../Components/QuestionScores/getQuestionScoresPropsOut'

export const handleEvents = () => {}
export const navigate = () => {}

/* successTrue_AuthTrue_NamesTrue_isEditNameVisibleFalse */
const successTrue_AuthTrue_NamesTrue_isEditNameVisibleFalse: GetQuestionScoresPropsOutResType = {
  message: {
    greeting: 'Congratulations',
    line1: '"Test module"',
    line2: 'is completed with 1 correct answeres from 1',
    line3: 'Keep going!',
  },
  navLinkNextTaskProps: {
    classAdded: 'NavLink_NextTask',
    to: {
      pathname: '/m/ZC9oQ3X37KQi/How-do-animals-experience-pain---Robyn-J-Crook',
      search: {
        pageModules: '1',
        pageTags: '1',
        pageDocuments: '1',
        modulesSearch: 'animal testing',
        tagsSearch: 'animal testing',
      },
    },
    isDisabled: false,
    isDisplaying: true,
  },
  buttonNextTaskProps: {
    classAdded: 'Button_NextTask',
    icon: '',
    action: {
      typeEvent: 'TEST',
      data: {},
    },
    captureLeft: 'Next task',
    tooltipText: 'Next task',
    tooltipPosition: 'top',
    handleEvents,
    isDisabled: false,
    isDisplaying: true,
  },
  buttonCreditProps: {
    classAdded: 'Button_Credit',
    icon: '',
    action: {
      typeEvent: 'CREATE_DOCUMENT',
      data: {
        navigate,
      },
    },
    captureLeft: 'View reward',
    tooltipText: 'View reward',
    tooltipPosition: 'top',
    handleEvents,
    isDisabled: false,
    isDisplaying: true,
  },
  buttonIsEditNameVisibleProps: {
    classAdded: 'Button_IsEditName',
    icon: '',
    action: {
      typeEvent: 'SET_EDIT_NAME_VISIBILITY',
      data: {
        isEditNameVisible: true,
      },
    },
    captureLeft: 'Add/edit name',
    tooltipText: 'Add/edit name',
    tooltipPosition: 'top',
    handleEvents,
    isDisabled: false,
    isDisplaying: true,
  },
  formInputNamesWithButtonsProps: {
    formInputNamesProps: {
      language: 'en',
      handleEvents,
    },
    buttonCancelEditNameProps: {
      classAdded: 'Button_CancelEditName',
      icon: '',
      action: {
        typeEvent: 'SET_EDIT_NAME_VISIBILITY',
        data: {
          isEditNameVisible: false,
        },
      },
      captureLeft: 'Cancel',
      tooltipText: 'Cancel',
      tooltipPosition: 'top',
      handleEvents,
      isDisabled: false,
      isDisplaying: true,
    },
    buttonConfirmEditNameProps: {
      classAdded: 'Button_ConfirmForward',
      icon: '',
      action: {
        typeEvent: 'CLICK_ON_CONFIRM_NAMES',
        data: {},
      },
      captureLeft: 'Confirm',
      tooltipText: 'Confirm',
      tooltipPosition: 'top',
      handleEvents,
      isDisabled: false,
      isDisplaying: true,
    },
    isDisplaying: false,
  },
  navLinkBackToTopicProps: {
    classAdded: 'NavLink_BackToTopic',
    to: {
      pathname: '/',
      search: {
        pageModules: '1',
        pageTags: '1',
        pageDocuments: '1',
        modulesSearch: 'animal testing',
        tagsSearch: 'animal testing',
      },
    },
    isDisabled: false,
    isDisplaying: true,
  },
  buttonBackToTopicProps: {
    classAdded: 'Button_BackToTopic',
    icon: '',
    action: {},
    captureLeft: 'Back to topic',
    tooltipText: 'Back to topic',
    tooltipPosition: 'top',
    handleEvents,
    isDisabled: false,
    isDisplaying: true,
  },
  navLinkAchievementsProps: {
    classAdded: 'NavLink_Achievements',
    to: {
      pathname: '/my-documents',
      search: {
        pageModules: '1',
        pageTags: '1',
        pageDocuments: '1',
        modulesSearch: 'animal testing',
        tagsSearch: 'animal testing',
      },
    },
    isDisabled: false,
    isDisplaying: true,
  },
  buttonAchievementsProps: {
    classAdded: 'Button_Achievements',
    icon: '',
    action: {},
    captureLeft: 'Achievements',
    tooltipText: 'Achievements',
    tooltipPosition: 'top',
    handleEvents,
    isDisabled: false,
    isDisplaying: true,
  },
  buttonBackToModuleProps: {
    classAdded: 'Button_BackToModule',
    icon: '',
    handleEvents,
    action: {
      typeEvent: 'SET_MODAL_FRAMES',
      data: [
        {
          childName: 'QuestionScores',
          isActive: false,
          childProps: {},
        },
      ],
    },
    captureLeft: 'Back',
    tooltipText: 'Back',
    tooltipPosition: 'top',
    isDisabled: false,
    isDisplaying: true,
  },
}

/* successTrue_AuthTrue_NamesTrue_isEditNameVisibleTrue */
const successTrue_AuthTrue_NamesTrue_isEditNameVisibleTrue: GetQuestionScoresPropsOutResType = {
  message: {
    greeting: 'Congratulations',
    line1: '"Test module"',
    line2: 'is completed with 1 correct answeres from 1',
    line3: 'Keep going!',
  },
  navLinkNextTaskProps: {
    classAdded: 'NavLink_NextTask',
    to: {
      pathname: '/m/ZC9oQ3X37KQi/How-do-animals-experience-pain---Robyn-J-Crook',
      search: {
        pageModules: '1',
        pageTags: '1',
        pageDocuments: '1',
        modulesSearch: 'animal testing',
        tagsSearch: 'animal testing',
      },
    },
    isDisabled: false,
    isDisplaying: false,
  },
  buttonNextTaskProps: {
    classAdded: 'Button_NextTask',
    icon: '',
    action: {
      typeEvent: 'TEST',
      data: {},
    },
    captureLeft: 'Next task',
    tooltipText: 'Next task',
    tooltipPosition: 'top',
    handleEvents,
    isDisabled: false,
    isDisplaying: true,
  },
  buttonCreditProps: {
    classAdded: 'Button_Credit',
    icon: '',
    action: {
      typeEvent: 'CREATE_DOCUMENT',
      data: {
        navigate,
      },
    },
    captureLeft: 'View reward',
    tooltipText: 'View reward',
    tooltipPosition: 'top',
    handleEvents,
    isDisabled: false,
    isDisplaying: false,
  },
  buttonIsEditNameVisibleProps: {
    classAdded: 'Button_IsEditName',
    icon: '',
    action: {
      typeEvent: 'SET_EDIT_NAME_VISIBILITY',
      data: {
        isEditNameVisible: true,
      },
    },
    captureLeft: 'Add/edit name',
    tooltipText: 'Add/edit name',
    tooltipPosition: 'top',
    handleEvents,
    isDisabled: false,
    isDisplaying: false,
  },
  formInputNamesWithButtonsProps: {
    formInputNamesProps: {
      language: 'en',
      handleEvents,
    },
    buttonCancelEditNameProps: {
      classAdded: 'Button_CancelEditName',
      icon: '',
      action: {
        typeEvent: 'SET_EDIT_NAME_VISIBILITY',
        data: {
          isEditNameVisible: false,
        },
      },
      captureLeft: 'Cancel',
      tooltipText: 'Cancel',
      tooltipPosition: 'top',
      handleEvents,
      isDisabled: false,
      isDisplaying: true,
    },
    buttonConfirmEditNameProps: {
      classAdded: 'Button_ConfirmForward',
      icon: '',
      action: {
        typeEvent: 'CLICK_ON_CONFIRM_NAMES',
        data: {},
      },
      captureLeft: 'Confirm',
      tooltipText: 'Confirm',
      tooltipPosition: 'top',
      handleEvents,
      isDisabled: false,
      isDisplaying: true,
    },
    isDisplaying: true,
  },
  navLinkBackToTopicProps: {
    classAdded: 'NavLink_BackToTopic',
    to: {
      pathname: '/',
      search: {
        pageModules: '1',
        pageTags: '1',
        pageDocuments: '1',
        modulesSearch: 'animal testing',
        tagsSearch: 'animal testing',
      },
    },
    isDisabled: false,
    isDisplaying: false,
  },
  buttonBackToTopicProps: {
    classAdded: 'Button_BackToTopic',
    icon: '',
    action: {},
    captureLeft: 'Back to topic',
    tooltipText: 'Back to topic',
    tooltipPosition: 'top',
    handleEvents,
    isDisabled: false,
    isDisplaying: true,
  },
  navLinkAchievementsProps: {
    classAdded: 'NavLink_Achievements',
    to: {
      pathname: '/my-documents',
      search: {
        pageModules: '1',
        pageTags: '1',
        pageDocuments: '1',
        modulesSearch: 'animal testing',
        tagsSearch: 'animal testing',
      },
    },
    isDisabled: false,
    isDisplaying: false,
  },
  buttonAchievementsProps: {
    classAdded: 'Button_Achievements',
    icon: '',
    action: {},
    captureLeft: 'Achievements',
    tooltipText: 'Achievements',
    tooltipPosition: 'top',
    handleEvents,
    isDisabled: false,
    isDisplaying: true,
  },
  buttonBackToModuleProps: {
    classAdded: 'Button_BackToModule',
    icon: '',
    handleEvents,
    action: {
      typeEvent: 'SET_MODAL_FRAMES',
      data: [
        {
          childName: 'QuestionScores',
          isActive: false,
          childProps: {},
        },
      ],
    },
    captureLeft: 'Back',
    tooltipText: 'Back',
    tooltipPosition: 'top',
    isDisabled: false,
    isDisplaying: false,
  },
}

/* successTrue_AuthTrue_NamesFalse_isEditNameVisibleFalse */
const successTrue_AuthTrue_NamesFalse_isEditNameVisibleFalse: GetQuestionScoresPropsOutResType = {
  message: {
    greeting: 'Congratulations',
    line1: '"Test module"',
    line2: 'is completed with 1 correct answeres from 1',
    line3: 'Keep going!',
  },
  navLinkNextTaskProps: {
    classAdded: 'NavLink_NextTask',
    to: {
      pathname: '/m/ZC9oQ3X37KQi/How-do-animals-experience-pain---Robyn-J-Crook',
      search: {
        pageModules: '1',
        pageTags: '1',
        pageDocuments: '1',
        modulesSearch: 'animal testing',
        tagsSearch: 'animal testing',
      },
    },
    isDisabled: false,
    isDisplaying: true,
  },
  buttonNextTaskProps: {
    classAdded: 'Button_NextTask',
    icon: '',
    action: {
      typeEvent: 'TEST',
      data: {},
    },
    captureLeft: 'Next task',
    tooltipText: 'Next task',
    tooltipPosition: 'top',
    handleEvents,
    isDisabled: false,
    isDisplaying: true,
  },
  buttonCreditProps: {
    classAdded: 'Button_Credit',
    icon: '',
    action: {
      typeEvent: 'CREATE_DOCUMENT',
      data: {
        navigate,
      },
    },
    captureLeft: 'View reward',
    tooltipText: 'View reward',
    tooltipPosition: 'top',
    handleEvents,
    isDisabled: true,
    isDisplaying: true,
  },
  buttonIsEditNameVisibleProps: {
    classAdded: 'Button_IsEditName',
    icon: '',
    action: {
      typeEvent: 'SET_EDIT_NAME_VISIBILITY',
      data: {
        isEditNameVisible: true,
      },
    },
    captureLeft: 'Add/edit name',
    tooltipText: 'Add/edit name',
    tooltipPosition: 'top',
    handleEvents,
    isDisabled: false,
    isDisplaying: true,
  },
  formInputNamesWithButtonsProps: {
    formInputNamesProps: {
      language: 'en',
      handleEvents,
    },
    buttonCancelEditNameProps: {
      classAdded: 'Button_CancelEditName',
      icon: '',
      action: {
        typeEvent: 'SET_EDIT_NAME_VISIBILITY',
        data: {
          isEditNameVisible: false,
        },
      },
      captureLeft: 'Cancel',
      tooltipText: 'Cancel',
      tooltipPosition: 'top',
      handleEvents,
      isDisabled: false,
      isDisplaying: true,
    },
    buttonConfirmEditNameProps: {
      classAdded: 'Button_ConfirmForward',
      icon: '',
      action: {
        typeEvent: 'CLICK_ON_CONFIRM_NAMES',
        data: {},
      },
      captureLeft: 'Confirm',
      tooltipText: 'Confirm',
      tooltipPosition: 'top',
      handleEvents,
      isDisabled: false,
      isDisplaying: true,
    },
    isDisplaying: false,
  },
  navLinkBackToTopicProps: {
    classAdded: 'NavLink_BackToTopic',
    to: {
      pathname: '/',
      search: {
        pageModules: '1',
        pageTags: '1',
        pageDocuments: '1',
        modulesSearch: 'animal testing',
        tagsSearch: 'animal testing',
      },
    },
    isDisabled: false,
    isDisplaying: true,
  },
  buttonBackToTopicProps: {
    classAdded: 'Button_BackToTopic',
    icon: '',
    action: {},
    captureLeft: 'Back to topic',
    tooltipText: 'Back to topic',
    tooltipPosition: 'top',
    handleEvents,
    isDisabled: false,
    isDisplaying: true,
  },
  navLinkAchievementsProps: {
    classAdded: 'NavLink_Achievements',
    to: {
      pathname: '/my-documents',
      search: {
        pageModules: '1',
        pageTags: '1',
        pageDocuments: '1',
        modulesSearch: 'animal testing',
        tagsSearch: 'animal testing',
      },
    },
    isDisabled: true,
    isDisplaying: true,
  },
  buttonAchievementsProps: {
    classAdded: 'Button_Achievements',
    icon: '',
    action: {},
    captureLeft: 'Achievements',
    tooltipText: 'Achievements',
    tooltipPosition: 'top',
    handleEvents,
    isDisabled: true,
    isDisplaying: true,
  },
  buttonBackToModuleProps: {
    classAdded: 'Button_BackToModule',
    icon: '',
    handleEvents,
    action: {
      typeEvent: 'SET_MODAL_FRAMES',
      data: [
        {
          childName: 'QuestionScores',
          isActive: false,
          childProps: {},
        },
      ],
    },
    captureLeft: 'Back',
    tooltipText: 'Back',
    tooltipPosition: 'top',
    isDisabled: false,
    isDisplaying: true,
  },
}

/* successTrue_AuthFalse_NamesTrue_isEditNameVisibleFalse */
const successTrue_AuthFalse_NamesTrue_isEditNameVisibleFalse: GetQuestionScoresPropsOutResType =
  getClonedDeep(successTrue_AuthTrue_NamesFalse_isEditNameVisibleFalse)

successTrue_AuthFalse_NamesTrue_isEditNameVisibleFalse.message.line3 =
  'Authorise to receive certificate.'

/* expected */
export const expected: Record<
  | 'successTrue_AuthTrue_NamesTrue_isEditNameVisibleFalse'
  | 'successTrue_AuthTrue_NamesTrue_isEditNameVisibleTrue'
  | 'successTrue_AuthTrue_NamesFalse_isEditNameVisibleFalse'
  | 'successTrue_AuthTrue_NamesFalse_isEditNameVisibleTrue'
  | 'successTrue_AuthFalse_NamesTrue_isEditNameVisibleFalse',
  GetQuestionScoresPropsOutResType
> = {
  successTrue_AuthTrue_NamesTrue_isEditNameVisibleFalse,
  successTrue_AuthTrue_NamesTrue_isEditNameVisibleTrue,
  successTrue_AuthTrue_NamesFalse_isEditNameVisibleFalse,
  successTrue_AuthTrue_NamesFalse_isEditNameVisibleTrue: {
    ...successTrue_AuthTrue_NamesTrue_isEditNameVisibleTrue,
  },
  successTrue_AuthFalse_NamesTrue_isEditNameVisibleFalse,
}
