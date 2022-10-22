import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useMainContext } from '../../Providers/MainProvider.jsx'
import { useNavigate } from 'react-router-dom'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import NavigationBar from '../../Layout/WithNavigation.jsx'
import TextField from '@mui/material/TextField'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import '../../Styles.scss'

import { useLayoutEffect } from 'react'

const Container = {
  backgroundColor: '#000',
  position: 'absolute',
  zIndex: '-1',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
}

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

const button = {
  width: '80px',
  backgroundColor: '#5f7182',
  color: '#fafafa',
  height: '50px',
  marginLeft: '45%'
}

const exCenter = {
  display: 'flex',
  width: '50vw',
  height: '40vh',
  justifyContent: 'center',
  alignItems: 'center',
  margin: 'auto',
}

const Cognitivetest2 = () => {
  const { userProfile, cognitiveTest, setCognitiveTest } = useMainContext();
  const [userAuth, setUserAuth] = useState(false);

  const [keyClicked, SetKeyClicked] = useState('')
  const [pages, setPages] = useState( null )

  const [TestIntro, setTestIntro] = useState(false)
  const [startTest2, setStartTest2] = useState(false)
  const [displayNum, setDisplayNum] = useState(true)
  const [entry, setEntry] = useState('')
  const [trial, setTrial] = useState(false)
  const [displayCross, setDisplayCross] = useState(false)
  const [test2End, setTest2End] = useState(false);

  const navigate = useNavigate();

  const [loaded, setLoaded] = useState(false);
  const [imgLoaded, setImgLoaded] = useState(false);

  const [trialEntry, setTrialEntry] = useState(12)
  let trialCount = 12;

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
    if (TestIntro) {
      setTimeout(() => {
        setImgLoaded(true)
      }, 3000)
      }
  }, [TestIntro, loaded])

  useEffect(() => {
    if (userProfile) {
      setUserAuth(true);
    } else {
      navigate('/login')
    }
   }, [userProfile])

  //-----Listen to keyboard events

  useEffect(() => {
    document.addEventListener('keydown', detectSpaceBar, true)
  }, [])

  const detectSpaceBar = (e) => {
    SetKeyClicked(e.key);
  }

  useEffect(() => {
    if (keyClicked === 'Enter' && test2End) {
      navigate('/cognitivetest3');
    }
  }, [keyClicked])

  //-------------------------------------------

  useEffect(() => {
    setPages( document.querySelectorAll(".page") );
  }, [])

    let translateAmount = 100;
    let translate = 0;

    const slideNext = () => {
      setTestIntro(true)
      translate -= translateAmount ;
      pages.forEach(
        pages => (
          pages.style.transform = `translateX(${translate}%)`)
      );
    }

    const slidePrev = () => {
      translate += translateAmount;
      pages.forEach(
        pages => (pages.style.transform = `translateX(${translate}%)`)
      );
    }

    const TestStart = () => {
      setTestIntro(false);
      setStartTest2(true);

      setTimeout(() => {
        setDisplayNum(false)
        setDisplayCross(true)
        setTrial(true)
      }, 30000)

      setTimeout(() => {
        if (trialCount > 1) {
          setDisplayCross(false)
          setStartTest2(false);
          setDisplayNum(true)
          // timeInterval += 10000;
          trialCount--;
          TestStart()
        } else {
          let complete = {_id: userProfile._id, test2Completion: true};
          axios.post('/api/user', complete)
          .then((result) => {
            // console.log('success post test 2 completion', result)
            setStartTest2(false)

            navigate('/test-end')


            // setTest2End(true)
          })
        }
      }, 60000)
    }

    useEffect(()=> {
      let param;
      let entryVal;
      if (displayCross) {
        entry === '' ? (entryVal = {}) : entryVal = entry;
        if (trialEntry === 12) {
          param = {id: userProfile._id, Test2_Entry_1: entryVal, };
        } else if (trialEntry === 11) {
          param = {id: userProfile._id, Test2_Entry_2: entryVal, };
        } else if (trialEntry === 10) {
          param = {id: userProfile._id,  Test2_Entry_3: entryVal, };
        } else if (trialEntry === 9) {
          param = {id: userProfile._id,  Test2_Entry_4: entryVal, };
        } else if (trialEntry === 8) {
          param = {id: userProfile._id,  Test2_Entry_5: entryVal, };
        } else if (trialEntry === 7) {
          param = {id: userProfile._id, Test2_Entry_6: entryVal, };
        } else if (trialEntry === 6) {
          param = {id: userProfile._id,  Test2_Entry_7: entryVal, };
        } else if (trialEntry === 5) {
          param = {id: userProfile._id,  Test2_Entry_8: entryVal, };
        } else if (trialEntry === 4) {
          param = {id: userProfile._id, Test2_Entry_9: entryVal, };
        } else if (trialEntry === 3) {
          param = {id: userProfile._id,  Test2_Entry_10: entryVal, };
        } else if (trialEntry === 2) {
          param = {id: userProfile._id,  Test2_Entry_11: entryVal, };
        } else if (trialEntry === 1) {
          param = {id: userProfile._id,  Test2_Entry_12: entryVal, };
        }
        setTrialEntry(trialEntry - 1);
        axios.post('/api/cognitivetest', param )
        .then((res) => {
          console.log(res.data)
          setEntry('')
        })
      }
    }, [displayCross])

    const handleEntry = (e) => {
      e.preventDefault();
      setEntry(e.target.value);
    }

    const handleStartTest3 = (e) => {
      e.preventDefault();
      navigate('/cognitivetest3');
    }

  return (
    <>
    <div className="container">
      <div className="pages">
        <>
        {userAuth ?
        <div id="page" className="page one">
        <NavigationBar />
          <div style={centerScreen} >
            <h1 style={{ color: '#e67373', fontSize: 50, }} >TEST 2.</h1>
            <div style={{ fontSize: 35, margin: '8% 0', fontWeight: 700, lineHeight: '1.6' }}>
            You will be shown a sequence of numbers on the screen. Using your dominant hand (i.e., the hand you use to write with), type the sequence as fast and accurately as possible. Keep typing the sequence over and over until the numbers disappear. <br /> [Click next to continue]
            </div>
            <div>
              <button onClick={slideNext} >Next</button>
            </div>
          </div>
        </div>
        : null}

        <div id="page" className="page two">
          <NavigationBar />
          {TestIntro && !imgLoaded ?
          <>
              {/* <div className="loader" id="loader"></div> */}
              <div className="loader" id="loader2"></div>
              <span className="loadingText">LOADING...</span><br></br>
          </>
          : null}
          {TestIntro && imgLoaded ?
          <div style={centerScreen} >
            <div id='description' style={exCenter} >
              <img
              style= {loaded ? { width: '100%', height: '100%', marginBottom: '10vh', } : { display: 'none' } }
              src="https://res.cloudinary.com/entazesoftware/image/upload/v1664984224/CogniticeTest-Keyboard_tlpkg2.png"
              onLoad={() => setLoaded(true)}
              />
            </div>
            <div style={{ fontSize: 35, fontWeight: 50, marginBottom: '6vh' }}>
              Click previous to re-read instructions or click start to begin test.
            </div>
            <div style={{ display: "inline-block", margin: "4px" }} >
              <button style={{ margin: "8px", background: "#000" }} onClick={slidePrev} >Previous</button>
              <button style={{ margin: "8px", background: "#7e1515" }} onClick={TestStart} >Start</button>
            </div>
          </div>
          :
          null
          }
          {startTest2 ?
          <div style={centerScreen} >
            <div style={exCenter} >
              {displayNum ?
                <div style={{ display: 'flex', flexDirection: 'column', width: '100%', justifyContent: 'center', alignItems: 'center', height: '100%', }} >
                  <h1 style={{ fontSize: 45, color: '#fff', paddingBottom: '90px', }} >
                    41232
                  </h1>
                  <Box component="form" noValidate  sx={{ mt: 3, height: '35px', width: '100%' }}>
                    <Grid item xs={12}>
                      <TextField
                        required
                        fullWidth
                        id="numberentry"
                        name="numberentry"
                        type="password"
                        value={entry}
                        style={{ width: '100%', height: '100%', background: '#fff', borderRadius: '3%' }}
                        onChange={handleEntry}
                        autoFocus
                        autoComplete="off"
                      />
                    </Grid>
                  </Box>
                </div>
              : null}
              {displayCross ?
                <img style={ {width:'190px', height: '140px' } } src="https://res.cloudinary.com/entazesoftware/image/upload/v1662136021/CognitiveApp/X-logo_mnf03d.jpg" />
              : null}
            </div>
          </div>
          : null}
          {test2End ?
          <>
            <div style={centerScreen} >
            <div style={{ fontSize: 35, fontWeight: 700, display: 'flex', padding: '0px 40px 120px 40px', lineHeight: '1.6', }} >
              Test 2 - Finger Tapping Task Completed.  <br /> [Click start or press ENTER to begin Test 3]
            </div>
            <div>
              <button onClick={handleStartTest3}>Start</button>
            </div>
            </div>
          </>
          :
          null}
        </div>
        </>
      </div>
    </div>
    </>
  )
}

export default Cognitivetest2


