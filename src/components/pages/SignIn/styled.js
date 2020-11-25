import styled from 'styled-components';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardHeader from '@material-ui/core/CardHeader';

export const StyledCard = styled(Card)`
  max-width: 345px;
`;

export const StyledCardActions = styled(CardActions)`
  justify-content: flex-end;
`;

export const StyledCardHeader = styled(CardHeader)`
  &.MuiCardHeader-root {
    padding: 16px 16px 0;
  }
`;
