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
import { deletedepl } from '../api';
import { useDispatch } from 'react-redux';
import { deplsinfoactioncreator } from '../actions/Deplsinfoaction';
import { Link } from 'react-router-dom';
import {toast} from 'react-toastify';
import {Menu } from 'grommet';
import 'react-toastify/dist/ReactToastify.css';
import "../index.css";
toast.configure()
//navigate(`/getlogs/${ns}/${pod.pod_name}`)
export default function BasicTable({ns,depls,setOpen,set_selected_ns,set_selected_depl,set_actual_replicas,eventsbtnclicked}) {
  const classes=useStyles();
  const navigate=useNavigate();
  const dispatch=useDispatch();
 const scaleclicked=(ns,depl,actual_replicas)=>{
   setOpen(true);
   set_selected_ns(ns);
   set_selected_depl(depl);
   set_actual_replicas(actual_replicas);
 }
  const delete_depl=(namespace,depl)=>{
     deletedepl(namespace,depl);
      dispatch(deplsinfoactioncreator());
      toast.success((depl+' deleted succeessfully'),{position: toast.POSITION.TOP_RIGHT},{autoClose:4000});
     
  }

  return (
    
    <TableContainer component={Paper}>
      <Table  aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="left">Name</TableCell>
            <TableCell align="left">Namespace</TableCell>
            <TableCell align="left">Images</TableCell>
            <TableCell align="left">Ready</TableCell>
            <TableCell align="right">Options</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {depls.map((depl) => {
           //depl.append({'depl_name':i.metadata.name,'depl_namespace':i.metadata.namespace,'depl_images':images,'depl_labels':labels})
            return (
            <>
       
            <TableRow
              key={depl.depl_name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
             {/*<TableCell component="th" scope="row">
              {pod.pod_status=='Running'?<div className="dot green"></div>:pod.pod_status=='Terminating'?<div className="dot darkgray"></div>:pod.pod_status=='Unknown'?<div className="dot lightgray"></div>:pod.pod_status=='ContainerCreating'?<div className='dot orange'></div>:<div className='dot red'></div>}
            </TableCell>*/}
              <TableCell align="left">
              {depl.depl_name}
              </TableCell>
              <TableCell align="left"> {depl.depl_namespace}</TableCell>
              <TableCell align="left">{
              depl.depl_images.map((image)=>(
                  <div style={{marginBottom:'3px',backgroundColor:'#F5F5F5',borderRadius:'10px',padding:'6px'}}>{image}</div>
              ))
              
              }</TableCell>
              <TableCell align="left">{depl.depl_ready[0]}/{depl.depl_ready[1]}</TableCell>
              
              <TableCell align="right">
              <Menu

hoverIndicator

focusIndicator={false}

icon={<MoreVertIcon />}

items={[
  {
    label: "Scale" ,
    onClick:()=>scaleclicked(ns,depl.depl_name,depl.depl_ready[1])
    
  },
  {
    label: "Events" ,
    onClick:()=>eventsbtnclicked(ns,depl.depl_name,'Deployments')
    
  },

  {
    label: "Delete" ,
    onClick: () =>
    delete_depl(ns,depl.depl_name)
  },
]}

/>

             
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