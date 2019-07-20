import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import Button from '@material-ui/core/Button';
import {
  currentQuestionIdSelector,
  currentQuestionSelector, questionsLengthSelector,
  questionsSelector,
} from './selectors';
import NavigationWrapper from './components/NavigationWrapper';
import Question from '../../components/Question';
import QuestionnaireWrapper from './components/QuestionnaireWrapper';
import { nextQuestionAction, previousQuestionAction } from './actions';

class Questionnaire extends React.Component {
  render() {
    const { currentQuestion, currentQuestionId} = this.props;

    return (
      <QuestionnaireWrapper>
      <Question questionId={currentQuestionId} question={currentQuestion.get('question')} answers={currentQuestion.get('answers')}/>
        <NavigationWrapper>
          <Button onClick={this.props.previousQuestion} disabled={currentQuestionId===0} variant="outlined">
            Poprzednie pytanie
          </Button>
          <Button onClick={this.props.nextQuestion} disabled={currentQuestionId + 1 === this.props.questionsLength} variant="outlined" color="primary">
            Następne pytanie
          </Button>
        </NavigationWrapper>
      </QuestionnaireWrapper>
    )
  }
}

const mapStateToProps = createStructuredSelector({
  questions: questionsSelector,
  currentQuestionId: currentQuestionIdSelector,
  currentQuestion: currentQuestionSelector,
  questionsLength: questionsLengthSelector,
});

const mapDispatchToProps = dispatch => ({
  nextQuestion: () => dispatch(nextQuestionAction()),
  previousQuestion: () => dispatch(previousQuestionAction())
})

export default connect(mapStateToProps, mapDispatchToProps)(Questionnaire);
