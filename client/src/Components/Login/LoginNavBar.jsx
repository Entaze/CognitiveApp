import React, {useState, useEffect } from 'react';
import AppBar from '@material-ui/core/AppBar';
import { useMainContext } from '../Providers/MainProvider.jsx';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import LoadingButton from '@mui/lab/LoadingButton';
import Button from '@mui/material/Button';
import { Box, TextField, InputAdornment, } from '@mui/material';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import KeyIcon from '@mui/icons-material/Key';
import axios from 'axios';
import Alert from '@mui/material/Alert';
import Grid from '@mui/material/Grid';
import Stack from "@mui/material/Stack";
import Link from '@mui/material/Link';
import { useNavigate } from 'react-router-dom';
import Cognitivetest from '../cognitivetest/Test1/CognitiveTest1.jsx'
// import '../Styles.scss'

import {
  NavbarContainer,
  LeftContainer,
  RightContainer,
  NavbarText,
  NavbarButton,
  NavbarInnerContainer,
  NavbarLink,
  Logo,
  DropContainer,
  LeftDropContainer,
  RightDropContainer,
  DropColumn1,
  DropColumn2,
  DropColumn3,
  LoginFormSub,
  ForgotPassword,
} from "./NavBar.style";


const facebookButton = {
  marginTop: '1%',
  marginLeft: '5%',
}

const gmailButton = {
  marginTop: '1%',
  marginLeft: '-63%',
  marginRight: '2%',
}

const loginButton = {
  marginTop: '0.4%',
  marginLeft: '93%',
  marginRight: '3%',
}


const useStyles = makeStyles((theme) => ({
  root: {
    flexgrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
    color: 'black'
  },
  title: {
    flexGrow: 1,
    color: 'black'
  },
  appBarTransparent: {
    backgroundColor: 'rgba(67, 129, 168, 0.7)',
    marginTop: '78px',
  },
  appBarSolid: {
    backgroundColor: 'rgba(46, 182, 125, 0.9)',
    marginTop: '78px',
    flexDirection: 'column',
  },
}))

