import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


export default function BasicTable() {
  return (
    <TableContainer component={Paper}>
      <Table  aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>IP</TableCell>
            <TableCell align="right">OS</TableCell>
            <TableCell align="right">RAM</TableCell>
            <TableCell align="right">CPU</TableCell>
           
          </TableRow>
        </TableHead>
        <TableBody>
      
            <TableRow
              key="1"
              
            >
              <TableCell component="th" scope="row">
               192.168.17.1
              </TableCell>
              <TableCell align="right">Linux</TableCell>
              <TableCell align="right">8 GB</TableCell>
              <TableCell align="right">1</TableCell>
              
            </TableRow>
            <TableRow
              key="1"
             
            >
              <TableCell component="th" scope="row">
               192.168.17.2
              </TableCell>
              <TableCell align="right">Linux</TableCell>
              <TableCell align="right">8 GB</TableCell>
              <TableCell align="right">2</TableCell>
              
            </TableRow>
            <TableRow
              key="1"
              
            >
              <TableCell component="th" scope="row">
               192.168.17.3
              </TableCell>
              <TableCell align="right">Linux</TableCell>
              <TableCell align="right">8 GB</TableCell>
              <TableCell align="right">3</TableCell>
              
            </TableRow>
         
        </TableBody>
      </Table>
    </TableContainer>
  );
}
//sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
//sx={{ minWidth: 650 }}