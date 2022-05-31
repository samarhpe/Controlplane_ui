import React,{useContext} from 'react'
import { Box, Grid,Card,CardHeader,CardBody,CardFooter,Text,Button,Header,Heading,ResponsiveContext } from 'grommet';
import useStyles from '../styles';
import axios from 'axios';
const K3sclusterpage = () => {
    const classes=useStyles();
    const size=useContext(ResponsiveContext);
       console.log(size);
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
             <form method="post" action="https://172.34.1.109/api/v1/login">
               <input type="hidden" name="x-csrf-token" value="tL1t1f_guaLwvsAH2NeD_FUzIFg:1653903348571"/>
               <input type="hidden" name="token" value="eyJhbGciOiJSUzI1NiIsImtpZCI6IjBvRllSc241amJ3bFZrek9aT0ROREtMallUQWZndHVld1NXSF93d2laSE0ifQ.eyJpc3MiOiJrdWJlcm5ldGVzL3NlcnZpY2VhY2NvdW50Iiwia3ViZXJuZXRlcy5pby9zZXJ2aWNlYWNjb3VudC9uYW1lc3BhY2UiOiJrdWJlcm5ldGVzLWRhc2hib2FyZCIsImt1YmVybmV0ZXMuaW8vc2VydmljZWFjY291bnQvc2VjcmV0Lm5hbWUiOiJhZG1pbi11c2VyLXRva2VuLWY2ZDQ4Iiwia3ViZXJuZXRlcy5pby9zZXJ2aWNlYWNjb3VudC9zZXJ2aWNlLWFjY291bnQubmFtZSI6ImFkbWluLXVzZXIiLCJrdWJlcm5ldGVzLmlvL3NlcnZpY2VhY2NvdW50L3NlcnZpY2UtYWNjb3VudC51aWQiOiI5ODBlN2IyMS0yNTc1LTRiMzgtYmM5ZC04M2Y5NDcwYWMxOWEiLCJzdWIiOiJzeXN0ZW06c2VydmljZWFjY291bnQ6a3ViZXJuZXRlcy1kYXNoYm9hcmQ6YWRtaW4tdXNlciJ9.LwEDn7I5u0G8SLc6oyE3_77dropZ0shiR_JcD6YnqOx6rcKDEwqRIvZRwg3mKHrGCXjwPHxbbaJjPSZNlXuWrnaBMRPyOpRnho42e0ulVQXcVA5DUV27vpGK42ItlNdcnIdLd8DhsJrLy5YPgymhOxBlQEOqbw33R6wzFN2p0Jne7lX76sbujBfiIov2e-HUWVXTotyHQZPRhY-9Purats57DVFZSDCBK-dVt2QXcEvez6mjpXzlTOA0yLMNvOic0uPJZsdoondg1XOzfvsC0DQazwWKmRqqno-4f6ou3ljXtMvVyG2KK4VIYoMamuY0vt6e_8NiZ1dhJxtdRS9JEw" />
           <Button  type="submit" primary label="Click here to go to K3s dashboard" name="commit"/>
           </form>
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