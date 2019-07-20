import { USER_SELECT_ANSWER } from './constants';

export const userSelectAnswerAction = (questionId, answerId) => ({
  type: USER_SELECT_ANSWER,
  questionId,
  answerId,
});
