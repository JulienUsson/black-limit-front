import {
  HAND_SET_USERNAME,
  HAND_SET_UUID,
  HAND_SET_READY,
  HAND_SET_HAND,
  HAND_RESET,
} from '../Actions/HandActions'

const INITIAL_STATE = {
  uuid: null,
  username: '',
  ready: false,
  hand: [],
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case HAND_SET_UUID:
      return { ...state, uuid: action.uuid }
    case HAND_SET_USERNAME:
      return { ...state, username: action.username }
    case HAND_SET_READY:
      return { ...state, ready: action.ready }
    case HAND_SET_HAND:
      return { ...state, hand: action.hand }
    case HAND_RESET:
      return { ...state, ready: false, hand: [] }
    default:
      return state
  }
}
