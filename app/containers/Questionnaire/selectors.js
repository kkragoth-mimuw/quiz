import { createSelector } from 'reselect';
import { reduce, mergeDeepLeft, findIndex, propEq } from 'ramda';

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
  (userAnswers, currentQuestionId) => userAnswers.get(currentQuestionId),
);

export const questionsLengthSelector = createSelector(
  questionsSelector,
  questions => questions.size,
);

export const correctAnswersIdsSelector = createSelector(
  questionsSelector,
  questions => {
    const questionsWithIndex = questions
      .toJS()
      .map((question, questionId) => mergeDeepLeft(question, { questionId }));

    const correctAnswersIds = reduce(
      (acc, question) => {
        const correctAnswer = findIndex(
          propEq('correct', true),
          question.answers,
        );

        acc[question.questionId] = correctAnswer;

        return acc;
      },
      {},
      questionsWithIndex,
    );

    return correctAnswersIds;
  },
);

export const countCorrectUserAnswersSelector = createSelector(
  correctAnswersIdsSelector,
  userAnswersSelector,
  (correctAnswers, userAnswers) =>
    userAnswers.filter(
      (userAnswer, question) => correctAnswers[question] === userAnswer,
    ).size,
);
