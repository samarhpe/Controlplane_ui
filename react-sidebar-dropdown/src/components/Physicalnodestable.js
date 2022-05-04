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
            <TableCell>Server Name</TableCell>
            <TableCell align="right">IP</TableCell>
            <TableCell align="right">OS</TableCell>
            <TableCell align="right">CPU/Core</TableCell>
            <TableCell align="right">RAM in GB</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
         
            <TableRow
              key="1"
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
              ap-km-infra-node01
              </TableCell>
              <TableCell align="right">172.68.4.1</TableCell>
              <TableCell align="right">Linux</TableCell>
              <TableCell align="right">1</TableCell>
              <TableCell align="right">8</TableCell>
            </TableRow>
            <TableRow
              key="1"
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
              ap-km-infra-node02
              </TableCell>
              <TableCell align="right">172.68.4.2</TableCell>
              <TableCell align="right">Linux</TableCell>
              <TableCell align="right">1</TableCell>
              <TableCell align="right">8</TableCell>
            </TableRow>
            <TableRow
              key="1"
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
              ap-km-infra-node03
              </TableCell>
              <TableCell align="right">172.68.4.3</TableCell>
              <TableCell align="right">Linux</TableCell>
              <TableCell align="right">1</TableCell>
              <TableCell align="right">8</TableCell>
            </TableRow>
     
        </TableBody>
      </Table>
    </TableContainer>
  );
}