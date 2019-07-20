import { createSelector } from 'reselect';

import { QUESTIONNAIRE_REDUCER_NAME } from './reducer';

const questionnaireSelector = state => state[QUESTIONNAIRE_REDUCER_NAME];

export const questionsSelector = createSelector(
  questionnaireSelector,
  questionnaire => questionnaire.get('questions'),
);

export const currentQuestionIdSelector = createSelector(
  questionnaireSelector,
  questionnaire => questionnaire.get('currentQuestionId'),
);

export const currentQuestionSelector = createSelector(
  questionsSelector,
  currentQuestionIdSelector,
  (questions, currentQuestionId) => questions.get(currentQuestionId),
);

export const userAnswersSelector = createSelector(
  questionnaireSelector,
  questionnaire => questionnaire.get('userAnswers'),
);

export const userAnswerForCurrentQuestionSelector = createSelector(
  userAnswersSelector,
  currentQuestionIdSelector,
  (userAnswers, currentQuestionId) => userAnswers.get(currentQuestionId)
);
