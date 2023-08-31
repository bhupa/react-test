import React, { Component } from 'react';
import Button from '@mui/material/Button'
import { Box,Typography,Card,CardContent,Avatar,Divider,CardActions,CardMedia } from '@mui/material'
import Grid from '@mui/material/Grid'
import Stack from '@mui/material/Stack';
import StorefrontIcon from '@mui/icons-material/Storefront';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import  Barchart  from '../Chart/Barchart';


function Analytics () {
   

        return (
          <Box component="main" sx={{flexGrow:1,p:3 }}>
               
                  <Box sx={styles.analyticWrapperHeight}  />
                  <Grid container spacing={2}>
                          <Grid item xs={8}>
                                 <Stack spacing={2} direction="row">
                                         <Card sx={{ ...styles.analyticWrapper, ...styles.gradient }}>
                                                 <CardContent>
                                                        <CreditCardIcon />
                                                         <Typography gutterBottom variant="h5" component="div">
                                                          $500
                                                         </Typography>
                                                         <Typography gutterBottom variant='body2' sx={{color:'#ccd1d1'}} component="div">
                                                                Total Earning
                                                         </Typography>
                                                        
                                                 </CardContent>
                                                 
                                         </Card>
                                         <Card sx={{ ...styles.analyticWrapper, ...styles.gradient1 }}>
                                                 
                                                 <CardContent>
                                                        <ShoppingBagIcon />
                                                         <Typography gutterBottom variant="h5" component="div" >
                                                         $900
                                                         </Typography>
                                                         <Typography gutterBottom variant='body2' sx={{color:'#ccd1d1'}} component="div">
                                                                Total Orders
                                                         </Typography>
                                                        
                                                 </CardContent>
                                                 
                                         </Card>
                                 </Stack>

                          </Grid>
                          <Grid item xs={4}>
                                <Stack spacing={2}>
                                     <Card sx={{ ...styles.analyticCardPadding, ...styles.gradient1 }}>
                                                
                                                  <Stack spacing={2} direction="row">
                                                        <StorefrontIcon   sx={styles.analyticIconStyle} />
                                                        <div sx={styles.padding}> 
                                                             <Typography sx={styles.priceTitle}>$203k</Typography>
                                                              <Typography sx={styles.priceSubtitle}>Total Income</Typography>
                                                        </div>
                                                  </Stack>
                                                 
                                      </Card>
                                      <Card sx={styles.analyticCardWrapper}>                                                
                                                <Stack spacing={2} direction="row">
                                                        <StorefrontIcon   sx={styles.analyticIconStyle} />
                                                        <div sx={styles.padding}> 
                                                             <Typography sx={styles.priceTitle}>$203k</Typography>
                                                              <Typography sx={styles.priceSubtitle}>Total Income</Typography>
                                                        </div>
                                                  </Stack>                                             
                                        </Card>
                                 </Stack>

                         </Grid>
                 </Grid>
                 <Box sx={styles.analyticWrapperHeight}  />
                 <Grid container spacing={2}>
                          <Grid item xs={8}>
                                <Card sx={styles.analyticCardBtnWrapper}>
                                 <CardContent>
                                        <Barchart />
                                 </CardContent>             
                                </Card>
                          </Grid>
                          <Grid item xs={4}>
                                <Card sx={styles.analyticCardBtnWrapper}>
                                    <CardContent></CardContent>
                                </Card>
                         </Grid>
                 </Grid>
                          
         </Box>
        );
}
/** @type { import("@mui/material").SxProps} */

const styles = {
        analyticWrapper:{
                maxWidth: '100%', // Ensure the card doesn't exceed the parent width
                width: '50%',     // Half of the available width
                height: '140px',
                color:'#ffffff'
        },
        analyticWrapperHeight:{
                height:'20px'
        },
        analytiCover:{
                display:'flex'
        },
        analyticCardWrapper:{
                maxWidth: '345px'
        },
        analyticCardBtnWrapper:{
             height:'60vh'   
        },
        analyticCardPadding:{
             padding:'10px 10px 10px 10px'
        },
        priceTitle:{
         fontWeight:'600',
         color:'#fffff'
        },
        priceSubtitle:{
           fontSize:14
        },
        analyticIconStyle:{
                mt:'20px',
                ml:'20px'
        },
        gradient:{
                background:'#282246',
                background: 'linear-gradient(158deg, rgba(40, 34, 70, 1) 0%, rgba(30, 47, 141, 1) 100%)',
        },
        gradient1:{
                background:'#358A8C',
                background: 'linear-gradient(158deg, rgba(53, 138, 148, 1) 0%, rgba(91, 180, 96, 1) 100%)',
        }
       
}



export default Analytics;
