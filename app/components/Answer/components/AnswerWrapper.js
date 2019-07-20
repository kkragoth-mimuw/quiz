import styled from 'styled-components';

const SELECTED_COLOR = '#00E676';

const Answer = styled.div`
  margin: 0.5rem;
  padding: 0.5rem;

  background-color: ${props => (props.active ? SELECTED_COLOR : 'none')};
  cursor: pointer;
  
  &:hover {
    background-color: #cdcdcd;
  }
`;

export default Answer;
