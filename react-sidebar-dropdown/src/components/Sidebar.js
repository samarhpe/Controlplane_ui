import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as Ioicons from 'react-icons/io5';
import { SidebarData } from './SidebarData';
import SubMenu from './SubMenu';
import { Typography } from '@material-ui/core';
import { IconContext } from 'react-icons/lib';
//import {Button,Grommet,grommet} from 'grommet';
import {Hpe,Search,Filter,Help,StatusInfo,Notification,User} from 'grommet-icons';
import hpegrommetimg from '../images/hpe_grommet_img.svg';
import Tooltip from '@mui/material/Tooltip';
import "../index.css";
import useStyles from '../styles';
import { Grommet,Collapsible,Box ,Layer,Button, ResponsiveContext,grommet} from 'grommet';
import { FormClose} from 'grommet-icons';
//const appbarlogoimg=require('../images/sosmallscreenshot.png');
//console.log(appbarlogoimg);
const theme = {
 
    colors: {
      primary: '#01A982',
    },
  
};
const Nav = styled.div`
  background:  #FFFFFF;
  outline:1px solid;
  height: 80px;
  width:100%;
  
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const NavIcon = styled.div`
  margin-left: 2rem;
  font-size: 2rem;
  height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;
const HelpIcon=styled.div`
  margin-left: 2rem;
  font-size: 2rem;
  height: 80px;
  
  display: flex;
  justify-content: flex-start;
  align-items: center;

`;
const RightIcons=styled.div`
height: 80px;
display: inline-flex;
margin-right:20px;
`;

const SidebarNav = styled.nav`
  background: #425563;
  width: 250px;
  height: 100vh;
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  left: ${({ sidebar }) => (sidebar ? '0' : '-100%')};
  transition: 350ms;
  z-index: 10;
`;

const SidebarWrap = styled.div`
  width: 100%;
`;

const Sidebar = ({showrightSidebar,setshowrightSidebar}) => {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);
  
   const classes=useStyles();
  return (
  
    <Grommet theme={theme}>
      <IconContext.Provider value={{ color: '#fff' }}>
        <Nav>
          <NavIcon >
            {/*<img src={appbarlogoimg} alt="logo" onClick={showSidebar}/>*/}
            {/*<FaIcons.FaBars color='#01a982' onClick={showSidebar} />*/}
          {/*<Hpe color='#01A982' className={classes.hpeicon} onClick={showSidebar} />*/}
            <Button className={classes.hpeicon} onClick={showSidebar}>
              <div style={{display:'flex'}}><img src={hpegrommetimg} /><p style={{fontSize:'20px'}}>Menu</p></div>
              </Button>
            
            </NavIcon>
            <RightIcons>
            <HelpIcon to='/support'>
            <Tooltip title="Search" arrow>
            <Search color='#01a982'/>
            </Tooltip>
            </HelpIcon>
            <HelpIcon to='/support'>
            <Tooltip title="Filter" arrow>
            <Filter color='#01a982'/>
            </Tooltip>
            </HelpIcon>
            <HelpIcon to='/support'>
            <Tooltip title="Info" arrow>
            <StatusInfo color='#01a982'/>
            </Tooltip>
            </HelpIcon>
            <HelpIcon to='/support'>
            <Tooltip title="Notification" arrow>
            <Notification color='#01a982'/>
            </Tooltip>
            </HelpIcon>
            <HelpIcon to='/support'>
            <Tooltip title="User" arrow>
            <User color='#01a982'/>
            </Tooltip>
            </HelpIcon>
            <HelpIcon to='/support'>
            <Tooltip title="Help" arrow>
            <Help color='#01a982' onClick={()=>{setshowrightSidebar(!showrightSidebar)}} />
            </Tooltip>
            </HelpIcon>
            </RightIcons>
        </Nav>
        <SidebarNav sidebar={sidebar} className="sidenavbar">
          <SidebarWrap>
            <NavIcon to='#'>
              <AiIcons.AiOutlineClose onClick={showSidebar} />
            </NavIcon>
            {SidebarData.map((item, index) => {
              //console.log(item,index);
              return <SubMenu item={item} key={index} />;
            })}
          </SidebarWrap>
        </SidebarNav>
        
      </IconContext.Provider>
    </Grommet>
  );
};

export default Sidebar;
