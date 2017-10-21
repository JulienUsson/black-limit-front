import {
  HAND_SET_USERNAME,
  HAND_STARTUP,
  HAND_SET_READY,
} from '../Reducers/HandReducer';

export const startup = () => ({
  type: HAND_STARTUP,
});

export const setUsername = username => ({
  type: HAND_SET_USERNAME,
  username,
});

export const setReady = ready => ({
  type: HAND_SET_READY,
  ready,
});
