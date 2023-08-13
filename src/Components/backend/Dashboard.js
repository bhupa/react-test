import React from 'react';
import { Box,Typography,Card,CardContent,Avatar,Divider } from '@mui/material'
import LatestVideo from './LatestVideo/LatestVideo';
import ColorText from '../common /ColorText';
function Dashboard () {
        return (
           <Box>
                <Typography sx={styles.pageTitle} variant='h5'>Channel Dashboard</Typography>
                <Box sx={styles.columnContainer}>
                 <LatestVideo sx={styles.item} />
                 <Card sx={styles.item}>
                    <CardContent>
                        <Typography sx={styles.pageTitle} variant='cardTitle'>Latest Posts</Typography>
                            <Box sx={styles.postAuthorSection}>
                                <Avatar sx={styles.Avatar} src='https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=250' />
                                <Typography sx={styles.postMeta} >React With Bhupe</Typography>
                                <Typography sx={styles.postMeta} >jan 18, 2023</Typography>
                            </Box>
                            <Typography variant='body2' >
                            A tiny VS Code extension made up of a few commands that generate and insert lorem ipsum text into a text file. To use the extension, open the command paletr a line or paragraph.
                                </Typography>
                                <Divider sx={styles.divider} />
                                <Box sx={styles.postStats}>
                                    <Typography variant='body2' >Likes</Typography>
                                    <Typography variant='body2' >Comments</Typography>
                                    <Typography variant='body2' >12</Typography>
                                    <Typography variant='body2' >6</Typography>
                                </Box>
                                <Typography sx={styles.cardAction} variant='link' >GO TO COMMUNITY TAB</Typography>
                        </CardContent>
                     </Card>
                     <Card>
                        <CardContent>
                            <Typography variant='cardTitle'>Channel analytics</Typography>
                            <Typography variant='h7' >Current Subscribes</Typography>
                            <Typography variant='h4' >4,144</Typography>
                            <Typography variant='h7' >
                                <ColorText color={'green.main'}>+77</ColorText>
                                <ColorText color={'neutral.normal'}>in last 28 days</ColorText>
                            </Typography>
                            <Divider sx={styles.divider} />
                            <Typography variant='h6' >Summery</Typography>
                            <Typography variant='h6' >
                                <ColorText color={'neutral.normal'}>Last 28 days</ColorText>
                             </Typography>
                             <Box sx={styles.videoStatsRow}>
                                <Typography variant='h7'>Views</Typography>
                                <Typography variant='h7' >255</Typography>
                             </Box>
                             <Box sx={styles.videoStatsRow}>
                                <Typography variant='h7'>Watch Time (hours)</Typography>
                                <Typography variant='h7' >30</Typography>
                             </Box>
                             <Box sx={styles.videoStatsRow}>
                                <Typography variant='h7'>Estimate Revenue</Typography>
                                <Typography variant='h7' >$455</Typography>
                             </Box>
                             <Divider sx={styles.divider} />
                             <Typography variant='h6'>Top Videos</Typography>
                                <Typography variant='h8' >
                                <ColorText color={'neutral.normal'}>Last 48 hours Views </ColorText>
                                </Typography>

                                <Box sx={styles.videoStatsRow}>
                                <Typography variant='h7'>How to become software developer in 2023</Typography>
                                <Typography variant='h7' >450</Typography>
                             </Box>
                             <Box sx={styles.videoStatsRow}>
                                <Typography variant='h7'>Css Grid Tutroial: How to use the grid and make columnd</Typography>
                                <Typography variant='h7' >287</Typography>
                             </Box>
                             <Box sx={styles.videoStatsRow}>
                                <Typography variant='h7'>Call aps:in react native: practical guide</Typography>
                                <Typography variant='h7' >130</Typography>
                             </Box>
                             <Typography sx={styles.cardAction} variant='link' >GO TO VIDEO ANALYTICS</Typography>
                        </CardContent>
                     </Card>
                     <Card sx={styles.item}>
                        <CardContent>
                        <Typography variant='cardTitle'>Latest Comment</Typography>
                            <Typography variant='h7' >
                            <ColorText color={'neutral.normal'}>Channel comments I haven't respond to  </ColorText>
                            </Typography>
                           
                            <Box sx={styles.commentRow}>
                            <Avatar sx={styles.Avatar} src='https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=250' />
                              <Box>
                                 <Box sx={styles.commentDetailsSection}>
                                 <Typography sx={styles.postMeta}>React With Bhup</Typography>
                                    <Typography sx={styles.postMeta}  >2 week ago</Typography>
                                 </Box>
                                 <Typography sx={styles.postMeta}  >
                                How can i deploy this
                                 </Typography>
                                 </Box>
                                 <Box component={'img'} sx={styles.videoThumbnail} src='https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=250' />
                                 </Box>
                             <Divider sx={styles.divider} />
                             <Box sx={styles.commentRow}>
                              <Avatar sx={styles.Avatar} src='https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=250' />
                              <Box>
                                 <Box sx={styles.commentDetailsSection} >
                                 <Typography sx={styles.postMeta}>React With Bhup</Typography>
                                    <Typography sx={styles.postMeta}  >2 week ago</Typography>
                                 </Box>
                                 
                                 </Box>
                                 <Box component={'img'} sx={styles.videoThumbnail} src='https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=250' />
                                 </Box>
                                 <Divider sx={styles.divider} />
                             <Box sx={styles.commentRow}>
                              <Avatar sx={styles.Avatar} src='https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=250' />
                              <Box>
                                 <Box sx={styles.commentDetailsSection} >
                                 <Typography sx={styles.postMeta}>React With Bhup</Typography>
                                    <Typography sx={styles.postMeta}  >2 week ago</Typography>
                                 </Box>
                                 <Typography sx={styles.commonText}>How can i deploy this</Typography>
                                 
                                 </Box>
                                 <Box component={'img'} sx={styles.videoThumbnail} src='https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=250' />
                                 </Box>                                   
                        </CardContent>
                     </Card>
                     <Card sx={styles.item}>
                        <CardContent sx={styles.ideaContent}>
                            <Box>
                                <Typography variant='cardTitle'>Ideas For You</Typography>
                                <Typography sx={styles.ideaQuestion}>Read to get business savvy ?</Typography>
                                <Typography variant='h7'> 
                                Get tips from successfull creator on hhow to take a youtube channel and turn it to the business that earns you money
                                </Typography>
                                <Typography sx={styles.cardAction} variant='link' >GET STARTED NOW</Typography>
                            </Box>
                            <Box component={'img'} sx={styles.ideaImage } src='https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=250' />
                        </CardContent>
                     </Card>
                     <Card sx={styles.item}>
                        <CardContent sx={styles.ideaContent}>
                            <Box>
                            <Typography variant='cardTitle'>Creator Inside</Typography>
                            <Box component={'img'} sx={styles.insiderImage } src='https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=250' />
                            <Typography sx={styles.ideaQuestion}>Read to get boost your skills using AI Tools ?</Typography>
                            <Typography variant='h7'> 
                                Get tips from successfull creator on hhow to take a youtube channel and turn it to the business that earns you money
                                </Typography>
                                <Typography sx={styles.cardAction} variant='link' >WATCH ON YOUTUBE</Typography>
                            </Box>
                        </CardContent>
                     </Card>
               </Box>
           </Box>
           
        );

}
/** @type { import("@mui/material").SxProps} */

