import React,{useEffect} from 'react';

import { CssBaseline,Container,Card,List,ListItem,ListItemText,Typography,Grid,CardContent,Button,CircularProgress,Divider } from '@material-ui/core';

import useStyles from '../styles';
import { eventsinfoactioncreator } from '../actions/Eventsinfoaction';


import { useDispatch, useSelector } from 'react-redux';
import {connect} from 'react-redux';
import Eventstable from '../components/Eventstable';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import {Link} from 'react-router-dom';
const Eventsinfo = ({namespace,depl,resourcetype,resourcebtnclicked,nodesbtnclicked}) => {
    useEffect(() => {
        dispatch(eventsinfoactioncreator(namespace,depl));
        const interval=setInterval(()=>{
            dispatch(eventsinfoactioncreator(namespace,depl));
        },4000);
        return ()=>clearInterval(interval);
      }, []);
    const classes=useStyles();
    const dispatch=useDispatch();
    const events=useSelector((state)=>(state.eventsinfo.events));
    console.log(resourcetype);
  return (<>
  <CssBaseline/>
  
  <div style={{width:'100%',height:'100%'}}>
  
      <Container className={classes.pagenavbar}>
        <div style={{display:'flex'}}>
        <Button onClick={nodesbtnclicked}>
      <Typography className={classes.vertcenter} variant="h6">
          K3s Cluster
          </Typography>
          </Button>
          <ChevronRightIcon style={{color:'white',marginTop:'17px',marginLeft:'3px',}}/>
          <Button onClick={resourcebtnclicked}>
          <Typography className={classes.vertcenter2} variant="h6">
            
            {resourcetype}
          </Typography>
          </Button>
          <ChevronRightIcon style={{color:'white',marginTop:'17px',marginLeft:'3px',}}/>
          <Typography style={{marginTop:'12px'}} className={classes.vertcenter2} variant="h6">
            Events
          </Typography>
          </div>
      </Container>
      <Container>
        
      <Container>
      <Container  style={{width:'100%'}}>
         <Grid container spacing={4} justify="center" direction={'row'}>
                      {events?
                     
                          
                        <Grid key="pods"  item xs={11} sm={12} md={11}>
                          <Typography align="center" className={classes.namespacestring}>Events of {depl} from {namespace} namespace</Typography>
                        <Eventstable events={events} />
                        </Grid>
                   
                      :<center className={classes.circular}>None</center>
                     
                     }
              </Grid>

          </Container>
          </Container>
          </Container>

   
   
  </div>

  </>);
};

export default Eventsinfo;
