import { getClonedDeep } from 'yourails_common'

import { GetQuestionScoresPropsOutResType } from '../Components/QuestionScores/getQuestionScoresPropsOut'

export const handleEvents = () => {}
export const navigate = () => {}

/* successTrue_AuthTrue_NamesTrue_isEditNameVisibleFalse */
const successTrue_AuthTrue_NamesTrue_isEditNameVisibleFalse: GetQuestionScoresPropsOutResType[] = [
  {
    messageTileProps: {
      title: 'Congratulations',
      line1: '"Test module"',
      line2: 'is completed with 1 correct answeres from 1.',
      line3: 'Keep going!',
    },
  },
  {
    navLinkProps: {
      classAdded: 'NavLink_SignInUp',
      to: {
        pathname: 'https://yourails-email.auth.us-east-1.amazoncognito.com/login',
        searchStr:
          '?client_id=635evv2b44uuluiu6au25djr64&response_type=code&redirect_uri=&scope=email+openid+profile',
      },
      isExternal: true,
      isDisabled: false,
      isDisplaying: false,
    },
    buttonYrlProps: {
      classAdded: 'Button_SignInUp',
      icon: '',
      handleEvents,
      action: {
        typeEvent: 'CLICK_ON_SIGN_IN',
        data: {},
      },
      captureLeft: 'Sign in/up',
      tooltipText: '',
      tooltipPosition: 'top',
      isDisabled: false,
      isDisplaying: false,
    },
  },
  {
    navLinkProps: {
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
    buttonYrlProps: {
      classAdded: 'Button_NextTask',
      icon: '',
      handleEvents,
      action: {
        typeEvent: 'TEST',
        data: {},
      },
      captureLeft: 'Next task',
      tooltipText: '',
      tooltipPosition: 'top',
      isDisabled: false,
      isDisplaying: true,
    },
  },
  {
    buttonYrlProps: {
      classAdded: 'Button_Credit',
      icon: '',
      handleEvents,
      action: {
        typeEvent: 'CREATE_DOCUMENT',
        data: {
          navigate,
        },
      },
      captureLeft: 'View reward',
      tooltipText: '',
      tooltipPosition: 'top',
      isDisabled: false,
      isDisplaying: true,
    },
  },
  {
    buttonYrlProps: {
      classAdded: 'Button_IsEditName',
      icon: '',
      handleEvents,
      action: {
        typeEvent: 'SET_EDIT_NAME_VISIBILITY',
        data: {
          isEditNameVisible: true,
        },
      },
      captureLeft: 'Add/ edit name',
      tooltipText: '',
      tooltipPosition: 'top',
      isDisabled: false,
      isDisplaying: true,
    },
  },
  {
    formInputNamesWithButtonsProps: {
      formInputNamesProps: {
        handleEvents,
        language: 'en',
      },
      buttonCancelEditNameProps: {
        classAdded: 'Button_CancelEditName',
        icon: '',
        handleEvents,
        action: {
          typeEvent: 'SET_EDIT_NAME_VISIBILITY',
          data: {
            isEditNameVisible: false,
          },
        },
        captureLeft: 'Cancel',
        tooltipText: 'Cancel',
        tooltipPosition: 'top',
        isDisabled: false,
        isDisplaying: true,
      },
      buttonConfirmEditNameProps: {
        classAdded: 'Button_ConfirmForward',
        icon: '',
        handleEvents,
        action: {
          typeEvent: 'CLICK_ON_CONFIRM_NAMES',
          data: {},
        },
        captureLeft: 'Confirm',
        tooltipText: 'Confirm',
        tooltipPosition: 'top',
        isDisabled: false,
        isDisplaying: true,
      },
      isDisplaying: false,
    },
  },
  {
    navLinkProps: {
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
    buttonYrlProps: {
      classAdded: 'Button_BackToTopic',
      icon: '',
      handleEvents,
      action: {},
      captureLeft: 'Back to topic',
      tooltipText: '',
      tooltipPosition: 'top',
      isDisabled: false,
      isDisplaying: true,
    },
  },
  {
    navLinkProps: {
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
    buttonYrlProps: {
      classAdded: 'Button_Achievements',
      icon: '',
      handleEvents,
      action: {},
      captureLeft: 'Achievements',
      tooltipText: '',
      tooltipPosition: 'top',
      isDisabled: false,
      isDisplaying: true,
    },
  },
  {
    buttonYrlProps: {
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
      tooltipText: '',
      tooltipPosition: 'top',
      isDisabled: false,
      isDisplaying: true,
    },
  },
]

/* successTrue_AuthTrue_NamesTrue_isEditNameVisibleTrue */
const successTrue_AuthTrue_NamesTrue_isEditNameVisibleTrue: GetQuestionScoresPropsOutResType[] = [
  {
    messageTileProps: {
      title: 'Congratulations',
      line1: '"Test module"',
      line2: 'is completed with 1 correct answeres from 1.',
      line3: 'Add/ edit name.',
    },
  },
  {
    navLinkProps: {
      classAdded: 'NavLink_SignInUp',
      to: {
        pathname: 'https://yourails-email.auth.us-east-1.amazoncognito.com/login',
        searchStr:
          '?client_id=635evv2b44uuluiu6au25djr64&response_type=code&redirect_uri=&scope=email+openid+profile',
      },
      isExternal: true,
      isDisabled: false,
      isDisplaying: false,
    },
    buttonYrlProps: {
      classAdded: 'Button_SignInUp',
      icon: '',
      handleEvents,
      action: {
        typeEvent: 'CLICK_ON_SIGN_IN',
        data: {},
      },
      captureLeft: 'Sign in/up',
      tooltipText: '',
      tooltipPosition: 'top',
      isDisabled: false,
      isDisplaying: false,
    },
  },
  {
    navLinkProps: {
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
    buttonYrlProps: {
      classAdded: 'Button_NextTask',
      icon: '',
      handleEvents,
      action: {
        typeEvent: 'TEST',
        data: {},
      },
      captureLeft: 'Next task',
      tooltipText: '',
      tooltipPosition: 'top',
      isDisabled: false,
      isDisplaying: false,
    },
  },
  {
    buttonYrlProps: {
      classAdded: 'Button_Credit',
      icon: '',
      handleEvents,
      action: {
        typeEvent: 'CREATE_DOCUMENT',
        data: {
          navigate,
        },
      },
      captureLeft: 'View reward',
      tooltipText: '',
      tooltipPosition: 'top',
      isDisabled: false,
      isDisplaying: false,
    },
  },
  {
    buttonYrlProps: {
      classAdded: 'Button_IsEditName',
      icon: '',
      handleEvents,
      action: {
        typeEvent: 'SET_EDIT_NAME_VISIBILITY',
        data: {
          isEditNameVisible: true,
        },
      },
      captureLeft: 'Add/ edit name',
      tooltipText: '',
      tooltipPosition: 'top',
      isDisabled: false,
      isDisplaying: false,
    },
  },
  {
    formInputNamesWithButtonsProps: {
      formInputNamesProps: {
        handleEvents,
        language: 'en',
      },
      buttonCancelEditNameProps: {
        classAdded: 'Button_CancelEditName',
        icon: '',
        handleEvents,
        action: {
          typeEvent: 'SET_EDIT_NAME_VISIBILITY',
          data: {
            isEditNameVisible: false,
          },
        },
        captureLeft: 'Cancel',
        tooltipText: 'Cancel',
        tooltipPosition: 'top',
        isDisabled: false,
        isDisplaying: true,
      },
      buttonConfirmEditNameProps: {
        classAdded: 'Button_ConfirmForward',
        icon: '',
        handleEvents,
        action: {
          typeEvent: 'CLICK_ON_CONFIRM_NAMES',
          data: {},
        },
        captureLeft: 'Confirm',
        tooltipText: 'Confirm',
        tooltipPosition: 'top',
        isDisabled: false,
        isDisplaying: true,
      },
      isDisplaying: true,
    },
  },
  {
    navLinkProps: {
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
    buttonYrlProps: {
      classAdded: 'Button_BackToTopic',
      icon: '',
      handleEvents,
      action: {},
      captureLeft: 'Back to topic',
      tooltipText: '',
      tooltipPosition: 'top',
      isDisabled: false,
      isDisplaying: false,
    },
  },
  {
    navLinkProps: {
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
    buttonYrlProps: {
      classAdded: 'Button_Achievements',
      icon: '',
      handleEvents,
      action: {},
      captureLeft: 'Achievements',
      tooltipText: '',
      tooltipPosition: 'top',
      isDisabled: false,
      isDisplaying: false,
    },
  },
  {
    buttonYrlProps: {
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
      tooltipText: '',
      tooltipPosition: 'top',
      isDisabled: false,
      isDisplaying: false,
    },
  },
]

/* successTrue_AuthTrue_NamesFalse_isEditNameVisibleFalse */
const successTrue_AuthTrue_NamesFalse_isEditNameVisibleFalse: GetQuestionScoresPropsOutResType[] = [
  {
    messageTileProps: {
      title: 'Congratulations',
      line1: '"Test module"',
      line2: 'is completed with 1 correct answeres from 1.',
      line3: 'Add/ edit name.',
    },
  },
  {
    navLinkProps: {
      classAdded: 'NavLink_SignInUp',
      to: {
        pathname: 'https://yourails-email.auth.us-east-1.amazoncognito.com/login',
        searchStr:
          '?client_id=635evv2b44uuluiu6au25djr64&response_type=code&redirect_uri=&scope=email+openid+profile',
      },
      isExternal: true,
      isDisabled: false,
      isDisplaying: true,
    },
    buttonYrlProps: {
      classAdded: 'Button_SignInUp',
      icon: '',
      handleEvents,
      action: {
        typeEvent: 'CLICK_ON_SIGN_IN',
        data: {},
      },
      captureLeft: 'Sign in/up',
      tooltipText: '',
      tooltipPosition: 'top',
      isDisabled: false,
      isDisplaying: false,
    },
  },
  {
    navLinkProps: {
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
    buttonYrlProps: {
      classAdded: 'Button_NextTask',
      icon: '',
      handleEvents,
      action: {
        typeEvent: 'TEST',
        data: {},
      },
      captureLeft: 'Next task',
      tooltipText: '',
      tooltipPosition: 'top',
      isDisabled: false,
      isDisplaying: true,
    },
  },
  {
    buttonYrlProps: {
      classAdded: 'Button_Credit',
      icon: '',
      handleEvents,
      action: {
        typeEvent: 'CREATE_DOCUMENT',
        data: {
          navigate,
        },
      },
      captureLeft: 'View reward',
      tooltipText: '',
      tooltipPosition: 'top',
      isDisabled: true,
      isDisplaying: true,
    },
  },
  {
    buttonYrlProps: {
      classAdded: 'Button_IsEditName',
      icon: '',
      handleEvents,
      action: {
        typeEvent: 'SET_EDIT_NAME_VISIBILITY',
        data: {
          isEditNameVisible: true,
        },
      },
      captureLeft: 'Add/ edit name',
      tooltipText: '',
      tooltipPosition: 'top',
      isDisabled: true,
      isDisplaying: true,
    },
  },
  {
    formInputNamesWithButtonsProps: {
      formInputNamesProps: {
        handleEvents,
        language: 'en',
      },
      buttonCancelEditNameProps: {
        classAdded: 'Button_CancelEditName',
        icon: '',
        handleEvents,
        action: {
          typeEvent: 'SET_EDIT_NAME_VISIBILITY',
          data: {
            isEditNameVisible: false,
          },
        },
        captureLeft: 'Cancel',
        tooltipText: 'Cancel',
        tooltipPosition: 'top',
        isDisabled: false,
        isDisplaying: true,
      },
      buttonConfirmEditNameProps: {
        classAdded: 'Button_ConfirmForward',
        icon: '',
        handleEvents,
        action: {
          typeEvent: 'CLICK_ON_CONFIRM_NAMES',
          data: {},
        },
        captureLeft: 'Confirm',
        tooltipText: 'Confirm',
        tooltipPosition: 'top',
        isDisabled: false,
        isDisplaying: true,
      },
      isDisplaying: false,
    },
  },
  {
    navLinkProps: {
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
    buttonYrlProps: {
      classAdded: 'Button_BackToTopic',
      icon: '',
      handleEvents,
      action: {},
      captureLeft: 'Back to topic',
      tooltipText: '',
      tooltipPosition: 'top',
      isDisabled: false,
      isDisplaying: false,
    },
  },
  {
    navLinkProps: {
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
    buttonYrlProps: {
      classAdded: 'Button_Achievements',
      icon: '',
      handleEvents,
      action: {},
      captureLeft: 'Achievements',
      tooltipText: '',
      tooltipPosition: 'top',
      isDisabled: true,
      isDisplaying: true,
    },
  },
  {
    buttonYrlProps: {
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
      tooltipText: '',
      tooltipPosition: 'top',
      isDisabled: false,
      isDisplaying: true,
    },
  },
]

/* successTrue_AuthFalse_NamesTrue_isEditNameVisibleFalse */
const successTrue_AuthFalse_NamesTrue_isEditNameVisibleFalse: GetQuestionScoresPropsOutResType =
  getClonedDeep(successTrue_AuthTrue_NamesFalse_isEditNameVisibleFalse)

// successTrue_AuthFalse_NamesTrue_isEditNameVisibleFalse.message.line3 =
//   'Authorise to receive certificate.'

/* expected */
export const expected: Record<
  | 'successTrue_AuthTrue_NamesTrue_isEditNameVisibleFalse'
  | 'successTrue_AuthTrue_NamesTrue_isEditNameVisibleTrue'
  | 'successTrue_AuthTrue_NamesFalse_isEditNameVisibleFalse',
  // | 'successTrue_AuthTrue_NamesFalse_isEditNameVisibleTrue'
  // 'successTrue_AuthFalse_NamesTrue_isEditNameVisibleFalse',
  GetQuestionScoresPropsOutResType[]
> = {
  successTrue_AuthTrue_NamesTrue_isEditNameVisibleFalse,
  successTrue_AuthTrue_NamesTrue_isEditNameVisibleTrue,
  successTrue_AuthTrue_NamesFalse_isEditNameVisibleFalse,
  // successTrue_AuthTrue_NamesFalse_isEditNameVisibleTrue: {
  //   ...successTrue_AuthTrue_NamesTrue_isEditNameVisibleTrue,
  // },
  // successTrue_AuthFalse_NamesTrue_isEditNameVisibleFalse,
}
