import React, { Component } from 'react';
import { Box,Typography,useTheme,Avatar } from '@mui/material';
import { Sidebar,Menu,MenuItem } from 'react-pro-sidebar'
import DashboardOutLinedIcon from '@mui/icons-material/DashboardOutlined';
import StyleOutLineIcon from '@mui/icons-material/StyleOutlined';
import SourceOutLineIcon from '@mui/icons-material/SourceOutlined';
import AnalyticsOutLinedIcon from '@mui/icons-material/AnalyticsOutlined';
import {  useProSidebar } from 'react-pro-sidebar';
import { Link,useLocation } from 'react-router-dom';

function SideBar () {
   
        const theme = useTheme()
        const { collapsed} = useProSidebar ();
        const location = useLocation();
        return (
           <Sidebar  style={{
            height:'100%',
            top:'auto'
           }}
           breakPoint='md'
           backgroundColor={theme.palette.neutral.light}
           >
            <Box sx={styles.avatarContainer}>
                 <Avatar sx={styles.avatar} alt='channel Name' src='https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=250' />
                 {!collapsed ? <Typography variant='body2' sx={styles.yourChannel}>Your Channel</Typography> : null }
                 {!collapsed ? <Typography variant='overline' >AkASHYATA </Typography> : null }
            </Box>
             <Menu  menuItemStyles={{
                button:({active}) =>{
                    return {
                        backgroundColor: active ? theme.palette.neutral.medium : undefined
                    }
                }
             }}> 
                <MenuItem  active={location.pathname === '/dashboard'} component={<Link to='/dashboard' />} icon={<DashboardOutLinedIcon />}>
                    <Typography variant='body2'>Dashboard</Typography>
                </MenuItem>
                <MenuItem active={location.pathname === '/categories'}   component={<Link to='/categories' />} icon={<StyleOutLineIcon />}>
                    <Typography variant='body2'>Categories</Typography>
                </MenuItem>
                <MenuItem active={location.pathname === '/analytics'}  component={<Link to='/analytics' />} icon={<AnalyticsOutLinedIcon />}>
                    <Typography variant='body2'>Analytics</Typography>
                </MenuItem>
                <MenuItem  active={location.pathname === '/customization'}  component={<Link to='/customization' />} icon={<SourceOutLineIcon />}>
                    <Typography variant='body2'>Customization</Typography>
                </MenuItem>
               
             </Menu>

           </Sidebar>
        );
}

/** @type { import("@mui/material").SxProps} */

const styles = {

    avatarContainer:{
        display:'flex',
        alignItems:'center',
        flexDirection:'column',
        my:5
    },
    avatar:{
        width:'40%',
        height:'auto'
    },
    yourChannel:{
        mt:1
    }
   
 }

export default SideBar;