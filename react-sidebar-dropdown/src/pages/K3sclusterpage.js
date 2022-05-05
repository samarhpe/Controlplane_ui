import React from 'react'
import { Box, Grid,Card,CardHeader,CardBody,CardFooter,Text,Button,Header,Heading } from 'grommet';
import useStyles from '../styles';
const K3sclusterpage = () => {
    const classes=useStyles();
  return (
    <div>
<Box  >
    <Box width="100%" className={classes.clusternamestring} padding="small" align='center'>
   <Text >K3s Cluster</Text>
        </Box>
          <Grid justify="center"
          pad="large"
         
          >
           <Box >
               <Button onClick={()=>window.open("https://argo-cd.readthedocs.io/en/stable/","_blank")} label="Click here to go to Kubernetes dashboard"/>
           </Box>
              <Box pad="30px" >
              <Card  width="small">
              <CardHeader background="#01a982"  justify="center">
                      <Text>k3s cluster resources</Text>
                      </CardHeader>
                 
                     
                     <CardBody pad="small">
                     <Button margin="small" primary onClick={()=>window.open("https://argo-cd.readthedocs.io/en/stable/","_blank")} label="ArgoCD"/>
                     
                     
                     <Button margin="small" primary onClick={()=>window.open("https://argo-cd.readthedocs.io/en/stable/","_blank")} label="Pulp"/>
                     
                     <Button margin="small" primary onClick={()=>window.open("https://argo-cd.readthedocs.io/en/stable/","_blank")} label="Harbor"/>
                    
                     <Button margin="small" primary onClick={()=>window.open("https://argo-cd.readthedocs.io/en/stable/","_blank")} label="Prometheus"/>
                     </CardBody>
             
            
                     
              </Card>
                     
              </Box>
              </Grid>

          </Box>

    </div>
  )
}

export default K3sclusterpage;