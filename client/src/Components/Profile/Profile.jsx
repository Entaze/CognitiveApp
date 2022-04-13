import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Typography } from '@mui/material';
import Card from '@mui/material/Card';
import { LoadingButton } from '@mui/lab';
import { borderRadius } from '@mui/system';
import { useMainContext } from '../Providers/MainProvider';
import EditProfile from './EditProfile';
import ProfileSetup from './ProfileSetup';
import { signOut } from 'firebase/auth';
import { auth } from '../Firebase/Firebase';
import LogoutIcon from '@mui/icons-material/Logout';
import StartIcon from '@mui/icons-material/Start';
import { useNavigate } from 'react-router-dom';

const profileContainer = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  margin: '20px 10px 0px 10px'
}

const buttonStyle = {
  display: 'flex',
  flexDirection: 'row',
  width: '400px',
  justifyContent: 'space-between',
  margin: '5%'
}

const cardStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  paddingBottom: '70px',
  backgroundColor: 'blanchedalmond',
  color: 'black'
}

const titleStyle = {
  color: 'cornflowerblue',
  fontFamily: 'Courgette',
  fontSize: '25px',
  margin: '20px 0 10px 0'
}

const imgContainerWrapper = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  width: '300px',
  objectFit: 'contain',
  marginBottom: '20px'
}

const imgContainer = {
  width: '200px',
  height: '200px'
}


const imgStyle = {
  width: '100%',
  height: '100%',
  borderRadius: '50%',
  marginBottom: '20px',
  objectFit: 'cover'
}

const infoStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  width: '100%'
}

const invidiualInfoStyle = {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  width: '50%'
}

const editStyle = {
  margin: '5% 0 0 80%',
  color: 'chocolate'
}

function Profile() {
  const { userProfile } = useMainContext();
  const [setup, setSetup] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  function exitOutEdit() {
    setSetup(false);
  }

  function handleStartTest() {
    navigate("/cognitivetest1s1");
  }

  // console.log('setup lorene', setup)
  return (
    <>
      {setup ?
          <ProfileSetup submitLabel="Save Profile" exitOutEdit={exitOutEdit}/>
      : (
          <div className='profileContainer' style={profileContainer}>
            <Card className='card' style={cardStyle}>
              <div style={editStyle}>
                <EditProfile  setSetup={setSetup}/>
              </div>
              <Typography style={titleStyle}>{userProfile.name}</Typography>
              <div className='imgContainerWrapper' style={imgContainerWrapper}>
                <div className='imgContainer' style={imgContainer}>
                  <img className='img' style={imgStyle} src={userProfile.imgUrl} />
                </div>
              </div>
              <Typography sx={{ color: 'goldenrod', fontStyle: 'oblique' }}>{userProfile.aboutMe}</Typography>
              <br />
              <br />

              <div style={infoStyle}>

                <div style={invidiualInfoStyle}>
                  <Typography>Gender: </Typography>
                  <Typography> {userProfile.gender} </Typography>
                </div>
                <div style={invidiualInfoStyle}>
                  <Typography>Age: </Typography>
                  <Typography> {userProfile.age} </Typography>
                </div>

              </div>

              <br />
                  <LoadingButton
                  sx={{backgroundColor:'#c28832'}}
                  onClick={handleStartTest}
                  size="small"
                  // loading={loading}
                  // loadingPosition="end"
                  variant="contained"
                  startIcon={<StartIcon />}
              >
                Start Test
              </LoadingButton>
            </Card>
          </div>
        )
      }
    </>
  )
}

export default Profile;