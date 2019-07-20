import React from 'react';

import Answer from '../Answer';

class Question extends React.Component {
  render() {
    const { questionId, question, answers } = this.props;

    return (
      <div>
        <div>{question}</div>
        { answers.map((answer, answerId) => (<Answer questionId={questionId} key={answerId} answerId={answerId} label={answer.get('label')}/>))}
      </div>
    )
  }
}

export default Question;
