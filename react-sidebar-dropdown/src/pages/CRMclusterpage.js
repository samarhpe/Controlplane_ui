import React from 'react'
import { Box, Grid,Card,CardHeader,CardBody,CardFooter,Text,Button,Header,Heading } from 'grommet';
import useStyles from '../styles';
const CRMclusterpage = () => {
    const classes=useStyles();
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
               <Button onClick={()=>window.open("https://argo-cd.readthedocs.io/en/stable/","_blank")} label="Click here to go to HAWK dashboard"/>
           </Box>
              </Grid>

          </Box>

    </div>
  )
}

export default CRMclusterpage;