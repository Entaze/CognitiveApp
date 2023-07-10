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
import {
  NavbarContainer,
  LeftContainer,
  RightContainer,
  NavbarText,
  NavbarButton,
  NavbarInnerContainer,
  NavbarLink,
  Logo,
} from "./Login/NavBar.style";
import './Styles.scss'


const App = () => {
  const [value, setValue] = React.useState("/");
  const [loading, setLoading] = useState(false);
  const [loggedOut, setLoggedOut] = useState(false);
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

  document.addEventListener("mousemove", () =>{
    localStorage.setItem('lastActvity', new Date())
  });
  document.addEventListener("click", () =>{
    localStorage.setItem('lastActvity', new Date())
  });

  let timeInterval = setInterval(() => {
    let lastAcivity = localStorage.getItem('lastActvity')
    var diffMs = Math.abs(new Date(lastAcivity) - new Date()); // milliseconds between now & last activity
    var seconds = Math.floor((diffMs/1000));
    var minute = Math.floor((seconds/60));
    // console.log(seconds +' sec and '+minute+' min since last activity')
    if(minute == 100){
      // console.log('No activity from last 10 minutes... Logging Out')
      //code for logout or anything...
      handleLogOut();
      clearInterval(timeInterval)
    }
  },1000)

  return (
    <>
      <ThemeProvider theme={theme}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', backgroundColor: '#113c66', height: '14vh', top: 0, left: 0, padding: 0, width: '100vw', position: 'fixed',  }} >
          <NavbarText style={{ marginLeft: '5%' }}>
          Cognitive Test
          </NavbarText>
          <Box display="flex" justifyContent="flex-end" marginRight= '3%' >
          <LoadingButton
              sx={{backgroundColor:'#200909',  }}
              onClick={handleLogOut}
              size="small"
              float='right'
              position='absolute'
              loading={loading}
              // justify="flex-end"
              align="flex-end"
              justify= "space-between"
              loadingPosition="end"
              variant="contained"
              endIcon={<LogoutIcon />}
            >
              Log Out
          </LoadingButton>
          </Box>
        </div>
        {/* <Cognitivetest loggedOut={loggedOut}  /> */}
      </ThemeProvider>
    </>
  )
};

export default App;
