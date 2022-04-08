import React, { useState, useEffect } from 'react';
import { BottomNavigation, BottomNavigationAction } from '@mui/material'
import PersonIcon from '@mui/icons-material/Person';
import MapIcon from '@mui/icons-material/Map';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import FilterListIcon from '@mui/icons-material/FilterList';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Outlet, Link } from "react-router-dom";
import {signInWithGoogle} from "./Firebase/Firebase.js";
import { ThemeProvider, createTheme } from '@material-ui/core/styles';

const App = () => {
    const [value, setValue] = React.useState("/");
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };


    const theme = createTheme({
      typography: {
        fontFamily: 'Roboto'
      },
    });

  return (
    <>
      <ThemeProvider theme={theme}>
      <Box sx={{ backgroundColor: '#4a3d29', height: 80, paddingTop: 0}}>
      <Typography style={{ fontSize: 40, fontWeight: 700, color: '#fff', textAlign: 'center', fontFamily:'Courgette' }}>Cognitive Test</Typography>
      </Box>

      </ThemeProvider>
    </>
  )
};

export default App;
