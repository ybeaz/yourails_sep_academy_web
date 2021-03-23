import { getArrCheckedChangedById } from '../../Shared/getArrCheckedChangedById'

export const handleEvents: Function = (
  event: EventListener,
  { typeEvent, data }: any
): void => {
  const output = {
    CLICK_CHECK: () => {
      const { checkInputs, setCheckInputs, labelKey } = data
      const checkInputsNext = getArrCheckedChangedById(checkInputs, labelKey)
      setCheckInputs(checkInputsNext)
      console.info('handleEvents [12]', { typeEvent, data, checkInputsNext })
    },
  }

  output[typeEvent]
    ? output[typeEvent]()
    : console.info('handleEvents [error]', 'strange type', typeEvent)
}
