import styled from 'styled-components';
import AppBar from '@material-ui/core/AppBar';

export const StyledImage = styled.img`
  width: 245px;
`;

export const StyledAppBar = styled(AppBar)`
  &&.MuiAppBar-root {
    background-color: ${({ theme }) => theme.colors.primary};
  }
`;
