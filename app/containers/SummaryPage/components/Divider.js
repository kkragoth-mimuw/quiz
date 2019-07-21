import styled from 'styled-components';
import { isNil } from 'ramda';

const Divider = styled.div`
  width: ${(props) => isNil(props.half) ? '100%' : '50%'};
  height: 2px;
  background-color: rgba(0,0,0,0.125);
  margin-top: -2rem;
`;

export default Divider;
