import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { useForm } from "react-hook-form";
import IconButton from '@mui/material/IconButton';
import Alert from '@mui/material/Alert';
import Grid from '@mui/material/Grid'
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
  paddingBottom: '5%',
  flexDirection: 'column',
}

const useStyles = makeStyles({
  root: {
    borderWidth: "20px",
    borderColor: "rgba(0,0,0,0.2)",
    borderStyle: "solid"
  }
});

const button = {
  width: '80px',
  backgroundColor: '#5f7182',
  color: '#fafafa',
  height: '50px',
  marginLeft: '45%'
}

const buttonImportantInfo = {
  fontSize: '15px',
  fontStyle: 'italic',
  color: 'rgba(162, 7, 7, 0.99)',
  fontWeight: '500',
  textDecoration: 'none',
  float: 'left',
  clear: 'both',
  align: 'center',
  display: 'block',
  marginLeft: '19px'
}

const submitButton = {
  width: '100%',
  height: '50px',
  padding: '11px 40%',
  color: '#fff',
  fontSize: '15px',
  whiteSpace: 'nowrap',
  fontWeight: '600',
  border: 'none',
  borderRadius: '100px 100px 100px 100px',
  cursor: 'pointer',
  transition: 'all, 240ms ease-in-out',
  backgroundColor: '#113c66',
}

const buttonInfo1 = {
  fontSize: '15px',
  fontStyle: 'italic',
  color: 'rgba(200, 200, 200, 0.99)',
  fontWeight: '500',
  textDecoration: 'none',
  float: 'center',
  clear: 'both',
  align: 'center',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginLeft: '19px',
}

const formInput = {
  boxSizing: 'border-box',
  height: '39px',
  width: '626px',
  border: '1px solid #E6E6E6',
  borderRadius: '10px',
  margin: '15px 15px 15px 15px',
  textIndent: '20px',
  WebkitTextSecurity: 'disc',
}

const exCenter = {
  display: 'flex',
  width: '50vw',
  height: '40vh',
  justifyContent: 'center',
  alignItems: 'center',
  margin: 'auto',
}

const button1 = {
  width: '80px',
  backgroundColor: '#5f7182',
  color: '#fafafa',
  height: '50px',
  marginLeft: '15px'
}

const formTitle = {
  color: '#000',
  fontWeight: '700',
  fontSize: '30px',
  height: '30px',
  width: '426px',
  border: 'none',
  margin: '15px 25px 15px 15px',
  textAlign: 'center',
  paddingBottom: '40px',
}


