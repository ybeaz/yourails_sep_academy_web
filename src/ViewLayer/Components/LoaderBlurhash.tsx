import React, { useState, ReactElement } from 'react'

// import { Blurhash } from 'react-blurhash'

export type LoaderBlurhashPropsType = {
  isVisibleBlurHash: boolean
  textTooltip: string
  isTextTooltip: boolean
  delay: number
  contentComponentName: string
}

export const LoaderBlurhash: React.FunctionComponent<any> = (
  props: LoaderBlurhashPropsType
): ReactElement => {
  const {
    isVisibleBlurHash,
    textTooltip,
    isTextTooltip = false,
    delay = 500,
    contentComponentName,
  } = props

  const [isTextVisible, setIsTextVisible] = useState(false)

  setTimeout(() => {
    if (isVisibleBlurHash) setIsTextVisible(true)
  }, delay)

  let blurHashClass = isVisibleBlurHash ? '_blockVisible' : '_blockHided'

  return (
    <div
      className={`LoaderBlurhash LoaderBlurhash_${contentComponentName} ${blurHashClass}`}
    >
      <div className={`__blurhash _pulse`}>
        {/* <Blurhash
          hash='LEHV6nWB2yk8pyo0adR*.7kCMdnj'
          width={'100%'}
          height={'100%'}
          resolutionX={32}
          resolutionY={32}
          punch={1}
        /> */}
      </div>
      {isTextTooltip && isVisibleBlurHash && isTextVisible && (
        <div className='__text'>{textTooltip}</div>
      )}
    </div>
  )
}
