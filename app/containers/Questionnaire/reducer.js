import { fromJS } from 'immutable';
import questions from './questions';
import { USER_SELECT_ANSWER } from './constants';

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
    default:
      return state;
  }
}

export default questionnaireReducer;
