import styled from 'styled-components';

// const SELECTED_COLOR = '#ace0fe';
const SELECTED_COLOR = '#cceffe';
const CORRECT_COLOR = '#b4ff99';
const INCORRECT_COLOR = '#ff7888';
const SELECTED_COLOR_HOVER = '#ecfcfe';

const Answer = styled.div`
  display: flex;
  flex-direction: row;

  margin: 0.5rem;
  padding: 1.5rem 1.5rem 1.5rem 0.5rem;

  position: relative;

  background-color: ${props => {
    if (props.active) {
      return SELECTED_COLOR;
    }
    if (props.incorrect) {
      return INCORRECT_COLOR;
    }
    if (props.correct) {
      return CORRECT_COLOR;
    }
    return 'white';
  }};
  border: ${props => {
    if (props.active) {
      return '1px solid #84dcsfe';
    }
    return 'none';
  }};

  ${props => !props.isInSummaryMode && 'cursor: pointer;'}

  border-radius: 5px;

  box-shadow: 0 1spx 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);


  &:active {
    ${props => !props.isInSummaryMode && 'transform: scale(1.1)'}
  }

  transition: transform 0.35s ease-out;
`;

export default Answer;
