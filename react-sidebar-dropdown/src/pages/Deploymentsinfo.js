import React,{useEffect,useState} from 'react';

import { CssBaseline,Container,Card,List,ListItem,ListItemText,Typography,Grid,CardContent,Button,CircularProgress,Divider,TextField } from '@material-ui/core';
//import AppbarComponent from '../components/AppbarComponent';
//import FooterComponent from '../components/FooterComponent';
import useStyles from '../styles';
import { deplsinfoactioncreator } from '../actions/Deplsinfoaction';
import { Resourcebar } from '../components/Resourcebar';
// import { masterinfoactioncreator } from '../actions/Masternodeinfoaction';
// import { workerinfoactioncreator } from '../actions/Workernodeinfoaction';
import { useDispatch, useSelector } from 'react-redux';
import {connect} from 'react-redux';
import Deplstable from '../components/Deplstable';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import {Link} from 'react-router-dom';
import { Box, Grommet, Heading, Layer, Select, Text } from 'grommet';
import { updatedepl } from '../api';
import {toast} from 'react-toastify';
toast.configure()
const Deploymentsinfo = ({eventsbtnclicked,nodesbtnclicked}) => {
    useEffect(() => {
        dispatch(deplsinfoactioncreator());
        const interval=setInterval(()=>{
            dispatch(deplsinfoactioncreator());
        },3000);
        return ()=>clearInterval(interval);
      }, []);
    const classes=useStyles();
    const dispatch=useDispatch();
    const depls=useSelector((state)=>(state.deplsinfo.depls));
    const namespaces=depls?Object.keys(depls):null;

    const [open, setOpen] = React.useState();
    const [selected_ns,set_selected_ns]=useState(null);
    const [selected_depl,set_selected_depl]=useState(null);
    const [actual_replicas,set_actual_replicas]=useState(null);
    const [desired_replicas,set_desired_replicas]=useState(null);
    const handleTextInputChange = event => {
      set_desired_replicas(event.target.value);
  };
    const onOpen = () => setOpen(true);
    const onClose = () => setOpen(undefined);
    const scaleclicked=()=>{
    updatedepl(selected_ns,selected_depl,desired_replicas);
    dispatch(deplsinfoactioncreator());
    onClose();
      toast.success((selected_depl+' updated succeessfully'),{position: toast.POSITION.TOP_RIGHT},{autoClose:3000});
    }
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
          <Typography style={{marginTop:'12px'}}className={classes.vertcenter2} variant="h6">
            Deployments
          </Typography>
          </div>
      </Container>
      <Container>
        
      <Container>
      {/*<Resourcebar/>*/}
      <Container  style={{width:'100%'}}>
         <Grid container spacing={4}  direction={'row'}>
                      {namespaces?
                      namespaces.map((ns)=>(
                          
                        <Grid key="depls"  item xs={11} sm={12} md={11}>
                          <Typography align="center" className={classes.namespacestring}>Namespace: {ns}</Typography>
                        <Deplstable ns={ns} depls={depls[ns]} setOpen={setOpen} set_selected_ns={set_selected_ns} set_selected_depl={set_selected_depl} set_actual_replicas={set_actual_replicas} eventsbtnclicked={eventsbtnclicked}/>
                        </Grid>
                      ))
                      :<center className={classes.circular}><CircularProgress /></center>
                     
                     }
              </Grid>

          </Container>
          {open && (
        <Layer
          id="hello world"
          position="center"
          onClickOutside={onClose}
          onEsc={onClose}
        >
          <Box pad="medium" gap="small" width="850px">
            <Heading level={4} margin="none">
            Scale a resource
            </Heading>
            <Text>deployment {selected_depl} will be updated to reflect the desired replicas count</Text>
            <Box >
              <div style={{display:'inline-flex',width:'400px',justifyContent:'space-between'}}>
                <TextField
              id="standard-number"
              label="Desired replicas*"
              type="number"
              InputLabelProps={{
                shrink: true,
              }}
              value={desired_replicas}
              onChange= {handleTextInputChange}
              variant="standard"
            />
            <TextField
              id="standard-read-only-input"
              label="Actual replicas"
              defaultValue={actual_replicas}
              InputProps={{
                readOnly: true,
              }}
              variant="standard"
            />
            </div>
            </Box>
            <Box
              as="footer"
              gap="small"
              direction="row"
              align="center"
              justify="start"
              pad={{ top: 'medium', bottom: 'small' }}
            >
              <Button
                className={classes.resourcebtns}
                onClick={scaleclicked}
                primary
              >Scale
                </Button>
              <Button
              className={classes.resourcebtns}
                onClick={onClose}
                
              >Cancel
                </Button>
            </Box>
          </Box>
        </Layer>
      )}


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
        getmasternodeinfo:()=>dispatch(deplsinfoactioncreator())
    }
}
export default Deploymentsinfo;
