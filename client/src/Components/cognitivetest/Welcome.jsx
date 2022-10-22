import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useMainContext } from '../Providers/MainProvider.jsx'
import { useNavigate } from 'react-router-dom'
import Typography from '@mui/material/Typography'
import NavigationBar from '../Layout/WithNavigation.jsx'
import TextField from '@mui/material/TextField'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import '../Styles.scss'


const centerScreen = {
  // width: '70vw',
  height: '50vh',
  background: '#000000',
  color: '#f5f5f5',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  // marginLeft: '10%',
  marginRight: '10%',
  paddingTop: '15%',
  paddingBottom: '10%',
  flexDirection: 'column',
}

const button = {
  width: '80px',
  backgroundColor: '#5f7182',
  color: '#fafafa',
  height: '50px',
  marginLeft: '45%'
}

const Welcome = () => {
  const { userProfile, cognitiveTest, setCognitiveTest } = useMainContext();
  const [userAuth, setUserAuth] = useState(false);
  const [firstPage, setFirstPage] = useState(true);
  const [keyClicked, SetKeyClicked] = useState('')
  const navigate = useNavigate();


  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    return () => {
      setIsMounted(false);
    }
  }, []);

  useEffect(() => {
    if (userProfile) {
      setUserAuth(true);
    } else {
      navigate('/login')
    }
   }, [userProfile])

   const StartTest = () => {
    navigate('/cognitivetest1')
   }

    return (
      <>
      {userAuth ?
      <>
        <NavigationBar />
        <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center', height: '100vh', maxWidth: '100vw', background: '#000', color: '#fff', top: 0, bottom: 0, }} >
            <>
            <div style={centerScreen} >
            <h1 className="WelcomeTitle">Welcome to <br /> Cognitive App</h1>
              <div>
                <button onClick={StartTest} >Begin Test</button>
              </div>
            </div>
            </>
        </div>
        </>
       :
       null
       }
      </>
    )
}

export default Welcome
