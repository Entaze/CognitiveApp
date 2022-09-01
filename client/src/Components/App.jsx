import React, { useState, useEffect } from 'react';
import { BottomNavigation, BottomNavigationAction } from '@mui/material'
import PersonIcon from '@mui/icons-material/Person';
import MapIcon from '@mui/icons-material/Map';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import FilterListIcon from '@mui/icons-material/FilterList';
import Box from '@mui/material/Box';
import Cognitivetest from './cognitivetest/Test1/CognitiveTest1.jsx';
import LoginNavBar from './Login/LoginNavBar';
import { LoadingButton } from '@mui/lab';
import Typography from '@mui/material/Typography';
import { Outlet, Link } from "react-router-dom";
import {signInWithGoogle} from "./Firebase/Firebase.js";
import { signOut } from 'firebase/auth';
import { auth } from './Firebase/Firebase';
import { ThemeProvider, createTheme } from '@material-ui/core/styles';
import StartIcon from '@mui/icons-material/Start';
import { useNavigate } from 'react-router-dom';
import LogoutIcon from '@mui/icons-material/Logout';
import axios from 'axios';


const App = () => {
    const [value, setValue] = React.useState("/");
    const [loading, setLoading] = useState(false);
    const [loggedOut, setLoggedOut] = useState(false);

    const navigate = useNavigate();


    const handleLoggedIn = () => {
      setLoggedIn(true);
    }

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };

    const theme = createTheme({
      typography: {
        fontFamily: 'Roboto'
      },
    });

    function handleLogOut() {
      setLoading(true);
      window.localStorage.removeItem('token');
      window.localStorage.removeItem('loggedIn');
      axios.get('/api/logout')
      .then((res) => {
        navigate("/login");
      })
      .catch((err) => {
        console.log('Logout error', err)
      })
    }


  return (
    <>
      <ThemeProvider theme={theme}>
        <div display='flex'>
        <Box sx={{ backgroundColor: '#346611', height: 80, paddingTop: 0}}>
        <Typography style={{ fontSize: 40, fontWeight: 700, color: '#fff', textAlign: 'center', fontFamily:'Courgette' }}>
          Cognitive Test
          </Typography>
          <Box display="flex" justifyContent="flex-end">
          <LoadingButton
              sx={{backgroundColor:'#200909'}}
              onClick={handleLogOut}
              size="small"
              float='right'
              position='absolute'
              loading={loading}
              justify="flex-end"
              align="flex-end"
              loadingPosition="end"
              variant="contained"
              endIcon={<LogoutIcon />}
            >
              Log Out
          </LoadingButton>
          </Box>
        </Box>
        </div>
        <Cognitivetest loggedOut={loggedOut}  />

      </ThemeProvider>
    </>
  )
};

export default App;
