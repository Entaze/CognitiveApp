import React, { useState, useEffect } from "react";
import LoginNavBar from "./LoginNavBar.jsx";
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';
import {
  NavbarContainer,
  LeftContainer,
  RightContainer,
  NavbarText,
  NavbarButton,
  NavbarInnerContainer,
  NavbarLink,
  Logo,
} from "./NavBar.style";
import { useNavigate } from 'react-router-dom';


function Navbar({ loginNavbar, setLoginNavbar, handleLoginButton }) {
  const navigate = useNavigate();

  return (
    <NavbarContainer>
      <NavbarInnerContainer>
        <LeftContainer>
          <NavbarText>Cognitive App</NavbarText>
        </LeftContainer>
        <RightContainer >
          <Button
          onClick={handleLoginButton}
          type="submit"
          sx={{ mt: 3, mb: 2, color: '#fff', bgcolor: '#555555', opacity: '1', marginRight: '10%', '&:hover': { color: '#fff', bgcolor: '#555555', } }}
          disableRipple
          >
          Login
            {loginNavbar ?
                <ExpandLessIcon /> : <ExpandMoreIcon />
              }
          </Button>
          {/* <NavbarButton onClick={handleLoginButton} >
            Login
            {loginNavbar ?
                <ExpandLessIcon /> : <ExpandMoreIcon />
              }
          </NavbarButton> */}
          {loginNavbar ?
            <div >
                <LoginNavBar />
            </div>
            :
            null}
        </RightContainer>
      </NavbarInnerContainer>
    </NavbarContainer>
  );
}

export default Navbar;