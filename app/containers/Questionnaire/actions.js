import {
  NEXT_QUESTION,
  PREVIOUS_QUESTION,
  USER_SELECT_ANSWER,
} from './constants';

export const userSelectAnswerAction = (questionId, answerId) => ({
  type: USER_SELECT_ANSWER,
  questionId,
  answerId,
});

export const nextQuestionAction = () => ({
  type: NEXT_QUESTION,
});

export const previousQuestionAction = () => ({
  type: PREVIOUS_QUESTION,
});
