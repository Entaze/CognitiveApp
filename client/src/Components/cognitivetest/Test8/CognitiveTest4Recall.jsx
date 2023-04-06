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
  paddingBottom: '10%',
  flexDirection: 'column',
}

const centerScreen2 = {
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


function CognitiveTest4Recall () {
  const token = window.localStorage.getItem('token');
  const { userProfile, cognitiveTest, setCognitiveTest } = useMainContext();
  const [user, setUser] = useState(false);
  const [userAuth, setUserAuth] = useState(false);

  const userloggedIn = JSON.parse(window.localStorage.getItem('userLoggedIn'));

  const [firstPage, setFirstPage] = useState(true);
  const [secondPage, setSecondPage] = useState(false);
  const [thirdPage, setThirdPage] = useState(false);
  const [fourthPage, setFourthPage] = useState(false);
  const [fifthPage, setFifthPage] = useState(false);
  const [start0BackTest, setStart0BackTest] = useState(false);
  const [start1BackTest, setStart1BackTest] = useState(false);
  const [start2BackTest, setStart2BackTest] = useState(false);
  const [test01Letter, setTest01Letter] = useState(['J', 'S', 'B', 'T', 'G', 'N', 'G', 'Q', 'Z', 'K', 'B', 'Z', 'K', 'T', 'Q', 'T', 'G', 'Z', 'Z', 'G', 'Z', 'Z', 'B', 'Z', 'Z', 'S', 'Z', 'Z', 'Z', 'B', 'B', 'Z', 'N', 'J', 'Z', 'V', 'V',  ]); //
  const [test02Letter, setTest02Letter] = useState(['X', 'P', 'K', 'R', 'D', 'T', 'X', 'V', 'V', 'P', 'J', 'J', 'J', 'P', 'P', 'H', 'N', 'H', 'H', 'N', 'B', 'B', 'N', 'N', 'T', 'M', 'T', 'T', 'J', 'P', 'P', 'P', 'J', 'J', 'H', 'H',  ]); //
  const [test03Letter, setTest03Letter] = useState(['Q', 'N', 'S', 'V', 'B', 'H', 'B', 'H', 'P', 'X', 'P', 'C', 'X', 'C', 'M', 'K', 'M', 'K', 'M', 'K', 'V', 'S', 'F', 'V', 'V', 'S', 'F', 'V', 'V', 'S', 'F', 'F', 'N', 'C', 'N', 'C', 'M', 'J', 'M', 'J', ]); //
  const [flashLetter, setFlashLetter] = useState(false);
  const [flash, setFlash] = useState(false);
  const [letters, setLetters] = useState('');
  const [letter, setLetter] = useState('');
  const [lttr, setLttr]  = useState(null);
  const [plusSign, setPlusSign] = useState(false);
  const [countLetter0, setCountLetter0] = useState(0);
  const [countLetter01, setCountLetter01] = useState(0);
  const [countLetter02, setCountLetter02] = useState(0);
  const [AxiosSend0, setAxiosSend0] = useState(false);
  const [AxiosSend02, setAxiosSend02] = useState(false);
  const [AxiosSend03, setAxiosSend03] = useState(false);
  const [testBegin, setTestBegin] = useState(false);
  const [testBegin1, setTestBegin1] = useState(false);
  const [testBegin2, setTestBegin2] = useState(false);
  const [testBegin3, setTestBegin3] = useState(false);
  const [response, setResponse] = useState('')
  const [mainTestBegin1, setMainTestBegin1] = useState(false);
  const [thirteenthPage, setThirteenthPage] = useState(false);
  const [fourteenthPage, setFourteenthPage] = useState(false);
  const [fourteenthPage2, setFourteenthPage2] = useState(false);
  const [fifteenthPage, setFifteenthPage] = useState(false);
  const [sixteenthPage, setSixteenthPage] = useState(false);
  const [seventeenthPage, setSeventeenthPage] = useState(false);
  const [test8End, setTest8End] = useState(false);
  const [userId, setUserId] = useState(null);
  const [nav, setNav] = useState(false);
  const classes = useStyles();
  const navigate = useNavigate();
  const [keyClicked, SetKeyClicked] = useState('');

  let count0 = countLetter0;
  let count01 = countLetter01;
  let count02 = countLetter02;



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
      if (userloggedIn._id) {
        setUserId(userloggedIn._id);
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


//Listen to keyboard events
useEffect(() => {
  document.addEventListener('keydown', detectSpaceBar, true)
}, [])

const detectSpaceBar = (e) => {
  SetKeyClicked(e.key);
}

//Check completion
useEffect(()=>{
  if (userAuth) {
    if (!userProfile.test4CompletionRecallSctn1) {
      setMainTestBegin1(true);
      setFourteenthPage(true);
    } else if (!userProfile.test4CompletionRecallSctn2) {
      setMainTestBegin1(true)
      setFifteenthPage(true);
    } else if (!userProfile.test4CompletionRecallSctn3) {
      setMainTestBegin1(true)
      setSixteenthPage(true);
    } else {
      setMainTestBegin1(true);
      setTest8End(true)
    }
  }
 },[userAuth ])


useEffect(()=>{
  setLetter(letters)
}, [letters])

useEffect(()=>{
  if (flashLetter) {
    setFlash(true)
  }
}, [flashLetter])

// Detect page navigations with 'enter' key
useEffect(()=>{
  if (keyClicked === 'Enter' && fourteenthPage) {
    SetKeyClicked(null)
    setFourteenthPage(false);
    setFourteenthPage2(true);
  }
  if (keyClicked === 'Enter' && fourteenthPage2) {
    SetKeyClicked(null)
    setFourteenthPage2(false);
    setMainTestBegin1(false)
    setStart0BackTest(true)
  }
  if (keyClicked === 'Enter' && fifteenthPage) {
     SetKeyClicked(null)
     setFifteenthPage(false)
     setMainTestBegin1(false)
     setStart1BackTest(true)
  }
  if (keyClicked === 'Enter' && sixteenthPage) {
     SetKeyClicked(null)
     setSixteenthPage(false)
     setMainTestBegin1(false)
     setStart2BackTest(true)
  }
  if (keyClicked === 'Enter' && test8End) {
    // let complete = { _id: userId, test4CompletionRecall: true }
    // axios.post('/api/user', complete)
    // .then((res)=>{
    //   navigate('/test-end')
    // })
    // .catch((err)=>{
    //   console.log({err})
    // })
    handleSecondSessionEnd();
  }
  // if (keyClicked === '1') {
  //   setResponse(keyClicked)
  // } else if (keyClicked === '2') {
  //   setResponse(keyClicked)
  // } else {
  //   setResponse('')
  // }
}, [keyClicked])


// 0-Back Test
useEffect(()=>{
  if (start0BackTest) {
    setStart0BackTest(false)
    if (count0 < test01Letter.length + 1) {
      setLetters(test01Letter[count0]);
      setLttr(test01Letter[count0 - 1]);
      setTestBegin1(true)
      setPlusSign(true)
      setTimeout(()=>{
        setAxiosSend0(true);
        setPlusSign(false)
        setFlashLetter(true)
        count0 = countLetter0 + 1;
        setCountLetter0(count0);
      }, 3500)
      setTimeout(()=>{
        setFlashLetter(false)
        setFlash(false)
        setStart0BackTest(true)
      }, 4000)
      if (count0 === test01Letter.length ) {
        setPlusSign(true)
        setTimeout(()=>{
          setPlusSign(false)
          setAxiosSend0(true);
        }, 7500)
      }
    }
  }
}, [start0BackTest, plusSign])

useEffect(()=>{
  let keyC;
  if (AxiosSend0 && plusSign && (count0 <= test01Letter.length)) {
      keyC = keyClicked;
      const key = 'Letter'+ count0;
      const obj = {
        [`${key}`]: {letter: lttr, response: keyC}
      }
      const param = {_id: userProfile._id, obj};
      if (count0 > 0) {
        axios.post('/api/test4recallsection1', param)
        .then((res)=>{
          // console.log('Res data :', res.data.Test4RecallSection1)
        // setLttr(null)
          if (count0 === test01Letter.length) {
            let complete = {_id: userProfile._id, test4CompletionRecallSctn1: true};
            // console.log('Complete :', complete)
            axios.post('/api/user', complete)
            .then((res) => {
              setTimeout(()=>{
                setTestBegin1(false)
    // setFourteenthPage2(false);
                setMainTestBegin1(true)
                setFifteenthPage(true)
              }, 3700)
            })
          }
        })
      }
      setAxiosSend0(false)
      SetKeyClicked('')
      // setResponse('')
  }
},[AxiosSend0, plusSign, count0, flash, letter, lttr])

// 1-Back Test
useEffect(()=>{
  if (start1BackTest) {
    setStart1BackTest(false)
    if (count01 < test02Letter.length + 1) {
      setLetters(test02Letter[count01]);
      setLttr(test02Letter[count01 - 1]);
      setTestBegin1(true)
      setPlusSign(true)
      //Turn plus sign off and show letter after 3.5 secs
      setTimeout(()=>{
        setAxiosSend02(true);
        setPlusSign(false)
        setFlashLetter(true)
        count01 = countLetter01 + 1;
        setCountLetter01(count01);
      }, 3500)
      //Turn letter off after 0.5 secs and ...
      setTimeout(()=>{
        setFlashLetter(false)
        setFlash(false)
        setStart1BackTest(true)
      }, 4000)
      if (count01 === test02Letter.length ) {
        setPlusSign(true)
        setTimeout(()=>{
          setPlusSign(false)
          setAxiosSend02(true);
        }, 7500)
      }
    }
  }
}, [start1BackTest, plusSign])

useEffect(()=>{
  let keyC;
  if (AxiosSend02 && plusSign && count01 <= test02Letter.length) {
      keyC = keyClicked;
      const key = 'Letter'+ count01;
      const obj = {
        [`${key}`]: {letter: lttr, response: keyC}
      }
      const param = {_id: userProfile._id, obj};
      if (count01 > 0) {
        axios.post('/api/test4recallsection2', param)
        .then((res)=>{
          // console.log('Res data :', res.data.Test4Section1)
          if (count01 === test02Letter.length) {
            let complete = {_id: userProfile._id, test4CompletionRecallSctn2: true};
            // console.log('Complete :', complete)
            axios.post('/api/user', complete)
            .then((res) => {
              setTimeout(()=>{
                setTestBegin1(false)
                setMainTestBegin1(true)
                setSixteenthPage(true)
              }, 3700)
            })
          }
        })
      }
      setAxiosSend02(false)
      SetKeyClicked('')
      // setResponse('')
  }
},[AxiosSend02, plusSign, count01, flash, letter, lttr])

// 2-Back Test
useEffect(()=>{
  if (start2BackTest) {
    setStart2BackTest(false)
    if (count02 < test03Letter.length + 1) {
      setLetters(test03Letter[count02]);
      setLttr(test03Letter[count02 - 1]);
      setTestBegin1(true)
      setPlusSign(true)
      setTimeout(()=>{
        setAxiosSend03(true);
        setPlusSign(false)
        setFlashLetter(true)
        count02 = countLetter02 + 1;
        setCountLetter02(count02);
      }, 3500)
      setTimeout(()=>{
        setFlashLetter(false)
        setFlash(false)
        setStart2BackTest(true)
      }, 4000)
      if (count02 === test03Letter.length ) {
        setPlusSign(true)
        setTimeout(()=>{
          setPlusSign(false)
          setAxiosSend03(true);
        }, 7500)
      }
    }
  }
}, [start2BackTest, plusSign])

useEffect(()=>{
  let keyC;
  if (AxiosSend03 && plusSign && count02 <= test03Letter.length) {
      keyC = keyClicked;
      const key = 'Letter'+ count02;
      const obj = {
        [`${key}`]: {letter: lttr, response: keyC}
      }
      const param = {_id: userProfile._id, obj};
      if (count02 > 0) {
        axios.post('/api/test4recallsection3', param)
        .then((res)=>{
          if (count02 === test03Letter.length) {
            const now = moment();
            const timeC = now._d;
            let complete = {_id: userProfile._id, test4CompletionRecallSctn3: true, Test4RecallCompletionTime: timeC };
            axios.post('/api/user', complete)
            .then((res) => {
              setTimeout(()=>{
                setTestBegin1(false)
                setMainTestBegin1(true)
                setTest8End(true)
              }, 3700)
            })
            .catch((err)=>{

            })
          }
        })
      }
      setAxiosSend03(false)
      SetKeyClicked('')
      setResponse('')
  }
},[AxiosSend03, plusSign, count02, flash, letter])

const startTest13 = () => {
  setThirteenthPage(false)
  setFourteenthPage(true)
}
const startTest14 = () => {
  // setFourteenthPage(false)
  setFourteenthPage2(false);
  setMainTestBegin1(false)
  setStart0BackTest(true)
}
const startTest15 = () => {
  setFifteenthPage(false)
  setMainTestBegin1(false)
  setStart1BackTest(true)
}
const startTest16 = () => {
  setSixteenthPage(false)
  setMainTestBegin1(false)
  setStart2BackTest(true)
}

const handleSecondSessionEnd = () => {
  let complete = { _id: userId, test4CompletionRecall: true, email: userProfile.email, name: userProfile.name }
  axios.post('/api/user', complete)
  .then((res)=>{
    navigate('/test-end')
  })
  .catch((err)=>{
    console.log({err})
  })
}

const startFourteen2 = () => {
  setFourteenthPage(false);
  setFourteenthPage2(true);
}

  return (
    <>
    {userAuth ?
    <>
      <NavigationBar />

      {testBegin1 ?
        <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center', height: '100vh', maxWidth: '100vw', background: '#fff', color: '#fff', top: 0, bottom: 0, }} >
           {plusSign ?
            <img
              style={ {width:'190px', height: '140px' } }
              src="https://res.cloudinary.com/entazesoftware/image/upload/v1676294060/blackPlusSign_oyeqmw.webp"
            />
           : null}
          {flash ?
            <Typography style={{ fontSize: 90, fontWeight: 700, textAlign: 'center', fontFamily:'Arial Helvetica', color: '#000000' }} >
              {letter}
            </Typography>
          : null}
        </div>
      : null}
      {mainTestBegin1 ?
        <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center', height: '100vh', maxWidth: '100vw', background: '#000', color: '#fff', top: 0, bottom: 0, }} >
          {fourteenthPage ?
          <>
          <div style={centerScreen2} >
            <h1 style={{ color: '#e67373', fontSize: 50, }} >TEST 4</h1>
            <div style={{ fontSize: 35, fontWeight: 600, display: 'flex', padding: '80px 40px 60px 40px', lineHeight: '1.2', }} >
                  This task involves viewing single letters presented one at a time. <br />
                  Your job is to determine whether or not the letter currently on the screen is a target or a non-target. <br />
                  If the letter on the screen is a target you should press 1.<br />
                  If the letter on the screen is a non-target you should press 2.<br /> <br />

                 <br /> [Press ENTER or click next to continue.]
            </div>
            <div>
              <button onClick={startFourteen2}>Next</button>
            </div>
          </div>
          </>
          :
          null}

       {fourteenthPage2 ?
          <>
          <div style={centerScreen2} >
            <h1 style={{ color: '#e67373', fontSize: 50, }} >TEST 4 - ZERO BACK RECALL</h1>
            <div style={{ fontSize: 35, fontWeight: 700, display: 'flex', padding: '80px 40px 60px 40px', lineHeight: '1.2', }} >

                  In this first condition the letter 'Z' is the target and all other letters are non-targets. So if you see a Z on the screen you should press 1 (target), and if you see any other letter you should press 2 (non-target).<br /> <br />
                  [Press ENTER or click start to begin test.]
            </div>
            <div>
              <button onClick={startTest14}>Start</button>
            </div>
          </div>
          </>
          :
          null}

          {fifteenthPage ?
          <>
          <div style={centerScreen} >
            <h1 style={{ color: '#e67373', fontSize: 50, }} >TEST 4 - ONE BACK RECALL</h1>
            <div style={{ fontSize: 35, fontWeight: 700, display: 'flex', padding: '110px 40px 120px 40px', lineHeight: '1.6', }} >
            In this next condition a letter is a target if it is the same as the letter that came one before it. Remember to press 1 if the letter is a target and 2 if the letter is not a target.<br /><br />
            [Press ENTER or click start to begin test.]
            </div>
            <div>
              <button onClick={startTest15}>Start</button>
            </div>
          </div>
          </>
          :
          null}
          {sixteenthPage ?
          <>
          <div style={centerScreen} >
            <h1 style={{ color: '#e67373', fontSize: 50, }} >TEST 4 - TWO BACK RECALL</h1>
            <div style={{ fontSize: 35, fontWeight: 700, display: 'flex', padding: '110px 40px 120px 40px', lineHeight: '1.6', }} >
            In this last condition a letter is a target if it is the same as the letter that came two before it. Remember to press 1 if the letter is a target and 2 if the letter is not a target.<br /><br />
            [Press ENTER or click start to begin test.]
            </div>
            <div>
              <button onClick={startTest16}>Start</button>
            </div>
          </div>
          </>
          :
          null}
        {test8End ?
        <>
          <div style={centerScreen} >
          <div style={{ fontSize: 35, fontWeight: 700, display: 'flex', padding: '0px 40px 120px 40px', lineHeight: '1.6', }} >
            Test 4 Recall - N BACK Completed. <br />
          </div>
          <div>
            <button onClick={handleSecondSessionEnd}>
              End Session
            </button>
          </div>
          </div>
        </>
        :
        null}
       </div>
    :null}
    </>
    : null}
    </>
  )
}

export default CognitiveTest4Recall





