import React, { Component } from 'react';
import { Box,Typography } from '@mui/material';
import { Sidebar,Menu,MenuItem } from 'react-pro-sidebar'
import DashboardOutLinedIcon from '@mui/icons-material/DashboardOutlined';


function SideBar () {
   

        return (
           <Sidebar >
             <Menu> 
                <MenuItem  active icon={<DashboardOutLinedIcon />}>
                    <Typography variant='body2'>Dashboard</Typography>
                </MenuItem>
                <MenuItem  active icon={<DashboardOutLinedIcon />}>
                    <Typography variant='body2'>Dashboard</Typography>
                </MenuItem>
                <MenuItem  active icon={<DashboardOutLinedIcon />}>
                    <Typography variant='body2'>Dashboard</Typography>
                </MenuItem>
                <MenuItem  active icon={<DashboardOutLinedIcon />}>
                    <Typography variant='body2'>Dashboard</Typography>
                </MenuItem>
                <MenuItem  active icon={<DashboardOutLinedIcon />}>
                    <Typography variant='body2'>Dashboard</Typography>
                </MenuItem>
             </Menu>

           </Sidebar>
        );
}

Sidebar.propTypes = {

};

export default SideBar;