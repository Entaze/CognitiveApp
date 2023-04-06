import React, { useEffect, useState } from 'react';
import { signInWithGoogle, auth, onAuthStateChanged } from "../Firebase/Firebase.js"
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
import Navbar from './NavBar'


const loginBackground = {
  // marginTop: '10px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  paddingLeft: '20px',
  paddingRight: '20px',
  backgroundImage: "url('https://res.cloudinary.com/entazesoftware/image/upload/v1649261658/cognitive-wallpaper_ijjoo2.jpg')",
  backgroundRepeat: 'repeat',
  backgroundPosition: 'center',
  backgroundSize: 'auto',
  minHeight: '100vh',
  // height: '100vh',
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

function ForgotPassword() {
  const { setUserProfile } = useMainContext()
  const [loginNavbar, setLoginNavbar] = useState(false)
  const [errorMessage, setErrorMessage] = useState("")
  const [successMessage, setSuccessMessage] = useState("")
  const [checkUserLogin, setCheckUserLogin] = useState(false);
  const token = window.localStorage.getItem('token');
  const loggedIn = window.localStorage.getItem('loggedIn');
  const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
  const navigate = useNavigate()

  function Copyright(props) {
    return (
      <Typography variant="body2" color="text.secondary" align="center" {...props}>
        {'Copyright © '}
        <Link color="inherit" href="#">
          David Unuigbe
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }

  const theme = createTheme();

  const handleForgotPasswrdSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    if (!data.get('email')) {
      setErrorMessage('Email is required!')
    } else if (!(data.get('email')).match(emailRegex)) {
      setErrorMessage('Enter a valid email!')
    } else {
      setErrorMessage('')
      const forgotPwordData = {
        email: data.get('email'),
      };
      //Forgot pwrd post request
      axios.put('/api/forgotpassword', forgotPwordData)
      .then((res) => {
        if (res.data.error) {
          setErrorMessage(res.data.error)

        } else {
          setSuccessMessage('Password reset link sent succcessfully. Check your email to reset your password.')
        }
      })
      .catch((err) => {
        setErrorMessage("Email not registered. Sign up?");
      })

      setTimeout(() => {
        setSuccessMessage("");
        setErrorMessage("");
      }, 100000)

    }
  };

  function handleLoginButton() {
    setLoginNavbar(!loginNavbar);
  }

  return (
    <>
      <>
      <AppBar style={{ display: 'flex', width: '100%', position: "fixed", }} >
          <Navbar loginNavbar={loginNavbar} setLoginNavbar={setLoginNavbar} handleLoginButton={handleLoginButton} />
      </AppBar>
     <div style={loginBackground}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginLeft: 'auto', marginRight: 'auto', marginTop: 'auto', marginBottom: 'auto' }} >
          <CssBaseline />
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: '#2EB67D', marginTop: '30px', }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              FORGOT PASSWORD
            </Typography>
            <p style = {{color: '#555555', fontWeight: '900'}} >Enter your email address below and we'll send you a link to reset your password. </p>
            <Box component="form" noValidate onSubmit={handleForgotPasswrdSubmit} sx={{ mt: 3 }}>
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
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    autoFocus
                  />
                </Grid>
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2, color: '#fff', bgcolor: '#2EB67D', '&:hover': { color: '#fff', bgcolor: '#2EB67D', } }}
                disableRipple
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
                <Grid item xs={12}>
                  <Link onClick={handleLoginButton} underline="always" fontStyle='italic' color='inherit' backgroundColor="inherit" >
                    {'Remember your password?'}
                  </Link>
                </Grid>
                <Grid item xs={12}>
                  <Link href="/login" underline="always" fontStyle='italic' color='inherit' backgroundColor="inherit" >
                    {'Sign up?'}
                  </Link>
                </Grid>
              </Box>
            </Box>
          <Copyright sx={{ mt: 5 }} />
          </Box>
       </div>
      </div>
     </>
    </>
  )
}

export default ForgotPassword;