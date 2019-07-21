import React from 'react';

import Answer from '../Answer';

import QuestionWrapper from './components/QuestionWrapper';
import QuestionTitle from './components/QuestionTitle';

class Question extends React.Component {
  render() {
    const {
      questionId,
      question,
      answers,
      isInSummaryMode = false,
      correctAnswerId = undefined,
    } = this.props;

    return (
      <QuestionWrapper>
        <QuestionTitle>{question}</QuestionTitle>
        {answers.map((answer, answerId) => (
          <Answer
            isInSummaryMode={isInSummaryMode}
            questionId={questionId}
            key={answerId}
            answerId={answerId}
            correctAnswerId={correctAnswerId}
            label={answer.get('label')}
          />
        ))}
      </QuestionWrapper>
    );
  }
}

export default Question;
