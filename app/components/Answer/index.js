import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { userSelectAnswerAction } from '../../containers/Questionnaire/actions';
import { userAnswerForCurrentQuestionSelector } from '../../containers/Questionnaire/selectors';

import AnswerWrapper from './components/AnswerWrapper';

class Answer extends React.Component {
  render() {
    const {
      questionId,
      answerId,
      label,
      userSelectAnswer,
      userAnswerForCurrentQuestion,
    } = this.props;
    const active = answerId === userAnswerForCurrentQuestion;

    return (
      <AnswerWrapper
        active={active}
        onClick={() => userSelectAnswer(questionId, answerId)}
      >
        {label}
      </AnswerWrapper>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  userSelectAnswer: (questionId, answerId) =>
    dispatch(userSelectAnswerAction(questionId, answerId)),
});

const mapStateToProps = createStructuredSelector({
  userAnswerForCurrentQuestion: userAnswerForCurrentQuestionSelector,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Answer);
