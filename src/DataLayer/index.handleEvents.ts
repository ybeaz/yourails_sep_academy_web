import { HandleEventType } from '../Interfaces/HandleEventType'
import { ActionEventType } from '../Interfaces/ActionEventType'

import { TEMPLATE } from './handlers/TEMPLATE'
import { CLICK_ON_SIGN_IN } from './handlers/CLICK_ON_SIGN_IN'
import { CLICK_ON_SIGN_OUT } from './handlers/CLICK_ON_SIGN_OUT'
import { GET_COGNITO_TOKENS } from './handlers/GET_COGNITO_TOKENS'
import { LOAD_PROFILES } from './handlers/LOAD_PROFILES'
import { CLICK_SIDE_NAV_ITEM } from './handlers/CLICK_SIDE_NAV_ITEM'
import { ONCHANGE_USER_NAME_NICK } from './handlers/ONCHANGE_USER_NAME_NICK'
import { SELECT_USER_MEDIA } from './handlers/SELECT_USER_MEDIA'
import { SELECT_USER_GENDER } from './handlers/SELECT_USER_GENDER'
import { ONCHANGE_USER_BIRTH_YEAR } from './handlers/ONCHANGE_USER_BIRTH_YEAR'
import { CLICK_SAVE_PROFILE } from './handlers/CLICK_SAVE_PROFILE'
import { SELECT_USER_LANGUAGES } from './handlers/SELECT_USER_LANGUAGES'
import { SELECT_USER_COUNTRY } from './handlers/SELECT_USER_COUNTRY'
import { ONCHANGE_USER_NAME_FIRST } from './handlers/ONCHANGE_USER_NAME_FIRST'
import { ONCHANGE_USER_INFO_ABOUT } from './handlers/ONCHANGE_USER_INFO_ABOUT'
import { SELECT_SKILLS_EXPERTISE } from './handlers/SELECT_SKILLS_EXPERTISE'
import { GET_AVATAR_PATH } from './handlers/GET_AVATAR_PATH'
import { SET_SEARCH_INPUT } from './handlers/SET_SEARCH_INPUT'
import { SELECT_LANGUAGE_APP_INIT } from './handlers/SELECT_LANGUAGE_APP_INIT'
import { TOGGLE_IS_ADVANCED_SEARCH } from './handlers/TOGGLE_IS_ADVANCED_SEARCH'
import { SEP_INTRO_IN } from './handlers/SEP_INTRO_IN'
import { SEP_SELECT_SKILLS_OFFERED } from './handlers/SEP_SELECT_SKILLS_OFFERED'
import { SEP_SELECT_SKILLS_REQUIRED } from './handlers/SEP_SELECT_SKILLS_REQUIRED'
import { SEP_SELECT_COUNTRY_REQUIRED } from './handlers/SEP_SELECT_COUNTRY_REQUIRED'
import { SEP_SELECT_LANGUAGE_REQUIRED } from './handlers/SEP_SELECT_LANGUAGE_REQUIRED'
import { SEP_INPUT_AGE_FROM_REQUIRED } from './handlers/SEP_INPUT_AGE_FROM_REQUIRED'
import { SEP_INPUT_AGE_TO_REQUIRED } from './handlers/SEP_INPUT_AGE_TO_REQUIRED'
import { SEP_SELECT_GENDER_REQUIRED } from './handlers/SEP_SELECT_GENDER_REQUIRED'
import { SEP_SELECT_MEDIA_REQUIRED } from './handlers/SEP_SELECT_MEDIA_REQUIRED'
import { SEP_INPUT_DESCRIPTION_REQUIRED } from './handlers/SEP_INPUT_DESCRIPTION_REQUIRED'
import { SEP_SELECT_SORT_BY } from './handlers/SEP_SELECT_SORT_BY'
import { SEP_CLICK_BUTTON_SEARCH } from './handlers/SEP_CLICK_BUTTON_SEARCH'
import { SET_THEME } from './handlers/SET_THEME'
import { TOGGLE_THEME } from './handlers/TOGGLE_THEME'
import { SELECT_SKILLS_OFFERED } from './handlers/SELECT_SKILLS_OFFERED'
import { SELECT_SKILLS_REQ } from './handlers/SELECT_SKILLS_REQ'
import { SELECT_SKILLS_REQ_COUNTRY } from './handlers/SELECT_SKILLS_REQ_COUNTRY'
import { SELECT_SKILLS_REQ_LANG } from './handlers/SELECT_SKILLS_REQ_LANG'
import { CREATE_DOCUMENT } from './handlers/CREATE_DOCUMENT'
import { AUTH_FACEBOOK } from './handlers/AUTH_FACEBOOK'
import { AUTH_GOOGLE } from './handlers/AUTH_GOOGLE'
import { AUTH_SIGN_OUT } from './handlers/AUTH_SIGN_OUT'
import { AUTH_VKONTAKTE } from './handlers/AUTH_VKONTAKTE'
import { CLICK_AUTH_FACEBOOK } from './handlers/CLICK_AUTH_FACEBOOK'
import { CLICK_AUTH_GOOGLE } from './handlers/CLICK_AUTH_GOOGLE'
import { CLICK_AUTH_SIGN_IN_UP_BACK } from './handlers/CLICK_AUTH_SIGN_IN_UP_BACK'
import { CLICK_AUTH_VKONTAKTE } from './handlers/CLICK_AUTH_VKONTAKTE'
import { CLICK_CHECK } from './handlers/CLICK_CHECK'
import { CLICK_FORGET_PASSWORD } from './handlers/CLICK_FORGET_PASSWORD'
import { CLICK_LOGO_GROUP } from './handlers/CLICK_LOGO_GROUP'
import { CLICK_SIGN_UP } from './handlers/CLICK_SIGN_UP'
import { CLICK_SOCIAL_NET_BUTTON } from './handlers/CLICK_SOCIAL_NET_BUTTON'
import { CLOSE_MODAL_GET_SCORES } from './handlers/CLOSE_MODAL_GET_SCORES'
import { COPY_URL_TO_CLIPBOARD } from './handlers/COPY_URL_TO_CLIPBOARD'
import { CREATE_COURSE } from './handlers/CREATE_COURSE'
import { DEV_STAGE } from './handlers/DEV_STAGE'
import { FIND_DOCUMENT } from './handlers/FIND_DOCUMENT'
import { GET_AUTH_SIGN_IN } from './handlers/GET_AUTH_SIGN_IN'
import { GET_AUTH_SIGN_UP } from './handlers/GET_AUTH_SIGN_UP'
import { GET_COURSE_QUERY_PR_QN } from './handlers/GET_COURSE_QUERY_PR_QN'
import { GO_ACADEMY_SCREEN } from './handlers/GO_ACADEMY_SCREEN'
import { GO_BACK_FROM_CERTIFICATE } from './handlers/GO_BACK_FROM_CERTIFICATE'
import { GO_SCREEN } from './handlers/GO_SCREEN'
import { ONCHANGE_USER_EMAIL } from './handlers/ONCHANGE_USER_EMAIL'
import { ONCHANGE_EMAIL_CC } from './handlers/ONCHANGE_EMAIL_CC'
import { ONCHANGE_EMAIL_TO } from './handlers/ONCHANGE_EMAIL_TO'
import { ONCHANGE_FIRST_NAME_MODAL } from './handlers/ONCHANGE_FIRST_NAME_MODAL'
import { ONCHANGE_LAST_NAME_MODAL } from './handlers/ONCHANGE_LAST_NAME_MODAL'
import { ONCHANGE_MIDDLE_NAME_MODAL } from './handlers/ONCHANGE_MIDDLE_NAME_MODAL'
import { ONCHANGE_USER_PASSWORD_AUTH } from './handlers/ONCHANGE_USER_PASSWORD_AUTH'
import { ONCHANGE_USER_PASSWORD_AUTH_2 } from './handlers/ONCHANGE_USER_PASSWORD_AUTH_2'
import { ONCHANGE_SEARCH_INPUT } from './handlers/ONCHANGE_SEARCH_INPUT'
import { ONCHANGE_USER_NAME } from './handlers/ONCHANGE_USER_NAME'
import { PLUS_QUESTION_SLIDE } from './handlers/PLUS_QUESTION_SLIDE'
import { PRINT_DOCUMENT } from './handlers/PRINT_DOCUMENT'
import { SAVE_ANALYTICS_INIT_DATA } from './handlers/SAVE_ANALYTICS_INIT_DATA'
import { SELECT_COURSE_MODULE } from './handlers/SELECT_COURSE_MODULE'
import { SELECT_LANGUAGE_APP } from './handlers/SELECT_LANGUAGE_APP'
import { SEND_AUTH_FORGET_PASSWORD } from './handlers/SEND_AUTH_FORGET_PASSWORD'
import { SEND_EMAIL_DOCUMENT } from './handlers/SEND_EMAIL_DOCUMENT'
import { SET_MODAL_FRAMES } from './handlers/SET_MODAL_FRAMES'
import { SET_OAUTH_FB_SCRIPT_STATE } from './handlers/SET_OAUTH_FB_SCRIPT_STATE'
import { SET_OAUTH_GOOGLE_SCRIPT_STATE } from './handlers/SET_OAUTH_GOOGLE_SCRIPT_STATE'
import { SET_OAUTH_VK_SCRIPT_STATE } from './handlers/SET_OAUTH_VK_SCRIPT_STATE'
import { SET_QUESTION_SLIDE } from './handlers/SET_QUESTION_SLIDE'
import { STOP_PROPAGATION } from './handlers/STOP_PROPAGATION'
import { TOGGLE_IS_DOCUMENT_ADDED } from './handlers/TOGGLE_IS_DOCUMENT_ADDED'
import { TOGGLE_MEDIA_LOADED } from './handlers/TOGGLE_MEDIA_LOADED'
import { SET_SIDE_NAVIGATION_LEFT } from './handlers/SET_SIDE_NAVIGATION_LEFT'
import { TOGGLE_START_COURSE } from './handlers/TOGGLE_START_COURSE'
// Causes error: import { PRINT_SCORES } from './handlers/PRINT_SCORES'

