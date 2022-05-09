import React from 'react'
import { Box, Grid,Card,CardHeader,CardBody,CardFooter,Text,Button,Header,Heading } from 'grommet';
import useStyles from '../styles';
import { getcrmadminip } from '../api';
const CRMclusterpage = () => {
    const classes=useStyles();
    console.log(window.location.host);
    const hawkdashboard=()=>{
      const{data}=getcrmadminip();
      console.log(data);
      //window.open("https://"+window.location.host,"_blank")
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