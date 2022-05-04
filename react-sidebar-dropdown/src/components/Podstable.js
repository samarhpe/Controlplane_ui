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
import { deletepod } from '../api';
import { useDispatch } from 'react-redux';
import { podsinfoactioncreator } from '../actions/Podsinfoaction';
import { Link } from 'react-router-dom';
import {toast} from 'react-toastify';
import {Menu } from 'grommet';
import 'react-toastify/dist/ReactToastify.css';
import "../index.css";
toast.configure()
//navigate(`/getlogs/${ns}/${pod.pod_name}`)
export default function BasicTable({ns,pods,logsbtnclicked}) {
  const classes=useStyles();
  const navigate=useNavigate();
  const dispatch=useDispatch();
  
  const delete_pod=(namespace,pod)=>{
      deletepod(namespace,pod);
      dispatch(podsinfoactioncreator());
      toast.success((pod+' deleted succeessfully'),{position: toast.POSITION.TOP_RIGHT},{autoClose:4000}); 
  }

  return (
    
    <TableContainer component={Paper}>
      <Table  aria-label="simple table">
        <TableHead>
          
          
          
          <TableRow>
            <TableCell></TableCell>
            <TableCell align="left">Pod Name</TableCell>
            <TableCell align="left">Namespace</TableCell>
            <TableCell align="left">Images</TableCell>
            <TableCell align="left">Pod IP</TableCell>
            <TableCell align="left">Pod Status</TableCell>
            <TableCell align="left">Options</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {pods.map((pod) => {
           
            return (
            <>
       
            <TableRow
              key={pod.pod_name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
             <TableCell component="th" scope="row">
              {pod.pod_status=='Running'?<div className="dot green"></div>:pod.pod_status=='Terminating'?<div className="dot darkgray"></div>:pod.pod_status=='Unknown'?<div className="dot lightgray"></div>:pod.pod_status=='ContainerCreating'?<div className='dot orange'></div>:<div className='dot red'></div>}
              </TableCell>
              <TableCell align="left">
              {pod.pod_name}
              </TableCell>
              <TableCell align="left"> {pod.pod_namespace}</TableCell>
              <TableCell align="left">{
              pod.pod_images.map((image)=>(
                  <div style={{marginBottom:'3px',backgroundColor:'#F5F5F5',borderRadius:'10px',padding:'6px'}}>{image}</div>
              ))
              
              }</TableCell>
              <TableCell align="left">{pod.pod_ip}</TableCell>
              <TableCell align="left">{pod.pod_status}</TableCell>
              <TableCell align="right">
              <Menu

hoverIndicator

focusIndicator={false}

icon={<MoreVertIcon />}

items={[
  {
    label: "Logs",
    onClick: () =>
    logsbtnclicked(ns,pod.pod_name)

  },

  {
    label: "Delete" ,
    onClick: () =>
    delete_pod(ns,pod.pod_name)
  },
]}

/>

             {/*<div style={{width:'40px',height:'40px',borderRadius:'50%',}} className={classes.Moreverticon}  aria-describedby={ArgoCDid} onClick={ArgoCDhandleClick}><MoreVertIcon /></div>
      <Popover
        id={ArgoCDid}
        open={ArgoCDopen}
        anchorEl={ArgoCDanchorEl}
        onClose={ArgoCDhandleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
      >
        <div >
      <p><Button className={classes.morevertbtns} onClick={()=>{navigate(`/getlogs/${ns}/${pod.pod_name}`)}}>logs  </Button></p>
    
      <p><Button className={classes.morevertbtns} onClick={()=>{delete_pod(ns,pod.pod_name)}}>Delete</Button></p>
      </div>
      </Popover>*/}
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