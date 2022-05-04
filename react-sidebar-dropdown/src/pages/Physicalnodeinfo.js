import React,{useEffect} from 'react';

import { CssBaseline,Container,Card,List,ListItem,ListItemText,Typography,Grid,CardContent,Button,CircularProgress,Divider } from '@material-ui/core';
//import AppbarComponent from '../components/AppbarComponent';
//import FooterComponent from '../components/FooterComponent';
import useStyles from '../styles';
import { podsinfoactioncreator } from '../actions/Podsinfoaction';
// import { masterinfoactioncreator } from '../actions/Masternodeinfoaction';
// import { workerinfoactioncreator } from '../actions/Workernodeinfoaction';
import { useDispatch, useSelector } from 'react-redux';
import {connect} from 'react-redux';
import Physicalnodestable from '../components/Physicalnodestable';

const Physicalnodeinfo = () => {
    
    const classes=useStyles();
    
    
  return (<>
  <CssBaseline/>
  
  <div>
  
      <Container className={classes.clusternamecontainer}>
              <Card className={classes.clusternamecard}>
                  <Typography variant="h6" align="center" className={classes.clusternamestring}>Physical nodes info</Typography>
              </Card>

      </Container>
      <Container  className={classes.nodescontainer}>
         <Grid container spacing={4} justify="center" direction={'row'}>
                    
                          
                        <Grid key="pods"  item xs={12} sm={10} md={7}>
                        
                        <Physicalnodestable/>
                        </Grid>
                 
                    
                     
                     
              </Grid>

          </Container>

   
   
  </div>
  {/*<FooterComponent/>*/}
  </>);
};

export default Physicalnodeinfo;
