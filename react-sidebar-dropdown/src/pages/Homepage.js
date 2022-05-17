import React,{useState} from 'react';
import {Container,Card,Typography,Grid,CardContent, Button} from '@material-ui/core';
import useStyles from '../styles';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import "../index.css";
import {Menu } from 'grommet';
const Homepage = () => {
    const classes=useStyles();
    
  return(
      <>
    <Container className={classes.clusternamecontainer}>
    <Card className={classes.clusternamecard}>
        <Typography variant="h6" align="center" className={classes.clusternamestring}>Control Plane 2.0</Typography>
    </Card>

</Container>
  <Container>
    <Typography style={{ fontWeight: 600,marginTop:"10px" }}>Home</Typography>
   {/* <Typography align="center" style={{ fontWeight: 600 }}>Components</Typography>*/}
    {/*<Grid container style={{marginTop:"20px"}} spacing={2} justify="center">
    <Grid key="ArgoCD"item xs={12} sm={6} md={2}>
    <Card >
                  <CardContent>
                  <div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
                  <Typography style={{ fontWeight: 600 }}>ArgoCD</Typography>
                  <Menu

hoverIndicator={true}

focusIndicator={true}

icon={<MoreVertIcon />}

items={[
  {
    label: "Version: v20.0.1",
  },

  
]}

/>
                    </div>
                   
                    <div>
                     <p style={{marginTop:"5px"}}>Status:</p>
                      <div style={{marginTop:"5px"}}>
                      <div class='box green' ></div>
                      Active
                      </div>
                      </div>
                  </CardContent>
    </Card>
    </Grid>
    <Grid key="Harbor"item xs={12} sm={6} md={2}>
    <Card >
                  <CardContent>
                  <div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
                  <Typography style={{ fontWeight: 600 }}>Harbor</Typography>
                  <Menu

hoverIndicator={true}

focusIndicator={true}

icon={<MoreVertIcon />}

items={[
  {
    label: "Version: v20.0.1",
  },

  
]}

/>
                    </div>
                    <div>
                     <p style={{marginTop:"5px"}}>Status:</p>
                      <div style={{marginTop:"5px"}}>
                      <div class='box red' ></div>
                      Inactive
                      </div>
                      </div>
                  </CardContent>
    </Card>
    </Grid>
    <Grid key="Pulp"item xs={12} sm={6} md={2}>
    <Card >
                  <CardContent>
                  <div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
                  <Typography style={{ fontWeight: 600 }}>Pulp</Typography>
                  <Menu

hoverIndicator={true}

focusIndicator={true}

icon={<MoreVertIcon />}

items={[
  {
    label: "Version: v20.0.1",
  },

  
]}

/>
                    </div>
                   
                    <div>
                     <p style={{marginTop:"5px"}}>Status:</p>
                      <div style={{marginTop:"5px"}}>
                      <div class='box green' ></div>
                      Active
                      </div>
                      </div>
                  </CardContent>
    </Card>
    </Grid>
    <Grid key="DRBD"item xs={12} sm={6} md={2}>
    <Card >
                  <CardContent>
                  <div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
                  <Typography style={{ fontWeight: 600 }}>DRBD</Typography>
                  <Menu

hoverIndicator={true}

focusIndicator={true}

icon={<MoreVertIcon />}

items={[
  {
    label: "Version: v20.0.1",
  },

  
]}

/>
                    </div>
                   
                    <div>
                     <p style={{marginTop:"5px"}}>Status:</p>
                      <div style={{marginTop:"5px"}}>
                      <div class='box red' ></div>
                      Inactive
                      </div>
                      </div>
                  </CardContent>
    </Card>
    </Grid>
    <Grid key="PDNS"item xs={12} sm={6} md={2}>
    <Card >
                  <CardContent>
                  <div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
                  <Typography style={{ fontWeight: 600 }}>PDNS</Typography>
                  <Menu

hoverIndicator={true}

focusIndicator={true}

icon={<MoreVertIcon />}

items={[
  {
    label: "Version: v20.0.1",
  },

  
]}

/>
                    </div>
                   
                    <div>
                     <p style={{marginTop:"5px"}}>Status:</p>
                      <div style={{marginTop:"5px"}}>
                      <div class='box green' ></div>
                      Active
                      </div>
                      </div>
                  </CardContent>
    </Card>
    </Grid>
    </Grid>*/}

    
  </Container>
</>
  );
};

export default Homepage;
