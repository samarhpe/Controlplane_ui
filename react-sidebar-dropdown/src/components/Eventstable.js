import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Popover } from '@mui/material';
import {Typography,Button} from '@material-ui/core';
import {useNavigate} from 'react-router-dom';
import useStyles from '../styles';

import "../index.css";

export default function BasicTable({events}) {
  const classes=useStyles();
 
  return (
    
    <TableContainer component={Paper}>
      <Table  aria-label="simple table">
        <TableHead>
          
          
          
          <TableRow>
            
            <TableCell align="left">Type</TableCell>
            <TableCell align="left">Reason</TableCell>
            <TableCell align="left">From</TableCell>
            <TableCell align="left">Message</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {events.map((event) => {
          
            return (
            <>
       
            <TableRow
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell align="left">
              {event.Type}
              </TableCell>
              <TableCell align="left"> {event.Reason}</TableCell>
              <TableCell align="left">{event.From}</TableCell>
              
              <TableCell align="left">
              {event.Message}
              </TableCell>
            
            </TableRow>
            </>
            )}
            )
        }
        </TableBody>
      </Table>
    </TableContainer>
  );
}