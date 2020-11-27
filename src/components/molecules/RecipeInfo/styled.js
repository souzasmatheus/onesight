import styled from 'styled-components';
import Avatar from '@material-ui/core/Avatar';
import CardMedia from '@material-ui/core/CardMedia';
import Card from '@material-ui/core/Card';
import TableRow from '@material-ui/core/TableRow';

export const StyledRow = styled(TableRow)`
  cursor: pointer;
`;

export const StyledAvatar = styled(Avatar)`
  margin: 0 auto;
`;

export const StyledCardMedia = styled(CardMedia)`
  height: 150px;
`;

export const StyledCard = styled(Card)`
  max-width: 550px;
`;
