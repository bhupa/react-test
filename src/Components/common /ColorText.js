import React from 'react';
import { Box,Typography,Card,CardContent,Avatar,Divider } from '@mui/material'

function  ColorText ({color,children}) {
        return (
            <Box sx={{color}} component='span'>
              {children}
            </Box>
        );

}


export default ColorText;