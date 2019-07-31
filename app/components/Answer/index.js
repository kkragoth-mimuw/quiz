import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import Checkbox from '@material-ui/core/Checkbox';

import { userSelectAnswerAction } from '../../containers/Questionnaire/actions';
import { userAnswersSelector } from '../../containers/Questionnaire/selectors';
import AnswerWrapper from './components/AnswerWrapper';
import AnswerTextWrapper from './components/AnswerTextWrapper';

class Answer extends React.Component {
  render() {
    const {
      correctAnswerId,
      isInSummaryMode,
      questionId,
      answerId,
      label,
      userSelectAnswer,
      userAnswers,
    } = this.props;

    const userAnswerForCurrentQuestion = userAnswers.get(questionId);

    const isSelectedByUser = answerId === userAnswerForCurrentQuestion;

    const isActive = !isInSummaryMode && isSelectedByUser;

    const isCorrect = isInSummaryMode && answerId === correctAnswerId;

    const isIncorrect =
      isInSummaryMode &&
      isSelectedByUser &&
      userAnswerForCurrentQuestion !== correctAnswerId;

    return (
      <>
        {isInSummaryMode && isSelectedByUser && 'Twoja odpowiedź: '}
        <AnswerWrapper
          isInSummaryMode={isInSummaryMode}
          active={isActive}
          correct={isCorrect}
          incorrect={isIncorrect}
          onClick={() =>
            !isInSummaryMode && userSelectAnswer(questionId, answerId)
          }
        >
          <Checkbox disabled checked={isSelectedByUser} color="default" />{' '}
          <AnswerTextWrapper>{label}</AnswerTextWrapper>
        </AnswerWrapper>
      </>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  userSelectAnswer: (questionId, answerId) =>
    dispatch(userSelectAnswerAction(questionId, answerId)),
});

const mapStateToProps = createStructuredSelector({
  userAnswers: userAnswersSelector,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Answer);
