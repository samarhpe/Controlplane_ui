import React,{useEffect,useState} from 'react'
import { Box, Grid,Card,CardHeader,CardBody,CardFooter,Text,Button,Header,Heading } from 'grommet';
import useStyles from '../styles';

import { useDispatch, useSelector } from 'react-redux';
import {getcrmadminipactioncreator} from '../actions/Crmadminipaction';
const CRMclusterpage = () => {
    const classes=useStyles();
    const dispatch=useDispatch();
    useEffect(() => {
      dispatch(getcrmadminipactioncreator());
    },[]);
    const crm=useSelector((state)=>(state.crminfo.crm));
    
    const hawkdashboard=()=>{
      //dispatch(getcrmadminipactioncreator);
      //console.log(crm);
      window.open("https://"+crm.ip+":7630/login?username=hacluster&password=linux","_blank")
    }
    const url="https://"+crm.ip+":7630/login";
  return (
    <div>
<Box  >
    <Box width="100%" className={classes.clusternamestring} padding="small" align='center'>
   <Text >CRM Cluster</Text>
        </Box>
          <Grid justify="center"
          pad="large"
         
          >
           <Box >
             <form action="https://172.30.2.11:7630/login" method="post" target='_blank' id="new_session">
               <input name="utf8" type="hidden" value="✓"/>
             
              <input type="hidden" name="session[username]" id="session_username" value="hacluster"/>
              <input type="hidden" name="session[password]" id="session_password" value="linux"/>
              
               <input type="submit" name="commit" value="Click here to go to HAWK dashboard"/>
               </form>
           </Box>
              </Grid>

          </Box>

    </div>
  )
}

export default CRMclusterpage;