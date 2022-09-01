import React, { useEffect, useState } from 'react';
import { signInWithGoogle, auth, onAuthStateChanged } from "../Firebase/Firebase.js"
import { AccountBox } from "../ProfileSetUp/AccountBox";
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
import {
  BoldLink,
  BoxContainer,
  FormContainer,
  SliderContainer,
  TextContainer,
  Input,
  MutedLink,
  SubmitButton,
} from "../ProfileSetUp/AccountBox/common";


const loginBackground = {
  backgroundImage: "url('https://res.cloudinary.com/davidmo/image/upload/v1649261658/cognitive-wallpaper_ijjoo2.jpg')",
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
        axios.get('/api/getuser', {params: {_id: res.data.jwtResponse._id}})
        .then((res) => {
          setUserProfile(res.data.user)
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

  useEffect(() => {
    if (userAuth) {
      navigate('/cognitivetest1')
    }
  }, [userAuth])

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
          navigate("/cognitivetest1");
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
              // marginTop: 8,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: '#2EB67D', marginTop: '180px', }}>
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
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6} >
                  <TextField
                    autoComplete="given-name"
                    name="firstName"
                    required
                    fullWidth
                    id="firstName"
                    label="First Name"
                    autoFocus
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
                  <Typography style={{textAlign: "center", marginTop: "10px"}}>Gender</Typography>
                  <Slider name="gender" id="gender" step={1} min={0} max={2}  marks={genderMarks} valueLabelFormat={genderFormatVal} aria-label="Default"  valueLabelDisplay="auto" style={{color: "#000000e6", fontStyle: 'Bold', }} />
                </SliderContainer>
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2, bgcolor: '#2EB67D' }}
              >
                Sign Up
              </Button>
              <Grid container justifyContent="flex-end">
                <Grid item>
                  <Link href="#" underline="always" fontStyle='italic' onClick={handleLoginButton} >
                  {'Already have an account?'}
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
          <Copyright sx={{ mt: 5 }} />
        </Container>
      </ThemeProvider>
      </div>
     </>
     :
     null
      }
    </>
  )
}

export default Login;