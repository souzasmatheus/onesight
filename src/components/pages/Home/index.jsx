import React from 'react';

import Table from '@material-ui/core/Table';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableBody from '@material-ui/core/TableBody';
import IconButton from '@material-ui/core/IconButton';

import VideoIcon from '@material-ui/icons/OndemandVideo';

import Paper from '@material-ui/core/Paper';

import { Container } from '~/components/templates';

import { StyledTableContainer, Wrapper, StyledAvatar } from './styled';

const receipts = [
  {
    src:
      'https://images.unsplash.com/photo-1482049016688-2d3e1b311543?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=953&q=80',
    name: 'Teste',
    category: 'Junky food',
    link: 'http://google.com',
  },
  {
    src:
      'https://images.unsplash.com/photo-1482049016688-2d3e1b311543?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=953&q=80',
    name: 'Teste',
    category: 'Junky food',
    link: 'http://google.com',
  },
];

const Home = () => (
  <Container>
    <Wrapper>
      <StyledTableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell align="center">Click to expand</TableCell>
              <TableCell align="right">Receipt</TableCell>
              <TableCell align="right">Category</TableCell>
              <TableCell align="right">Watch now!</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {receipts.map((receipt) => (
              <TableRow>
                <TableCell align="left">
                  <StyledAvatar src={`${receipt.src}`} />
                </TableCell>
                <TableCell align="right">{receipt.name}</TableCell>
                <TableCell align="right">{receipt.category}</TableCell>
                <TableCell align="right">
                  <IconButton
                    onClick={() => {
                      window.open(receipt.link);
                    }}
                  >
                    <VideoIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </StyledTableContainer>
    </Wrapper>
  </Container>
);

export default Home;
