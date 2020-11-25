import styled from 'styled-components';
import TableContainer from '@material-ui/core/TableContainer';
import Avatar from '@material-ui/core/Avatar';

export const Wrapper = styled.div`
  flex: 1;
  width: 100%;
`;

export const StyledTableContainer = styled(TableContainer)`
  margin: 20px auto 0;
  &.MuiTableContainer-root {
    max-width: 550px;
  }
`;

export const StyledAvatar = styled(Avatar)`
  margin: 0 auto;
`;