export const handleEvents = (event: any, props: any) => {
  const { type: typeStore, typeEvent, data } = props
  const type = typeStore ? typeStore : typeEvent || ''

  const output: Record<string, ActionEventType> = {
    TEMPLATE,
    CLICK_ON_SIGN_IN,
    CLICK_ON_SIGN_OUT,
    GET_COGNITO_TOKENS,
    LOAD_PROFILES,
    CLICK_SIDE_NAV_ITEM,
    SELECT_USER_MEDIA,
    SELECT_USER_GENDER,
    ONCHANGE_USER_BIRTH_YEAR,
    CLICK_SAVE_PROFILE,
    SELECT_USER_LANGUAGES,
    SELECT_USER_COUNTRY,
    ONCHANGE_USER_NAME_FIRST,
    ONCHANGE_USER_INFO_ABOUT,
    SELECT_SKILLS_EXPERTISE,
    GET_AVATAR_PATH,
    SET_SEARCH_INPUT,
    SELECT_LANGUAGE_APP_INIT,
    TOGGLE_IS_ADVANCED_SEARCH,
    SEP_INTRO_IN,
    SEP_SELECT_SKILLS_OFFERED,
    SEP_SELECT_SKILLS_REQUIRED,
    SEP_SELECT_COUNTRY_REQUIRED,
    SEP_SELECT_LANGUAGE_REQUIRED,
    SEP_INPUT_AGE_FROM_REQUIRED,
    SEP_INPUT_AGE_TO_REQUIRED,
    SEP_SELECT_GENDER_REQUIRED,
    SEP_SELECT_MEDIA_REQUIRED,
    SEP_INPUT_DESCRIPTION_REQUIRED,
    SEP_SELECT_SORT_BY,
    SEP_CLICK_BUTTON_SEARCH,
    TOGGLE_THEME,
    SET_THEME,
    SELECT_SKILLS_OFFERED,
    SELECT_SKILLS_REQ,
    SELECT_SKILLS_REQ_COUNTRY,
    SELECT_SKILLS_REQ_LANG,
    CREATE_DOCUMENT,
    AUTH_FACEBOOK,
    AUTH_GOOGLE,
    AUTH_SIGN_OUT,
    AUTH_VKONTAKTE,
    CLICK_AUTH_FACEBOOK,
    CLICK_AUTH_GOOGLE,
    CLICK_AUTH_SIGN_IN_UP_BACK,
    CLICK_AUTH_VKONTAKTE,
    CLICK_CHECK,
    CLICK_FORGET_PASSWORD,
    CLICK_LOGO_GROUP,
    CLICK_SIGN_UP,
    CLICK_SOCIAL_NET_BUTTON,
    CLOSE_MODAL_GET_SCORES,
    COPY_URL_TO_CLIPBOARD,
    CREATE_COURSE,
    DEV_STAGE,
    FIND_DOCUMENT,
    GET_AUTH_SIGN_IN,
    GET_AUTH_SIGN_UP,
    GET_COURSE_QUERY_PR_QN,
    GO_ACADEMY_SCREEN,
    GO_BACK_FROM_CERTIFICATE,
    GO_SCREEN,
    ONCHANGE_USER_EMAIL,
    ONCHANGE_EMAIL_CC,
    ONCHANGE_EMAIL_TO,
    ONCHANGE_FIRST_NAME_MODAL,
    ONCHANGE_LAST_NAME_MODAL,
    ONCHANGE_MIDDLE_NAME_MODAL,
    ONCHANGE_USER_PASSWORD_AUTH_2,
    ONCHANGE_USER_PASSWORD_AUTH,
    ONCHANGE_SEARCH_INPUT,
    ONCHANGE_USER_NAME,
    ONCHANGE_USER_NAME_NICK,
    PLUS_QUESTION_SLIDE,
    PRINT_DOCUMENT,
    SAVE_ANALYTICS_INIT_DATA,
    SELECT_COURSE_MODULE,
    SELECT_LANGUAGE_APP,
    SEND_AUTH_FORGET_PASSWORD,
    SEND_EMAIL_DOCUMENT,
    SET_MODAL_FRAMES,
    SET_OAUTH_FB_SCRIPT_STATE,
    SET_OAUTH_GOOGLE_SCRIPT_STATE,
    SET_OAUTH_VK_SCRIPT_STATE,
    SET_QUESTION_SLIDE,
    STOP_PROPAGATION,
    TOGGLE_IS_DOCUMENT_ADDED,
    TOGGLE_MEDIA_LOADED,
    SET_SIDE_NAVIGATION_LEFT,
    TOGGLE_START_COURSE,
    // Causes error: PRINT_SCORES,
  }

  output[type] && output[type](event, data)
}
