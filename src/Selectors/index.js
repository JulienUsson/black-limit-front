import { createSelector } from 'reselect';
import toString from 'lodash/toString';

const questionSelector = state => state.table.question;

export const gameStartedSelector = createSelector(
  questionSelector,
  question => question !== null,
);

export const blankCountSelector = createSelector(
  questionSelector,
  question => (toString(question).match(/\{[0-9]?\}/g) || []).length,
);
