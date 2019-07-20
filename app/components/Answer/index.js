import React from 'react';
import { connect } from 'react-redux';
import { userSelectAnswerAction } from '../../containers/Questionnaire/actions';
import { createStructuredSelector } from 'reselect';
import { userAnswerForCurrentQuestionSelector } from '../../containers/Questionnaire/selectors';

class Answer extends React.Component {
  render() {
    const { questionId, answerId, label, userSelectAnswer, userAnswerForCurrentQuestion } = this.props;
    console.log(answerId, userAnswerForCurrentQuestion)
    const active = answerId === userAnswerForCurrentQuestion;

    return <div onClick={() => userSelectAnswer(questionId, answerId)}>{active && 'OK'}{label}</div>;
  }

}

const mapDispatchToProps = (dispatch) => ({
  userSelectAnswer: (questionId, answerId) => dispatch(userSelectAnswerAction(questionId, answerId))
});

const mapStateToProps = createStructuredSelector({
  userAnswerForCurrentQuestion: userAnswerForCurrentQuestionSelector
})

export default connect(mapStateToProps, mapDispatchToProps)(Answer);
