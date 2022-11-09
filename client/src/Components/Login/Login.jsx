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
import { createTheme, ThemeProvider, } from '@mui/material/styles';
import { Slider, } from '@mui/material';
import {
  SliderContainer,
  BoxContainer,
} from "./ProfileSetUp/common";
import Navbar from './NavBar'


const loginBackground = {
  marginTop: '70px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundImage: "url('https://res.cloudinary.com/entazesoftware/image/upload/v1649261658/cognitive-wallpaper_ijjoo2.jpg')",
  backgroundRepeat: 'repeat',
  backgroundPosition: 'center',
  backgroundSize: 'auto',
  minHeight: '100vh',
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

function Login() {
  const { setUserProfile } = useMainContext()
  const [loginNavbar, setLoginNavbar] = useState(false)
  const [errorMessage, setErrorMessage] = useState("")
  const [successMessage, setSuccessMessage] = useState("")
  const [userAuth, setUserAuth] = useState(false);
  const [checkUserLogin, setCheckUserLogin] = useState(false);
  const token = window.localStorage.getItem('token');
  const loggedIn = window.localStorage.getItem('loggedIn');
  const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
  const navigate = useNavigate()

  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    return () => {
      setIsMounted(false);
    }
  }, []);

  const genderMarks = [
    {
      value: 0,
      label: 'Female',
    },
    {
      value: 1,
      label: 'Male',
    },
    {
      value: 2,
      label: 'Other',
    },
  ];

  function genderFormatVal(value) {
    for (let i = 0; i < genderMarks.length; i++) {
      if (genderMarks[i].value === value) {
        return genderMarks[i].label
      }
    }
  }

  //SESSION PERSIST - VERIFY USER WITH TOKEN
  useEffect(() => {
    if (token && loggedIn) {
      axios.get(`/api/verifyuser`, {
        headers: {
            'Content-Type': 'application/json',
        }
    })
      .then((res) => {
        setUserAuth(true)
        setCheckUserLogin(true)
        axios.get('/api/user', {params: {_id: res.data.jwtResponse._id}})
        .then((res) => {
          let user = res.data.user;
          setUserProfile(user)
          console.log('User logged in :', user)
          if (!user.test1Completion) {
            navigate('/cognitivetest1')
          } else if (!user.test2Completion) {
            navigate('/cognitivetest2')
          } else if (!user.test3Completion) {
            navigate('/test-end')
          }
        })
        .catch((err) => {
          console.log(err)
        })
      })
      .catch((err) =>{
        console.log(err)
      })
    }
  }, [checkUserLogin])

  useEffect(() => {
  if (!token) {
    setCheckUserLogin(true)
  }
  }, [])

  // useEffect(() => {
  //   if (userAuth) {
  //     navigate('/cognitivetest1')
  //   }
  // }, [userAuth])

  function Copyright(props) {
    return (
      <Typography variant="body2" color="text.secondary" {...props}>
        {'Copyright © '}
        <Link color="inherit" href="#" target="_blank" >
          David U.
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }

  const theme = createTheme();

  const handleSignupSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    if (!data.get('firstName') && !data.get('age') && !data.get('email') && !data.get('password')) {
      setErrorMessage('All fields are required!')
    } else if (!data.get('firstName')) {
      setErrorMessage('Name is required!')
    } else if (!data.get('age')) {
      setErrorMessage('Age is required!')
    } else if (!data.get('email')) {
      setErrorMessage('Email is required!')
    } else if (!(data.get('email')).match(emailRegex)) {
      setErrorMessage('Enter a valid email!')
    } else if (!data.get('password')) {
      setErrorMessage('Password is required!')
    } else {
      setErrorMessage('')
      const signUpData = {
        name: data.get('firstName'),
        age: data.get('age'),
        email: data.get('email'),
        password: data.get('password'),
        gender: genderFormatVal(Number(event.currentTarget.gender.value)),
      };
      //Signup post request
      axios.post('/api/signup', signUpData)
      .then((res) => {
        if (res.data.error) {
          setErrorMessage(res.data.error)
        } else {
          setSuccessMessage('Form successfully submitted..')
          localStorage.setItem('token', JSON.stringify(res.data.token));
          localStorage.setItem('loggedIn', JSON.stringify(true));
          setUserProfile(res.data);
          navigate("/test-begin");
        }
      })
      .catch((err) => {
        console.log(err)
      })

      setTimeout(() => {
        setSuccessMessage("");
        setErrorMessage("");
      }, 2500)
    }
  };

  function handleLoginButton(e) {
    e.preventDefault();
    setLoginNavbar(!loginNavbar);
  }

  return (
    <>
      {!userAuth && checkUserLogin ?
      <>
      <AppBar style={{ display: 'flex', width: '100%', position: "fixed", }} >
          <Navbar loginNavbar={loginNavbar} setLoginNavbar={setLoginNavbar} handleLoginButton={handleLoginButton} />
      </AppBar>

     <div style={loginBackground}>
      {/* <span style={{ background: 'red' }}>Hey there</span> */}
      {/* <ThemeProvider theme={theme}> */}
        {/* <Container component="main" maxWidth="xs"  > */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginLeft: 'auto', marginRight: 'auto', marginTop: 'auto', marginBottom: 'auto' }} >
          <CssBaseline />
          <Box
            sx={{
              margin: '26px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: '#2EB67D',  }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign up
            </Typography>
            <Box component="form" noValidate onSubmit={handleSignupSubmit} sx={{ mt: 3 }}>
            {errorMessage ?
              <Alert sx={{marginBottom: '20px'}} severity="error"> {errorMessage}</Alert>
            : null}
            {successMessage ?
              <Alert sx={{marginBottom: '20px'}} severity="success"> {successMessage}</Alert>
            : null}
              <Grid container spacing={2} >
                <Grid item xs={12} sm={6}  >
                  <TextField
                    autoComplete="given-name"
                    name="firstName"
                    required
                    fullWidth
                    id="firstName"
                    label="First Name"

                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    id="age"
                    label="Age"
                    name="age"
                    type="number"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="new-password"
                  />
                </Grid>
              </Grid>
              <Grid>
                <SliderContainer>
                  <Typography style={{textAlign: "center", }}>Gender</Typography>
                  <Slider name="gender" id="gender" step={1} min={0} max={2}  marks={genderMarks} valueLabelFormat={genderFormatVal} aria-label="Default"  valueLabelDisplay="auto" style={{color: "#000000e6", fontStyle: 'Bold', }} />
                </SliderContainer>
              </Grid>
              <Button
                type="submit"
                fullWidth
                sx={{ mt: 3, mb: 2, color: '#fff', bgcolor: '#2EB67D', '&:hover': { color: '#fff', bgcolor: '#2EB67D', } }}
                disableRipple
                >
                Sign Up
              </Button>
              <Grid container justifyContent="flex-end">
                <Grid item>
                  <Link href="#" underline="always" fontStyle='italic' color='inherit' backgroundColor="inherit" onClick={handleLoginButton} >
                  {'Already have an account?'}
                  </Link>
                </Grid>
              </Grid>
            </Box>

          <Copyright sx={{ mt: 5 }} />

          </Box>
          </div>
        {/* </Container> */}
      {/* </ThemeProvider> */}
      </div>
     </>
     :
     null
      }
    </>
  )
}

export default Login;