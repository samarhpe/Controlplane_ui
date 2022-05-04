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
//import { deletedepl } from '../api';
import { useDispatch } from 'react-redux';
import { servicesinfoactioncreator } from '../actions/Servicesinfoaction';
import { Link } from 'react-router-dom';
import {toast} from 'react-toastify';
import {Menu } from 'grommet';
import 'react-toastify/dist/ReactToastify.css';
import "../index.css";
toast.configure()
//navigate(`/getlogs/${ns}/${pod.pod_name}`)
export default function BasicTable({ns,services,eventsbtnclicked}) {
  const classes=useStyles();
  const navigate=useNavigate();
  const dispatch=useDispatch();
  const [ArgoCDanchorEl, ArgoCDsetAnchorEl] = React.useState(null);
    const ArgoCDhandleClick = (event) => {
    ArgoCDsetAnchorEl(event.currentTarget);
    };

  const ArgoCDhandleClose = () => {
    ArgoCDsetAnchorEl(null);
  };
  const delete_service=(namespace,service)=>{
     //deletedepl(namespace,depl);
      dispatch(servicesinfoactioncreator());
      toast.success((service+' deleted succeessfully'),{position: toast.POSITION.TOP_RIGHT},{autoClose:4000});
     
      
  }

  const ArgoCDopen = Boolean(ArgoCDanchorEl);
  const ArgoCDid = ArgoCDopen ? 'simple-popover' : undefined;
  return (
    
    <TableContainer component={Paper}>
      <Table  aria-label="simple table">
        <TableHead>
          
          
          
          <TableRow>
            
            <TableCell align="left">Name</TableCell>
            <TableCell align="left">Type</TableCell>
            <TableCell align="left">Cluster IP</TableCell>
            <TableCell align="left">Internal Endpoints</TableCell>
            <TableCell align="left">External Endpoints</TableCell>
            <TableCell align="left">Options</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {services.map((service) => {
           //depl.append({'depl_name':i.metadata.name,'depl_namespace':i.metadata.namespace,'depl_images':images,'depl_labels':labels})
            return (
            <>
       
            <TableRow
              key={service.serv_name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
             {/*<TableCell component="th" scope="row">
              {pod.pod_status=='Running'?<div className="dot green"></div>:pod.pod_status=='Terminating'?<div className="dot darkgray"></div>:pod.pod_status=='Unknown'?<div className="dot lightgray"></div>:pod.pod_status=='ContainerCreating'?<div className='dot orange'></div>:<div className='dot red'></div>}
            </TableCell>*/}
              <TableCell align="left">
              {service.serv_name}
              </TableCell>
              <TableCell align="left"> {service.serv_type}</TableCell>
              <TableCell align="left"> {service.serv_ip}</TableCell>
              <TableCell align="left">{
              service.serv_intendpoint.map((intendpoint)=>(
                  <div style={{marginBottom:'3px',backgroundColor:'#F5F5F5',borderRadius:'10px',padding:'6px'}}>{intendpoint[0]}:{intendpoint[1]}</div>
              ))
              
              }</TableCell>
              <TableCell align="left">{
              service.serv_extendpoint.map((extendpoint)=>(
                <div style={{marginBottom:'3px',backgroundColor:'#F5F5F5',borderRadius:'10px',padding:'6px'}}>{extendpoint[0]}:{extendpoint[1]}</div>
            ))
              }</TableCell>
              <TableCell align="right">
              <Menu

                hoverIndicator

                focusIndicator={false}

                icon={<MoreVertIcon />}

                items={[
                  {
                    label: "Events" ,
                    onClick:()=>eventsbtnclicked(ns,service.serv_name,'Services')
                    
                  },

                {
                    label: "Delete" ,
                    onClick: () =>
                    delete_service(ns,service.serv_name)
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