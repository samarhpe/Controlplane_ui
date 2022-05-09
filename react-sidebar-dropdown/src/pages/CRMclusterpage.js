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
      window.open("https://"+crm.ip+":7630","_blank")
    }
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
               <Button onClick={hawkdashboard} label="Click here to go to HAWK dashboard"/>
           </Box>
              </Grid>

          </Box>

    </div>
  )
}

export default CRMclusterpage;