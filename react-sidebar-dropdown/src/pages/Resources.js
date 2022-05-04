import React from 'react'
import { Container,Typography,Button } from '@material-ui/core'
import Podsinfo from './Podsinfo';
import Deploymentsinfo from './Deploymentsinfo';
import Eventsinfo from './Eventsinfo';
import K3sclustertab from './K3sclustertab';
import Logspage from './Logspage';
import Servicesinfo from './Servicesinfo';
import { useState } from 'react';
import useStyles from '../styles';
const Resources = () => {
    const classes=useStyles();
    const [podsvisible,setpodsvisible]=useState(false);
    const [deplsvisible,setdeplsvisible]=useState(false);
    const [servicesvisible,setservicesvisible]=useState(false);
    const [nodesvisible,setnodesvisible]=useState(true);
    const [logsvisible,setlogsvisible]=useState(false);
    const [eventsvisible,seteventsvisible]=useState(false);
    const [namespaceselected,setnamespaceselected]=useState(null);
    const [podselected,setpodselected]=useState(null);
    const [eventnamespaceselected,seteventnamespaceselected]=useState(null);
    const [eventdeplselected,seteventdeplselected]=useState(null);
    const [resourcetype,setresourcetype]=useState(null);
    const podsbtnclicked=()=>{
        setpodsvisible(true);
        setnodesvisible(false);
        setlogsvisible(false);
        setdeplsvisible(false);
        setservicesvisible(false);
        seteventsvisible(false);
    }
    const servicesbtnclicked=()=>{
        setpodsvisible(false);
        setnodesvisible(false);
        setlogsvisible(false);
        setdeplsvisible(false);
        setservicesvisible(true);
        seteventsvisible(false);
    }
    const deplsbtnclicked=()=>{
        
            setpodsvisible(false);
            setnodesvisible(false);
            setlogsvisible(false);
            setdeplsvisible(true);
            setservicesvisible(false);
            seteventsvisible(false);
    }
    const nodesbtnclicked=()=>{
        setpodsvisible(false);
        setnodesvisible(true);
        setlogsvisible(false);
        setdeplsvisible(false);
        setservicesvisible(false);
        seteventsvisible(false);
    }
    const logsbtnclicked=(namespace,pod)=>{
        setnamespaceselected(namespace);
        setpodselected(pod);
        setpodsvisible(false);
        setnodesvisible(false);
        setlogsvisible(true);
        setdeplsvisible(false);
        setservicesvisible(false);
        seteventsvisible(false);
    }
    const eventsbtnclicked=(namespace,depl,rtype)=>{
        seteventnamespaceselected(namespace);
        seteventdeplselected(depl);
        setresourcetype(rtype);
        setpodsvisible(false);
        setnodesvisible(false);
        setlogsvisible(false);
        setdeplsvisible(false);
        setservicesvisible(false);
        seteventsvisible(true);
    }
  return (
    <div style={{height:'100%'}}>
        <Container style={{display:'flex',height:'100%'}}>
        <Container style={{border:'1px solid black',width:'200px'}}>
            <div>
        <Typography style={{fontWeight:'bold'}}>
          Workloads
        </Typography>
         <div>
             <Button className={classes.resourcebtns}  onClick={deplsbtnclicked}>Deployments</Button>
             <Button  className={classes.resourcebtns} onClick={podsbtnclicked}>Pods</Button>

         </div>
        </div>
        <div>
        <Typography style={{fontWeight:'bold'}}>
        Service
        </Typography>
         <div>
             <Button className={classes.resourcebtns} onClick={servicesbtnclicked}>Services</Button>
         </div>
        </div>
        <div>
        <Typography style={{fontWeight:'bold'}}>
          Cluster
        </Typography>
         <div>
             <Button className={classes.resourcebtns} onClick={nodesbtnclicked}>Nodes</Button>
            

         </div>
        </div>
        </Container>
        <Container style={{width:'100%'}}>
            {podsvisible?(<Podsinfo logsbtnclicked={logsbtnclicked} nodesbtnclicked={nodesbtnclicked}/>):nodesvisible?(<K3sclustertab/>):logsvisible?(<Logspage namespace={namespaceselected} pod={podselected} nodesbtnclicked={nodesbtnclicked} podsbtnclicked={podsbtnclicked}/>):deplsvisible?(<Deploymentsinfo eventsbtnclicked={eventsbtnclicked} nodesbtnclicked={nodesbtnclicked}/>):servicesvisible?(<Servicesinfo eventsbtnclicked={eventsbtnclicked} nodesbtnclicked={nodesbtnclicked}/>):eventsvisible?(<Eventsinfo namespace={eventnamespaceselected} depl={eventdeplselected} resourcetype={resourcetype} resourcebtnclicked={resourcetype==='Services'?servicesbtnclicked:deplsbtnclicked} nodesbtnclicked={nodesbtnclicked}/>):(<div></div>)}
        
        </Container>
        
        </Container>
    </div>
  )
}

export default Resources;