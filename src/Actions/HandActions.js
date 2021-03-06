export const HAND_STARTUP = 'HAND_STARTUP'
export const HAND_SET_UUID = 'HAND_SET_UUID'
export const HAND_SET_USERNAME = 'HAND_SET_USERNAME'
export const HAND_SET_READY = 'HAND_SET_READY'
export const HAND_SET_HAND = 'HAND_SET_HAND'
export const HAND_RESET = 'HAND_RESET'
export const HAND_PLAY = 'HAND_PLAY'

export const startup = () => ({
  type: HAND_STARTUP,
})

export const setUsername = username => ({
  type: HAND_SET_USERNAME,
  username,
})

export const setReady = ready => ({
  type: HAND_SET_READY,
  ready,
})

export const play = cards => ({
  type: HAND_PLAY,
  cards,
})
