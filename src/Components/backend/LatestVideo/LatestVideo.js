import React, { Component } from 'react';
import { Box,Card,CardContent, Typography} from '@mui/material'

function LatestVideo (props) {
   
        return (
            <Card>
                 <CardContent>
                     <Typography variant='cardTitle'>Latest Video Performance</Typography>
                     <Box sx={styles.latestVideoContainer} >
                         <Box sx={styles.latestVideoThumbnail} component={'img'} src="https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=250" />
                         <Typography sx={styles.latestVideoTitle}>React Js Search in 5 Mins </Typography>
                     </Box>
                     <Typography variant="h7"  sx={styles.latestVideoLabel}>First 6 hours</Typography>
                    <Box sx={styles.latestVideoStatsRow}>
                    <Typography variant="h7">Views</Typography>
                    <Typography variant="h7">225</Typography>
                    </Box>
                    <Box sx={styles.latestVideoStatsRow}>
                    <Typography variant="h7">Watch Time</Typography>
                    <Typography variant="h7">30</Typography>
                    </Box>
                    <Box sx={styles.latestVideoStatsRow}>
                    <Typography variant="h7">Likes</Typography>
                    <Typography variant="h7">23</Typography>
                    </Box>
                    <Typography sx={styles.cardAction} variant="link">GO TO VIDEO ANALYTICS</Typography>
                    <Typography sx={styles.cardAction} variant="link">SEE COMMENTS (23)</Typography>
                 </CardContent>

            </Card>
        );
}
/** @type { import("@mui/material").SxProps} */

const styles = {
    latestVideoContainer:{
        width:'100%',
        position:'relative'
    },
    latestVideoThumbnail:{
        width:'100%',
        mt:1,
        filter:'brightness(20%)',
        display:'block'

    },
    latestVideoTitle:{
        position:'absolute',
        bottom:0,
        color:'neutral.light',
        left:0,
        right:0,
        textAlign:'center',
        fontSize:'1rem',
        fontWeight:'bold',
        mb:2


    },
    latestVideoLabel:{
        color:'neutral.normal',
        mt:2
    },
    latestVideoStatsRow:{
        display:'flex',
        justifyContent:'space-between',
        mt:2
    },
    cardAction:{
        mt:2
    }

    
   
 }


export default LatestVideo;