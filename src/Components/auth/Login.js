import React, { useState } from 'react';
import { TextField, Button, Paper, Typography,Box,Avatar } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined'
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { BrowserRouter as Router, Route,Routes, Switch,Link } from 'react-router-dom';


function  Login () {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState(false);
    const handleEmailChange = (event) => {
        const value = event.target.value;
        setEmail(value);
        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        setEmailError(!emailRegex.test(value));
      };

      const handleSubmit = (event) => {
        event.preventDefault();
        // Implement your login logic here, e.g., make API request
      };
        return (
            <div sx={styles.root}>
            <Paper elevation={3} sx={styles.paper}>
                 <Avatar sx={styles.avatarBg}><LockOutlinedIcon  /></Avatar>
              <Typography sx={styles.loginHeader} variant="h5" align="center">
                Login
              </Typography>
              <form sx={styles.form} onSubmit={handleSubmit}>
                <Box sx={styles.fromInput}>
                <TextField
                  sx={styles.input}
                  label="Email"
                  type="email"
                  variant="outlined"
                  value={email}
                  error={emailError}
                  onChange={handleEmailChange}
                />
                <TextField
                  sx={styles.input}
                  label="Password"
                  type="password"
                  variant="outlined"
                  value={password}
                 
                />
               
                <FormControlLabel 
                control={<Checkbox defaultChecked />}
                label="Remember Me"
                />
                </Box>
                <Button sx={styles.loginButton} variant="contained" color="primary" fullWidth type="submit">
                  Login
                </Button>

                <Typography sx={styles.links}>
                    <Link  to="" onClick={console.log('hello nepa;')} >
                        Forget Password ?
                    </Link>
                </Typography>
                <Typography>
                    Do you have an account ?
                    <Link  to="" onClick={console.log('hello nepa;')} >
                        Sing Up
                    </Link>
                </Typography>
              </form>
            </Paper>
          </div>
        );
}
const styles = {
    root: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        p:'20px'
       
    },
    paper: {
      padding: 2,
      width: 300,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      height: '70vh',
      m:'100px auto',
    
    },
    loginHeader:{
        fontWeight:'bold',
        fontSize:'1rem',
        mt:2
    },
    avatarBg:{
      backgroundColor:'blue',
      mt:'30px'
    },
    form: {
      display: 'flex',
     
      gap: 2,
      width: '100%',
    },
    fromInput:{
    mb:2
    },
    input:{
       width:'100%',
       mt:3
    },
    links:{
        m:1
    }
  };


export default Login;