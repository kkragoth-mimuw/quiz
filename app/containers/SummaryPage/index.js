import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import {
  correctAnswersIdsSelector,
  countCorrectUserAnswersSelector,
  questionsLengthSelector,
  questionsSelector,
} from '../Questionnaire/selectors';
import Question from '../../components/Question';
import SummaryPageWrapper from './components/SummaryPageWrapper';
import SummarySectionTitle from './components/SummarySectionTitle';
import SummaryTitle from './components/SummaryTitle';
import Divider from './components/Divider';

class SummaryPage extends React.Component {
  render() {
    const {
      questions,
      correctAnswersIds,
      questionsLength,
      countCorrectUserAnswers,
    } = this.props;

    return (
      <SummaryPageWrapper>
        <SummaryTitle>Podsumowanie</SummaryTitle>
        <Divider/>
        <SummarySectionTitle>
          Twój wynik: {countCorrectUserAnswers} / {questionsLength}
        </SummarySectionTitle>
        <div style={{display: 'flex', justifyContent: 'center'}}>
          <Divider half/>
        </div>
        {/*<SummarySectionTitle>Twoje odpowiedzi</SummarySectionTitle>*/}
        {questions.map((question, questionId) => (
          <Question
            isInSummaryMode
            questionId={questionId}
            correctAnswerId={correctAnswersIds[questionId]}
            question={question.get('question')}
            answers={question.get('answers')}
          />
        ))}
      </SummaryPageWrapper>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  questions: questionsSelector,
  correctAnswersIds: correctAnswersIdsSelector,
  questionsLength: questionsLengthSelector,
  countCorrectUserAnswers: countCorrectUserAnswersSelector,
});

export default connect(mapStateToProps)(SummaryPage);
