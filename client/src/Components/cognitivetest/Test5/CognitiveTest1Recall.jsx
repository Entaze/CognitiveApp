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
  width: '426px',
  border: '1px solid #E6E6E6',
  borderRadius: '10px',
  margin: '15px 15px 15px 15px',
  textIndent: '20px',
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


function CognitiveTest1Recall () {
  const token = window.localStorage.getItem('token');
  const { userProfile, cognitiveTest, setCognitiveTest } = useMainContext();
  const [user, setUser] = useState(false);
  const [userAuth, setUserAuth] = useState(false);

  const userloggedIn = JSON.parse(window.localStorage.getItem('userLoggedIn'));

  const [firstPage, setFirstPage] = useState(false);
  const [secondPage, setSecondPage] = useState(false);
  const [secondPageIntro, setSecondPageIntro] = useState(false);


  const [completionTime, setCompletionTime] = useState(null);
  const [countdownComplete, setCountdownComplete] = useState(false);
  const [hours, setHours] = useState(0);
	const [minutes, setMinutes] = useState(0);
	const [seconds, setSeconds] = useState(0);
  const [formState, setFormState] = useState(false);
  const [wordErr, setWordErr] = useState({});
  const [data, setData] = useState([]);
  const handleRegistration = (data) => { setData(data); handleModalAppear(); reset();  }
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
  const [word, setWord] = useState('');
  const [wordInput, setWordInput] = useState();
  const [countModal, setCountModal] = useState(0);
  const [countModal2, setCountModal2] = useState(0);
  const [wordsArr, setWordsArr] = useState(['Drum', 'Curtain', 'Bell', 'Coffee', 'School', 'Parent', 'Moon', 'Garden', 'Hat', 'Farmer', 'Nose', 'Turkey', 'Colour', 'House', 'River', '', '' ]);

  const [wordsArr2, setWordsArr2] = useState(['Bell', 'Window', 'Hat', 'Barn', 'Ranger', 'Nose', 'Weather', 'School', 'Hand', 'Pencil', 'Home', 'Fish', 'Moon', 'Tree', 'Balloon', 'Bird', 'Mountain', 'Coffee', 'Mouse', 'River', 'Towel', 'Curtain', 'Flower', 'Colour', 'Desk', 'Gun', 'Crayon', 'Church', 'Turkey', 'Fountain', 'Boat', 'Hot', 'Parent', 'Water', 'Farmer', 'Rose', 'Cloud', 'House', 'Stranger', 'Garden', 'Glasses', 'Stocking', 'Shoe', 'Teacher', 'Stove', 'Nest', 'Children', 'Drum', 'Toffee', 'Lamb' ]) //
  const [flashWords, setFlashWords] = useState(false);
  const [entry, setEntry] = useState(false);
  const wordCount = countModal + 1;
  const buttonEntry = countModal < wordsArr.length + 15 - 2 ? 'Enter' : 'Submit Test';
  const [val, setVal] = useState();
  const [repeatListA, setRepeatListA] = useState(false);
  const [testListATrials, setTestListATrials] = useState(1);
  const [wordsEnteredListA, SetWordsEnteredListA] = useState([]);
  const [userResponse, setUserResponse] = useState(false);
  const [test5End, setTest5End] = useState(false);


  const [userId, setUserId] = useState(null);
  const [nav, setNav] = useState(false);
  const classes = useStyles();
  const navigate = useNavigate();
  const [keyClicked, SetKeyClicked] = useState('');

  let countWrds = countModal2;

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

 useEffect(()=>{
  if (userAuth) {
    if (userProfile.test1CompletionRecallSctn2) {
      setTest5End(true);
    } else {
      setFirstPage(true);
    }
  }
 }, [userAuth])


//Listen to keyboard events
useEffect(() => {
  document.addEventListener('keydown', detectSpaceBar, true)
}, [])

const detectSpaceBar = (e) => {
  SetKeyClicked(e.key);
}

const handleStartFlash = () => {
  setSecondPageIntro(false);
  setFlashWords(true)
  setEntry(true);
}

useEffect(()=> {
  if (!secondPageIntro) {
    if (countWrds < wordsArr2.length ) {
      setWord(wordsArr2[countWrds])
    }
  setFlashWords(false);
  }
}, [flashWords])

// Yes No responses to words from learning session
useEffect(()=>{
  if (keyClicked === 'Enter' && firstPage) {
    setFirstPage(false);
    setFormState(true);
  }
  if (entry && (keyClicked === 'y' || keyClicked === 'n' || keyClicked === 'Y' || keyClicked === 'N')) {
    const date = new Date();
    SetKeyClicked('')
    setEntry(false)
    const num = countWrds + 1;
    const key = 'Word'+ num;
    const obj = {
      [`${key}`]: {Word: word, response: keyClicked}
    }
    // setAxiosSend(true)
    const param = {_id: userId, obj};
    axios.post('/api/test5section2', param)
    .then((res)=>{
      if (countWrds < wordsArr2.length - 1) {
        setCountModal2(countWrds + 1)
        setFlashWords(true);
        setEntry(true)
      } else {
        let complete = {_id: userId, test1CompletionRecallSctn2: true};
        axios.post('/api/user', complete)
        .then((res)=>{
          setFlashWords(false)
          setTest5End(true)
        })
        .catch((err)=>{
          console.log(err)
        })
      }
    })
    .catch((err)=>{
      console.log(err)
    })
  }
  if (keyClicked === 'Enter' && test5End) {
    let complete = {_id: userId, test1CompletionRecall: true};
    axios.post('/api/user', complete)
    .then((res)=>{
      navigate('/cognitivetest2recall')
    })
    .catch((err)=>{
      console.log(err)
    })
  }
}, [keyClicked, entry])

useEffect(() => {
  if (userId) {
    axios.get('/api/user', {params: {_id: userId}})
    .then((res)=>{
      // console.log('Sctn6CompletionTime :', res.data.user.Sctn6CompletionTime)
      setCompletionTime(res.data.user.Sctn6CompletionTime)
    })
    .catch((err)=>{
     console.log(err)
    })
  }
 }, [userId])

 useEffect(() => {
  if (completionTime) {
      const now = moment();
      const then = moment(completionTime, 'YYYY/MM/DD hh:mm:ss').add(2, 'hours'); //10
      const expiryDate = moment(completionTime, 'YYYY/MM/DD hh:mm:ss').add(14, 'hours'); //14

      let expired = moment.duration(expiryDate.diff(now));
      let duration = moment.duration(then.diff(now));
      let hours = duration.asHours();
      let hours2 = expired.asHours();
      let mins2 = expired.asMinutes();
      let secs2 = expired.asSeconds();
      if (hours2 <= 0 && mins2 <= 0 && secs2 <= 0) {
        navigate('/expired-test')
      } else if (hours >= 0) {
        navigate('/countdown')
      } else {
        setCountdownComplete(true);
      }
  }
}, [completionTime]);

const handleStart = () => {
  setFirstPage(false)
  setFormState(true);
}

const toggleFormState = () => {
  setFormState(true);
}

const handleModalAppear = (e) => {
  setVal();
  const count = (countModal + 1);
  setCountModal(count);
  setFormState(false);

  if (count < wordsArr.length + 15 - 1) {
    setTimeout(toggleFormState, 300);
  }
};

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

const handleInput = (e) => {
  setWordInput(e.target.value);
}

useEffect(()=>{
  if (wordInput) {
    setWordErr('');
  }
}, [wordInput])

useEffect(()=> {
  let words = [...wordsEnteredListA, data.word];
  let result = words.filter(function( elem ) {
    return elem !== undefined;
  });
  SetWordsEnteredListA(result);
}, [data])

const handlePostWords = () => {
  setFormState(false);
  setRepeatListA(true);
  const date = new Date();
  let param;

  let countUp = testListATrials + 1;
  setTestListATrials(countUp);
  if (testListATrials === 1) {
    param = {id: userId, _28ListAEntriesTest5_Recall: wordsEnteredListA };
  }
  // console.log('Param :', param)
  axios.post('/api/cognitivetest', param)
  .then((res) => {
    // console.log('Post wrds :', param)
    // setEntry(false)
    setSecondPage(true)
    setSecondPageIntro(true)
  })
}

const handleEndTest5 = () => {
  let complete = {_id: userId, test1CompletionRecall: true};
  axios.post('/api/user', complete)
  .then((res)=>{
    navigate('/cognitivetest2recall')
  })
  .catch((err)=>{
    console.log(err)
  })
}

  return (
    <>
    {userAuth && countdownComplete ?
      <>
      <NavigationBar />
      <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center', height: '100vh', maxWidth: '100vw', background: '#000', color: '#fff', top: 0, bottom: 0, }} >
            {firstPage ?
              <>
              <div style={centerScreen} >
                <h1 style={{ color: '#e67373', fontSize: 50, }} >SESSION B - TEST 1 RECALL</h1>
                <div style={{ fontSize: 35, fontWeight: 700, display: 'flex', padding: '110px 0px 0px 0px',  }} >
                Yesterday you were shown a list of words 5 times. Please enter all the words you remember from the original list you saw 5 times.
                <br /><br /> [Press ENTER or click start to continue.]
                </div>
                    <button style={{ margin: '75px'}} onClick={handleStart} >
                      Start
                    </button>
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
                      {countModal < wordsArr.length + 15 - 2 ?
                        <>
                         <div style={formTitle}>ENTER WORD {wordCount}</div>
                          <div style={{ position: 'relative', display: 'inline-block', paddingBottom: '85px' }}>
                            <input name="name" {...register("word")} autoFocus placeholder="Word.." style={formInput} onChange={handleInput} />
                            <Button  style={button1} onClick={handleSubmit} type='submit' >
                              {buttonEntry}
                            </Button>
                            <div style={buttonInfo1} >
                              Click ENTER to submit word!
                            </div>
                          </div>
                         <Typography color = '#bf1650' fontFamily = 'Segoe UI, Roboto, Oxygen, Ubuntu' marginLeft = '19px' fontSize = '14px' fontStyle = 'italic' >{wordErr.error}</Typography>
                        </>
                        :
                      null}
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
          {secondPage ?
            <>
              {secondPageIntro ?
                <>
                  <div style={centerScreen} >
                  <div style={{ fontSize: 35, fontWeight: 700, display: 'flex', padding: '110px 0px 0px 0px',  }} >
                  You will now be shown some words. Press “y” on the keyboard if the word was on the list you saw 5 times yesterday. Press “n” on the keyboard if the words was not on the list you saw 5 times yesterday.
                  </div>
                    <button style={{ margin: '75px'}} onClick={handleStartFlash} >
                      Start
                    </button>
                  </div>
                </>
              :
              null}


            </>
          : null}

          {entry ?
            <Typography style={{ fontSize: 60, fontWeight: 700, textAlign: 'center', fontFamily:'Arial' }} >{word}</Typography>
          : null}

         {test5End ?
          <>
            <div style={centerScreen} >
            <div style={{ fontSize: 35, fontWeight: 700, display: 'flex', padding: '0px 40px 120px 40px', lineHeight: '1.6', }} >
              Test 1 Recall - Completed. <br /> [Click start or press ENTER to begin Test 2 Recall]
            </div>
            <div>
              <button onClick={handleEndTest5}>Start</button>
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

export default CognitiveTest1Recall