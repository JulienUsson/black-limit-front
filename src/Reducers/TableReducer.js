export const TABLE_STARTUP = 'TABLE_STARTUP';
export const TABLE_SET_PLAYERS = 'TABLE_SET_PLAYERS';

const INITIAL_STATE = {
  players: [],
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TABLE_SET_PLAYERS:
      return { ...state, players: action.players };
    default:
      return state;
  }
};
