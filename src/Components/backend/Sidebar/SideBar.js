import React, { Component } from 'react';
import { Box,Typography,useTheme,Avatar } from '@mui/material';
import { Sidebar,Menu,MenuItem } from 'react-pro-sidebar'
import DashboardOutLinedIcon from '@mui/icons-material/DashboardOutlined';
import StyleOutLineIcon from '@mui/icons-material/StyleOutlined';
import SourceOutLineIcon from '@mui/icons-material/SourceOutlined';
import AnalyticsOutLinedIcon from '@mui/icons-material/AnalyticsOutlined';
import {  useProSidebar } from 'react-pro-sidebar';
import { Link,useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';

function SideBar () {
   
        const theme = useTheme()
        const { collapsed} = useProSidebar ();
        const location = useLocation();
        const {permissions} = useSelector(state => state.user);
        const checkSlugMatch = (slugToCheck) => {
            console.log(slugToCheck);
            return permissions.some(permission => permission.slug === slugToCheck);
          };
          console.log(checkSlugMatch)
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
             
             {checkSlugMatch('user-lists') ?
                <MenuItem  active={location.pathname === '/admin/dashboard'} component={<Link to='/admin/dashboard' />} icon={<DashboardOutLinedIcon />}>
                    <Typography variant='body2'>Dashboard</Typography>
                </MenuItem> : null }
         
                <MenuItem active={location.pathname === '/admin/categories'}   component={<Link to='/admin/categories' />} icon={<StyleOutLineIcon />}>
                    <Typography variant='body2'>Categories</Typography>
                </MenuItem>
                <MenuItem active={location.pathname === '/admin/analytics'}  component={<Link to='/admin/analytics' />} icon={<AnalyticsOutLinedIcon />}>
                    <Typography variant='body2'>Analytics</Typography>
                </MenuItem>
                <MenuItem  active={location.pathname === '/admin/customization'}  component={<Link to='/admin/customization' />} icon={<SourceOutLineIcon />}>
                    <Typography variant='body2'>Customization</Typography>
                </MenuItem>
                <MenuItem active={location.pathname === '/admin/users'}  component={<Link to='/admin/users' />} icon={<AnalyticsOutLinedIcon />}>
                    <Typography variant='body2'>Users</Typography>
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