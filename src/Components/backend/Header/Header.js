import React, { Component } from 'react';
import { Box,Typography,AppBar,Toolbar,IconButton,Badge } from '@mui/material'
import MenuTwoToneIcon from '@mui/icons-material/MenuTwoTone';
import Notifications from '@mui/icons-material/Notifications';
import LogoutIcon from '@mui/icons-material/Logout';
import SettingsIcon from '@mui/icons-material/Settings'
import Logo from '../../../img/logo.jpg';
import {  useProSidebar } from 'react-pro-sidebar'

function Header () {
    const { collapseSidebar, toggleSidebar,broken} = useProSidebar ();
    return (
        <AppBar position='sticky' sx={styles.appBar} >
            <Toolbar>
                 <IconButton onClick={()=>broken ? toggleSidebar() : collapseSidebar()} color="secondary">
                    <MenuTwoToneIcon />
                 </IconButton>
                 <Box component='img' sx={styles.appLogo}  src={Logo} />
                 <Box sx={{flexGrow:1}} />
                 <IconButton  title='Notifications' onClick={()=>console.log('clicked')} color="secondary">
                    <Badge badgeContent={5} color='error' >
                        <Notifications />
                    </Badge>
                 </IconButton>
                 <IconButton  title='Settings' onClick={()=>console.log('clicked')} color="secondary">
                    <SettingsIcon />
                 </IconButton>
                 <IconButton  title='Sign Out' onClick={()=>console.log('clicked')} color="secondary">
                    <LogoutIcon />
                 </IconButton>

            </Toolbar>
        </AppBar>
    );
}

  /** @type { import("@mui/material").SxProps} */

  const styles = {

     appBar:{
        bgcolor:'neutral.main'
     },
     appLogo:{
        borderRadius:2,
        width:80,
        ml:2,
        cursor:'pointer'

     }
  }
export default Header;