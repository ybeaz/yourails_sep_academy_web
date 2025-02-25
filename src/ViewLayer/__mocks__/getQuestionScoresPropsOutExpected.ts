import { GetQuestionScoresPropsOutResType } from '../Components/QuestionScores/getQuestionScoresPropsOut'

export const handleEvents = () => {}
export const navigate = () => {}

/* success (auth), names present */
export const expected01: GetQuestionScoresPropsOutResType = {
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
    captureLeft: 'Edit name',
    tooltipText: 'Edit name',
    tooltipPosition: 'top',
    handleEvents,
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
      isDisplaying: true,
    },
    buttonConfirmEditNameProps: {
      classAdded: 'Button_ConfirmEditName',
      icon: '',
      action: {
        typeEvent: 'CLICK_ON_CONFIRM_NAMES',
        data: {},
      },
      captureLeft: 'Confirm',
      tooltipText: 'Confirm',
      tooltipPosition: 'top',
      handleEvents,
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
  },
}

/* success (auth), names unpresent */
export const expected02: GetQuestionScoresPropsOutResType = {
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
    captureLeft: 'Edit name',
    tooltipText: 'Edit name',
    tooltipPosition: 'top',
    handleEvents,
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
      isDisplaying: true,
    },
    buttonConfirmEditNameProps: {
      classAdded: 'Button_ConfirmEditName',
      icon: '',
      action: {
        typeEvent: 'CLICK_ON_CONFIRM_NAMES',
        data: {},
      },
      captureLeft: 'Confirm',
      tooltipText: 'Confirm',
      tooltipPosition: 'top',
      handleEvents,
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
  },
}

/* success (no auth), names present */
export const expected03: GetQuestionScoresPropsOutResType = {
  message: {
    greeting: 'Congratulations',
    line1: '"Test module"',
    line2: 'is completed with 1 correct answeres from 1',
    line3: 'Authorise to receive certificate.',
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
    captureLeft: 'Edit name',
    tooltipText: 'Edit name',
    tooltipPosition: 'top',
    handleEvents,
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
      isDisplaying: true,
    },
    buttonConfirmEditNameProps: {
      classAdded: 'Button_ConfirmEditName',
      icon: '',
      action: {
        typeEvent: 'CLICK_ON_CONFIRM_NAMES',
        data: {},
      },
      captureLeft: 'Confirm',
      tooltipText: 'Confirm',
      tooltipPosition: 'top',
      handleEvents,
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
  },
}
