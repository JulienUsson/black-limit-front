import {
  TABLE_SET_PLAYERS,
  TABLE_SET_QUESTION,
  TABLE_SET_ANSWERS,
} from '../Actions/TableActions'

const INITIAL_STATE = {
  players: [],
  question: null,
  answers: null,
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TABLE_SET_PLAYERS:
      return { ...state, players: action.players }
    case TABLE_SET_QUESTION:
      return { ...state, question: action.question }
    case TABLE_SET_ANSWERS:
      return { ...state, answers: action.answers }
    default:
      return state
  }
}
