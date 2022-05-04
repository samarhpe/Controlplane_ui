import React from 'react'
import { useParams } from "react-router-dom";
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logsinfoactioncreator } from '../actions/Logsinfoaction';
import useStyles from '../styles';
import { CircularProgress,Container,Grid,Typography,Button } from '@material-ui/core';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import Logsscreen from '../components/Logsscreen';
import {useNavigate} from 'react-router-dom';
import {Link} from 'react-router-dom';
const Logspage = ({namespace,pod,nodesbtnclicked,podsbtnclicked}) => {
  const navigate=useNavigate();
    //let { namespace,pod} = useParams();
    const classes=useStyles();
    const dispatch=useDispatch();
    const logs=useSelector((state)=>(state.logsinfo.logs));
    useEffect(() => {
        dispatch(logsinfoactioncreator(namespace,pod));
    }, []);
    const keys=logs?Object.keys(logs):null;
   // console.log(logs[keys[0]]);
  return (
      <>
      <Container className={classes.pagenavbar}>
      <div style={{display:'flex'}}>
      <Button onClick={nodesbtnclicked}>
      <Typography className={classes.vertcenter} variant="h6">
          K3s Cluster
          </Typography>
          </Button>
          <ChevronRightIcon style={{color:'white',marginTop:'17px',marginLeft:'3px',}}/>
          <Button onClick={podsbtnclicked}>
          <Typography className={classes.vertcenter2} variant="h6" >
            Pods
          </Typography>
          </Button>
         
          <ChevronRightIcon style={{color:'white',marginTop:'17px',marginLeft:'3px',}}/>
          <Typography style={{marginTop:'12px'}} className={classes.vertcenter2} variant="h6">
            Logs in {pod}
          </Typography>
          </div>
      </Container>
      <Container className={classes.nodescontainer}>
      <Grid container spacing={4} >
      {keys?keys.map((container)=>(
         <Grid key="logs"  item xs={12} sm={10} md={8}>
            <Logsscreen container={container} pod={pod} logs={logs[container]}/>
        </Grid>
      ))
    
    :<center><CircularProgress/></center>}
          </Grid>
    
    </Container>
    </>
  )
}

export default Logspage;