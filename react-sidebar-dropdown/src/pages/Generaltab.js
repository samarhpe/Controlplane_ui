import React from 'react';
import { Typography,Container ,Card,Grid,CardContent,Button} from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import useStyles from '../styles';
import {clusterinfoactioncreator} from '../actions/Clusterinfoaction';
import data from '../data/data.json';
//import {useNavigate} from 'react-router-dom';
import '../styles/index.css';
const Generaltab = () => {
  const classes=useStyles();
 // const navigate=useNavigate();
  const dispatch=useDispatch();
  //const no_of_master=data.master.length;
  //const no_of_worker=data.worker.length;
  //const k8sversion=useSelector((state)=>(state.clusterinfo.k8sversion));
  const k8sversion="v1.20";
  return (
      <div className='generalbg'>
      <Container className={classes.clusternamecontainer}>
              <Card className={classes.clusternamecard}>
                  <Typography variant="h6" align="center" className={classes.clusternamestring}>Control Plane 2.0</Typography>
              </Card>

      </Container>
      <Container className={classes.nodescontainer}>
          <Grid container spacing={4} justify="center">
          <Grid key="master"item xs={12} sm={6} md={4}>
             
              <Card>
                  <CardContent>
                      <center><Typography className={classes.clusternamestring} onClick={() => dispatch(clusterinfoactioncreator())}>Cluster info</Typography></center>
                      {k8sversion?
                      <Typography align="center" className={classes.controlplaneinfo}>k8s version: {k8sversion}</Typography>:<Typography></Typography>}
                       
                      </CardContent>
                     </Card>
              </Grid>
              {/*<Grid key="worker"item xs={12} sm={6} md={4}>
              
                  
              <Card>
              <CardContent>
              <center><Button variant="contained" className={classes.clusternamestring}  onClick={()=>{navigate('/nodesinfo')}}>Get Node info</Button></center>
                      
                 
                      </CardContent>
              </Card>
                     
              </Grid>*/}
              </Grid>

          </Container>

   
   </div>
  );
};

export default Generaltab;
