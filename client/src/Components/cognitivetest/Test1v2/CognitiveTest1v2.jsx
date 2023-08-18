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

const swipeStyle = {
  position: "absolute",
  display: "inline-block",
  zIndex: 9998
}

const cardStyle = {
  position: "absolute",
  backgroundColor: "#ff9800",
  width: 330,
  maxWidth: "85vw",
  height: "60vh",
  borderRadius: '10px',
  'backgroundSize': "cover",
  boxShadow: '0px 0px 5px 0px rgba(0,0,0,0.05)',
  'backgroundPosition': "center"
}

const cardContainer = {
  textAlign:'center',
  width: '90vw',
  maxWidth: '330px',
  height: '70vh',
  marginTop: '5vh',
  marginBottom: '3vh'
}

const fontStyle = {
    position: "absolute",
    color: "#fff",
    fontSize: "20px",
    fontWeight:700,
    margin: "5px",
    marginLeft: "20px"
}

const smallFontStyle = {
  color: "#fff",
  textAlign: "right",
  fontSize: "13px",
  fontWeight: 300,
  marginRight: "20px",
  margin: "10px"
}

const cardWrapper = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center'
}

const modalStyle = {
  position: 'absolute',
  display: 'flex',
  top: '50%',
  left: '50%',
  width: '70vw',
  maxWidth: 330,
  height: "60vh",
  transform: 'translate(-50%, -50%)',
  borderRadius: 3,
  bgcolor: 'background.paper',
  boxShadow: 24,
  alignItems: 'center',
  flexDirection: 'column'
};

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