const LoginNavBar = () => {
  const { setUserProfile } = useMainContext()
  const [emailLogin, setEmailLogin] =  useState('');
  const [keyClicked, SetKeyClicked] = useState('');
  const [passwordLogin, setPasswordLogin] =  useState('');
  const [errorMessage, setErrorMessage] = useState("")
  const navigate = useNavigate()
  let success = false;

  let emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;

  //isMounted declaration and 2 useEffect's below ensure no memory leak in component
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    return () => {
      setIsMounted(false);
    }
  }, []);

  //Listen to keyboard events
  useEffect(() => {
    document.addEventListener('keydown', detectSpaceBar, true)
  }, [])

  const detectSpaceBar = (e) => {
    SetKeyClicked(e.key);
  }

  useEffect(() => {
    if (keyClicked === 'Enter') {
      handleLogin();
    }
  }, [keyClicked])

  const handleEmail = (e) => {
    e.preventDefault();
    setEmailLogin(e.target.value);
    setErrorMessage('');
  }

  const handlePassword = (e) => {
    e.preventDefault();
    setPasswordLogin(e.target.value);
    setErrorMessage('');
  }

  const errorTimeout = () => {
    setTimeout(() => {
      setErrorMessage('')
    }, 3000)
  }

  function handleLogin() {
    const loginPackage = {
      email: emailLogin,
      password: passwordLogin
    };
    if (!loginPackage.email && !loginPackage.password) {
      setErrorMessage('Enter email and password to login!');
    } else if (!loginPackage.email) {
      setErrorMessage('Email is required!');
    } else if (!loginPackage.email.match(emailRegex)) {
      setErrorMessage('Invalid email entered!');
    } else if (!loginPackage.password) {
      setErrorMessage('Password is required!');
    } else {
      axios.post('/api/login', loginPackage)
      .then((res) => {
        localStorage.setItem('token', JSON.stringify(res.data.token));
        localStorage.setItem('loggedIn', JSON.stringify(true));
        setUserProfile(res.data.user);
        const data = res.data;
        if (data.token && !data.user.test1Completion) {
          navigate("/cognitivetest2")
        } else if (data.token && !data.user.test2Completion) {
          navigate("/cognitivetest2")
        } else if (data.token && data.user.test2Completion) {
          navigate("/test-end")
        }
      })
      // .catch((err) => {
      //   setErrorMessage('Email and password do not match.');
      // })
    }
  }

  const classes = useStyles();
  return (
    <>

      <AppBar position="fixed" className={classes.appBarSolid} >
        <DropContainer >
          <LeftDropContainer ></LeftDropContainer>
          <RightDropContainer >
          {errorMessage ?
              <Alert sx={{ height: '44px', whiteSpace: 'nowrap', marginLeft: '5px', marginTop: '10px' }} severity="error" > {errorMessage} </Alert>
              :
            null}
            <LoginFormSub onSubmit={handleLogin} autoComplete="off" >

                <DropColumn1 >
                      <TextField
                        id="email-input-with-icon-textfield"
                        required
                        autoFocus
                        type={"email"}
                        style={{ backgroundColor: '#fff', borderBottom: '1px solid #485a6b', width: '80%', }}
                        className="form-inputEmail"
                        placeholder="Email"
                        value={ emailLogin }
                        InputProps={{
                          disableUnderline: true,
                          startAdornment: (
                            <InputAdornment position="start">
                            <div></div>
                              <EmailOutlinedIcon style={{ width: '25px', height: '26px', marginLeft: '10px', marginRight: '10px'}}  />
                            </InputAdornment>
                          ),
                        }}
                        variant="standard"
                        onChange={handleEmail}
                      />
                </DropColumn1>
                <DropColumn2 >
                      <TextField
                        id="pword-input-with-icon-textfield"
                        required
                        type={"password"}
                        style={{backgroundColor: '#fff', borderBottom: '1px solid #485a6b', width: '80%',  }}
                        className="form-inputEmail"
                        placeholder="Password"
                        value={ passwordLogin }
                        InputProps={{
                          disableUnderline: true,
                          startAdornment: (
                            <InputAdornment position="start">
                            <div></div>
                              <KeyIcon style={{ width: '25px', height: '26px', margin: '0px 10px', }}  />
                            </InputAdornment>
                          ),
                        }}
                        variant="standard"
                        onChange={handlePassword}
                      />
                </DropColumn2>
                <DropColumn3 >
                  <Button variant="contained" sx={{ mt: 3, mb: 2, color: '#fff', bgcolor: '#555555', opacity: '1', boxShadow: "none", '&:hover': { color: '#fff', bgcolor: '#555555', } }}  onClick={handleLogin} disableRipple> Login </Button>
                </DropColumn3>
              </LoginFormSub>
            <ForgotPassword href="/forgotpassword" >
              Forgot password
            </ForgotPassword>

          {/* <Toolbar>
              <Stack sx={{
                marginTop: 1,
                direction: 'column',
                alignItems: 'center',
                // marginLeft: '51%'
              }}
              >
                {errorMessage ?
                  <Alert sx={{ height: '44px', whiteSpace: 'nowrap', marginLeft: '25%' }} severity="error" > {errorMessage} </Alert>
                  :
                null}
              <form onSubmit={handleLogin} autoComplete="off" >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
                <DropColumn1 >
                      <TextField
                        id="email-input-with-icon-textfield"
                        required
                        autoFocus
                        type={"email"}
                        style={{ backgroundColor: '#fff', borderBottom: '1px solid #485a6b', width: '310px', }}
                        className="form-inputEmail"
                        placeholder="Email"
                        value={ emailLogin }
                        InputProps={{
                          disableUnderline: true,
                          startAdornment: (
                            <InputAdornment position="start">
                            <div></div>
                              <EmailOutlinedIcon style={{width: '25px', height: '26px', marginLeft: '10px', marginRight: '10px'}}  />
                            </InputAdornment>
                          ),
                        }}
                        variant="standard"
                        onChange={handleEmail}
                      />
                </DropColumn1>
                <DropColumn2 >
                      <TextField
                        id="pword-input-with-icon-textfield"
                        required
                        type={"password"}
                        style={{backgroundColor: '#fff', borderBottom: '1px solid #485a6b', width: '310px',  }}
                        className="form-inputEmail"
                        placeholder="Password"
                        value={ passwordLogin }
                        InputProps={{
                          disableUnderline: true,
                          startAdornment: (
                            <InputAdornment position="start">
                            <div></div>
                              <KeyIcon style={{width: '25px', height: '26px', margin: '0px 10px', }}  />
                            </InputAdornment>
                          ),
                        }}
                        variant="standard"
                        onChange={handlePassword}
                      />
                </DropColumn2>
                <DropColumn3 >
                  <LoadingButton variant="contained" sx={{backgroundColor:'#555555',  }}  onClick={handleLogin}> Login </LoadingButton>
                </DropColumn3> */}
                {/* <Grid container spacing={2} > */}
                  {/* <Grid item xs={12} sm={4} justifyContent = {'center'} >
                    <Box
                      sx={{
                        '& .MuiTextField-root': { m: 1, },
                      }}
                      noValidate
                      autoComplete="off"
                    >
                      <TextField
                        id="email-input-with-icon-textfield"
                        required
                        autoFocus
                        type={"email"}
                        style={{ backgroundColor: '#fff', borderBottom: '1px solid #485a6b', width: '310px', }}
                        className="form-inputEmail"
                        placeholder="Email"
                        value={ emailLogin }
                        InputProps={{
                          disableUnderline: true,
                          startAdornment: (
                            <InputAdornment position="start">
                            <div></div>
                              <EmailOutlinedIcon style={{width: '25px', height: '26px', marginLeft: '10px', marginRight: '10px'}}  />
                            </InputAdornment>
                          ),
                        }}
                        variant="standard"
                        onChange={handleEmail}
                      />
                    </Box>
                  </Grid> */}
                  {/* <Grid item xs={12} sm={4} justifyContent = {'center'} >
                    <Box
                      sx={{
                        '& .MuiTextField-root': { m: 1, },
                      }}
                      noValidate
                      autoComplete="off"
                    >
                      <TextField
                        id="pword-input-with-icon-textfield"
                        required
                        type={"password"}
                        style={{backgroundColor: '#fff', marginLeft: '190px', borderBottom: '1px solid #485a6b', width: '310px',  }}
                        className="form-inputEmail"
                        placeholder="Password"
                        value={ passwordLogin }
                        InputProps={{
                          disableUnderline: true,
                          startAdornment: (
                            <InputAdornment position="start">
                            <div></div>
                              <KeyIcon style={{width: '25px', height: '26px', margin: '0px 10px', }}  />
                            </InputAdornment>
                          ),
                        }}
                        variant="standard"
                        onChange={handlePassword}
                      />
                    </Box>
                  </Grid> */}
                  {/* <Grid item xs={12} sm={4} justifyContent = {'center'}>
                  <Box
                      sx={{
                        '& .MuiTextField-root': { m: 1, },
                        justifyContent: 'flex-end',
                      }}
                      noValidate
                      autoComplete="off"
                    >
                      <LoadingButton variant="contained" sx={{backgroundColor:'#555555', margin: '6% 0 0 390px', }}  onClick={handleLogin}> Login </LoadingButton>
                    </Box>
                  </Grid> */}

                  {/* <Grid container justifyContent="flex-end">
                    <Grid item>
                    <Link href="/forgotpassword" underline="always" fontStyle='italic' color='#fff' >
                      {'Forgot password?'}
                    </Link>
                    </Grid>
                  </Grid> */}

                {/* </Grid> */}
                {/* </div>
                </form>
              </Stack>
              <div style={loginButton}>
              </div>
            </Toolbar> */}
      </RightDropContainer>
      </DropContainer>

      </AppBar>


    </>
  )
}

export default LoginNavBar;