import React, { useState,useEffect } from 'react';
import { Button, Paper, Typography,Box,Avatar } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined'
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { BrowserRouter as Router, Route,Routes, Switch,Link,useNavigate } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import { loginApi } from '../../Components/api/login';
import { useDispatch, } from 'react-redux';
import { login } from '../reducers/authReducer';
 
function  Login () {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);
    const [invalidError, setInvalidError] = useState(false);
    const handleEmailChange = (event) => {
        const value = event.target.value;
        setEmail(value);
        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        setEmailError(!emailRegex.test(value));
      };
      useEffect(() => {
        setEmail('');
        setPassword('');
        setEmailError('');
        setPasswordError('');
        setInvalidError('');
      },[window.location.pathname]);

      const handleSubmit = async(event) => {
        event.preventDefault();
        // Perform validation
        console.log(process.env.REACT_APP_API_BASE_URL);
            let isValid = true;
            if (!email) {
            setEmailError('Email is required');
            isValid = false;
            }
            if(!password) {
            setPasswordError('Password is required');
            isValid = false;
            }

            if (isValid) {
                loginApi({ email, password })
                .then((response) => {
                     console.log(response.data.data);
                     const user = {
                        id:response.data.data.id,
                        name:response.data.data.name,
                        email:response.data.data.email,
                        token:response.data.data.token,
                        roles:response.data.data.roles,
                        permissions:response.data.data.permissions
                    }
                    console.log(user);
                    dispatch(login(user));
                    console.log('Login successful');
                    navigate('/');
                    console.log('Login successful');
                    // Handle successful login
                })
                .catch((error) => {
                  console.log(error);
                    console.log(error.response.data.message);
                    if (error.response && error.response.status === 422) {
                        const validationErrors = error.response.data.errors;

                        if (validationErrors.email) {
                          setEmailError(validationErrors.email[0]);
                        }
                        if (validationErrors.password) {
                          setPasswordError(validationErrors.password[0]);
                        }
                    } else {
                        setInvalidError(error.response.data.message);
                    }
                });
               
               
            }
      };
        return (
            <div sx={styles.root}>
            <Paper elevation={3} sx={styles.paper}>
                 <Avatar sx={styles.avatarBg}><LockOutlinedIcon  /></Avatar>
              <Typography sx={styles.loginHeader} variant="h5" align="center">
                Login
              </Typography>
              <form sx={styles.form} onSubmit={handleSubmit} noValidate autoComplete="off">
                <Box sx={styles.fromInput}>
                {invalidError && (<Typography sx={styles.formErrors}>{invalidError}</Typography>)}
                <TextField
                  sx={styles.input}
                  label="Email"
                  type="email"
                  variant="outlined"
                  value={email}
                  error={emailError}
                  onChange={handleEmailChange}
                  autocomplete="off"
                />
                
                 {emailError && (<Typography sx={styles.formErrors}>{emailError}</Typography>)}
                <TextField
                  sx={styles.input}
                  label="Password"
                  type="password"
                  variant="outlined"
                  value={password}
                  error={passwordError}
                  onChange={(e)=>setPassword(e.target.value)}
                
                 
                />
               {passwordError && (<Typography sx={styles.formErrors}>{passwordError}</Typography>)}
                <FormControlLabel 
                control={<Checkbox defaultChecked />}
                label="Remember Me"
                />
                </Box>
                <Button sx={styles.loginButton} variant="contained" color="primary" fullWidth type="submit">
                  Login
                </Button>

                <Typography sx={styles.links}>
                    <Link  to=""  >
                        Forget Password ?
                    </Link>
                </Typography>
                <Typography>
                    Do you have an account ?
                    <Link  to=""  >
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
    },
    formErrors: {
        color: 'red',
        fontSize: '12px',
        marginTop: '4px',
      },
  };


export default Login;