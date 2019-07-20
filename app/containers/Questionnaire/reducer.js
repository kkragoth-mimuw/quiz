import { fromJS } from 'immutable';
import questions from './questions';
import {
  NEXT_QUESTION,
  PREVIOUS_QUESTION,
  USER_SELECT_ANSWER,
} from './constants';

export const QUESTIONNAIRE_REDUCER_NAME = 'QuestionnaireReducer';

const initialState = fromJS({
  currentQuestionId: 0,
  questions,
  userAnswers: {},
});

function questionnaireReducer(state = initialState, action) {
  switch (action.type) {
    case USER_SELECT_ANSWER:
      return state.setIn(['userAnswers', action.questionId], action.answerId);
    case NEXT_QUESTION:
      return state.update(
        'currentQuestionId',
        currentQuestionId => currentQuestionId + 1,
      );
    case PREVIOUS_QUESTION:
      return state.update(
        'currentQuestionId',
        currentQuestionId => currentQuestionId - 1,
      );
    default:
      return state;
  }
}

export default questionnaireReducer;
