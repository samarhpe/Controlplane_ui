import React from 'react'
import { Box, Grid,Card,CardHeader,CardBody,CardFooter,Text,Button,Header,Heading } from 'grommet';
import useStyles from '../styles';
import axios from 'axios';
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
           <Button  type="submit" primary label="Click here to go to K3s dashboard" name="commit"/>
           </Box>
              <Box pad="30px" >
              <center>  <Box background="#01A982"  pad="small" round="5px">
                <Text>k3s cluster resources</Text>
                </Box></center>

              <Card width="1000px">
              {/*<CardHeader width="270px" background="#01a982" pad="small">
                      <Text>k3s cluster resources</Text>
  </CardHeader>*/}
                 
                     
                     <CardBody direction="row" pad="small" margin="small" gap="medium">
                    
                       <div width="100%" style={{marginTop:"5px"}}>
                       <form align="center" method="post" action="https://172.34.1.102/api/v1/session" target='_blank'>
                       <input name="utf8" type="hidden" value="✓"/>
                         <input type="hidden" name="username" id="username" value="admin"/>
                         <input type="hidden" name="password" id="password" value="Password!234"/>
                    <Button type="submit" style={{width:'100%'}} primary label="ArgoCD" />
                     </form>
                     </div>
                     <div width="100%" style={{marginTop:"5px"}} >
                       <form align="center">
                     <Button style={{width:'100%'}} primary onClick={()=>window.open("https://argo-cd.readthedocs.io/en/stable/","_blank")} label="Pulp"/>
                     </form>
                     </div>
                    {/* <Button margin="small" primary onClick={()=>window.open("https://argo-cd.readthedocs.io/en/stable/","_blank")} label="Harbor"/>*/}
                    <div width="100%" style={{marginTop:"5px"}}>
                    <form align="center" method="post" action="https://172.34.1.110/harbor/sign-in?redirect_url=%2Fharbor%2Fprojects" target='_blank'>
                       <input name="utf8" type="hidden" value="✓"/>
                         <input type="hidden" name="login_username" id="login_username" value="admin"/>
                         <input type="hidden" name="login_password" id="login_password" value="Password!234"/>
                    <Button  style={{width:'100%'}} primary type="submit" label="Harbor"/>
                     </form>
                     </div>
                     <div width="100%" style={{marginTop:"5px"}}>
                     <form align="center">
                     <Button  style={{width:'100%'}}  primary onClick={()=>window.open("https://argo-cd.readthedocs.io/en/stable/","_blank")} label="Prometheus"/>
                    </form>
                     </div>
                    
                     </CardBody>
             
            
                     
              </Card>
                     
              </Box>
              </Grid>

          </Box>

    </div>
  )
}

export default K3sclusterpage;