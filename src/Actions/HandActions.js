import {
  HAND_SET_USERNAME,
  HAND_STARTUP,
} from '../Reducers/HandReducer';

export const startup = () => ({
  type: HAND_STARTUP,
});

export const setUsername = username => ({
  type: HAND_SET_USERNAME,
  username,
});
