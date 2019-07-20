import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import {
  currentQuestionIdSelector,
  currentQuestionSelector,
  questionsSelector,
} from './selectors';

import Question from '../../components/Question';

class Questionnaire extends React.Component {
  render() {
    const { currentQuestion, currentQuestionId} = this.props;

    return (
      <Question questionId={currentQuestionId} question={currentQuestion.get('question')} answers={currentQuestion.get('answers')}/>
    )
  }
}

const mapStateToProps = createStructuredSelector({
  questions: questionsSelector,
  currentQuestionId: currentQuestionIdSelector,
  currentQuestion: currentQuestionSelector,
});

export default connect(mapStateToProps)(Questionnaire);
