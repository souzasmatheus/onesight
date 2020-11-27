import styled from 'styled-components';
import Alert from '@material-ui/lab/Alert';

export const Wrapper = styled.div`
  flex: 1;
  width: 100%;
`;

export const ProgressContainer = styled.div`
  padding-top: 40px;
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const StyledAlert = styled(Alert)`
  max-width: 550px;
  margin: 20px auto 0;
`;
