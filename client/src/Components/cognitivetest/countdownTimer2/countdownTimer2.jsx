import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { useForm } from "react-hook-form";
import IconButton from '@mui/material/IconButton';
import Alert from '@mui/material/Alert';
import Typography from '@mui/material/Typography';
import DialogActions from '@mui/material/DialogActions';
import Modal from '@mui/material/Modal';
import PersonIcon from '@mui/icons-material/Person';
import CheckIcon from '@mui/icons-material/Check';
import { useMainContext } from '../../Providers/MainProvider.jsx';
import { Dialog, DialogContent } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import NavigationBar from '../../Layout/WithNavigation.jsx';
import moment from 'moment';
import '../../Styles.scss'



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

const useStyles = makeStyles({
  root: {
    borderWidth: "20px",
    borderColor: "rgba(0,0,0,0.2)",
    borderStyle: "solid"
  }
});

function countdownTimer2 () {
  const token = window.localStorage.getItem('token');
  const { userProfile, cognitiveTest, setCognitiveTest } = useMainContext();
  const [user, setUser] = useState(false);
  const [userAuth, setUserAuth] = useState(false);

  const userloggedIn = JSON.parse(window.localStorage.getItem('userLoggedIn'));

  const [countdownPage, setCountdownPage] = useState(true);
  const [completionTime, setCompletionTime] = useState(null);
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
	const [minutes, setMinutes] = useState(0);
	const [seconds, setSeconds] = useState(0);
  const [countdownComplete, setCountdownComplete] = useState(false);

  const [userId, setUserId] = useState(null);
  const [nav, setNav] = useState(false);
  const classes = useStyles();
  const navigate = useNavigate();
  const [keyClicked, SetKeyClicked] = useState('');



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

  useEffect(()=> {
    if (userProfile) {
      if (userloggedIn) {
        setUserId(userloggedIn);
      }
      if (userProfile._id) {
        setUserId(userProfile._id);
      }
    }
  }, [userloggedIn, userProfile])

 useEffect(() => {
  if (userProfile && token) {
    setUserAuth(true);
  } else {
    navigate('/login')
  }
 }, [userProfile])

 useEffect(() => {
  if (userId) {
    axios.get('/api/user', {params: {_id: userId}})
    .then((res)=>{
      setCompletionTime(res.data.user.Test4RecallCompletionTime)
    })
    .catch((err)=>{
     console.log(err)
    })
  }
 }, [userId])

//Listen to keyboard events
useEffect(() => {
  document.addEventListener('keydown', detectSpaceBar, true)
}, [])

const detectSpaceBar = (e) => {
  SetKeyClicked(e.key);
}

useEffect(() => {
  if (completionTime) {
    setInterval(() => {
      const now = moment();
      const then = moment(completionTime, 'YYYY/MM/DD hh:mm:ss').add(2, 'hours');  //6, 'days'

      let duration = moment.duration(then.diff(now));
      let hours = duration.asHours();
      // console.log('Hours :', hours)
      const countdown = moment(then - now);
      const days = countdown.format('DD');
      const hr = countdown.format('HH');
      const min = countdown.format('mm');
      const sec = countdown.format('ss');

      if (hours >= 0) {
        setDays(days);
        setHours(hr);
        setMinutes(min);
        setSeconds(sec);
      } else {
        setCountdownComplete(true);
      }
    }, 1000);
  }
}, [completionTime]);

const handle2WeeksLtr = () => {
  navigate('/cognitivetest1v2')
}

  return (
    <>
    {userAuth ?
    <>
      <NavigationBar />
      <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center', height: '100vh', maxWidth: '100vw', background: '#000', color: '#fff', top: 0, bottom: 0, }} >
            {countdownPage ?
              <>
              <div style={centerScreen} >
                {!countdownComplete ?
                  <h1 style={{ color: '#e67373', fontSize: 50, }} >COUNTDOWN TO VERSION TWO</h1>
                : null}
                {countdownComplete ?
                  <h1 style={{ color: '#e67373', fontSize: 50, }} >START RECALL</h1>
                : null}
                <div style={{ fontSize: 35, fontWeight: 700, display: 'flex', padding: '110px 0px 0px 0px',  }} >
                { !countdownComplete ?
                <>
                <div className="timer">
                  {days}
                  <span>days</span>
                </div>
                 <div className="timer">
                  {hours}
                  <span>hours</span>
                </div>
                <div className="timer">
                  {minutes}
                  <span>minutes</span>
                </div>
                <div className="timer">
                  {seconds}
                  <span>seconds</span>
                </div>
                </>
                : null}

                {countdownComplete ?
                  <div>
                    <button onClick={handle2WeeksLtr}>
                      Continue
                    </button>
                  </div>
                : null}
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

export default countdownTimer2