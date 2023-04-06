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



function ConfirmAccount() {
  const { setUserProfile } = useMainContext()
  const [checkUserLogin, setCheckUserLogin] = useState(false);
  const navigate = useNavigate()
  const { search } = useLocation();
  const searchParams = new URLSearchParams(search);
  const token = searchParams.get('id');
  const user = searchParams.get('user');
  const userdetails = searchParams.get('userDetails');


  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    return () => {
      setIsMounted(false);
    }
  }, []);

  useEffect(()=>{
    if (user) {
      const param = {_id: user, userConfirmed: true};
      axios.post('/api/user', param)
      .then((res)=>{
        axios.get('/api/user', {params: {_id: user}})
        .then((res)=>{
          localStorage.setItem('token', JSON.stringify(token));
          localStorage.setItem('userLoggedIn', JSON.stringify(res.data.user));
          localStorage.setItem('loggedIn', JSON.stringify(true));
          setUserProfile(res.data.user);
          navigate('/test-begin')
        })
      })
      .catch((e)=>{
        console.log(e)
      })
    }
  }, [user])

  return (
    <>
      <>

     </>
    </>
  )
}

export default ConfirmAccount;