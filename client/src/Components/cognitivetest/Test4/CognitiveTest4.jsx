import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useMainContext } from '../../Providers/MainProvider.jsx'
import { useNavigate } from 'react-router-dom'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import NavigationBar from '../../Layout/WithNavigation.jsx'
import TextField from '@mui/material/TextField'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import '../../Styles.scss'
// import App from '../../App.jsx'


const Container = {
  backgroundColor: '#000',
  position: 'absolute',
  zIndex: '-1',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
}

const centerScreen = {
  width: '70vw',
  height: '50vh',
  background: '#000000',
  color: '#f5f5f5',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  marginLeft: '10%',
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

const exCenter = {
  display: 'flex',
  width: '50vw',
  height: '40vh',
  justifyContent: 'center',
  alignItems: 'center',
  margin: 'auto',
}

const Cognitivetest4 = () => {
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

  //-----Listen to keyboard events

  useEffect(() => {
    document.addEventListener('keydown', detectSpaceBar, true)
  }, [])

  const detectSpaceBar = (e) => {
    SetKeyClicked(e.key);
  }

  useEffect(() => {
    if (keyClicked === 'Enter' && startPreTest) {
      setStartPreTest(false);
      containerColorChange();
    }
  }, [keyClicked])

  //-------------------------------------------

  const startTest = () => {
    console.log('START...')
  }



    return (
      <>
      {userAuth ?
      <>
        <NavigationBar />

        <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center', height: '100vh', maxWidth: '100vw', background: '#000', color: '#fff', top: 0, bottom: 0, }} >

          {firstPage ?
            <>
            <div style={centerScreen} >
              <h1 style={{ color: '#e67373', fontSize: 50, }} >TEST 4</h1>
              <div style={{ fontSize: 35, fontWeight: 700, display: 'flex', padding: '110px 40px 120px 40px', lineHeight: '1.6', }} >
              Test 4...  <br /> [Press enter or click start to continue]
              </div>
              <div>
                <button onClick={startTest} >Start</button>
              </div>
            </div>
            </>
            :
            null}

        </div>
        </>
       :
       null
       }
      </>
    )
}

export default Cognitivetest4


