import React,{useEffect} from 'react';

import { CssBaseline,Container,Card,List,ListItem,ListItemText,Typography,Grid,CardContent,Button,CircularProgress,Divider } from '@material-ui/core';
//import AppbarComponent from '../components/AppbarComponent';
//import FooterComponent from '../components/FooterComponent';
import useStyles from '../styles';
import { servicesinfoactioncreator } from '../actions/Servicesinfoaction';
import { Resourcebar } from '../components/Resourcebar';
// import { masterinfoactioncreator } from '../actions/Masternodeinfoaction';
// import { workerinfoactioncreator } from '../actions/Workernodeinfoaction';
import { useDispatch, useSelector } from 'react-redux';
import {connect} from 'react-redux';
import Servicestable from '../components/Servicestable';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import {Link} from 'react-router-dom';
const Servicesinfo = ({eventsbtnclicked,nodesbtnclicked}) => {
    useEffect(() => {
        dispatch(servicesinfoactioncreator());
        const interval=setInterval(()=>{
            dispatch(servicesinfoactioncreator());
        },3000);
        return ()=>clearInterval(interval);
      }, []);
    const classes=useStyles();
    const dispatch=useDispatch();
    const services=useSelector((state)=>(state.servicesinfo.services));
    const namespaces=services?Object.keys(services):null;
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
            Services
          </Typography>
          </div>
      </Container>
      <Container>
        
      <Container>
      {/*<Resourcebar/>*/}
      <Container  style={{width:'100%'}} >
         <Grid container spacing={4}  direction={'row'}>
                      {namespaces?
                      namespaces.map((ns)=>(
                          
                        <Grid key="depls"  item xs={11} sm={12} md={11}>
                          <Typography align="center" className={classes.namespacestring}>Namespace: {ns}</Typography>
                        <Servicestable ns={ns} services={services[ns]} eventsbtnclicked={eventsbtnclicked}/>
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

export default Servicesinfo;
