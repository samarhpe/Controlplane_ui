import './App.css';
import Sidebar from './components/Sidebar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React, { useState,useContext } from 'react';
import Generaltab from './pages/Generaltab';
import Nodesinfo from './pages/Nodesinfo';
import K3sclustertab from './pages/K3sclustertab';
import K3sclusterpage from './pages/K3sclusterpage';
import CRMclusterpage from './pages/CRMclusterpage';
import Infraclustertab from './pages/Infraclustertab';
import Homepage from './pages/Homepage';
import Helptab from './pages/Helptab';
import Podsinfo from './pages/Podsinfo';
import Logspage from './pages/Logspage';
import Physicalnodeinfo from './pages/Physicalnodeinfo';
import { Grommet,Collapsible,Box ,Layer,Button, ResponsiveContext} from 'grommet';
import { FormClose, Notification } from 'grommet-icons';
import { Typography } from '@material-ui/core';
import Resources from './pages/Resources';
function App() {
  const [showrightSidebar, setshowrightSidebar] = useState(false);
  
  return (
    <Grommet full>  
      
    <Router>
      <Sidebar showrightSidebar={showrightSidebar} setshowrightSidebar={setshowrightSidebar} />
      <Box direction='row' height='100%' flex overflow={{ horizontal: 'hidden' }}>
      <Box flex height='100%'>
      <Routes>
      <Route path='/' exact element={<Homepage/>} />
        <Route path='/general' exact element={<Generaltab/>} />
        <Route path="/nodesinfo" exact element={<Nodesinfo/>}/>
        <Route path="/infracluster" exact element={<Infraclustertab/>}/>
        <Route path="/k3scluster" exact element={<K3sclustertab/>}/>
        <Route path="/support" exact element={<Helptab/>}/>
        <Route path="/podsinfo" exact element={<Podsinfo/>}/>
        <Route path="/k3sclusterpage" exact element={<K3sclusterpage/>}/>
        <Route path="/crmclusterpage" exact element={<CRMclusterpage/>}/>
        <Route path="/physicalnodeinfo" exact element={<Physicalnodeinfo/>}/>
        <Route exact path="/getlogs/:namespace/:pod"  element={<Logspage/>}/>
      </Routes>
      </Box>
      
      <Collapsible direction="horizontal" open={showrightSidebar}>
        <Box
          flex
          height='100%'
          width='small'
          background='light-2'
          elevation='small'
        >
         <Typography style={{ fontWeight: 600,marginTop:'10px',marginLeft:'10px' }}>Help</Typography>
         <div style={{marginTop:'30px',marginLeft:'10px',marginRight:'10px'}}>
         <Typography paragraph="true">For any queries please contact am-samarasimha.reddy@hpe .com</Typography>
         
         </div>
        </Box>
      </Collapsible>
     
      </Box>
     
                
     
    </Router>
   
    
    </Grommet>
   
  );
}

export default App;
