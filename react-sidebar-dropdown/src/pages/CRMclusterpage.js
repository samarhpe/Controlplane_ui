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
               <Button onClick={()=>window.open("https://0.0.0.0:7630","_blank")} label="Click here to go to HAWK dashboard"/>
           </Box>
              </Grid>

          </Box>

    </div>
  )
}

export default CRMclusterpage;