const button = {
  width: '80px',
  backgroundColor: '#5f7182',
  color: '#fafafa',
  height: '50px',
  marginLeft: '15px'
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

const buttonInfo2 = {
  fontSize: '15px',
  fontStyle: 'italic',
  color: 'rgba(200, 200, 200, 0.99)',
  fontWeight: '500',
  textDecoration: 'none',
  float: 'left',
  clear: 'both',
  align: 'center',
  display: 'block',
  marginLeft: '19px'
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

const formInput = {
  boxSizing: 'border-box',
  height: '39px',
  width: '426px',
  border: '1px solid #E6E6E6',
  borderRadius: '10px',
  margin: '15px 15px 15px 15px',
  textIndent: '20px',
}

const useStyles = makeStyles({
  root: {
    borderWidth: "20px",
    borderColor: "rgba(0,0,0,0.2)",
    borderStyle: "solid"
  }
});

function Cognitivetestv2 () {
  const token = window.localStorage.getItem('token');
  const { userProfile, cognitiveTest, setCognitiveTest } = useMainContext();
  const [user, setUser] = useState(false);
  const [userAuth, setUserAuth] = useState(false);

  const userloggedIn = JSON.parse(window.localStorage.getItem('userLoggedIn'));
  const [countdownComplete, setCountdownComplete] = useState(false);
  const [userId, setUserId] = useState(null);
  const [testListATrials, setTestListATrials] = useState(null);
  const [testListBTrials, setTestListBTrials] = useState(1);
  const [firstPage, setFirstPage] = useState(false);
  const [startTest, setStartTest] = useState(false);
  const [startTestListB, setStartTestListB] = useState(false);
  const [startTestListARecall, setStartTestListARecall] = useState(false);
  const [tests, setTests] = useState({});
  const [wordsArr, setWordsArr] = useState(['Pipe', 'Wall', 'Alarm', 'Sugar', 'Student', 'Mother', 'Star', 'Painting', 'Bag', 'Wheat', 'Mouth', 'Chicken', 'Sound', 'Door', 'Stream', '' ]);
  const [listB, setListB] = useState(['Bench', 'Officer', 'Cage', 'Sock', 'Fridge', 'Cliff', 'Bottle', 'Soap', 'Sky', 'Ship', 'Goat', 'Bullet', 'Paper', 'Chapel', 'Crab', ]);
  const [listBStart, setListBStart] = useState(false);
  const [listAReEntry, setListAReEntry] = useState(false);
  const [test1End, setTest1End] = useState(false);
  const [word, setWord] = useState();
  const [wordInput, setWordInput] = useState();
  const [wordErr, setWordErr] = useState({});
  const [wordsEnteredListA, SetWordsEnteredListA] = useState([]);
  const [nav, setNav] = useState(false);
  const [beginSec1, setBeginSec1] = useState(false);
  const [IntroStep, setIntroStep] = useState(false);
  const [times, setTimes] = useState(0)
  const [completionTime, setCompletionTime] = useState(null);

  const [wordRecall, setWordRecall] = useState(false);
  const [wrdRecall, setwrdRecall] = useState(false);
  const [listAReEntryModal, setListAReEntryModal] = useState(false);
  const [formState, setFormState] = useState(false);
  const classes = useStyles();
  const [repeatListA, setRepeatListA] = useState(false);
  const { register, handleSubmit, reset } = useForm({
    mode: 'onSubmit',
    reValidateMode: 'onChange',
    defaultValues: {},
    resolver: undefined,
    context: undefined,
    criteriaMode: "firstError",
    shouldFocusError: true,
    shouldUnregister: false,
    shouldUseNativeValidation: false,
    delayError: undefined
  });
  /* -------------------- */
  const [secondStep, setSecondStep] = useState(false);
  const [WordFlash, setWordFlash] = useState(false);
  /* -------------------- */
  const [data, setData] = useState([]);
  const [val, setVal] = useState();
  const [countModal, setCountModal] = useState(0);
  const navigate = useNavigate();
  const [keyClicked, SetKeyClicked] = useState('');
  const handleRegistration = (data) => { setData(data); handleModalAppear(); reset();  }
  const buttonEntry = countModal < wordsArr.length + 15 ? 'Enter' : 'Submit Test';
  const wordCount = countModal + 1;

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
      if (userProfile) {
        setUserId(userProfile._id);
      } else if (userloggedIn) {
        setUserId(userloggedIn._id);
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

 useEffect(()=>{
   if (userId) {
    axios.get('/api/user', {params: {_id: userId}})
    .then((res)=>{
      setTestListATrials(res.data.user.Test1Trackerv2)
      // console.log('Test1Trackerv2 :', res.data.user.Test1Trackerv2)
      if (res.data.user.Test1Trackerv2 < 6) {
        setBeginSec1(true)
        setFirstPage(true)
        const xTimes = 6 - res.data.user.Test1Trackerv2;
        setTimes(xTimes)
        // setIntroStep(true)
      }
    })
    .catch((err)=>{
      console.log('err :', err)
    })
   }
 }, [userAuth, userId])

//LOOPING THROUGH LIST A
useEffect(() => {
  if (startTest) {
    setWordFlash(true);
    for (let i = 0; i < wordsArr.length; i++) {
      (function(ind) {
          setTimeout(function(){
              setWord(wordsArr[ind]);
              if (ind === wordsArr.length - 1) {
                setTimeout(()=>{
                  setWord();
                  setWordFlash(false);
                  setStartTest(false);
                  setSecondStep(true);
                }, 1300)
              }
          }, 1000 + (1000 * ind));
      })(i);
    }
  }
}, [startTest])

//LOOPING THROUGH LIST B
useEffect(() => {
  if (startTestListB && !startTest) {
    setWordFlash(true);
    for (let j = 0; j < listB.length; j++) {
      (function(ind2) {
          setTimeout(function(){
              setWord(listB[ind2]);
              if (ind2 === listB.length - 1) {
                setTimeout(()=>{
                  setWord();
                  setWordFlash(false);
                  setStartTest(false);
                  setSecondStep(true);
                }, 1300)
              }
          }, 1000 + (1000 * ind2));
      })(j);
    }
  }
}, [startTestListB, startTest])

//RECALL LIST A
useEffect(() => {
  //CALL FORM AND START ENTERING ALL THE WORDS FROM LIST A
  if (startTestListARecall) {
    setFormState(true);
  }
}, [startTestListARecall])

const handleStartTest = (e) => {
  e.preventDefault();
  setFirstPage(false);
  setStartTest(true);
}

const handleStartListB = (e) => {
  e.preventDefault();
  setListBStart(false);
  setWordRecall(false);
  setBeginSec1(true)
  setStartTestListB(true);
}

const handleListAReentry = (e) => {
  setListAReEntry(false);
  setStartTestListARecall(false);
  setBeginSec1(true)
  setStartTestListARecall(true);
}

const handleButtonClick = (e) => {
  e.preventDefault();
  setCountModal(0);
  SetWordsEnteredListA([]);
  setSecondStep(false);
  setFormState(true);
}

useEffect(()=>{
  if (wordRecall && !listAReEntry) {
    setwrdRecall(true)
  } else {
    setwrdRecall(false)
  }
}, [wordRecall])

const toggleFormState = () => {
  setFormState(true);
}

//Modal re-appear for both word arrays
const handleModalAppear = (e) => {
  setVal();
  const count = (countModal + 1);
  setCountModal(count);
  setFormState(false);
  if (count < wordsArr.length + 15 ) {
    setTimeout(toggleFormState, 300);
  }
};

useEffect(()=> {
  let words = [...wordsEnteredListA, data.word];
  let result = words.filter(function( elem ) {
    return elem !== undefined;
  });
  SetWordsEnteredListA(result);
}, [data])

const handlePostWords = () => {
  setFormState(false);
  const date = new Date();
  let param;
  let countUp = testListATrials + 1;
  setTestListATrials(countUp);
  if (testListATrials === 1) {
    setRepeatListA(true);
    param = {id: userId, _37ListAEntries_Trial1v2: wordsEnteredListA, time: date };
  }
  if (testListATrials === 2) {
    setRepeatListA(true);
    param = {id: userId, _38ListAEntries_Trial2v2: wordsEnteredListA, time: date };
  }
  if (testListATrials === 3) {
    setRepeatListA(true);
    param = {id: userId, _39ListAEntries_Trial3v2: wordsEnteredListA, time: date };
  }
  if (testListATrials === 4) {
    setRepeatListA(true);
    param = {id: userId, _40ListAEntries_Trial4v2: wordsEnteredListA, time: date };
  }
  if (testListATrials === 5) {
    setwrdRecall(false);
    setRepeatListA(true);
    setListBStart(true);
    param = {id: userId, _41ListAEntries_Trial5v2: wordsEnteredListA, time: date };
    setCountModal(0);
  }
  if (testListATrials === 6) {
    setwrdRecall(false);
    setRepeatListA(true);
    param = {id: userId, _42ListBEntriesv2: wordsEnteredListA, time: date};
    setCountModal(0);
  }
  if (testListATrials === 7) {
    param = {id: userId, _43ListAEntriesRecallv2: wordsEnteredListA, time: date};
    setCountModal(0);
  }

  if (testListATrials <= 6) {
    axios.post('/api/cognitivetest', param)
    .then((res) => {
      const cnt = testListATrials + 1;
      const param2 = {_id: userProfile._id, Test1Trackerv2: cnt};
      axios.post('/api/user', param2)
      .then((res)=>{
        if (testListATrials === 6) {
          setListAReEntry(true);
        }
      })
      .catch((err)=>{

      })
    })
  } else if (testListATrials === 7) {
    axios.post('/api/cognitivetest', param)
    .then((res) => {
      let complete = {_id: userId, test1Completionv2: true};
      axios.post('/api/user', complete)
      .then((result) => {
        setTest1End(true)
      })
    })
  }
}

//Handle next trial when all modal entries entered
useEffect(()=> {
  if (countModal === wordsArr.length + 15 - 1) {
    const modalCountdown = testListATrials;
    modalCountdown > 0 ? setTestListATrials(modalCountdown) : null;
  }
}, [countModal])

//Listen to keyboard events
useEffect(() => {
  document.addEventListener('keydown', detectSpaceBar, true)
}, [])

const detectSpaceBar = (e) => {
  SetKeyClicked(e.key);
}

const handleRepeatListA = (e) => {
  e.preventDefault();
  setRepeatListA(false);
  setStartTest(true);
}

const handleStartTest2 = (e) => {
  e.preventDefault();
  setListAReEntry(false);
  setFirstPage(false);
  if (!listAReEntry) {
    navigate('/cognitivetest2v2');
  }
}

const onSubmitWord = (data) => {
  const numberRegEx = /\-?\d*\.?\d{1,2}/;
  const input = data.word.trim();
  if ((numberRegEx.test(String(data.word).toLowerCase()) || typeof input !== 'string' || input === '') && !wordInput) {
    setWordErr({error: 'Enter a valid word!'});
  } else {
    if (!data.word) {
     let data2 = { word: wordInput }
     setData(data2);
    } else {
     setData(data);
    }
    handleModalAppear(); reset();
    setWordInput();
  }
}

useEffect(() => {
  if (wordInput !== '') {
    setWordErr({});
  }
}, [wordInput])

const handleInput = (e) => {
  setWordInput(e.target.value);
}

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

useEffect(() => {
  if (completionTime) {
      const now = moment();
      const then = moment(completionTime, 'YYYY/MM/DD hh:mm:ss').add(144, 'hours');  //144
      const expiryDate = moment(completionTime, 'YYYY/MM/DD hh:mm:ss').add(720, 'hours'); //120

      let expired = moment.duration(expiryDate.diff(now))
      let duration = moment.duration(then.diff(now))
      let hours = duration.asHours()
      let hours2 = expired.asHours()
      let mins2 = expired.asMinutes()
      let secs2 = expired.asSeconds()
      if (hours2 <= 0 && mins2 <= 0 && secs2 <= 0) {
        navigate('/expired-test')
      } else if (hours >= 0) {
        navigate('/countdown2')
      } else {
        setCountdownComplete(true);
      }
  }
}, [completionTime]);

useEffect(() => {
  if (testListATrials !== null) {
    if(testListATrials === 6) {
      setBeginSec1(false)
      setFirstPage(false)
      setListBStart(true);
    }
    if (testListATrials === 7) {
      setBeginSec1(false)
      setFirstPage(false)
      setListAReEntry(true);
    }
    if (testListATrials === 8) {
      setBeginSec1(false)
      setFirstPage(false)
      setListAReEntry(false);
      setTest1End(true);
    }
  }
 }, [testListATrials])

 return (
  <>
  {userAuth && countdownComplete ?
  <>
    <NavigationBar />
    <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center', height: '100vh', maxWidth: '100vw', background: '#000', color: '#fff', top: 0, bottom: 0, }} >
    {beginSec1 ?
    <>
      {firstPage && testListATrials ?
       <>
          <div style={centerScreen} >
             <h1 style={{ color: '#e67373', fontSize: 50, }} >TEST 1</h1>
             <div style={{ fontSize: 35, fontWeight: 700, display: 'flex', padding: '80px 40px 120px 40px', lineHeight: '1.6', }} >
             You will be shown a list of 15 words. This same list will be shown to you {times} times. Each time after you see the list you will be asked to type all the words you remember from the list.
             <br /><br /> [Click start to continue.]
            </div>
            <div>
              <button onClick={handleStartTest} >Start</button>
            </div>
          </div>
        </>
      :
      null}

      {WordFlash ?
        <Typography style={{ fontSize: 60, fontWeight: 700, textAlign: 'center', fontFamily:'Arial' }} >{word}</Typography>
      : null}

    {secondStep ?
      <>
        <div style={centerScreen} >
          <div style={{  fontSize: 35, fontWeight: 700, display: 'flex', padding: '100px 40px 190px 100px', }} >Click on button to enter as many words as you can remember...</div>
          <div>
              <button onClick={handleButtonClick}>Go..</button>
          </div>
        </div>
      </>
    :
    null}

    {formState ?
    <>
      <div style={centerScreen} >
      <div style={{ fontSize: 40, fontWeight: 700}} >
        <Dialog open PaperProps={{ classes: { root: classes.root } }} >
          <DialogContent >
            <div>
              <form onSubmit={handleSubmit(onSubmitWord)} autoComplete='off' >
                {countModal < wordsArr.length + 15 - 1 ?
                  <>
                    <div style={formTitle}>ENTER WORD {wordCount}</div>
                    <div style={{ position: 'relative', display: 'inline-block', paddingBottom: '85px' }}>
                      <input name="name" {...register("word")} autoFocus placeholder="Word.." style={formInput} onChange={handleInput} />
                      <Button  style={button} onClick={handleSubmit} type='submit' >
                        {buttonEntry}
                      </Button>
                      <div style={buttonInfo1} >
                      To submit a word, press or click ENTER!
                      </div>
                    </div>
                    <Typography color = '#bf1650' fontFamily = 'Segoe UI, Roboto, Oxygen, Ubuntu' marginLeft = '19px' fontSize = '14px' fontStyle = 'italic' >{wordErr.error}</Typography>
                  </>
                  : null }
                  <DialogActions>
                    <Button  style={submitButton} onClick={handlePostWords} type='submit' disablehover='true' >
                    Submit Test
                    </Button>
                  </DialogActions>
                  <div style={buttonImportantInfo}>
                    Do not hit the submit button until you have finished entering all the words you can remember!
                  </div>

              </form>
            </div>
          </DialogContent>
        </Dialog>
      </div>
      </div>
    </>
    :
    null}

    {(repeatListA && testListATrials <= 5 ) ?
      <>
      <div style={{  fontSize: 35, fontWeight: 700, display: 'flex', padding: '40px 40px 120px 40px', }} >
        Click start to begin trial {testListATrials}...
      </div>
      <div>
        <button onClick={handleRepeatListA}>Start</button>
      </div>
      </>
    :
    null}
    </>
  : null}

    {/** ------- LIST B ------- **/}
    {listBStart ?
      <>
        <div style={centerScreen} >
          <div style={{ fontSize: 35, fontWeight: 700, display: 'flex', padding: '0px 40px 120px 40px', lineHeight: '1.6', }} >
          You will now be shown a different list of words. Try and remember all the words from this new list.  <br /><br /> [Click start to continue.]
          </div>
        <div>
        <button onClick={handleStartListB}>Start</button>
      </div>
      </div>
      </>
      :
    null}

      {listAReEntry && !test1End ?
        <>
        <div style={centerScreen} >
          <div style={{ fontSize: 35, fontWeight: 700, display: 'flex', padding: '0px 40px 120px 40px', lineHeight: '1.6', }} >
          Now, please enter all the words you remember from the original list you saw 5 times.  <br /><br /> [Click start to continue.]
          </div>
        <div>
          <button onClick={handleListAReentry}>Start</button>
        </div>
        </div>
        </>
      : null}

      {test1End ?
        <>
          <div style={centerScreen} >
          <div style={{ fontSize: 35, fontWeight: 700, display: 'flex', padding: '0px 40px 120px 40px', lineHeight: '1.6', }} >
            Test 1 - Verbal Learning Test Completed.  <br /> [Click start to begin Test 2.]
          </div>
          <div>
            <button onClick={handleStartTest2}>Start</button>
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

export default Cognitivetestv2