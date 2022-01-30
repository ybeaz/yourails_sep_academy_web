import { IRootStore } from '../../Interfaces/IRootStore'

export const SELECT_SKILLS_EXPERTISE: Function = (
  store: IRootStore,
  data: any
): IRootStore => {
  const { forms } = store
  const { profile } = forms
  const profileNext = { ...profile, userSkillsExpertise: data }
  const formsNext = { ...forms, profile: profileNext }
  return { ...store, forms: formsNext }
}