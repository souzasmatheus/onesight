import React, { useState } from 'react';
import PropTypes from 'prop-types';

import TableCell from '@material-ui/core/TableCell';
import IconButton from '@material-ui/core/IconButton';
import Dialog from '@material-ui/core/Dialog';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

import VideoIcon from '@material-ui/icons/OndemandVideo';
import CloseIcon from '@material-ui/icons/Close';

import { StyledAvatar, StyledCardMedia, StyledCard, StyledRow } from './styled';

const RecipeInfo = ({ src, name, category, link, description }) => {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <>
      <StyledRow>
        <TableCell
          data-testid="recipe-table-cell"
          onClick={() => setShowDetails(true)}
          align="center"
        >
          <StyledAvatar src={`${src}/preview`} />
        </TableCell>
        <TableCell onClick={() => setShowDetails(true)} align="center">
          {name}
        </TableCell>
        <TableCell onClick={() => setShowDetails(true)} align="center">
          {category}
        </TableCell>
        <TableCell align="center">
          <IconButton
            onClick={() => {
              window.open(link);
            }}
          >
            <VideoIcon />
          </IconButton>
        </TableCell>
      </StyledRow>
      <Dialog open={showDetails} onClose={() => setShowDetails(false)}>
        <StyledCard>
          <CardHeader
            title={name}
            subheader={category}
            action={
              <IconButton onClick={() => setShowDetails(false)}>
                <CloseIcon />
              </IconButton>
            }
          />
          <StyledCardMedia image={src} title={name} />
          <CardContent>
            <Typography>{description}</Typography>
          </CardContent>
        </StyledCard>
      </Dialog>
    </>
  );
};

RecipeInfo.propTypes = {
  name: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  src: PropTypes.string,
  link: PropTypes.string,
  description: PropTypes.string,
};

RecipeInfo.defaultProps = {
  src: '',
  link: '',
  description: '',
};

export default RecipeInfo;
