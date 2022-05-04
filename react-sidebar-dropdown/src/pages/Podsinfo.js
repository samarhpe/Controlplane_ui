import React,{useEffect} from 'react';

import { CssBaseline,Container,Card,List,ListItem,ListItemText,Typography,Grid,CardContent,Button,CircularProgress,Divider } from '@material-ui/core';
//import AppbarComponent from '../components/AppbarComponent';
//import FooterComponent from '../components/FooterComponent';
import useStyles from '../styles';
import { podsinfoactioncreator } from '../actions/Podsinfoaction';
import { Resourcebar } from '../components/Resourcebar';
// import { masterinfoactioncreator } from '../actions/Masternodeinfoaction';
// import { workerinfoactioncreator } from '../actions/Workernodeinfoaction';
import { useDispatch, useSelector } from 'react-redux';
import {connect} from 'react-redux';
import Podstable from '../components/Podstable';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import {Link} from 'react-router-dom';
const Podsinfo = ({logsbtnclicked, nodesbtnclicked}) => {
    useEffect(() => {
        dispatch(podsinfoactioncreator());
        const interval=setInterval(()=>{
            dispatch(podsinfoactioncreator());
        },2000);
        return ()=>clearInterval(interval);
      }, []);
    const classes=useStyles();
    const dispatch=useDispatch();
    const pods=useSelector((state)=>(state.podsinfo.pods));
    const namespaces=pods?Object.keys(pods):null;
    //const worker=useSelector((state)=>(state.workerinfo.worker));
    //console.log('pods:',pods);
    //console.log('worker',worker);
  return (<>
  <CssBaseline/>
  
  <div style={{width:'100%'}}>
  
      <Container className={classes.pagenavbar}>
        <div style={{display:'flex'}}>
        <Button onClick={nodesbtnclicked}>
      <Typography className={classes.vertcenter} variant="h6">
          K3s Cluster
          </Typography>
          </Button>
          <ChevronRightIcon style={{color:'white',marginTop:'17px',marginLeft:'3px',}}/>
          
          <Typography style={{marginTop:'12px'}} className={classes.vertcenter2} variant="h6">
            Pods
          </Typography>
          </div>
      </Container>
      <Container>
        
      <Container>
      {/*<Resourcebar/>*/}
      <Container  style={{width:'100%'}}>
         <Grid container spacing={4} justify="center" direction={'row'}>
                      {namespaces?
                      namespaces.map((ns)=>(
                          
                        <Grid key="pods"  item xs={11} sm={12} md={12}>
                          <Typography align="center" className={classes.namespacestring}>Namespace: {ns}</Typography>
                        <Podstable ns={ns} pods={pods[ns]} logsbtnclicked={logsbtnclicked}/>
                        </Grid>
                      ))
                      :<center className={classes.circular}><CircularProgress /></center>
                     
                     }
              </Grid>

          </Container>
          </Container>
          </Container>

   
   
  </div>
  {/*<FooterComponent/>*/}
  </>);
};
const mapStatetoProps=state=>{
return{
    master:state.masterinfo.master
}
}
const mapdispatchtoprops=dispatch=>{
    return{
        getmasternodeinfo:()=>dispatch(podsinfoactioncreator())
    }
}
export default Podsinfo;
