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
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  textAlign: 'center',
  minHeight: '100vh',
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
  backgroundColor: '#6F8363',
  background: 'linear-gradient(0deg, #6F8363 3%, #6F8363 0%)'
}

const button = {
  width: '80px',
  backgroundColor: '#5f7182',
  color: '#fafafa',
  height: '50px',
  marginLeft: '15px'
}

const buttonInfo = {
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

const formTitle = {
  color: '#b82b32',
  fontWeight: '700',
  fontSize: '30px',
  height: '30px',
  width: '426px',
  border: 'none',
  margin: '15px 25px 15px 15px',
  textAlign: 'center',
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

function Cognitivetest () {
  const classes = useStyles();
  const { userProfile, cognitiveTest, setCognitiveTest } = useMainContext();

  const [user, setUser] = useState(false);
  const [userAuth, setUserAuth] = useState(false);


  const [testListATrials, setTestListATrials] = useState(1);
  const [testListBTrials, setTestListBTrials] = useState(1);
  const [firstPage, setFirstPage] = useState(true);
  const [startTest, setStartTest] = useState(false);
  const [startTestListB, setStartTestListB] = useState(false);
  const [startTestListARecall, setStartTestListARecall] = useState(false);
  const [tests, setTests] = useState({});
  const [wordsArr, setWordsArr] = useState(['Drum', 'Curtain', 'Bell', 'Coffee', 'School', 'Parent', 'Moon', 'Garden', 'Hat', 'Farmer', 'Nose', 'Turkey', 'Colour', 'House', 'River', '', '' ]); //
  const [listB, setListB] = useState(['Desk', 'Ranger', 'Bird', 'Show', 'Stove', 'Mountain', 'Glasses', 'Towel', 'Cloud', 'Boat', 'Lamb', 'Gun', 'Pencil', 'Church', 'Fish', '', '' ]); //
  const [listBStart, setListBStart] = useState(false);
  const [listAReEntry, setListAReEntry] = useState(false);
  const [test1End, setTest1End] = useState(false);
  const [word, setWord] = useState();
  const [wordInput, setWordInput] = useState();
  const [wordErr, setWordErr] = useState({});
  const [wordsEnteredListA, SetWordsEnteredListA] = useState([]);
  const [nav, setNav] = useState(false);
  const [wordRecall, setWordRecall] = useState(false);
  const [listAReEntryModal, setListAReEntryModal] = useState(false);
  const [formState, setFormState] = useState(false);
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
  const [data, setData] = useState([]);
  const [val, setVal] = useState();
  const [countModal, setCountModal] = useState(0);
  const navigate = useNavigate();
  const [keyClicked, SetKeyClicked] = useState('');
  const handleRegistration = (data) => { setData(data); handleModalAppear(); reset();  }
  const buttonEntry = countModal < wordsArr.length - 2 ? 'Enter Word' : 'Submit Test';
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

 useEffect(() => {
  if (userProfile) {
    setUserAuth(true);
  } else {
    navigate('/login')
  }
 }, [userProfile])


  useEffect(() => {
    if(testListATrials === 6) {
      setListBStart(true);
    }
   }, [testListATrials])

  useEffect(() => {
    if (userProfile) {
    axios.get('/api/cognitivetest', { params: { id: userProfile._id }})
      .then((res) => {
        setTests(res.data);
      })
    }
  }, []);

 useEffect(() => {
   if (startTest) {
    for (let i = 0; i < wordsArr.length; i++) {
      (function(ind) {
          setTimeout(function(){
              setWord(wordsArr[ind]);
          }, 1000 + (1000 * ind));
      })(i);
    }
   }
 }, [startTest])

   useEffect(() => {
    if (startTestListB) {
     for (let i = 0; i < listB.length; i++) {
       (function(ind) {
           setTimeout(function(){
               setWord(listB[ind]);
           }, 1000 + (1000 * ind));
       })(i);
     }
    }
  }, [startTestListB])

  useEffect(() => {
    if (startTestListARecall) {
      for (let i = 0; i < wordsArr.length; i++) {
        (function(ind) {
            setTimeout(function(){
                setWord(wordsArr[ind]);
            }, 5 + (5 * ind));
        })(i);
      }
    }
  }, [startTestListARecall])


if (word === wordsArr[wordsArr.length - 1]) {
  setWordRecall(true);
  setStartTest(false);
  setWord();
}

const handleStartTest = (e) => {
  e.preventDefault();
  setFirstPage(false);
  setStartTest(false);
  setStartTest(true);
}

useEffect(() => {
  if (keyClicked === 'Enter' && firstPage) {
    setFirstPage(false);
    setStartTest(true);
  }
  if (keyClicked === 'Enter' && listBStart) {
    setListBStart(false);
    handleStartListB();
  }
  if (keyClicked === 'Enter' && listAReEntry) {
    setListAReEntry(false);
    handleListAReentry();
  }
}, [keyClicked])

const handleButtonClick = (e) => {
  e.preventDefault();
  setListAReEntryModal(false);
  setWordRecall(false);
  setCountModal(0);
  SetWordsEnteredListA([]);
  setFormState(true);
  setNav(false);
}

const toggleFormState = () => {
  setFormState(true);
}

const handleModalAppear = (e) => {
  setVal();
  const count = (countModal + 1);
  setCountModal(count);
  setFormState(false);

  if (count < wordsArr.length - 1) {
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
  setRepeatListA(true);
  const date = new Date();
  let param;
  if(testListATrials === 1) {
    param = {id: userProfile._id, ListAEntries_Trial1: wordsEnteredListA, time: date};
  } else if (testListATrials === 2) {
    param = {id: userProfile._id, ListAEntries_Trial2: wordsEnteredListA, time: date};
  } else if (testListATrials === 3) {
    param = {id: userProfile._id, ListAEntries_Trial3: wordsEnteredListA, time: date};
  } else if (testListATrials === 4) {
    param = {id: userProfile._id, ListAEntries_Trial4: wordsEnteredListA, time: date};
  } else if (testListATrials === 5) {
    param = {id: userProfile._id, ListAEntries_Trial5: wordsEnteredListA, time: date};
  } else if (testListATrials === 6) {
    param = {id: userProfile._id, ListBEntries: wordsEnteredListA, time: date};
  } else {
    param = {id: userProfile._id, ListAEntriesRecall: wordsEnteredListA, time: date};
  }
  let countUp = testListATrials + 1;
  setTestListATrials(countUp);
  if (param.ListAEntriesRecall) {
    axios.post('/api/cognitivetest', param)
    .then((res) => {
      let complete = {id: userProfile._id, test1Completion: true, time: date};
      axios.post('/api/profile', complete)
      .then((result) => {

      })
    })
  } else {
    axios.post('/api/cognitivetest', param)
    .then((res) => {

    })
  }
}

useEffect(() => {
  if (countModal === wordsArr.length - 1) {
    const trialTimes = testListATrials - 1;
    setTestListATrials(trialTimes);
  }
}, [countModal])

useEffect(()=> {
  if (countModal === wordsArr.length - 1) {
    const modalCountdown = testListATrials - 1;
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

const handleStartListB = (e) => {
  setListBStart(false);
  setStartTestListB(false);
  setStartTestListB(true);
}

useEffect(() => {
  if (testListATrials === 7) {
    setListAReEntry(true);
  }
  if (testListATrials === 8) {
    setTest1End(true);
  }
}, [testListATrials])

const handleListAReentry = (e) => {
  setListAReEntry(false);
  setStartTestListARecall(false);
  setStartTestListARecall(true);
}

const handleStartTest2 = (e) => {
  e.preventDefault();
  console.log('Navigating to test two...')
  // navigate('/cognitivetest2');
}

const onSubmitWord = (data) => {
  const numberRegEx = /\-?\d*\.?\d{1,2}/;
  const input = data.word.trim();
  if (numberRegEx.test(String(data.word).toLowerCase()) || typeof input !== 'string' || input === '') {
    setWordErr({error: 'Enter a valid word!'});
  } else {
    setData(data); handleModalAppear(); reset();
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

  return (
    <>
    {userAuth ?
      <div className='centerScreen' style={centerScreen}>
          <div style={{marginBottom: '350px'}} >
            {firstPage ?
              <>
                <Typography style={{fontSize: 60, marginBottom: 20, fontWeight: 700, display: 'inline-block', }}>
                Test 1: Visual Learning Test.
                </Typography>
                <Typography style={{fontSize: 40, marginBottom: 20, color: '#be8484', fontWeight: 700, display: 'inline-block', }}>
                You will be shown a list of 15 words. This same list will be shown to you 5 times. Each time after you see the list you will be asked to type all the words you remember from the list. [Press enter or click start to continue]
                </Typography>
                <Button variant="outlined" style={button} onClick={handleStartTest}  type='submit' >
                Start
                </Button>
                </>
                :
              null}
          </div>
          <Typography style={{ fontSize: 40, fontWeight: 700, marginBottom: '300px', textAlign: 'center', fontFamily:'Courgette' }} >{word}</Typography>
          {wordRecall ?
          <>
          <div style={{display: 'inline-block', marginBottom: '300px'}} >
              <div style={{ fontSize: 40, marginBottom: 40, fontWeight: 700}}>Click on button to enter as many words as you can remember...</div>
              <Button variant="outlined" style={button} onClick={handleButtonClick} type='submit' >
              Go..
              </Button>
          </div>
          </>
          :
          null }
          {formState ?
          <>
            <div style={{ fontSize: 40, fontWeight: 700}} >
              <Dialog open PaperProps={{ classes: { root: classes.root } }} style={{marginBottom: '200px'}} >
                <DialogContent >
                  <div>
                    <form onSubmit={handleSubmit(onSubmitWord)} >
                      {countModal < wordsArr.length - 2 ?
                        <>
                         <div style={formTitle}>Enter word {wordCount}..</div>
                         <div style={{position: 'relative', display: 'inline-block'}}>
                           <input name="name" {...register("word")} autoFocus placeholder="Word.." style={formInput} onChange={handleInput} />
                           <Button variant="outlined" style={button} onClick={handleSubmit} type='submit' >
                            {buttonEntry}
                           </Button>
                         </div>
                         <Typography color = '#bf1650' fontFamily = 'Segoe UI, Roboto, Oxygen, Ubuntu' marginLeft = '19px' fontSize = '14px' fontStyle = 'italic' >{wordErr.error}</Typography>
                        </>
                        :
                      null}
                        <DialogActions>
                          <Button variant="outlined" style={submitButton} onClick={handlePostWords} type='submit' >
                          Submit Test
                          </Button>
                        </DialogActions>
                        <div style={buttonInfo}>
                          Click submit when you are done entering as many words as you remember!
                        </div>
                    </form>
                  </div>
                </DialogContent>
              </Dialog>
            </div>
          </>
          :
          null}
          {(repeatListA && testListATrials <= 5) ?
           <>
             <div style={{marginBottom: '350px'}}>
             <Typography style={{fontSize: 40, fontWeight: 700,  }}>
             Click start to begin trial {testListATrials}...
             </Typography>
             <Button variant="outlined" style={button} onClick={handleRepeatListA}  type='submit' >
             Start
             </Button>
             </div>
           </>
          :
          null}
          {listBStart ?
            <>
            <div style={{marginBottom: '350px'}}>
              <Typography style={{fontSize: 40, fontWeight: 700, marginBottom: 20, color: '#be8484',  }}>
              You will now be shown a different list of words. Try and remember all the words from this new list. [Click start or press enter to continue]
              </Typography>
              <Button variant="outlined" style={button} onClick={handleStartListB}  type='submit' >
              Start
              </Button>
            </div>
            </>
            :
          null}
           {listAReEntry ?
            <>
              <div style={{marginBottom: '350px'}}>
                <Typography style={{fontSize: 40, fontWeight: 700, marginBottom: 20 }}>
                Now, please enter all the words you remember from the original list you saw 5 times. [Click start or press enter to continue]
                </Typography>
                <Button variant="outlined" style={button} onClick={handleListAReentry}  type='submit' >
                Start
                </Button>
              </div>
            </>
           : null}
           {test1End ?
          <>
            <div style={{marginBottom: '350px'}}>
              <Typography style={{fontSize: 40, fontWeight: 700, marginBottom: 20 }}>
              Test 1 - Auditory verbal learning test completed. [Click start or press enter to begin Test 2]
              </Typography>
              <Button variant="outlined" style={button} onClick={handleStartTest2}  type='submit' >
              Start
              </Button>
            </div>
          </>
          :
          null}
      </div>
     :
     null
     }
    </>
  )
}

export default Cognitivetest
