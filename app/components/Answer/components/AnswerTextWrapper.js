import styled from 'styled-components';

const AnswerTextWrapper = styled.div`
  margin-left: 0.5rem;

  line-height: 1.6;
  
  -webkit-user-select: none; 
  -moz-user-select: none; 
  -ms-user-select: none;
  user-select: none;

  :first-letter {
    text-transform: capitalize;
  }
`;

export default AnswerTextWrapper;
