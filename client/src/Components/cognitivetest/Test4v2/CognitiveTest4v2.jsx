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
import Iframe from 'react-iframe'
import moment from 'moment';
import '../../Styles.scss'
// import App from '../../App.jsx'


const Container = {
  backgroundColor: '#fff',
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

const centerScreen2 = {
  width: '70vw',
  // height: '50vh',
  background: '#fff',
  color: '#f5f5f5',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  marginLeft: '10%',
  marginRight: '10%',
  // paddingTop: '15%',
  // paddingBottom: '10%',
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

const PracticeStyle = {
  display: 'flex',
  width: '50vw',
  height: '46vh',
  justifyContent: 'center',
  alignItems: 'center',
  margin: 'auto',
  paddingTop: '4vh',
}

const Cognitivetest4v2 = () => {
  const token = window.localStorage.getItem('token');
  const userloggedIn = JSON.parse(window.localStorage.getItem('userLoggedIn'));
  const [userId, setUserId] = useState(null);

  const { userProfile, cognitiveTest, setCognitiveTest } = useMainContext();
  const [userAuth, setUserAuth] = useState(false);
  const [firstPage, setFirstPage] = useState(false);
  const [secondPage, setSecondPage] = useState(false);
  const [thirdPage, setThirdPage] = useState(false);
  const [fourthPage, setFourthPage] = useState(false);
  const [fifthPage, setFifthPage] = useState(false);
  const [fifthPage01, setFifthPage01] = useState(false);
  const [fifthPage02, setFifthPage02] = useState(false);
  const [fifthPage03, setFifthPage03] = useState(false);
  const [fifthPage04, setFifthPage04] = useState(false);

  const [sixthPage, setSixthPage] = useState(false);
  const [seventhPage, setSeventhPage] = useState(false);
  const [eightPage, setEightPage] = useState(false);
  const [eightPage01, setEightPage01] = useState(false);
  const [eightPage02, setEightPage02] = useState(false);
  const [eightPage03, setEightPage03] = useState(false);
  const [eightPage04, setEightPage04] = useState(false);
  const [eightPage05, setEightPage05] = useState(false);

  const [ninthPage, setNinthPage] = useState(false);
  const [tenthPage, setTenthPage] = useState(false);
  const [eleventhPage, setEleventhPage] = useState(false);
  const [eleventhPage01, setEleventhPage01] = useState(false);
  const [eleventhPage02, setEleventhPage02] = useState(false);
  const [eleventhPage03, setEleventhPage03] = useState(false);
  const [eleventhPage04, setEleventhPage04] = useState(false);
  const [eleventhPage05, setEleventhPage05] = useState(false);
  const [eleventhPage06, setEleventhPage06] = useState(false);

  const [twelvethPage, setTwelvethPage] = useState(false);
  const [thirteenthPage, setThirteenthPage] = useState(false);
  const [fourteenthPage, setFourteenthPage] = useState(false);
  const [fifteenthPage, setFifteenthPage] = useState(false);
  const [sixteenthPage, setSixteenthPage] = useState(false);
  const [seventeenthPage, setSeventeenthPage] = useState(false);

  const [start0Back, setStart0Back] = useState(false);
  const [start1Back, setStart1Back] = useState(false);
  const [start2Back, setStart2Back] = useState(false);
  const [start0BackTest, setStart0BackTest] = useState(false);
  const [start1BackTest, setStart1BackTest] = useState(false);
  const [start2BackTest, setStart2BackTest] = useState(false);


  const [plusSign, setPlusSign] = useState(false);
  const [testBegin, setTestBegin] = useState(false);
  const [testBegin1, setTestBegin1] = useState(false);
  const [testBegin2, setTestBegin2] = useState(false);
  const [testBegin3, setTestBegin3] = useState(false);
  const [mainTestBegin1, setMainTestBegin1] = useState(false);

  const [test1Letter, setTest1Letter] = useState(['S', 'J', 'Q', 'G', 'N', 'Z', 'K', 'B', 'T', 'Z', 'Q', 'Z', 'T', 'Q', 'T', 'Z', 'Z', 'G', 'B', 'K', 'T' ]); //
  const [test2Letter, setTest2Letter] = useState(['P', 'X', 'D', 'R', 'T', 'J', 'J', 'V', 'P', 'V', 'V', 'V', 'H', 'P', 'P', 'X', 'H', 'H', 'N', 'J', ]); //
  const [test3Letter, setTest3Letter] = useState(['N', 'V', 'B', 'H', 'B', 'H', 'M', 'C', 'X', 'C', 'M', 'K', 'M', 'N', 'S', 'K', 'S', 'K', 'S', 'K' ]); //
  const [test01Letter, setTest01Letter] = useState(['S', 'T', 'Q', 'G', 'N', 'J', 'G', 'Z', 'K', 'B', 'Z', 'Q', 'G', 'T', 'G', 'Z', 'Z', 'T', 'G', 'B', 'Z', 'Z', 'N', 'S', 'Z', 'Z', 'Z', 'H', 'H', 'Z', 'N', 'Z', 'V', 'Z', 'J', 'V', ]); //
  const [test02Letter, setTest02Letter] = useState(['P', 'K', 'X', 'D', 'R', 'V', 'T', 'T', 'P', 'J', 'J', 'J', 'X', 'X', 'B', 'N', 'B', 'B', 'N', 'J', 'T', 'T', 'N', 'N', 'M', 'T', 'M', 'M', 'V', 'P', 'P', 'P', 'J', 'J', 'H', 'H', ]); //
  const [test03Letter, setTest03Letter] = useState(['N', 'S', 'Q', 'B', 'H', 'B', 'H', 'S', 'X', 'P', 'X', 'S', 'C', 'X', 'C', 'K', 'M', 'K', 'M', 'K', 'S', 'F', 'V', 'V', 'S', 'F', 'F', 'V', 'C', 'N', 'C', 'N', 'D', 'J', 'D', 'J', ]); //



  const [countLetter, setCountLetter] = useState(0);
  const [countLetter1, setCountLetter1] = useState(0);
  const [countLetter2, setCountLetter2] = useState(0);
  const [countLetter0, setCountLetter0] = useState(0);
  const [countLetter01, setCountLetter01] = useState(0);
  const [countLetter02, setCountLetter02] = useState(0);


  const [flashLetter, setFlashLetter] = useState(false);
  const [flash, setFlash] = useState(false);
  const [letters, setLetters] = useState('');
  const [letter, setLetter] = useState(null);
  const [lttr, setLttr]  = useState(null);
  const [AxiosSend, setAxiosSend] = useState(false);
  const [AxiosSend2, setAxiosSend2] = useState(false);
  const [AxiosSend3, setAxiosSend3] = useState(false);
  const [AxiosSend0, setAxiosSend0] = useState(false);
  const [AxiosSend02, setAxiosSend02] = useState(false);
  const [AxiosSend03, setAxiosSend03] = useState(false);

  const [letterNum, setLetterNum] = useState(0);
  const [test4End, setTest4End] = useState(false);
  const [test4Complete, setTest4Complete] = useState(false);

  const [resp, SetResp] = useState('');


  useEffect(()=>{
    setLetter(letters)
  }, [letters])

  const [keyClicked, SetKeyClicked] = useState('')
  const navigate = useNavigate();

  let count = countLetter;
  let count1 = countLetter1;
  let count2 = countLetter2;
  let count0 = countLetter0;
  let count01 = countLetter01;
  let count02 = countLetter02;


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
    if (userProfile && token) {
      setUserAuth(true);
    } else {
      navigate('/login')
    }
   }, [userProfile])

   useEffect(()=> {
    if (userProfile) {
      if (userProfile._id) {
        setUserId(userProfile._id);
      } else if (userloggedIn._id) {
        setUserId(userloggedIn._id);
      }
    }
  }, [userloggedIn, userProfile])

 useEffect(()=>{
  if (userAuth) {
    if (!userProfile.test4CompletionSctn1v2) {
      setTestBegin(true);
      setFirstPage(true);
    } else if (!userProfile.test4CompletionSctn2v2) {
      setTestBegin2(true)
      setSeventhPage(true);
    } else if (!userProfile.test4CompletionSctn3v2) {
      setTestBegin3(true)
      setTenthPage(true);
    } else if (!userProfile.test4CompletionSctn4v2) {
      setMainTestBegin1(true);
      setThirteenthPage(true);
    } else if (!userProfile.test4CompletionSctn5v2) {
      setMainTestBegin1(true);
      setFifteenthPage(true);
    } else if (!userProfile.test4CompletionSctn6v2) {
      setMainTestBegin1(true);
      setSixteenthPage(true);
    } else {
      setMainTestBegin1(true);
      setTest4End(true)
    }
  }
 },[userAuth ])

  //-----Listen to keyboard events

  useEffect(() => {
    document.addEventListener('keydown', detectSpaceBar, true)
  }, [])

  const detectSpaceBar = (e) => {
    SetKeyClicked(e.key);
  }

  useEffect(() => {
    if (keyClicked === 'Enter' && firstPage) {
      SetKeyClicked('')
      setFirstPage(false)
      setSecondPage(true)
    } else if (keyClicked === 'Enter' && secondPage) {
      SetKeyClicked('')
      setSecondPage(false)
      setThirdPage(true)
    } else if (keyClicked === 'Enter' && thirdPage) {
      SetKeyClicked('')
      setThirdPage(false)
      setFourthPage(true)
    } else if (keyClicked === 'Enter' && fourthPage) {
      SetKeyClicked('')
      setFourthPage(false)
      setFifthPage(true)
      setFifthPage01(true)
    } else if (keyClicked === 'Enter' && fifthPage && fifthPage04) {
      SetKeyClicked('')
      setFifthPage(false)
      setSixthPage(true)
    } else if (keyClicked === 'Enter' && sixthPage) {
      SetKeyClicked('')
      setSixthPage(false)
      setTestBegin(false)
      setStart0Back(true)
    } else if (keyClicked === 'Enter' && testBegin2 && seventhPage) {
      SetKeyClicked('')
      setSeventhPage(false)
      setEightPage(true)
      setEightPage01(true)
    } else if (keyClicked === 'Enter' && ninthPage) {
      SetKeyClicked('')
      setNinthPage(false)
      setStart1Back(true)
    } else if (keyClicked === 'Enter' && testBegin3 && tenthPage) {
      SetKeyClicked('')
      setTenthPage(false)
      setEleventhPage(true)
      setEleventhPage01(true)
    } else if (keyClicked === 'Enter' && twelvethPage) {
      SetKeyClicked('')
      setTestBegin3(false)
      setTwelvethPage(false)
      setStart2Back(true)
    } else if (keyClicked === 'Enter' && mainTestBegin1 && thirteenthPage) {
      SetKeyClicked('')
      setThirteenthPage(false)
      setFourteenthPage(true)
    } else if (keyClicked === 'Enter' && fourteenthPage) {
      SetKeyClicked('')
      setFourteenthPage(false)
      setMainTestBegin1(false)
      setStart0BackTest(true)
    } else if (keyClicked === 'Enter' && fifteenthPage) {
      SetKeyClicked('')
      setFifteenthPage(false)
      setStart1BackTest(true)
    } else if (keyClicked === 'Enter' && sixteenthPage) {
      SetKeyClicked('')
      setSixteenthPage(false)
      setMainTestBegin1(false)
      setStart2BackTest(true)
    }

 }, [keyClicked, count, plusSign, countLetter, testBegin1])

  //-------------------------------------------

  const startTest = () => {
    setFirstPage(false)
    setSecondPage(true)
  }
  const startTest2 = () => {
    setSecondPage(false)
    setThirdPage(true)
  }
  const startTest3 = () => {
    setThirdPage(false)
    setFourthPage(true)
  }
  const startTest4 = () => {
    setFourthPage(false)
    setFifthPage(true)
    setFifthPage01(true)
  }
  const startTest5 = () => {
    setFifthPage(false)
    setSixthPage(true)
  }
  const startTest6 = () => {
    setSixthPage(false)
    setTestBegin(false)
    setStart0Back(true)
  }
  const startTest7 = () => {
    setSeventhPage(false)
    setEightPage(true)
    setEightPage01(true)
  }
  const startTest8 = () => {
    setEightPage(false)
    setNinthPage(true)
  }
  const startTest9 = () => {
    setNinthPage(false)
    setStart1Back(true)
  }

  const startTest10 = () => {
    setTenthPage(false)
    setEleventhPage(true)
    setEleventhPage01(true)
  }
  const startTest11 = () => {
    setEleventhPage(false)
    setTwelvethPage(true)
  }
  const startTest12 = () => {
    setTestBegin3(false)
    setTwelvethPage(false)
    setStart2Back(true)
  }
  const startTest13 = () => {
    setThirteenthPage(false)
    setFourteenthPage(true)
  }
  const startTest14 = () => {
    setFourteenthPage(false)
    setMainTestBegin1(false)
    setStart0BackTest(true)
  }
  const startTest15 = () => {
    setFifteenthPage(false)
    setStart1BackTest(true)
  }
  const startTest16 = () => {
    setSixteenthPage(false)
    setMainTestBegin1(false)
    setStart2BackTest(true)
  }

  const handleFirstSessionEnd = () => {
    // setSeventeenthPage(false)
    // setStart1BackTest(true)
    setTest4Complete(true)
  }

  useEffect(()=>{
    if (flashLetter) {
      setFlash(true)
    }
  }, [flashLetter])

  // 0-Back Practice
  useEffect(()=>{
    if (start0Back) {
      setStart0Back(false)
      if (count < test1Letter.length + 1) {
        setLetters(test1Letter[count]);
        setLttr(test1Letter[count - 1]);
        setTestBegin1(true)
        setPlusSign(true)
        setTimeout(()=>{
          setAxiosSend(true);
          setPlusSign(false)
          setFlashLetter(true)
          count = countLetter + 1;
          setCountLetter(count);
        }, 3500)
        setTimeout(()=>{
          setFlashLetter(false)
          setFlash(false)
          setStart0Back(true)
        }, 4000)
        if (count === test1Letter.length ) {
          setPlusSign(true)
          setTimeout(()=>{
            setPlusSign(false)
            setAxiosSend(true);
          }, 7500)
        }
      }
    }
  }, [start0Back, plusSign])

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

  // 1-Back Practice
  useEffect(()=>{
    if (start1Back) {
      setStart1Back(false)
      if (count1 < test2Letter.length + 1) {
        setLetters(test2Letter[count1]);
        setLttr(test2Letter[count1 - 1]);
        setTestBegin1(true)
        setPlusSign(true)
        setTimeout(()=>{
          setAxiosSend2(true);
          setPlusSign(false)
          setFlashLetter(true)
          count1 = countLetter1 + 1;
          setCountLetter1(count1);
        }, 3500)
        setTimeout(()=>{
          setFlashLetter(false)
          setFlash(false)
          setStart1Back(true)
        }, 4000)
        if (count1 === test2Letter.length ) {
          setPlusSign(true)
          setTimeout(()=>{
            setPlusSign(false)
            setAxiosSend2(true);
          }, 7500)
        }
      }
    }
  }, [start1Back, plusSign])

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

  // 2-Back Practice
  useEffect(()=>{
    if (start2Back) {
      setStart2Back(false)
      if (count2 < test3Letter.length + 1) {
        setLetters(test3Letter[count2]);
        setLttr(test3Letter[count2 - 1]);

        setTestBegin1(true)
        setPlusSign(true)
        setTimeout(()=>{
          setAxiosSend3(true);
          setPlusSign(false)
          setFlashLetter(true)
          count2 = countLetter2 + 1;
          setCountLetter2(count2);
        }, 3500)
        setTimeout(()=>{
          setFlashLetter(false)
          setFlash(false)
          setStart2Back(true)
        }, 4000)
        if (count2 === test3Letter.length ) {
          setPlusSign(true)
          setTimeout(()=>{
            setPlusSign(false)
            setAxiosSend3(true);
          }, 7500)
        }
      }
    }
  }, [start2Back, plusSign])

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
    if (AxiosSend && plusSign && (count <= test1Letter.length)) {
        keyC = keyClicked;
        const key = 'Letter'+ count;

        const obj = {
          [`${key}`]: {letter: lttr, response: keyC}
        }

        const param = {_id: userProfile._id, obj};
        if (count > 0) {
        //  console.log('Param :', param)
          axios.post('/api/test4section1v2', param)
          .then((res)=>{
            // console.log('Res data :', res.data.Test4Section1)
            if (count === test1Letter.length) {
              let complete = {_id: userProfile._id, test4CompletionSctn1v2: true};
              // console.log('Complete :', complete)
              axios.post('/api/user', complete)
              .then((res) => {
                setTimeout(()=>{
                  // setLttr(null)
                  setTestBegin1(false)
                  setTestBegin2(true)
                  setSeventhPage(true)
                }, 3700)
                // navigate('/cognitivetest4')
              }
            )}

          })
        }
        setAxiosSend(false)
        SetKeyClicked('')
    }
  },[AxiosSend, plusSign, count, flash, letter, lttr])

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
          axios.post('/api/test4section4v2', param)
          .then((res)=>{
            // setLttr(null)
            if (count0 === test01Letter.length) {
              let complete = {_id: userProfile._id, test4CompletionSctn4v2: true};
              axios.post('/api/user', complete)
              .then((res) => {
                setTimeout(()=>{
                  setTestBegin1(false)
                  setMainTestBegin1(true)
                  setFifteenthPage(true)
                }, 3700)
              })
            }
          })
        }
        setAxiosSend0(false)
        SetKeyClicked('')
    }
  },[AxiosSend0, plusSign, count0, flash, letter, lttr])

  useEffect(()=>{
    let keyC;
    if (AxiosSend2 && plusSign && (count1 <= test2Letter.length)) {
        keyC = keyClicked;
        const key = 'Letter'+ count1;
        const obj = {
          [`${key}`]: {letter: lttr, response: keyC}
        }
        const param = {_id: userProfile._id, obj};
        if (count1 > 0 && lttr) {
          axios.post('/api/test4section2v2', param)
          .then((res)=>{
            // setLttr(null)
            if (count1 === test2Letter.length) {
              let complete = {_id: userProfile._id, test4CompletionSctn2v2: true};
              // console.log('Complete :', complete)
              axios.post('/api/user', complete)
              .then((res) => {
                setTimeout(()=>{
                  setTestBegin1(false)
                  setTestBegin2(false)
                  setTestBegin3(true)
                  setTenthPage(true)
                }, 3700)
              })
            }
          })
        }
        setAxiosSend2(false)
        SetKeyClicked('')
    }
  },[AxiosSend2, plusSign, count1, flash, letter, lttr])

  useEffect(()=>{
    let keyC;
    if (AxiosSend02 && plusSign && (count01 <= test02Letter.length)) {
        keyC = keyClicked;
        const key = 'Letter'+ count01;
        const obj = {
          [`${key}`]: {letter: lttr, response: keyC}
        }
        const param = {_id: userProfile._id, obj};
        if (count01 > 0) {
          axios.post('/api/test4section5v2', param)
          .then((res)=>{
            // console.log('Res data :', res.data.Test4Section1)
            if (count01 === test02Letter.length) {
              let complete = {_id: userProfile._id, test4CompletionSctn5v2: true};
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
    }
  },[AxiosSend02, plusSign, count01, flash, letter, lttr])

  useEffect(()=>{
    let keyC;
    if (AxiosSend3 && plusSign && (count2 <= test3Letter.length)) {
        keyC = keyClicked;
        const key = 'Letter'+ count2;
        const obj = {
          [`${key}`]: {letter: lttr, response: keyC}
        }

        const param = {_id: userProfile._id, obj};
        if (count2 > 0) {
          axios.post('/api/test4section3v2', param)
          .then((res)=>{
            // console.log('Res data :', res.data.Test4Section3)
            if (count2 === test3Letter.length) {
              let complete = {_id: userProfile._id, test4CompletionSctn3v2: true};
              axios.post('/api/user', complete)
              .then((res) => {
                setTimeout(()=>{
                  setMainTestBegin1(true)
                  setTestBegin1(false)
                  setTestBegin2(false)
                  setTestBegin3(false)
                  setThirteenthPage(true)
                }, 3700)
              })
            }
          })
        }
        setAxiosSend3(false)
        SetKeyClicked('')
    }
  },[AxiosSend3, plusSign, count2, flash, letter, lttr])

  useEffect(()=>{
    let keyC;
    if (AxiosSend03 && plusSign && (count02 <= test03Letter.length)) {
        keyC = keyClicked;
        const key = 'Letter'+ count02;
        const obj = {
          [`${key}`]: {letter: lttr, response: keyC}
        }
        const param = {_id: userProfile._id, obj};
        if (count02 > 0 && lttr) {
          axios.post('/api/test4section6v2', param)
          .then((res)=>{
            if (count02 === test03Letter.length) {
              const now = moment();
              const timeC = now._d;
              let complete = {_id: userProfile._id, test4CompletionSctn6v2: true, Sctn6CompletionTimev2: timeC };
              axios.post('/api/user', complete)
              .then((res) => {
                setTimeout(()=>{
                  setTestBegin1(false)
                  setMainTestBegin1(true)
                  setTest4End(true)
                }, 3700)
              })
              .catch((err)=>{

              })
            }
          })
        }
        setAxiosSend03(false)
        SetKeyClicked('')
    }
  },[AxiosSend03, plusSign, count02, flash, letter, lttr])

  useEffect(()=>{
    if (test4Complete) {
      let complete = {_id: userId, test4Completionv2: true, email: userProfile.email, name: userProfile.name };
      axios.post('/api/user', complete)
      .then((res) => {
        navigate('/cognitivetest1recallv2')
      })
      .catch((err)=>{

      })
    }
  }, [test4Complete])

  const zeroPrac1 = () => {
    setFifthPage01(false)
    setFifthPage02(true)
  }

  const zeroPrac2 = () => {
    setFifthPage02(false)
    setFifthPage03(true)
  }

  const zeroPrac2Prev = () => {
    setFifthPage02(false)
    setFifthPage01(true)
  }

  const zeroPrac3 = () => {
    setFifthPage03(false)
    setFifthPage04(true)
  }

  const zeroPrac3Prev = () => {
    setFifthPage03(false)
    setFifthPage02(true)
  }

  const zeroPrac4Prev = () => {
    setFifthPage04(false)
    setFifthPage03(true)
  }

  const onePrac1 = () => {
    setEightPage01(false)
    setEightPage02(true)
  }

  const onePrac2 = () => {
    setEightPage02(false)
    setEightPage03(true)
  }

  const onePrac2Prev = () => {
    setEightPage02(false)
    setEightPage01(true)
  }

  const onePrac3 = () => {
    setEightPage03(false)
    setEightPage04(true)
  }

  const onePrac3Prev = () => {
    setEightPage03(false)
    setEightPage02(true)
  }

  const onePrac4Prev = () => {
    setEightPage04(false)
    setEightPage03(true)
  }

  const onePrac4 = () => {
    setEightPage04(false)
    setEightPage05(true)
  }

  const onePrac5Prev = () => {
    setEightPage05(false)
    setEightPage04(true)
  }

  const twoPrac1 = () => {
    setEleventhPage01(false)
    setEleventhPage02(true)
  }

  const twoPrac2 = () => {
    setEleventhPage02(false)
    setEleventhPage03(true)
  }

  const twoPrac2Prev = () => {
    setEleventhPage02(false)
    setEleventhPage01(true)
  }

  const twoPrac3 = () => {
    setEleventhPage03(false)
    setEleventhPage04(true)
  }

  const twoPrac3Prev = () => {
    setEleventhPage03(false)
    setEleventhPage02(true)
  }

  const twoPrac4Prev = () => {
    setEleventhPage04(false)
    setEleventhPage03(true)
  }

  const twoPrac4 = () => {
    setEleventhPage04(false)
    setEleventhPage05(true)
  }

  const twoPrac5Prev = () => {
    setEleventhPage05(false)
    setEleventhPage04(true)
  }

  const twoPrac5 = () => {
    setEleventhPage05(false)
    setEleventhPage06(true)
  }

  const twoPrac6Prev = () => {
    setEleventhPage06(false)
    setEleventhPage05(true)
  }


    return (
      <>
      {userAuth ?
      <>
        <NavigationBar />
       {testBegin ?

        <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center', height: '100vh', maxWidth: '100vw', background: '#000', color: '#fff', top: 0, bottom: 0, }} >

          {firstPage ?
          <>
          <div style={centerScreen} >
            <h1 style={{ color: '#e67373', fontSize: 50, }} >TEST 4</h1>
            <div style={{ fontSize: 35, fontWeight: 700, display: 'flex', padding: '110px 40px 120px 40px', lineHeight: '1.6', }} >
            [Press ENTER or click start to continue.]
            </div>
            <div>
              <button onClick={startTest} >Start</button>
            </div>
          </div>
          </>
          :
          null}
          {secondPage ?
          <>
          <div style={centerScreen} >
            <h1 style={{ color: '#e67373', fontSize: 50, }} >TEST 4 - N BACK</h1>
            <div style={{ fontSize: 35, fontWeight: 700, display: 'flex', padding: '110px 40px 120px 40px', lineHeight: '1.6', }} >
            This task involves viewing single letters presented one at a time.
            Your job is to determine whether or not the letter currently on the screen is a target or a non-target.<br/> <br/>
            [Press ENTER or click next to continue.]
            </div>
            <div>
              <button onClick={startTest2} >Next</button>
            </div>
          </div>
          </>
          :
          null}
          {thirdPage ?
          <>
          <div style={centerScreen} >
            <h1 style={{ color: '#e67373', fontSize: 50, }} >TEST 4 - N BACK</h1>
            <div style={{ fontSize: 35, fontWeight: 700, display: 'flex', padding: '110px 40px 120px 40px', lineHeight: '1.6', }} >
            If the letter on the screen is a target you should press 1. If the letter on the screen is a non-target you should press 2. <br/>
            Let's try a few practice trials of each condition you will see.  <br /><br/>
            [Press ENTER or click next to continue.]
            </div>
            <div>
              <button onClick={startTest3} >Next</button>
            </div>
          </div>
          </>
          :
          null}
          {fourthPage ?
            <>
            <div style={centerScreen} >
              <h1 style={{ color: '#e67373', fontSize: 50, }} >TEST 4 - ZERO BACK PRACTICE</h1>
              <div style={{ fontSize: 35, fontWeight: 700, display: 'flex', padding: '70px 40px 120px 40px', lineHeight: '1.6', }} >
              In this condition the letter 'Z' is the target and all other letters are non-targets. So if you see a Z on the screen you should press 1 (target), and if you see any other letter you should press 2 (non-target). <br/>
              Lets go through an example to see how it works. <br /><br />
              [Press ENTER or click next to continue.]
              </div>
              <div>
                <button onClick={startTest4} >Next</button>
              </div>
            </div>
            </>
            :
          null}
          {fifthPage ?
            <>
            <div style={centerScreen} >
              <h1 style={{ color: '#e67373', display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: 50, marginLeft: '10%' }} >TEST 4 - ZERO BACK PRACTICE</h1>
              <div style={{ width: '60%', display: 'flex', padding: '20px 40px 20px 40px', }} >
               <>
                 {fifthPage01 ?
                  <div>
                    <div style={{ display: 'flex', flexDirection: 'inline-block', alignItems: 'center', }}>
                      <img
                        alt="Test3-Rating"
                        src='https://res.cloudinary.com/entazesoftware/image/upload/v1679848199/Screenshot_2023-03-26_at_18.25.43_rosshy.png'
                        style={PracticeStyle }
                      />
                    </div>
                  </div>
                 : null}
                 {fifthPage02 ?
                 <div>
                  <div style={{ display: 'flex',  alignItems: 'center', }}>
                    <img
                      alt="Test3-Rating"
                      src='https://res.cloudinary.com/entazesoftware/image/upload/v1679848198/Screenshot_2023-03-26_at_18.26.06_lujplc.png'
                      style={PracticeStyle }
                    />
                  </div>
                </div>
                : null}
                {fifthPage03 ?
                <div>
                  <div style={{ display: 'flex',  alignItems: 'center', }}>
                    <img
                      alt="Test3-Rating"
                      src='https://res.cloudinary.com/entazesoftware/image/upload/v1679848198/Screenshot_2023-03-26_at_18.26.24_c8fjb5.png'
                      style={PracticeStyle }
                    />
                  </div>
                </div>
                : null}
                {fifthPage04 ?
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', }}>
                      <img
                        alt="Test3-Rating"
                        src='https://res.cloudinary.com/entazesoftware/image/upload/v1679848199/Screenshot_2023-03-26_at_18.26.47_ntncfb.png'
                        style={PracticeStyle }
                      />
                    </div>
                  </div>
                 : null}
               </>
              </div>
              {fifthPage01 ?
                <div style={{ display: "flex", margin: "4px 4px 4px 5px", alignItems: 'center', }}>
                  <button onClick={zeroPrac1} >Next</button>
                </div>
              : null}
               {fifthPage02 ?
                <div style={{ display: "flex", margin: "4px 4px 4px 5px", alignItems: 'center', }}>
                  <button onClick={zeroPrac2Prev} style={{ margin: '0 55px'}} >Previous</button> <button onClick={zeroPrac2} >Next</button>
                </div>
              : null}
               {fifthPage03 ?
                <div style={{ display: "flex", margin: "4px 4px 4px 5px", alignItems: 'center', }}>
                  <button onClick={zeroPrac3Prev} style={{ margin: '0 55px'}} >Previous</button> <button onClick={zeroPrac3} >Next</button>
                </div>
              : null}
               {fifthPage04 ?
                <div style={{ display: "flex", margin: "4px 4px 4px 5px", alignItems: 'center', }}>
                  <button onClick={zeroPrac4Prev} style={{ margin: '0 55px'}} >Previous</button> <button onClick={startTest5} >Next</button>
                </div>
              : null}
            </div>
            </>
            :
          null}
          {sixthPage ?
            <>
            <div style={centerScreen} >
              <h1 style={{ color: '#e67373', fontSize: 50, }} >TEST 4 - ZERO BACK PRACTICE</h1>
              <div style={{ fontSize: 35, fontWeight: 700, display: 'flex', padding: '110px 40px 120px 40px', lineHeight: '1.6', }} >
              The practice test will now begin. Remember to press 1 if the letter is a target and 2 if the letter is not a target.<br /><br />
              [Press ENTER or click start to continue.]
              </div>
              <div>
                <button onClick={startTest6} >Start</button>
              </div>
            </div>
            </>
            :
          null}

        </div>
      :null}
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
      {testBegin2 && !testBegin1 ?
          <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center', height: '100vh', maxWidth: '100vw', background: '#000', color: '#fff', top: 0, bottom: 0, }} >
            {seventhPage ?
              <>
                <div style={centerScreen} >
                  <h1 style={{ color: '#e67373', fontSize: 50, }} >TEST 4 - ONE BACK PRACTICE</h1>
                  <div style={{ fontSize: 35, fontWeight: 700, display: 'flex', padding: '110px 40px 120px 40px', lineHeight: '1.6', }} >
                  In this next condition a letter is a target if it is the same as the letter that came one before it.
                  Lets go through an example to see how it works.<br /><br />
                  [Press ENTER or click next to continue.]
                  </div>
                  <div>
                    <button onClick={startTest7} >Next</button>
                  </div>
                </div>
              </>
            : null}
            {eightPage ?
            <>
            <div style={centerScreen} >
              <h1 style={{ color: '#e67373', fontSize: 50, }} >TEST 4 - ONE BACK PRACTICE</h1>

              <div style={{ width: '60%', display: 'flex', padding: '20px 40px 20px 40px', }} >
               <>
                 {eightPage01 ?
                  <div>
                    <div style={{ display: 'flex', flexDirection: 'inline-block', alignItems: 'center', }}>
                      <img
                        alt="Test3-Rating"
                        src='https://res.cloudinary.com/entazesoftware/image/upload/v1679848990/Screenshot_2023-03-26_at_18.41.01_t57nhw.png'
                        style={PracticeStyle }
                      />
                    </div>
                  </div>
                 : null}
                 {eightPage02 ?
                 <div>
                  <div style={{ display: 'flex',  alignItems: 'center', }}>
                    <img
                      alt="Test3-Rating"
                      src='https://res.cloudinary.com/entazesoftware/image/upload/v1679848990/Screenshot_2023-03-26_at_18.41.22_gq6gxo.png'
                      style={PracticeStyle }
                    />
                  </div>
                </div>
                : null}
                {eightPage03 ?
                <div>
                  <div style={{ display: 'flex',  alignItems: 'center', }}>
                    <img
                      alt="Test3-Rating"
                      src='https://res.cloudinary.com/entazesoftware/image/upload/v1679848990/Screenshot_2023-03-26_at_18.41.41_axposx.png'
                      style={PracticeStyle }
                    />
                  </div>
                </div>
                : null}
                {eightPage04 ?
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', }}>
                      <img
                        alt="Test3-Rating"
                        src='https://res.cloudinary.com/entazesoftware/image/upload/v1679848990/Screenshot_2023-03-26_at_18.42.00_jxaxh2.png'
                        style={PracticeStyle }
                      />
                    </div>
                  </div>
                 : null}
                 {eightPage05 ?
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', }}>
                      <img
                        alt="Test3-Rating"
                        src='https://res.cloudinary.com/entazesoftware/image/upload/v1679848991/Screenshot_2023-03-26_at_18.42.21_kknhqg.png'
                        style={PracticeStyle }
                      />
                    </div>
                  </div>
                 : null}
               </>
              </div>
              {eightPage01 ?
                <div style={{ display: "flex", margin: "4px 4px 4px 5px", alignItems: 'center', }}>
                  <button onClick={onePrac1} >Next</button>
                </div>
              : null}
               {eightPage02 ?
                <div style={{ display: "flex", margin: "4px 4px 4px 5px", alignItems: 'center', }}>
                  <button onClick={onePrac2Prev} style={{ margin: '0 55px'}} >Previous</button> <button onClick={onePrac2} >Next</button>
                </div>
              : null}
               {eightPage03 ?
                <div style={{ display: "flex", margin: "4px 4px 4px 5px", alignItems: 'center', }}>
                  <button onClick={onePrac3Prev} style={{ margin: '0 55px'}} >Previous</button> <button onClick={onePrac3} >Next</button>
                </div>
              : null}
               {eightPage04 ?
                <div style={{ display: "flex", margin: "4px 4px 4px 5px", alignItems: 'center', }}>
                  <button onClick={onePrac4Prev} style={{ margin: '0 55px'}} >Previous</button> <button onClick={onePrac4} >Next</button>
                </div>
              : null}
               {eightPage05 ?
                <div style={{ display: "flex", margin: "4px 4px 4px 5px", alignItems: 'center', }}>
                  <button onClick={onePrac5Prev} style={{ margin: '0 55px'}} >Previous</button> <button onClick={startTest8} >Next</button>
                </div>
              : null}


            </div>
            </>
            :
          null}
         {ninthPage ?
            <>
            <div style={centerScreen} >
              <h1 style={{ color: '#e67373', fontSize: 50, }} >TEST 4 - ONE BACK PRACTICE</h1>
              <div style={{ fontSize: 35, fontWeight: 700, display: 'flex', padding: '110px 40px 120px 40px', lineHeight: '1.6', }} >
              The practice test will now begin. Remember to press 1 if the letter is a target and 2 if the letter is not a target.<br /><br />
              [Press ENTER or click start to continue.]
              </div>
              <div>
                <button onClick={startTest9} >Start</button>
              </div>
            </div>
            </>
            :
          null}
         </div>
      :null}

      {testBegin3 ?
          <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center', height: '100vh', maxWidth: '100vw', background: '#000', color: '#fff', top: 0, bottom: 0, }} >
            {tenthPage ?
              <>
                <div style={centerScreen} >
                  <h1 style={{ color: '#e67373', fontSize: 50, }} >TEST 4 - TWO BACK PRACTICE</h1>
                  <div style={{ fontSize: 35, fontWeight: 700, display: 'flex', padding: '110px 40px 120px 40px', lineHeight: '1.6', }} >
                  In this last condition a letter is a target if it is the same as the letter that came two before it.
                  Lets go through an example to see how it works.<br /><br />
                  [Press ENTER or click next to continue.]
                  </div>
                  <div>
                    <button onClick={startTest10} >Next</button>
                  </div>
                </div>
              </>
            : null}
            {eleventhPage ?
            <>
            <div style={centerScreen} >
              <h1 style={{ color: '#e67373', fontSize: 50, }} >TEST 4 - TWO BACK PRACTICE</h1>
                <div style={{ width: '60%', display: 'flex', padding: '20px 40px 20px 40px', }} >
               <>
                 {eleventhPage01 ?
                  <div>
                    <div style={{ display: 'flex', flexDirection: 'inline-block', alignItems: 'center', }}>
                      <img
                        alt="Test3-Rating"
                        src='https://res.cloudinary.com/entazesoftware/image/upload/v1679852467/Screenshot_2023-03-26_at_19.19.06_tgingh.png'
                        style={PracticeStyle }
                      />
                    </div>
                  </div>
                 : null}
                 {eleventhPage02 ?
                 <div>
                  <div style={{ display: 'flex',  alignItems: 'center', }}>
                    <img
                      alt="Test3-Rating"
                      src='https://res.cloudinary.com/entazesoftware/image/upload/v1679852467/Screenshot_2023-03-26_at_19.19.49_znduq4.png'
                      style={PracticeStyle }
                    />
                  </div>
                </div>
                : null}
                {eleventhPage03 ?
                <div>
                  <div style={{ display: 'flex',  alignItems: 'center', }}>
                    <img
                      alt="Test3-Rating"
                      src='https://res.cloudinary.com/entazesoftware/image/upload/v1679852467/Screenshot_2023-03-26_at_19.20.18_miu86x.png'
                      style={PracticeStyle }
                    />
                  </div>
                </div>
                : null}
                {eleventhPage04 ?
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', }}>
                      <img
                        alt="Test3-Rating"
                        src='https://res.cloudinary.com/entazesoftware/image/upload/v1679852467/Screenshot_2023-03-26_at_19.21.39_dm9qvp.png'
                        style={PracticeStyle }
                      />
                    </div>
                  </div>
                 : null}
                 {eleventhPage05 ?
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', }}>
                      <img
                        alt="Test3-Rating"
                        src='https://res.cloudinary.com/entazesoftware/image/upload/v1679852467/Screenshot_2023-03-26_at_19.39.11_l65lqo.png'
                        style={PracticeStyle }
                      />
                    </div>
                  </div>
                 : null}
                 {eleventhPage06 ?
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', }}>
                      <img
                        alt="Test3-Rating"
                        src='https://res.cloudinary.com/entazesoftware/image/upload/v1679852467/Screenshot_2023-03-26_at_19.39.36_wbdnjg.png'
                        style={PracticeStyle }
                      />
                    </div>
                  </div>
                 : null}
               </>
              </div>
              {eleventhPage01 ?
                <div style={{ display: "flex", margin: "4px 4px 4px 5px", alignItems: 'center', }}>
                  <button onClick={twoPrac1} >Next</button>
                </div>
              : null}
               {eleventhPage02 ?
                <div style={{ display: "flex", margin: "4px 4px 4px 5px", alignItems: 'center', }}>
                  <button onClick={twoPrac2Prev} style={{ margin: '0 55px'}} >Previous</button> <button onClick={twoPrac2} >Next</button>
                </div>
              : null}
               {eleventhPage03 ?
                <div style={{ display: "flex", margin: "4px 4px 4px 5px", alignItems: 'center', }}>
                  <button onClick={twoPrac3Prev} style={{ margin: '0 55px'}} >Previous</button> <button onClick={twoPrac3} >Next</button>
                </div>
              : null}
               {eleventhPage04 ?
                <div style={{ display: "flex", margin: "4px 4px 4px 5px", alignItems: 'center', }}>
                  <button onClick={twoPrac4Prev} style={{ margin: '0 55px'}} >Previous</button> <button onClick={twoPrac4} >Next</button>
                </div>
              : null}
              {eleventhPage05 ?
                <div style={{ display: "flex", margin: "4px 4px 4px 5px", alignItems: 'center', }}>
                  <button onClick={twoPrac5Prev} style={{ margin: '0 55px'}} >Previous</button> <button onClick={twoPrac5} >Next</button>
                </div>
              : null}
               {eleventhPage06 ?
                <div style={{ display: "flex", margin: "4px 4px 4px 5px", alignItems: 'center', }}>
                  <button onClick={twoPrac6Prev} style={{ margin: '0 55px'}} >Previous</button> <button onClick={startTest11} >Next</button>
                </div>
              : null}

            </div>
            </>
            :
          null}
         {twelvethPage ?
            <>
            <div style={centerScreen} >
              <h1 style={{ color: '#e67373', fontSize: 50, }} >TEST 4 - TWO BACK PRACTICE</h1>
              <div style={{ fontSize: 35, fontWeight: 700, display: 'flex', padding: '110px 40px 120px 40px', lineHeight: '1.6', }} >
              The practice test will now begin. Remember to press 1 if the letter is a target and 2 if the letter is not a target.<br /><br />
              [Press ENTER or click start to continue.]
              </div>
              <div>
                <button onClick={startTest12} >Start</button>
              </div>
            </div>
            </>
            :
          null}
         </div>
      :null}

      {mainTestBegin1 ?
          <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center', height: '100vh', maxWidth: '100vw', background: '#000', color: '#fff', top: 0, bottom: 0, }} >
            {thirteenthPage ?
              <>
                <div style={centerScreen} >
                  <h1 style={{ color: '#e67373', fontSize: 50, }} >TEST 4 - ZERO BACK</h1>
                  <div style={{ fontSize: 35, fontWeight: 700, display: 'flex', padding: '110px 40px 120px 40px', lineHeight: '1.6', }} >
                  Now let's move on to the real trials. The test will take about 10 minutes to complete.<br /><br />
                  [Press ENTER or click next to continue.]
                  </div>
                  <div>
                    <button onClick={startTest13} >Next</button>
                  </div>
                </div>
              </>
            : null}
            {fourteenthPage ?
            <>
            <div style={centerScreen} >
              <h1 style={{ color: '#e67373', fontSize: 50, }} >TEST 4 - ZERO BACK</h1>
              <div style={{ fontSize: 35, fontWeight: 700, display: 'flex', padding: '110px 40px 120px 40px', lineHeight: '1.6', }} >
              In this condition the letter 'Z' is the target and all other letters are non-targets. So if you see a Z on the screen you should press 1 (target), and if you see any other letter you should press 2 (non-target).<br /><br />
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
              <h1 style={{ color: '#e67373', fontSize: 50, }} >TEST 4 - ONE BACK</h1>
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
              <h1 style={{ color: '#e67373', fontSize: 50, }} >TEST 4 - TWO BACK</h1>
              <div style={{ fontSize: 35, fontWeight: 700, display: 'flex', padding: '110px 40px 120px 40px', lineHeight: '1.6', }} >
              In this last condition a letter is a target if it is the same as the letter that came two before it. Remember to press 1 if the letter is a target and 2 if the letter is not a target.<br />
              [Press ENTER or click start to begin test.]
              </div>
              <div>
                <button onClick={startTest16}>Start</button>
              </div>
            </div>
            </>
            :
            null}
          {test4End ?
          <>
            <div style={centerScreen} >
            <div style={{ fontSize: 35, fontWeight: 700, display: 'flex', padding: '0px 40px 120px 40px', lineHeight: '1.6', }} >
              Test 4 - N-BACK Completed. <br />
            </div>
            <div>
              <button onClick={handleFirstSessionEnd}>
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

export default Cognitivetest4v2