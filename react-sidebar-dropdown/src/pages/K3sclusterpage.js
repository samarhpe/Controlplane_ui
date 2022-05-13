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
             <form action="https://172.34.1.109/#/login" method='post' target='_blank'> 
              <mat-radio-group role="radiogroup" name="login">
              <mat-radio-button _ngcontent-uag-c324="" color="primary" class="mat-radio-button mat-primary mat-radio-checked" id="mat-radio-5">
                <label class="mat-radio-label" for="mat-radio-5-input">
                  <span class="mat-radio-container"><span class="mat-radio-outer-circle"></span>
                  <span class="mat-radio-inner-circle"></span>
                  <input type="radio" class="mat-radio-input cdk-visually-hidden" id="mat-radio-5-input" tabindex="0" name="login" value="token" />
                    <span mat-ripple="" class="mat-ripple mat-radio-ripple mat-focus-indicator">
                      <span class="mat-ripple-element mat-radio-persistent-ripple"></span>
                      </span></span>
                      {/*<span class="mat-radio-label-content"><span style="display: none;">&nbsp;</span>Token</span>*/}
                      </label>
                      </mat-radio-button>
              </mat-radio-group>
              <mat-form-field>
                <input _ngcontent-uag-c324 matinput id="token" name="token" type="hidden" value="eyJhbGciOiJSUzI1NiIsImtpZCI6IjBvRllSc241amJ3bFZrek9aT0ROREtMallUQWZndHVld1NXSF93d2laSE0ifQ.eyJpc3MiOiJrdWJlcm5ldGVzL3NlcnZpY2VhY2NvdW50Iiwia3ViZXJuZXRlcy5pby9zZXJ2aWNlYWNjb3VudC9uYW1lc3BhY2UiOiJrdWJlcm5ldGVzLWRhc2hib2FyZCIsImt1YmVybmV0ZXMuaW8vc2VydmljZWFjY291bnQvc2VjcmV0Lm5hbWUiOiJhZG1pbi11c2VyLXRva2VuLWY2ZDQ4Iiwia3ViZXJuZXRlcy5pby9zZXJ2aWNlYWNjb3VudC9zZXJ2aWNlLWFjY291bnQubmFtZSI6ImFkbWluLXVzZXIiLCJrdWJlcm5ldGVzLmlvL3NlcnZpY2VhY2NvdW50L3NlcnZpY2UtYWNjb3VudC51aWQiOiI5ODBlN2IyMS0yNTc1LTRiMzgtYmM5ZC04M2Y5NDcwYWMxOWEiLCJzdWIiOiJzeXN0ZW06c2VydmljZWFjY291bnQ6a3ViZXJuZXRlcy1kYXNoYm9hcmQ6YWRtaW4tdXNlciJ9.LwEDn7I5u0G8SLc6oyE3_77dropZ0shiR_JcD6YnqOx6rcKDEwqRIvZRwg3mKHrGCXjwPHxbbaJjPSZNlXuWrnaBMRPyOpRnho42e0ulVQXcVA5DUV27vpGK42ItlNdcnIdLd8DhsJrLy5YPgymhOxBlQEOqbw33R6wzFN2p0Jne7lX76sbujBfiIov2e-HUWVXTotyHQZPRhY-9Purats57DVFZSDCBK-dVt2QXcEvez6mjpXzlTOA0yLMNvOic0uPJZsdoondg1XOzfvsC0DQazwWKmRqqno-4f6ou3ljXtMvVyG2KK4VIYoMamuY0vt6e_8NiZ1dhJxtdRS9JEw
"/>
              </mat-form-field>
              <input type="submit" value="Click here to go to kubernetes dashboard"/>
             </form>
               {/*<Button onClick={()=>window.open("https://argo-cd.readthedocs.io/en/stable/","_blank")} label="Click here to go to Kubernetes dashboard"/>*/}
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