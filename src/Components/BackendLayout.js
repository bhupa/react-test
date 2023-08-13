import React, { Component } from 'react';
import { ThemeProvider,Box,Typography,CssBaseline } from '@mui/material'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import theme from '../config/theme';
import Header from './backend/Header/Header';
import Sidebar from './backend/Sidebar/SideBar';
import { ProSidebarProvider } from 'react-pro-sidebar'
import AppRoutes from './router/AppRoutes';
import { BrowserRouter as Router, Route,Routes, Switch,Link } from 'react-router-dom';

function BackendLayout ({ children }) {
   
        return (
            <div>
             <React.Fragment>
                <ThemeProvider theme={theme}>
                    <ProSidebarProvider>
                        <CssBaseline />
                        <Header />
                        <Box  sx={styles.container}>
                          
                                <Sidebar />
                                <Box component={'main'}  sx={styles.mainSection}>
                                            {children}
                                </Box>
                           
                        </Box>
                    </ProSidebarProvider>
                </ThemeProvider>
             </React.Fragment>


            </div>
        );
}
/** @type { import("@mui/material").SxProps} */

const styles = {

    container:{
    display:'flex',
    bgcolor:'neutral.light',
    height:'calc(100% - 64px)'
    },
    mainSection:{
        p:2,
        width:'100%',
        height:'100%',
        overflow:'auto'
    }
   
 }


export default BackendLayout;