function CognitiveTest2Recallv2 () {
  const token = window.localStorage.getItem('token');
  const { userProfile, cognitiveTest, setCognitiveTest } = useMainContext();
  const [user, setUser] = useState(false);
  const [userAuth, setUserAuth] = useState(false);

  const userloggedIn = JSON.parse(window.localStorage.getItem('userLoggedIn'));

  const [firstPage, setFirstPage] = useState(true);
  const [secondPage, setSecondPage] = useState(false);
  const [TestIntro, setTestIntro] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [imgLoaded, setImgLoaded] = useState(false);
  const [startTest2, setStartTest2] = useState(false);
  const [displayCross, setDisplayCross] = useState(false)
  const [entry, setEntry] = useState('')

  const [countModal, setCountModal] = useState(0);
  const [countModal2, setCountModal2] = useState(0);

  const [test6End, setTest6End] = useState(false);
  const [displayNum, setDisplayNum] = useState(true)

  const [userId, setUserId] = useState(null);
  const classes = useStyles();
  const navigate = useNavigate();
  const [keyClicked, SetKeyClicked] = useState('');
  const [trialEntry, setTrialEntry] = useState(3)
  const [trial, setTrial] = useState(false)

  let countWrds = countModal2;
  let trialCount = 3;

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
        setUserId(userloggedIn._id);
      }
      if (userProfile) {
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


//Listen to keyboard events
useEffect(() => {
  document.addEventListener('keydown', detectSpaceBar, true)
}, [])

const detectSpaceBar = (e) => {
  SetKeyClicked(e.key);
}

// Detect page navigations with 'enter' key
useEffect(()=>{
  if (keyClicked === 'Enter' && firstPage) {
    SetKeyClicked('')
    setFirstPage(false);
    setTestIntro(true);
  }
  if (keyClicked === 'Enter' && TestIntro) {
    SetKeyClicked('')
    TestStart()
  }
  if (keyClicked === 'Enter' && test6End) {
    navigate('/cognitivetest3recallv2')
  }
}, [keyClicked, entry, TestIntro, firstPage])

const handleStart = () => {
  setFirstPage(false)
  setTestIntro(true);
}

useEffect(() => {
  if (TestIntro) {
    setImgLoaded(true)
  }
}, [TestIntro, loaded])

const TestStart = () => {
  if (trialCount > 1) {
    setTestIntro(false);
    setStartTest2(true);

    setTimeout(()=>{
      setDisplayNum(false)
      setDisplayCross(true)
      setTrial(true)
    }, 30000)

    setTimeout(()=>{
      setDisplayCross(false)
      setStartTest2(false);
      setDisplayNum(true)
      trialCount--;
      TestStart()
    }, 60000)
  } else if (trialCount === 1) {
      setTestIntro(false)
      setStartTest2(true)

      setTimeout(()=>{
        setDisplayNum(false)
        setDisplayCross(true)
        setTrial(true)
      }, 30000)

      setTimeout(()=>{
        setDisplayCross(false)
        setStartTest2(false);

        trialCount--;
        setTestIntro(false);
        let complete = {_id: userProfile._id, test2CompletionRecallv2: true};
        axios.post('/api/user', complete)
        .then((result)=>{
          setDisplayNum(false)
          setDisplayCross(false)
          // setStartTest2(false)
          setTest6End(true)
        })
    }, 60000)
   }
}

useEffect(()=> {
  let param;
  if (displayCross) {
    let response = '';
    if (entry === '') {
      response = {};
    } else {
      for (let i = 0; i < entry.length; i++) {
        if (i !== (entry.length - 1)) {
          response = response + entry[i] + ',';
        } else {
          response = response + entry[i];
        }
      }
    }

    if (trialEntry === 3) {
      param = {id: userId, _66Test2Recall_Entry_1v2: response, };
    } else if (trialEntry === 2) {
      param = {id: userId, _67Test2Recall_Entry_2v2: response, };
    } else if (trialEntry === 1) {
      param = {id: userId, _68Test2Recall_Entry_3v2: response, };
    }
    setTrialEntry(trialEntry - 1);
    axios.post('/api/cognitivetest', param )
    .then((res) => {
      // console.log(res.data.Test2Recall_Entry_1)
      setEntry('')
    })
  }
}, [displayCross])

const handleEntry = (e) => {
  e.preventDefault();
  setEntry(e.target.value);
}

const handleStartTest7 = () => {
  navigate('/cognitivetest3recallv2')
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
                <h1 style={{ color: '#e67373', fontSize: 50, }} >SESSION B - TEST 2 RECALL</h1>
                <div style={{ fontSize: 35, fontWeight: 700, display: 'flex', padding: '110px 0px 0px 0px',  }} >
                You will be shown a sequence of numbers on the screen. Using your dominant hand (i.e., the hand you use to write with), type the sequence as fast and accurately as possible.
                Keep typing the sequence over and over until the numbers disappear.
                <br /> <br /> [Press ENTER or click next to continue.]
                </div>
                    <button style={{ margin: '75px'}} onClick={handleStart} >
                      Next
                    </button>
                </div>
              </>
            :
            null}
          {TestIntro && !imgLoaded ?
          <>
              <div className="loader" id="loader2"></div>
              <span className="loadingText">LOADING...</span><br></br>
          </>
          : null}
          {TestIntro && imgLoaded ?
          <div style={centerScreen} >
            <div id='description' style={exCenter} >
              <img
              style= {imgLoaded ? { width: '100%', height: '100%', marginBottom: '10vh', } : { display: 'none' } }
              src="https://res.cloudinary.com/entazesoftware/image/upload/v1664984224/CogniticeTest-Keyboard_tlpkg2.png"
              onLoad={() => setLoaded(true)}
              />
            </div>
            <div style={{ fontSize: 35, fontWeight: 50, marginBottom: '6vh' }}>
             [Press ENTER or click start to begin test.]
            </div>
            <div style={{ display: "inline-block", margin: "4px" }} >
              <button style={{ margin: "8px", background: "#7e1515" }} onClick={TestStart} >Start</button>
            </div>
          </div>
          : null}
         {startTest2 ?
          <div style={centerScreen} >
            <div style={exCenter} >
              {displayNum ?
                <div style={{ display: 'flex', flexDirection: 'column', width: '100%', justifyContent: 'center', alignItems: 'center', height: '100%', }} >
                  <h1 style={{ fontSize: 45, color: '#fff', paddingBottom: '90px', }} >
                    2 3 1 4 2
                  </h1>
                  <form autoComplete='off' onSubmit={ (e) => { e.preventDefault() } } >

                  <div component="form" noValidate  sx={{ mt: 3, height: '35px', width: '100%' }}>
                    <Grid item xs={12}>
                       <input password="password" autoComplete="off" autoFocus placeholder="Type Number.." style={formInput} onChange={handleEntry} />
                    </Grid>
                  </div>
                  </form>
                </div>
              : null}
              {displayCross ?
                <img style={ {width:'190px', height: '140px' } } src="https://res.cloudinary.com/entazesoftware/image/upload/v1662136021/CognitiveApp/X-logo_mnf03d.jpg" />
              : null}
            </div>
          </div>
          : null}
         {test6End ?
          <>
            <div style={centerScreen} >
            <div style={{ fontSize: 35, fontWeight: 700, display: 'flex', padding: '0px 40px 120px 40px', lineHeight: '1.6', }} >
              Test 2 Recall - Completed.  <br /> [Click start or press ENTER to begin Test 3 Recall]
            </div>
            <div>
              <button onClick={handleStartTest7}>Start</button>
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

export default CognitiveTest2Recallv2





