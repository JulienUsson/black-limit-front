export const HAND_STARTUP = 'HAND_STARTUP';
export const HAND_SET_UUID = 'HAND_SET_UUID';
export const HAND_SET_USERNAME = 'HAND_SET_USERNAME';
export const HAND_SET_READY = 'HAND_SET_READY';

const INITIAL_STATE = {
  uuid: null,
  username: '',
  ready: false,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case HAND_SET_UUID:
      return { ...state, uuid: action.uuid };
    case HAND_SET_USERNAME:
      return { ...state, username: action.username };
    case HAND_SET_READY:
      return { ...state, ready: action.ready };
    default:
      return state;
  }
};
