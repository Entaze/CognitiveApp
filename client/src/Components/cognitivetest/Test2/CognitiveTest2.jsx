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
  const [tests, setTests] = useState({});
  const [wordsArr, setWordsArr] = useState(['Asia', 'Sun', 'Key', 'Cat', 'Travel', 'Winter', '' ]);
  const [word, setWord] = useState();
  const [nav, setNav] = useState(false);
  const [formState, setFormState] = useState(false);
  const { register, handleSubmit, reset } = useForm();
  const [data, setData] = useState([]);
  const [val, setVal] = useState();
  const [countModal, setCountModal] = useState(0);
  const [finalComm, setFinalComm] = useState(false);
  const navigate = useNavigate();


  const handleRegistration = (data) => { setData(data); handleWordEnter(); reset(); }

 useEffect(() => {
   if (startTest) {
    for (let i = 0; i < wordsArr.length; i++) {
      (function(ind) {
          setTimeout(function(){
              setWord(wordsArr[ind]);
          }, 1000 + (2000 * ind));
      })(i);
    }
   }
 }, [startTest])


// console.log('We are in stage 2 ...')

if (word === wordsArr[wordsArr.length - 1]) {
  setNav(true);
  setWord();
}


const handleStartTest = (e) => {

}

const handleButtonClick = (e) => {
  e.preventDefault();
  setFormState(true);
  setNav(false);
}

const toggleFormState = () => {
  setFormState(true);
}

const handleWordEnter = () => {
  setVal();
  const count = (countModal + 1);
  setCountModal(count);
  setFormState(false);
  if (count < wordsArr.length - 1) {
    setTimeout(toggleFormState, 300);
  }
};

// useEffect(() => {
//   console.log('Axios post data :', data)
//   const param = {id: userProfile._id, word: data};
//   axios.post('/api/cognitivetest', param)
//   .then(() => {
//     console.log(res.data)
//   })
// }, [data])

useEffect(() => {
  if (countModal === wordsArr.length - 1) {
    const trialTimes = testListATrials - 1;
    setTestListATrials(trialTimes);
  }
}, [countModal])

useEffect(() => {
  if (testListATrials > 0 && testListATrials < 5) {
    console.log('How many tests left after test 2? : :', testListATrials)
    setFinalComm(true);
  }
}, [testListATrials])


useEffect(()=> {
  if (countModal === wordsArr.length - 1 ) {
    const modalCountdown = testListATrials - 1;
    console.log('testListATrials before end :', testListATrials)
    modalCountdown > 0 ? setTestListATrials(modalCountdown) : null;
  }
}, [countModal])

  const buttonEntry = countModal < wordsArr.length - 2 ? 'Enter' : 'Submit';
  const wordCount = countModal + 1;
  return (
    <>
      <div className='centerScreen' style={centerScreen}>

          <div style={{marginBottom: '350px', display: 'inline-block',}}  >
            {firstPage ?
                <>
                  <Typography style={{fontSize: 60, marginBottom: 20, fontWeight: 700, display: 'inline-block', }}>
                  Test 2: Finger Tapping Task.
                  </Typography>
                  <Typography style={{fontSize: 40, marginBottom: 20, color: '#be8484', fontWeight: 700, display: 'inline-block', }}>
                  You will be shown a sequence of numbers on the screen. Using your dominant hand (i.e. the hand you use to write with), type the sequence as fast and accurately as possible. Keep typing the sequence over and over until the numbers disappear. [Press enter or click start to continue]
                  </Typography>
                  <Button variant="outlined" style={button} onClick={handleStartTest}  type='submit' >
                  Start
                  </Button>
                </>
                :
              null}
          </div>
          <Typography style={{ fontSize: 40, fontWeight: 700, marginBottom: '300px', textAlign: 'center', fontFamily:'Courgette' }} >{word}</Typography>
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
                         <input name="name" {...register("word")} placeholder="Word.." style={formInput} />
                        </>
                        :
                      null}
                      <DialogActions>
                        <Button variant="outlined" style={button} onClick={handleSubmit} type='submit' >
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
          {finalComm?
           <Typography style={{fontSize: 40, fontWeight: 700, fontFamily:'Courgette'  }}>
           Thank you ❤️!
           </Typography>
           :
          null}
      </div>
    </>
  )
}

export default Cognitivetest