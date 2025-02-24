import { GetQuestionScoresPropsOutResType } from '../Components/QuestionScores/getQuestionScoresPropsOut'

const handleEvents = () => {}

/* success (auth), names present */
export const expected01: GetQuestionScoresPropsOutResType = {
  message: {
    greeting: 'Congratulations',
    line1: '"Test module"',
    line2: 'is completed with 1 correct answeres from 1',
    line3: 'Keep going!',
  },
  navLinkNextTaskProps: {
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
    icon: '',
    classAdded: 'Button_NextTask',
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
    icon: '',
    classAdded: 'Button_Credit',
    action: {
      typeEvent: 'CREATE_DOCUMENT',
      data: {},
    },
    captureLeft: 'View reward',
    tooltipText: 'View reward',
    tooltipPosition: 'top',
    handleEvents,
    isDisplaying: true,
  },
  buttonIsEditNameVisibleProps: {
    icon: '',
    classAdded: 'Button_IsEditName',
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
      icon: '',
      classAdded: 'Button_CancelEditName',
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
      icon: '',
      classAdded: 'Button_ConfirmEditName',
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
    icon: '',
    classAdded: 'Button_BackToTopic',
    action: {},
    captureLeft: 'Back to topic',
    tooltipText: 'Back to topic',
    tooltipPosition: 'top',
    handleEvents,
  },
  navLinkAchievementsProps: {
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
    icon: '',
    classAdded: 'Button_Achievements',
    action: {},
    captureLeft: 'Achievements',
    tooltipText: 'Achievements',
    tooltipPosition: 'top',
    handleEvents,
  },
}

/* success (auth), names present */
export const expected02: GetQuestionScoresPropsOutResType = {
  message: {
    greeting: 'Congratulations',
    line1: '"Test module"',
    line2: 'is completed with 1 correct answeres from 1',
    line3: 'Keep going!',
  },
  navLinkNextTaskProps: {
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
    icon: '',
    classAdded: 'Button_NextTask',
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
    icon: '',
    classAdded: 'Button_Credit',
    action: {
      typeEvent: 'CREATE_DOCUMENT',
      data: {},
    },
    captureLeft: 'View reward',
    tooltipText: 'View reward',
    tooltipPosition: 'top',
    handleEvents,
    isDisplaying: false,
  },
  buttonIsEditNameVisibleProps: {
    icon: '',
    classAdded: 'Button_IsEditName',
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
      icon: '',
      classAdded: 'Button_CancelEditName',
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
      icon: '',
      classAdded: 'Button_ConfirmEditName',
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
    icon: '',
    classAdded: 'Button_BackToTopic',
    action: {},
    captureLeft: 'Back to topic',
    tooltipText: 'Back to topic',
    tooltipPosition: 'top',
    handleEvents,
  },
  navLinkAchievementsProps: {
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
    icon: '',
    classAdded: 'Button_Achievements',
    action: {},
    captureLeft: 'Achievements',
    tooltipText: 'Achievements',
    tooltipPosition: 'top',
    handleEvents,
  },
}

// {
//   navLinkNextTaskProps: {
//     to: {
//       pathname: '/m/ZC9oQ3X37KQi/How-do-animals-experience-pain---Robyn-J-Crook',
//       search: {
//         pageModules: '1',
//         pageTags: '1',
//         pageDocuments: '1',
//         modulesSearch: 'animal testing',
//         tagsSearch: 'animal testing',
//       },
//     },
//   },
//   buttonNextTaskProps: {
//     icon: 'MdForward',
//     classAdded: 'Button_NextTask',
//     handleEvents,
//     action: { typeEvent: 'TEST', data: {} },
//     captureLeft: 'Next task',
//     isDisplaying: false,
//   },
//   buttonCreditProps: {
//     icon: 'MdForward',
//     classAdded: 'Button_Credit',
//     handleEvents,
//     action: {},
//     tooltipText: 'View reward',
//     tooltipPosition: 'top',
//     captureLeft: 'View reward',
//     isDisplaying: true,
//   },
//   buttonIsEditNameVisibleProps: {
//     icon: 'MdForward',
//     classAdded: 'Button_IsEditName',
//     handleEvents,
//     action: {
//       typeEvent: 'SET_EDIT_NAME_VISIBILITY',
//       data: { isEditNameVisible: true },
//     },
//     tooltipText: 'Open edit name',
//     tooltipPosition: 'top',
//     captureLeft: 'Open edit name',
//     isDisplaying: true,
//   },
//   buttonConfirmEditNameProps: {
//     icon: 'MdForward',
//     classAdded: 'Button_ConfirmEditName',
//     handleEvents,
//     action: { typeEvent: 'CLICK_ON_CONFIRM_NAMES', data: {} },
//     tooltipText: 'Confirm',
//     tooltipPosition: 'top',
//     captureLeft: 'Confirm',
//     isDisplaying: true,
//   },
//   navLinkAchievementsProps: { to: { pathname: '/my-documents' } },
//   buttonAchievementsProps: {
//     icon: 'MdForward',
//     classAdded: 'Button_Achievements',
//     handleEvents,
//     action: {},
//     tooltipText: 'Achievements',
//     tooltipPosition: 'top',
//     captureLeft: 'Achievements',
//     isDisplaying: true,
//   },
//   navLinkBackToTopicProps: {
//     to: {
//       pathname: '/',
//       search: {
//         pageModules: '1',
//         pageTags: '1',
//         pageDocuments: '1',
//         modulesSearch: 'animal testing',
//         tagsSearch: 'animal testing',
//       },
//     },
//   },
//   battonBackToTopicProps: {
//     icon: 'MdForward',
//     classAdded: 'Button_BackToTopic',
//     handleEvents,
//     action: {},
//     tooltipText: 'Back to topic',
//     tooltipPosition: 'top',
//     captureLeft: 'Back to topic',
//     isDisplaying: true,
//   },
//   formInputNamesProps: { language: 'en', handleEvents },
// }
