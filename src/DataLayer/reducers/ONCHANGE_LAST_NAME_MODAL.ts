import { IRootStore, IProfile, IForms } from '../../Interfaces/IRootStore'

export const ONCHANGE_LAST_NAME_MODAL: Function = (
  store: IRootStore,
  data: any
): IRootStore => {
  const { forms } = store

  const { profile } = forms

  const profileNext: IProfile = { ...profile, userNameLast: data }

  const formsNext: IForms = { ...forms, profile: profileNext }

  return { ...store, forms: formsNext }
}
