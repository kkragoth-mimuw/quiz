import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import {
  currentQuestionIdSelector,
  currentQuestionSelector,
  questionsLengthSelector,
  questionsSelector,
} from './selectors';
import NavigationWrapper from './components/NavigationWrapper';
import Question from '../../components/Question';
import QuestionnaireWrapper from './components/QuestionnaireWrapper';
import { nextQuestionAction, previousQuestionAction } from './actions';

class Questionnaire extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isModalOpened: false,
    };
  }

  openModal() {
    this.setState({
      isModalOpened: true,
    });
  }

  closeModal() {
    this.setState({
      isModalOpened: false,
    });
  }

  render() {
    const {
      currentQuestion,
      currentQuestionId,
      questionsLength,
      history,
    } = this.props;

    const isLastQuestion = currentQuestionId + 1 === questionsLength;

    return (
      <>
        <QuestionnaireWrapper>
          <Question
            questionId={currentQuestionId}
            question={currentQuestion.get('question')}
            answers={currentQuestion.get('answers')}
          />
          <NavigationWrapper>
            Pytanie {currentQuestionId + 1} / {questionsLength}
          </NavigationWrapper>
          <NavigationWrapper>
            <Button
              onClick={this.props.previousQuestion}
              disabled={currentQuestionId === 0}
              variant="outlined"
            >
              Poprzednie pytanie
            </Button>

            <Button
              onClick={() =>
                isLastQuestion
                  ? this.openModal()
                  : this.props.nextQuestion()
              }
              variant="outlined"
              color={isLastQuestion ? 'secondary' : 'primary'}
            >
              {isLastQuestion ? ' Zakończ test' : 'Następne pytanie'}
            </Button>
          </NavigationWrapper>
        </QuestionnaireWrapper>

        <Dialog
          open={this.state.isModalOpened}
          onClose={() => this.closeModal()}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">
            {"Chcesz zakończyć test?"}
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              Upewnij się, że zaznaczyłeś wszystkie odpowiedzi
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={() => this.closeModal()} color="primary">
              Nie
            </Button>
            <Button onClick={() => history.replace('/summary')} color="primary" autoFocus>
              Tak
            </Button>
          </DialogActions>
        </Dialog>
      </>
    );
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
  previousQuestion: () => dispatch(previousQuestionAction()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Questionnaire);
