import React,{useEffect} from 'react';

import { CssBaseline,Container,Card,List,ListItem,ListItemText,Typography,Grid,CardContent,Button,CircularProgress,Divider } from '@material-ui/core';
//import AppbarComponent from '../components/AppbarComponent';
//import FooterComponent from '../components/FooterComponent';
import useStyles from '../styles';
import { masterinfoactioncreator } from '../actions/Masternodeinfoaction';
import { workerinfoactioncreator } from '../actions/Workernodeinfoaction';
import { useDispatch, useSelector } from 'react-redux';
import {connect} from 'react-redux';

const Nodesinfo = () => {
    useEffect(() => {
        dispatch(masterinfoactioncreator());
        const nodesinterval=setInterval(()=>{
            dispatch(masterinfoactioncreator());
        },4000);
        return ()=>clearInterval(nodesinterval);
      }, []);
    const classes=useStyles();
    const dispatch=useDispatch();
    const master=useSelector((state)=>(state.masterinfo.master));
    //const worker=useSelector((state)=>(state.workerinfo.worker));
    console.log('master:',master);
    //console.log('worker',worker);
  return (<>
  <CssBaseline/>
  
  <div>
  
      <Container className={classes.clusternamecontainer}>
              <Card className={classes.clusternamecard}>
                  <Typography variant="h6" align="center" className={classes.clusternamestring}>Nodes info</Typography>
              </Card>

      </Container>
      <Container className={classes.nodescontainer}>
          <Grid container spacing={4} justify="center">
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
              <Grid key="master"item xs={12} sm={10} md={5}>
              
                  
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
              </Grid>

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
        getmasternodeinfo:()=>dispatch(masterinfoactioncreator())
    }
}
export default Nodesinfo;
