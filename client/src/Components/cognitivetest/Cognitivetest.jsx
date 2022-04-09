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
import { useMainContext } from '../Providers/MainProvider.jsx';
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
  // position: "absolute",
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

const button = {
  width: '80px',
  backgroundColor: '#5f7182',
  color: '#fafafa',
  height: '50px',
  margin: '30px 0 0 30px'
}

const formTitle = {
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

  const [testListATrials, setTestListATrials] = useState(5);
  const [firstPage, setFirstPage] = useState(true);
  const [startTest, setStartTest] = useState(false);
  const [tests, setTests] = useState([]);
  const [wordsArr, setWordsArr] = useState(['Make', 'love', 'not', 'war', '❤️!', '' ]);
  const [word, setWord] = useState();
  const [nav, setNav] = useState(false);
  const [formState, setFormState] = useState(false);
  const { register, handleSubmit } = useForm();
  const [data, setData] = useState([]);
  const [val, setVal] = useState();
  const [countModal, setCountModal] = useState(0);
  const navigate = useNavigate();


  const handleRegistration = (data) => setData(data);


  useEffect(() => {
    console.log("Test for user mounted:", userProfile);

    if (userProfile) {
    axios.get('/api/cognitivetest', { params: { id: userProfile._id }})
      .then((res) => {
        // console.log('get is working in cognitive test!');
        // console.log('Res cognitive tests data :', res.data);
        setTests(res.data);
      })
    }

  }, []);


  /* .....................Untracked State of Test .................... */

  //Display words on screen for 4 secs
 useEffect(() => {
   if (startTest) {
    for (let i = 0; i < wordsArr.length; i++) {
      (function(ind) {
          setTimeout(function(){
              setWord(wordsArr[ind]);
              // console.log(wordsArr[ind]);
              //100 200
          }, 1000 + (3000 * ind));
      })(i);
    }
   }
 }, [startTest])



// Then navigate to bring up dialogue to enter as many words as you can remember
if (word === wordsArr[wordsArr.length - 1]) {
  //Bring up dialogue with button and click event handleButtonClick to navigate to form
  setNav(true);
  //Do this to prevent infinite loop on words
  setWord(null);
}

/* ........................... */

const handleStartTest = (e) => {
  e.preventDefault();
  setFirstPage(false);
  setStartTest(true);
}

const handleButtonClick = (e) => {
  e.preventDefault();
  setFormState(true);
  //Take away dialogue and leave just form
  setNav(false);
}

const toggleFormState = () => {
  setFormState(true);
}

const handleWordEnter = () => {
  const count = (countModal + 1);
  setCountModal(count);
  // setVal('');
  setFormState(false);
  //Keep popping up modal if count is less than wordsArr.length - All words aside the last '' are displayed
  if (count < wordsArr.length - 1) {
    setTimeout(toggleFormState, 300);
  }
};

useEffect(() => {
  console.log('Axios post data :', data.word)
  const param = {id: userProfile._id, word: data};
  axios.post('/api/cognitivetest', param)
  .then(() => {
    console.log(res.data)
  })
}, [data])

useEffect(() => {
  if (countModal === wordsArr.length - 1) {
    const trialTimes = testListATrials - 1;
    setTestListATrials(trialTimes);
  }
}, [countModal])

// Controls Trial re-render process by listening to testListATrials
useEffect(() => {
  if (testListATrials > 0 && testListATrials < 5) {
    //Page to say how many trials left
    console.log('How many tests left after test 1? :', testListATrials)
    navigate("/cognitivetest1s2");
  }
}, [testListATrials])

// Controls List Trails by listening to countModal
useEffect(()=> {
  if (countModal === wordsArr.length - 1 ) {
    const modalCountdown = testListATrials - 1;
    console.log('testListATrials before end :', testListATrials)
    modalCountdown > 0 ? setTestListATrials(modalCountdown) : null;
  }
}, [countModal])

  const buttonEntry = countModal < wordsArr.length - 2 ? 'Enter' : 'Submit';
  const wordCount = countModal + 1;
  // console.log('testListATrials :', testListATrials)
  return (
    <>
      <div className='centerScreen' style={centerScreen}>
          <div style={{marginBottom: '350px'}} >
            {firstPage ?
              <>
                <Typography style={{fontSize: 40, fontWeight: 700, display: 'inline-block', }}>
                This test consists of two trials, and takes about 3 mins to complete both trials. Once you begin, try complete both trials in one go in order to not start over from scratch.
                A set of words will flash on screen then you'll try to recollect those words.
                Click on start button to begin trail one...

                </Typography>
                <Button variant="outlined" style={button} onClick={handleStartTest}  type='submit' >
                Start
                </Button>
                </>
                :
              null}
          </div>
          <Typography style={{ fontSize: 40, fontWeight: 700, marginBottom: '300px', textAlign: 'center', fontFamily:'Courgette' }} >{word}</Typography>
          {/* Render form page for user to enter recollected words after words display */}
          {nav ?
          <>
          <div style={{display: 'inline-block', marginBottom: '300px'}} >
              <div style={{ fontSize: 40, fontWeight: 700}}>Click on button to enter as many words as you can remember...</div>
              <Button variant="outlined" style={button} onClick={handleButtonClick} type='submit' >
              Go..
              </Button>
          </div>
          </>
          :
          null }
          {formState ?
          <>
            <div style={{ fontSize: 40, fontWeight: 700}}>
              <Dialog open PaperProps={{ classes: { root: classes.root } }}>
                <DialogContent>
                  <div style={{display: 'inline-block'}} >
                    <form onSubmit={handleSubmit(handleRegistration)}>
                      {countModal < wordsArr.length - 2 ?
                        <>
                         <div style={formTitle}>Enter word {wordCount}..</div>
                         <input name="name" value={val} {...register("word")} placeholder="Word 1.." style={formInput} />
                        </>
                        :
                      null}
                      <DialogActions>
                        <Button variant="outlined" style={button} onClick={handleWordEnter} type='submit' >
                        {buttonEntry}
                        </Button>
                      </DialogActions>

                    </form>
                  </div>
                </DialogContent>
              </Dialog>
            </div>
          </>
          :
          null}
      </div>
    </>
  )
}

export default Cognitivetest