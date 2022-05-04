import React,{useEffect}  from 'react';
import {Typography,AppBar,Button,Card,CardActions,CardContent,CardMedia,CssBaseline,Grid,Toolbar,Container, CardHeader,ListItem,List,ListItemText,CircularProgress,Divider } from '@material-ui/core';
import useStyles from '../styles';
import { masterinfoactioncreator } from '../actions/Masternodeinfoaction';
import { workerinfoactioncreator } from '../actions/Workernodeinfoaction';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom'; 
import {useNavigate} from 'react-router-dom';
import '../styles/index.css';
//import MasterAccordianComponent from '../components/MasterAccordianComponent';
//import WorkerAccordianComponent from '../components/WorkerAccordianComponent';
import { createMuiTheme,ThemeProvider } from '@material-ui/core';
const theme=createMuiTheme({
    palette:{
      primary:{
        main:'#01a982'
      }
    }
  })
const Clustertab = () => {
    const classes=useStyles();
    const navigate=useNavigate();
    useEffect(() => {
        dispatch(masterinfoactioncreator());
        const nodesinterval=setInterval(()=>{
            dispatch(masterinfoactioncreator());
        },4000);
        return ()=>clearInterval(nodesinterval);
      }, []);
  
    const dispatch=useDispatch();
    const master=useSelector((state)=>(state.masterinfo.master));
    //const worker=useSelector((state)=>(state.workerinfo.worker));
    console.log('master:',master);
  return(
      <>
     
     <ThemeProvider theme={theme}>
      <div className="main">
          <Container className={classes.pagenavbar}>
              <div style={{display:'flex'}}>
          <Typography className={classes.vertcenter} variant="h6">
          K3s Cluster
          </Typography>
          </div>
              {/*<Card className={classes.clusternamecard}>
                  <Typography variant="h6" align="center" className={classes.clusternamestring}>k3s cluster</Typography>
  </Card>*/}

          </Container>
          <Container className={classes.nodescontainer}>
          <Grid container spacing={3} >
          <Grid key="master"item xs={12} sm={10} md={5}>
             
              <Card width="400px">
                  <CardContent>
                      <center><Typography className={classes.clusternamestring} onClick={() => dispatch(masterinfoactioncreator())}>Master nodes info</Typography></center>
                     
                      {master?
                      <List>
                          <ListItem>
                               <ListItemText primary="Role" />
                               <ListItemText primary="IP" />
                               <ListItemText primary="Hostname" />
                           </ListItem>
                           
                      { master.map((node)=>node.Node_Role=='master'?(
                          <>
                          <Divider/>
                           <ListItem>
                               <ListItemText primary={node.Node_Role} />
                               <ListItemText primary={node.Node_IP} />
                               <ListItemText primary={node.Node_Name} />
                           </ListItem>
                        </>
                       ):(console.log()))}
                        </List>:<center className={classes.circular}><CircularProgress /></center>
                      
                     }
                       
                      </CardContent>
                     </Card>
              </Grid>
              <Grid key="worker"item xs={12} sm={10} md={5}>
              
                  
              <Card>
              <CardContent>
              <center><Typography className={classes.clusternamestring} onClick={() => dispatch(workerinfoactioncreator())}>Worker nodes info</Typography></center>
                      
              {master?
                      <List>
                          <ListItem>
                               <ListItemText primary="Role" />
                               <ListItemText primary="IP" />
                               <ListItemText primary="Hostname" />
                           </ListItem>
                      { master.map((node)=>node.Node_Role=='worker'?(
                             <>
                             <Divider/>
                              <ListItem>
                                  <ListItemText primary={node.Node_Role} />
                                  <ListItemText primary={node.Node_IP} />
                                  <ListItemText primary={node.Node_Name} />
                              </ListItem>
                           </>
                       ):(console.log()))}
                        </List>:<center className={classes.circular}><CircularProgress /></center>
                      
                     }
                      </CardContent>
              </Card>
                     
              </Grid>
            
              {/*<Grid key="podsinfo"item xs={12} sm={10} md={2}>
             
              <Button  variant="contained" color="primary" className={classes.podsinfobtn} onClick={()=>{navigate('/resourcesinfo')}}> Go to Resources info</Button>
              
                    </Grid>*/}
              
              </Grid>

          </Container>
          <Container className={classes.nodescontainer}>
          <Grid container spacing={4} justify="center">
          
              <Grid key="worker"item xs={12} sm={6} md={4}>
            
                  
              <Card >
              <CardContent>
                      <Typography align="center" className={classes.clusternamestring}>k3s cluster resources</Typography>
                    
                     <List >
                     
                     <ListItem>
                     <Button  variant="contained" className={classes.clusterbtns} onClick={()=>window.open("https://argo-cd.readthedocs.io/en/stable/","_blank")}>ArgoCD</Button>
                     </ListItem>
                     <ListItem>
                     <Button variant="contained" className={classes.clusterbtns} onClick={()=>window.open("https://pulpproject.org/","_blank")}>Pulp</Button>
                     </ListItem>
                     <ListItem>
                     <Button variant="contained" className={classes.clusterbtns} onClick={()=>window.open("https://goharbor.io/","_blank")}>Harbor</Button>
                     </ListItem>
                     <ListItem>
                     <Button variant="contained" className={classes.clusterbtns} onClick={()=>window.open("https://prometheus.io/","_blank")}>Prometheus</Button>
                     </ListItem>
                 
                 </List>
            
                      </CardContent>
              </Card>
                     
              </Grid>
              </Grid>

          </Container>

      </div>
      </ThemeProvider>
      </>
  );
};

export default Clustertab;
