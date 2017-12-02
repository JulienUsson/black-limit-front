import { createSelector } from 'reselect';

const questionSelector = state => state.table.question;

export const gameStartedSelector = createSelector(
  questionSelector,
  questionSelector => questionSelector !== null,
);
