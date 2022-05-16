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
            <form _ngcontent-kar-c324="" novalidate="" fxlayout="column" class="ng-untouched ng-pristine ng-valid" method="post" action="https://172.34.1.109/api/v1/login">
            <mat-radio-group _ngcontent-kar-c324="" role="radiogroup" name="login" class="mat-radio-group ng-untouched ng-pristine ng-valid">
            <div _ngcontent-kar-c324="" class="ng-star-inserted">
            <mat-radio-button _ngcontent-kar-c324="" color="primary" class="mat-radio-button mat-radio-checked mat-primary" id="mat-radio-2">
            <label class="mat-radio-label" for="mat-radio-2-input">
            <span class="mat-radio-container">
            <span class="mat-radio-outer-circle">
            </span><span class="mat-radio-inner-circle">
            </span>
            <input type="radio" class="mat-radio-input cdk-visually-hidden" id="mat-radio-2-input" tabindex="0" name="login" value="token" />
            <span mat-ripple="" class="mat-ripple mat-radio-ripple mat-focus-indicator">
            <span class="mat-ripple-element mat-radio-persistent-ripple">
            </span>
            </span>
            </span>
            <span class="mat-radio-label-content">
            <span >&nbsp;</span>
            Token
            </span>
            </label>
            </mat-radio-button>
            <div _ngcontent-kar-c324="" class="kd-login-mode-description">
            
            Every Service Account has a Secret with valid Bearer Token that can be used to log in to Dashboard. To find out more about how to configure and use Bearer Tokens, please refer to the <a _ngcontent-kar-c324="" href="https://kubernetes.io/docs/admin/authentication/" class="ng-star-inserted">Authentication</a> section.
             </div>
             </div>
             <div _ngcontent-kar-c324="" class="ng-star-inserted">
             <mat-radio-button _ngcontent-kar-c324="" color="primary" class="mat-radio-button mat-primary" id="mat-radio-3">
             <label class="mat-radio-label" for="mat-radio-3-input">
             <span class="mat-radio-container">
             <span class="mat-radio-outer-circle">
             </span>
             <span class="mat-radio-inner-circle">
             </span>
             <input type="radio" class="mat-radio-input cdk-visually-hidden" id="mat-radio-3-input" tabindex="0" name="login" value="kubeconfig" />
             <span mat-ripple="" class="mat-ripple mat-radio-ripple mat-focus-indicator">
             <span class="mat-ripple-element mat-radio-persistent-ripple">
             </span>
             </span>
             </span>
             <span class="mat-radio-label-content">
             <span>&nbsp;
             </span>Kubeconfig
             </span>
             </label>
             </mat-radio-button>
             <div _ngcontent-kar-c324="" class="kd-login-mode-description"> 
             Please select the kubeconfig file that you have created to configure access to the cluster. To find out more about how to configure and use kubeconfig file, please refer to the <a _ngcontent-kar-c324="" href="https://kubernetes.io/docs/tasks/access-application-cluster/configure-access-multiple-clusters/" class="ng-star-inserted">
             Configure Access to Multiple Clusters</a> section. </div></div>
             </mat-radio-group><mat-form-field _ngcontent-kar-c324="" class="mat-form-field kd-login-input ng-tns-c109-1 mat-primary mat-form-field-type-mat-input mat-form-field-appearance-legacy mat-form-field-can-float mat-form-field-has-label mat-form-field-hide-placeholder ng-star-inserted">
               <div class="mat-form-field-wrapper ng-tns-c109-1"><div class="mat-form-field-flex ng-tns-c109-1">
                 <div class="mat-form-field-infix ng-tns-c109-1">
                   <input _ngcontent-kar-c324="" matinput="" id="token" name="token" type="password" required="" class="mat-input-element mat-form-field-autofill-control ng-tns-c109-1 cdk-text-field-autofill-monitored" data-placeholder="Enter token" aria-required="true"/>
                     <span class="mat-form-field-label-wrapper ng-tns-c109-1">
                       <label class="mat-form-field-label ng-tns-c109-1 mat-empty mat-form-field-empty ng-star-inserted" id="mat-form-field-label-1" for="token" aria-owns="token">
                         <span class="ng-tns-c109-1 ng-star-inserted">Enter token</span>
                         <span aria-hidden="true" class="mat-placeholder-required mat-form-field-required-marker ng-tns-c109-1 ng-star-inserted"> *</span>
                         </label></span></div></div>
                         <div class="mat-form-field-underline ng-tns-c109-1 ng-star-inserted">
                           <span class="mat-form-field-ripple ng-tns-c109-1"></span></div>
                           <div class="mat-form-field-subscript-wrapper ng-tns-c109-1">
                             <div class="mat-form-field-hint-wrapper ng-tns-c109-1 ng-trigger ng-trigger-transitionMessages ng-star-inserted" >
                               <div class="mat-form-field-hint-spacer ng-tns-c109-1"></div></div></div></div>
                               </mat-form-field>
                               <div _ngcontent-kar-c324="" fxflex="none" fxlayout="row" >
                                 <button _ngcontent-kar-c324="" mat-raised-button="" color="primary" type="submit" class="mat-focus-indicator kd-login-button mat-raised-button mat-button-base mat-primary">
                                   <span class="mat-button-wrapper"> Sign in </span>
                                   <span matripple="" class="mat-ripple mat-button-ripple"></span>
                                   <span class="mat-button-focus-overlay"></span></button></div></form>
           
           </Box>
              <Box pad="30px" >
              <Card  width="small">
              <CardHeader background="#01a982"  justify="center">
                      <Text>k3s cluster resources</Text>
                      </CardHeader>
                 
                     
                     <CardBody pad="small">
                       <form method="post" action="https://172.34.1.102/api/v1/session" target='_blank'>
                       <input name="utf8" type="hidden" value="✓"/>
                         <input type="hidden" name="username" id="username" value="admin"/>
                         <input type="hidden" name="password" id="password" value="Password!234"/>
                    <input type="submit" value="ArgoCD"/>
                     </form>
                     
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