import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'

import { actionSync } from '../../DataLayer/index.action'

interface UseYouTubePlayerWorkPropsType {
  contentComponentName: string
  moduleID: string
  contentID: string
  height: string
  width: string
}

interface UseYouTubePlayerWorkType {
  onPlayerReady: Function | undefined
  playVideoHandler: Function | undefined
  pauseVideoHandler: Function | undefined
  stopVideoHandler: Function | undefined
  isShowingPlay: boolean
}

export const useYouTubePlayerWork = ({
  contentComponentName,
  moduleID,
  contentID,
  height,
  width,
}: UseYouTubePlayerWorkPropsType): UseYouTubePlayerWorkType => {
  const playerDefault = {
    playVideo: () => {},
    pauseVideo: () => {},
    stopVideo: () => {},
  }

  const dispatch = useDispatch()

  const [player, setPlayer] = useState(playerDefault)
  const [isShowingPlay, setIsShowingPlay] = useState(true)
  const [playerState, setPlayerState] = useState({ data: 1000 })

  function playVideoHandler(event = {}, action = {}, playerIn = player) {
    playerIn && playerIn.playVideo()
    setIsShowingPlay(false)
  }

  function pauseVideoHandler(event = {}, action = {}, playerIn = player) {
    playerIn && playerIn.pauseVideo()
    setIsShowingPlay(true)
  }

  function stopVideoHandler(event = {}, action = {}, playerIn = player) {
    playerIn && playerIn.stopVideo()
    setIsShowingPlay(true)
  }

  // 4. The API will call this function when the video player is ready.
  function onPlayerReady(event: any) {
    dispatch(
      actionSync.TOGGLE_MEDIA_LOADED({
        mediaKey: moduleID,
        isMediaLoaded: true,
      })
    )
  }

  const onChangePlayerStateHandler = (state: any) => {
    if (state.data === 0) {
      // console.info('useYouTubePlayerWork [21] PlayerYoutubeIframe event on end is captured', { state })
    }
    setPlayerState(state)
  }

  async function onYouTubeIframeAPIReady(videoId: string) {
    if (contentComponentName === 'PlayerYoutubeIframe') {
      try {
        // @ts-expect-error
        window['YT'].ready(function () {
          // @ts-expect-error
          const Player = new window['YT'].Player(videoId, {
            height,
            width,
            videoId,
            title: 'YouTube video player',
            frameBorder: '0',
            allow:
              'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture',
            allowFullScreen: true,
            autoplay: 1,
            autohide: 2,
            border: 0,
            wmode: 'opaque',
            enablejsapi: 1,
            modestbranding: 1,
            controls: 1,
            showinfo: 0,
            rel: 0,
            events: {
              onReady: onPlayerReady,
              onStateChange: onChangePlayerStateHandler,
            },
            host: 'https://www.youtube.com',
            origin: window.location.origin,
          })

          setPlayer(Player)
        })
      } catch (error: any) {
        console.error('useYouTubePlayerWork [68]', error.name + ': ' + error.message)
      }
    }
  }

  useEffect(() => {
    setTimeout(() => onYouTubeIframeAPIReady(contentID), 1000)
  }, [contentID])

  useEffect(() => {
    if (stopVideoHandler && playerState.data === 0) stopVideoHandler({}, {}, player)
  }, [playerState.data])

  return {
    onPlayerReady,
    playVideoHandler,
    pauseVideoHandler,
    stopVideoHandler,
    isShowingPlay,
  }
}
