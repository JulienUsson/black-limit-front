import {
  TABLE_SET_PLAYERS,
  TABLE_SET_QUESTION,
} from '../Actions/TableActions';

const INITIAL_STATE = {
  players: [],
  question: null,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TABLE_SET_PLAYERS:
      return { ...state, players: action.players };
    case TABLE_SET_QUESTION:
      return { ...state, question: action.question };
    default:
      return state;
  }
};
