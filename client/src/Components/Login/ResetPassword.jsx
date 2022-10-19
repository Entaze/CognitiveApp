import React, { useEffect, useState } from 'react';
import { signInWithGoogle, auth, onAuthStateChanged } from "../Firebase/Firebase.js"
// import { AccountBox } from "../ProfileSetUp/AccountBox";
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useMainContext } from '../Providers/MainProvider.jsx';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import LoginNavBar from "./LoginNavBar.jsx";
import Alert from '@mui/material/Alert';
import Avatar from '@mui/material/Avatar';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Slider } from '@mui/material';
import { useLocation } from 'react-router-dom';


const loginBackground = {
  backgroundImage: "url('https://res.cloudinary.com/entazesoftware/image/upload/v1649261658/cognitive-wallpaper_ijjoo2.jpg')",
  backgroundRepeat: 'repeat',
  backgroundPosition: 'center',
  backgroundSize: 'auto',
  minHeight: '100%',
  height: '100vh',
}

const loginStyle = {
  height: '100%',
  alignItems: 'center'
}

const loginButtonStyle = {
  marginLeft: '86px',
  backgroundColor: '#4267B2',
}

const switchTypoStyle = {
  marginLeft: '10.5%',
  marginRight: '1px',
}

const loginButton = {
  marginTop: '0.6%',
  marginLeft: '64%',
  marginRight: '30%',
}

function ResetPassword() {
  const { setUserProfile } = useMainContext()
  const [loginNavbar, setLoginNavbar] = useState(false)
  const [errorMessage, setErrorMessage] = useState("")
  const [successMessage, setSuccessMessage] = useState("")
  const [checkUserLogin, setCheckUserLogin] = useState(false);
  const navigate = useNavigate()
  const { search } = useLocation();
  const searchParams = new URLSearchParams(search);
  const token = searchParams.get('id');
  const email = searchParams.get('user');


  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    return () => {
      setIsMounted(false);
    }
  }, []);


  function Copyright(props) {
    return (
      <Typography variant="body2" color="text.secondary" align="center" {...props}>
        {'Copyright © '}
        <Link color="inherit" href="https://mui.com/">
          Entaze systems
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }

  const theme = createTheme();

  const handleSignupSubmit = (event) => {
    event.preventDefault();
    let password = document.getElementById("password").value;
    let confmpassword = document.getElementById("confirm_password").value;
    if (!password) {
      setErrorMessage('Password is required!')
    } else if (password.length < 6) {
      setErrorMessage('Password should be at least 6 characters!')
    } else if (!confmpassword) {
      setErrorMessage('Re-enter new password!')
    }  else if (password !== confmpassword) {
      setErrorMessage('Password does not match')
    } else if (password === confmpassword) {
      setSuccessMessage('Passwords match')
      const forgotPwordData = {
        newPass: password,
        resetLink: token
      }
      setTimeout(() => {
        setSuccessMessage("");
        setErrorMessage("");
      }, 10000)
      //Reset pwrd put request
      axios.put('/api/resetpassword', forgotPwordData)
      .then((res) => {
        if (res.data.error) {
          setErrorMessage(res.data.error)
        } else {
          console.log(res.data);
          setSuccessMessage(res.data.message, 'Login to continue.');
          const loginPackage = {
            email: email,
            password: password
          };
          //Log user in after succesful password change
          axios.post('/api/login', loginPackage)
          .then((res) => {
            localStorage.setItem('token', JSON.stringify(res.data.token));
            localStorage.setItem('loggedIn', JSON.stringify(true));
            setUserProfile(res.data.user);
            const data = res.data;
            if (data.token && !data.user.test1Completion) {
              navigate("/cognitivetest1")
            } else if (data.token && !data.user.test2Completion) {
              navigate("/cognitivetest2")
            }
          })
          .catch((err) => {
            setErrorMessage('Sign in error.');
          })
        }
      })
      .catch((err) => {
        console.log(err)
        setSuccessMessage("");
        setErrorMessage('Expired link. Please click forgot password to receive a new password reset link!')
      })
    }
  };

  function handleLoginButton() {
    setLoginNavbar(!loginNavbar);
  }

  return (
    <>
      <>
      <AppBar style={{position: "fixed", backgroundColor: '#346611'}} >
          <Toolbar>
            <div style={switchTypoStyle}>
              <Typography style={{ fontSize: 50, whiteSpace: 'nowrap', fontWeight: 700, color: '#fff', fontFamily:'Courgette'}}>Cognitive App</Typography>
            </div>
            <div style={loginButton}>
              <Button variant="contained" sx={{backgroundColor:'#555555', }} onClick={handleLoginButton}>
              Login
              {loginNavbar ?
                <ExpandLessIcon /> : <ExpandMoreIcon />
              }
            </Button>
            </div>
            {loginNavbar ?
            <div >
                <LoginNavBar />
            </div>
            :
            null }
          </Toolbar>
      </AppBar>
     <div style={loginBackground}>
      <ThemeProvider theme={theme}>
        <Container component="main" maxWidth="xs"  >
          <CssBaseline />
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: '#2EB67D', marginTop: '180px', }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              RESET PASSWORD
            </Typography>
            <p style = {{color: '#555555', fontWeight: '900'}} >Please enter your new password and confirm. </p>
            <Box component="form" noValidate onSubmit={handleSignupSubmit} sx={{ mt: 3 }}>
            {errorMessage ?
              <Alert sx={{marginBottom: '20px'}} severity="error"> {errorMessage}</Alert>
            : null}
            {successMessage ?
              <Alert sx={{marginBottom: '20px'}} severity="success"> {successMessage}</Alert>
            : null}
              <Grid container spacing={2}>
              <Grid item xs={12} sm={6} >
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    style = {{width: 450}}
                    required
                    fullWidth
                    type="password"
                    id="password"
                    label="Password"
                    name="password"
                    autoFocus
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    style = {{width: 450}}
                    required
                    fullWidth
                    type="password"
                    id="confirm_password"
                    label="Confirm Password"
                    name="confirmpassword"
                  />
                </Grid>
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2, bgcolor: '#2EB67D' }}
              >
                Submit
              </Button>
              <Box
               sx={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'center',
                typography: 'body1',
                '& > :not(style) + :not(style)': {
                  ml: 2,
                },
                cursor:'pointer',
              }}
              >
                <Link href="/forgotpassword" underline="always" fontStyle='italic' >
                  {'Forgot password'}
                </Link>
              </Box>
            </Box>
          </Box>
          <Copyright sx={{ mt: 5 }} />
        </Container>
      </ThemeProvider>
      </div>
     </>
    </>
  )
}

export default ResetPassword;