const styles = {
    pageTitle:{
        md:2
    },
    columnContainer:{
        columns:'280px 3',
        maxWidth:1400
    },
    item:{
        mb:2
    },
    postAuthorSection:{
      display:'flex',
      alignItems:'center',
      my:3
    },
    Avatar:{
        width:'30px',
        height:'30px'
    },
    postMeta:{
     mr:2,
     ml:2,
     fontSize:'0.8rem',
     color:'neutral.normal'
    },
    divider:{
        my:2
    },
    postStats:{
        display:'grid',
        gridTemplateColumns:'1fr 1fr',
        my:3

    },
    cardAction:{
        mt:3
    },
    videoStatsRow:{
        display:'flex',
        justifyContent:'space-between',
        mt:2,
        '&:hover':{
            color:'primary.main',
            cursor:'pointer'
        }
    },
    commentRow:{
        display:'flex',
        alignItems:'flex-start',
        mt:2
    },
    commentDetailsSection:{
        display:'flex',
        alignItems:'center'
    },
    commentText:{
        fontSize:'0.8rem',
        mr:2,
        mt:0.5

    },
    videoThumbnail:{
        width:80,
        ml:'auto'
    },
    ideaContent:{
        display:'flex'
    },
    ideaQuestion:{
        fontSize:'0.9rem',
        fontWeight:500,
        my:2
    },
    ideaImage:{
        width:80,
        alignSelf:'center',
        ml:5

    },
    insiderImage:{
        width:'100%',
        mt:1 
    }

   
 }



export default Dashboard;