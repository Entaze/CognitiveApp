import React, { useEffect, useState } from 'react'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import WithNavi from '../../Layout/WithNavigation.jsx';
import '../../Styles.scss'


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
  const [startPreTest, setStartPreTest] = useState(true)
  const [startTest2, setStartTest] = useState(false)
  const [keyClicked, SetKeyClicked] = useState('')
  const [pages, setPages] = useState( null )



  //-----Listen to keyboard events

  useEffect(() => {
    document.addEventListener('keydown', detectSpaceBar, true)
  }, [])

  const detectSpaceBar = (e) => {
    SetKeyClicked(e.key);
  }

  useEffect(() => {
    if (keyClicked === 'Enter' && startPreTest) {
      setStartPreTest(false);
      containerColorChange();
    }
  }, [keyClicked])

  //-------------------------------------------

  useEffect(() => {
    setPages( document.querySelectorAll(".page") );
  }, [])

    let translateAmount = 100;
    let translate = 0;

    const slideNext = () => {
      console.log('Pages :', pages)
      translate -= translateAmount ;
      pages.forEach(
        pages => (pages.style.transform = `translateX(${translate}%)`)
      );
    }

    const slidePrev = () => {
      translate += translateAmount;
      pages.forEach(
        pages => (pages.style.transform = `translateX(${translate}%)`)
      );
    }


  const containerColorChange = () => {
    setStartPreTest(false);
    setStartTest(true);
    document.getElementById("container").style.backgroundColor = "#000000";
  }

  return (
    <>
      {/* <div id='container' style={Container} >
      {startPreTest ?
        <div style={centerScreen} >
        <Typography style={{ fontSize: 60, marginLeft: '15%', marginBottom: '5%', fontWeight: 700, }}>
          Test 2: Finger Tapping Task.
        </Typography>
        <Typography style={{ fontSize: 40, marginBottom: '5%', fontWeight: 700, }}>
         You will be shown a sequence of numbers on the screen. Using your dominant hand (i.e., the hand you use to write with), type the sequence as fast and accurately as possible. Keep typing the sequence over and over until the numbers disappear. [Press enter or click start to continue]
        </Typography>
        <Button variant="outlined" style={button} onClick={containerColorChange}  type='submit' >
          Start
        </Button>
        </div>
      : null}
      {startTest2 ?
        <div style={centerScreen} >
          <div style={exCenter} >
                <img style={ {width:'190px', height: '140px' } } src="https://res.cloudinary.com/entazesoftware/image/upload/v1662136021/CognitiveApp/X-logo_mnf03d.jpg" />
          </div>
        </div>
      : null}
      </div> */}


    <div className="container">
      <div className="pages">
        <div id="page" className="page one">
          <WithNavi />

          <div style={centerScreen} >
            <div style={{ fontSize: 35, marginBottom: '5%', fontWeight: 700, }}>
            You will be shown a sequence of numbers on the screen. Using your dominant hand (i.e., the hand you use to write with), type the sequence as fast and accurately as possible. Keep typing the sequence over and over until the numbers disappear. [Click next to continue]
            </div>
            <div>
              <button onClick={slideNext} >Next</button>
            </div>
          </div>

        </div>

      <div id="page" className="page two">
        <WithNavi />
        <div style={centerScreen} >
          <div style={exCenter} >
            <img style={{ width: '100%', height: '100%', marginBottom: '20vh' }} src="https://res.cloudinary.com/entazesoftware/image/upload/v1664984224/CogniticeTest-Keyboard_tlpkg2.png" />
          </div>

          <div style={{ fontSize: 35, marginBottom: '1%', fontWeight: 50, marginBottom: '6vh' }}>
            Click previous to re-read instructions or click start to continue to test.
          </div>

          <div style={{ display: "inline-block", margin: "4px" }} >
            <button style={{ margin: "8px", background: "#000" }} onClick={slidePrev} >Previous</button>
            <button style={{ margin: "8px", background: "#7e1515" }} onClick={slidePrev} >Start</button>
          </div>
        </div>


      </div>

    </div>
  </div>

    </>
  )
}

export default Cognitivetest2