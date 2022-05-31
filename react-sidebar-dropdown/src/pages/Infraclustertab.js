import React,{useState,useContext} from 'react';
import {Typography,AppBar,Button,Card,CardActions,CardContent,CardMedia,CssBaseline,Grid,Toolbar,Container, CardHeader,ListItem,List,ListItemText} from '@material-ui/core';
import {ResponsiveContext} from 'grommet';
import useStyles from '../styles';
import data from '../data/data.json';
import '../styles/index.css';
import Physicalhosttable from '../components/Physicalhoststable';
import { ListSubheader } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Popover } from '@mui/material';
//import MasterAccordianComponent from '../components/MasterAccordianComponent';
//import WorkerAccordianComponent from '../components/WorkerAccordianComponent';
//import HostservicesAccordianComponent from '../components/HostservicesAccordianComponent';
const Clustertab = () => {
    const classes=useStyles();
   // const size=useContext(ResponsiveContext);
      // console.log(size);
    const [PDNSanchorEl,PDNSsetAnchorEl] = useState(null);

    const PDNShandleClick = (event) => {
      PDNSsetAnchorEl(event.currentTarget);
    };
  
    const PDNShandleClose = () => {
      PDNSsetAnchorEl(null);
    };
  
    const PDNSopen = Boolean(PDNSanchorEl);
    const PDNSid = PDNSopen ? 'simple-popover' : undefined;
    /*-------------------------------------------------------------------  */
    const [DRBDanchorEl, DRBDsetAnchorEl] = useState(null);
    const DRBDhandleClick = (event) => {
    DRBDsetAnchorEl(event.currentTarget);
    };

    const DRBDhandleClose = () => {
    DRBDsetAnchorEl(null);
    };

    const DRBDopen = Boolean(DRBDanchorEl);
    const DRBDid = DRBDopen ? 'simple-popover' : undefined;
/*-------------------------------------------------------------------  */
const [SquidanchorEl, SquidsetAnchorEl] = useState(null);
const SquidhandleClick = (event) => {
SquidsetAnchorEl(event.currentTarget);
};

const SquidhandleClose = () => {
SquidsetAnchorEl(null);
};

const Squidopen = Boolean(SquidanchorEl);
const Squidid = Squidopen ? 'simple-popover' : undefined;
/*-------------------------------------------------------------------  */
  return(
      <>

     
      <div className="main">
          <Container className={classes.clusternamecontainer}>
              <Card className={classes.clusternamecard}>
                  <Typography variant="h6" align="center" className={classes.clusternamestring}>Infrastructure cluster</Typography>
              </Card>

          </Container>
          <Container className={classes.nodescontainer}>
          <Grid container spacing={4} justify="center">
          <Grid key="physicalhosts"item xs={12} sm={6} md={8}>
          <Typography align="center" className={classes.namespacestring}>Physical hosts</Typography>
          <Physicalhosttable/>
          </Grid>
          <Grid key="infraclusterresources"item xs={12} sm={6} md={4}>
              
              <Card >
                  <CardContent>
                      <Typography align="center" className={classes.clusternamestring}>Infra cluster resources</Typography>
                      <List>
                     
                          <ListItem>
                              <Button variant="contained" className={classes.clusterbtns} aria-describedby={DRBDid} onClick={DRBDhandleClick}>DRBD</Button>
                           
                                <Popover
                                    id={DRBDid}
                                    open={DRBDopen}
                                    anchorEl={DRBDanchorEl}
                                    onClose={DRBDhandleClose}
                                    anchorOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'left',
                                    }}
                                >
                                    <div style={{padding:'5px'}}>
                                <Typography sx={{ p: 2 }}>Version: 9.0.28</Typography> 
                                </div>
                                </Popover>
                          </ListItem>
                          <ListItem>
                          <Button variant="contained" className={classes.clusterbtns} onClick={()=>window.open("https://argo-cd.readthedocs.io/en/stable/","_blank")}>AFC</Button>
                          </ListItem>
                          <ListItem>
                          <Button variant="contained" className={classes.clusterbtns} onClick={()=>window.open("https://www.hpe.com/us/en/integrated-systems/software.html","_blank")}>OneView</Button>
                          </ListItem>
                         <ListSubheader>Host Services</ListSubheader>
                         <ListItem>
                          <Button variant="contained" className={classes.clusterbtns} aria-describedby={PDNSid} onClick={PDNShandleClick}>Pdns</Button>
          
                            <Popover
                                id={PDNSid}
                                open={PDNSopen}
                                anchorEl={PDNSanchorEl}
                                onClose={PDNShandleClose}
                                anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                                }}
                            >
                                <div style={{padding:'5px'}}>
                            <Typography sx={{ p: 2 }}>Version: 4.6.0</Typography> 
                            </div>
                            </Popover>
                          </ListItem>
                          <ListItem>
                          <Button variant="contained" className={classes.clusterbtns} aria-describedby={Squidid} onClick={SquidhandleClick}>Squid</Button>
                         
                            <Popover
                                id={Squidid}
                                open={Squidopen}
                                anchorEl={SquidanchorEl}
                                onClose={SquidhandleClose}
                                anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                                }}
                            >
                                <div style={{padding:'5px'}}>
                            <Typography sx={{ p: 2 }}>Version: 4.6.0</Typography> 
                            </div>
                            </Popover>
                          </ListItem>
                      
                      </List>
                      </CardContent>
                     </Card>
              </Grid>
            
              </Grid>

          </Container>

      </div>

      </>
  );
};

export default Clustertab;
