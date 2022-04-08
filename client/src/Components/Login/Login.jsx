import React, { useEffect, useState } from 'react';
import { signInWithGoogle, auth, onAuthStateChanged } from "../Firebase/Firebase.js"
import ProfileSetup from "../Profile/ProfileSetup.jsx";
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useMainContext } from '../Providers/MainProvider.jsx';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import LoadingButton from '@mui/lab/LoadingButton';

const loginBackground = {
  backgroundImage: "url('https://res.cloudinary.com/davidmo/image/upload/v1649261658/cognitive-wallpaper_ijjoo2.jpg')",
  backgroundRepeat: 'repeat',
  backgroundSize: 'auto',
}

const loginStyle = {
  height: '100%',
  alignItems: 'center'
}

const loginButtonStyle = {
  marginBottom: '32%',
  marginTop: '9%',
  marginLeft: '5%',
}

function Login() {
  const { setUserProfile } = useMainContext()
  const [loading, setLoading] = useState(true);
  const [loggedIn, setLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const config = { params: {uid: user.uid} }
        axios.get('/api/profile', config)
          .then((result) => {
            console.log('loginGetAW:', result.data)
            if (result.data.name) {
              setUserProfile(result.data);
              localStorage.setItem('userProfile', JSON.stringify(result.data));
              navigate("/cognitivetest1s1");
            } else {
              setUserProfile({uid: user.uid});
              setLoggedIn(true);
            }
            localStorage.setItem('uid', user.uid);
          })
      } else {
        setLoading(false);
      }
    })
  }, []);

  function handleClick() {
    signInWithGoogle()
    .then(result => {
      setUserProfile({uid: result.user.uid});
      setLoggedIn(true);
      console.log('google: ', result)
    })
    .catch(err => {
      console.log(err);
    })

  }


  return (
    <>
      {loggedIn ?
        <ProfileSetup submitLabel="Register"/>
        :
        <div style={loginBackground}>
          <div >
            <Typography style={{ fontSize: 50, fontWeight: 700, color: '#4a3d29', textAlign: 'center', fontFamily:'Courgette', }}>Cognitive App</Typography>
            <LoadingButton loading={loading} variant="contained" sx={{backgroundColor:'#4a3d29'}} style={loginButtonStyle} onClick={handleClick}>login Cognizant</LoadingButton>
          </div>
        </div>
      }
    </>
  )
}

export default Login;