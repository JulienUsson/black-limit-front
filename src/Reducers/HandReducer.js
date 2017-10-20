export const HAND_STARTUP = 'HAND_STARTUP';
export const HAND_SET_UUID = 'HAND_SET_UUID';
export const HAND_SET_USERNAME = 'HAND_SET_USERNAME';

const INITIAL_STATE = {
  uuid: null,
  username: '',
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case HAND_SET_UUID:
      return { ...state, uuid: action.uuid };
    case HAND_SET_USERNAME:
      return { ...state, username: action.username };
    default:
      return state;
  }
};
