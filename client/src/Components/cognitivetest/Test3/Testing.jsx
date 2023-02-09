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

const _ = require('lodash')
// import App from '../../App.jsx'


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
  // marginLeft: '10%',
  // marginRight: '10%',
  paddingTop: '10%',
  paddingBottom: '10%',
  flexDirection: 'column',
  // marginTop: '50vh',
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

const TestImages = {
  display: 'flex',
  width: '70vw',
  height: '76vh',
  justifyContent: 'center',
  alignItems: 'center',
  margin: 'auto',
  paddingTop: '14vh',
}

const TestRatings = {
  display: 'flex',
  width: '50vw',
  height: '46vh',
  justifyContent: 'center',
  alignItems: 'center',
  margin: 'auto',
  paddingTop: '14vh',
}

const Cognitivetest3 = () => {
  const { userProfile, cognitiveTest, setCognitiveTest } = useMainContext();
  const [userAuth, setUserAuth] = useState(false);
  const [firstPage, setFirstPage] = useState(null);
  const [secondSection, setSecondPage] = useState(null);
  const [sectionTwoStart, setSectionTwoStart] = useState(false);
  const [sectionTwoClickStart, setSectionTwoClickStart] = useState(false);
  const [startSectionTwo, SetStartSectionTwo] = useState(false);
  const [keyClicked, SetKeyClicked] = useState('')
  const navigate = useNavigate();
  const [Text2, setText2] = useState();
  const [ImagesPage, setImagesPage] = useState(false);
  const [CrossPage, setCrossPage] = useState(false);
  const [RatePage, setRatePage] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [loadedIm2, setLoadedIm2] = useState(false);
  const [loadedRating, setLoadedRating] = useState(false);
  const [imgLoaded, setImgLoaded] = useState(false);
  const [imgLoaded2, setImgLoaded2] = useState(false);
  const [imgLoadedRating, setImgLoadedRating] = useState(false);
  const [Images, SetImages] = useState(
    ['https://res.cloudinary.com/entazesoftware/image/upload/v1668017445/CogniAppTest3-image1_hndzw1.jpg',
    'https://res.cloudinary.com/entazesoftware/image/upload/v1668017446/CogniAppTest3-image2_rk0suf.jpg',
    'https://res.cloudinary.com/entazesoftware/image/upload/v1668017450/CogniAppTest3-image3_xuguvz.jpg',
    'https://res.cloudinary.com/entazesoftware/image/upload/v1668017450/CogniAppTest3-image4_j4a1yz.jpg',
    'https://res.cloudinary.com/entazesoftware/image/upload/v1668017448/CogniAppTest3-image5_pbq5ow.jpg',
    'https://res.cloudinary.com/entazesoftware/image/upload/v1668017450/CogniAppTest3-image6_e8epg4.jpg',
    'https://res.cloudinary.com/entazesoftware/image/upload/v1668017451/CogniAppTest3-image7_i1baxu.jpg',
    'https://res.cloudinary.com/entazesoftware/image/upload/v1668017456/CogniAppTest3-image8_h04gcp.jpg',
    'https://res.cloudinary.com/entazesoftware/image/upload/v1668017452/CogniAppTest3-image9_ww6tqe.jpg',
    'https://res.cloudinary.com/entazesoftware/image/upload/v1668017451/CogniAppTest3-image10_xykhqu.jpg',
    'https://res.cloudinary.com/entazesoftware/image/upload/v1668017457/CogniAppTest3-image11_bank5i.jpg',
    'https://res.cloudinary.com/entazesoftware/image/upload/v1668017457/CogniAppTest3-image12_ccr8ix.jpg',
    // 'https://res.cloudinary.com/entazesoftware/image/upload/v1668017462/CogniAppTest3-image13_ow3emf.jpg',
    // 'https://res.cloudinary.com/entazesoftware/image/upload/v1668017457/CogniAppTest3-image14_hxzo2c.jpg',
    // 'https://res.cloudinary.com/entazesoftware/image/upload/v1668017469/CogniAppTest3-image15_mrurmv.jpg',
    // 'https://res.cloudinary.com/entazesoftware/image/upload/v1668017462/CogniAppTest3-image16_rgubmh.jpg',
    // 'https://res.cloudinary.com/entazesoftware/image/upload/v1668017462/CogniAppTest3-image17_qs0or9.jpg',
    // 'https://res.cloudinary.com/entazesoftware/image/upload/v1668017459/CogniAppTest3-image18_oyy7mo.jpg',
    // 'https://res.cloudinary.com/entazesoftware/image/upload/v1668017464/CogniAppTest3-image19_h8g3jb.jpg',
    // 'https://res.cloudinary.com/entazesoftware/image/upload/v1668017463/CogniAppTest3-image20_fykwam.jpg',

     ]
    );
  const [Images2, SetImages2] = useState([
    'https://res.cloudinary.com/entazesoftware/image/upload/v1668017457/CogniAppTest3-image12_ccr8ix55.jpg',
    'https://res.cloudinary.com/entazesoftware/image/upload/v1668017462/CogniAppTest3-image13_ow3emf.jpg',
    'https://res.cloudinary.com/entazesoftware/image/upload/v1668017457/CogniAppTest3-image14_hxzo2c.jpg',
    'https://res.cloudinary.com/entazesoftware/image/upload/v1668017469/CogniAppTest3-image15_mrurmv.jpg',
    'https://res.cloudinary.com/entazesoftware/image/upload/v1668017462/CogniAppTest3-image16_rgubmh.jpg',
    'https://res.cloudinary.com/entazesoftware/image/upload/v1668017462/CogniAppTest3-image17_qs0or9.jpg',
    'https://res.cloudinary.com/entazesoftware/image/upload/v1668017459/CogniAppTest3-image18_oyy7mo.jpg',
    'https://res.cloudinary.com/entazesoftware/image/upload/v1668017464/CogniAppTest3-image19_h8g3jb.jpg',
    'https://res.cloudinary.com/entazesoftware/image/upload/v1668017463/CogniAppTest3-image20_fykwam.jpg',
  ])
  const [ImageRating, setImageRating] = useState(null);
  const [UnratedImages, SetUnratedImages] = useState();
  const [UnratedImages2, SetUnratedImages2] = useState();
  const [srcIm, SetSrcIm] = useState();
  const [countModal, setCountModal] = useState(0);

  let count = countModal;
  let countIm2 = countModal;



  useEffect(() => {
    if (UnratedImages) {
      // console.log('Section 1 - UnratedImages :', UnratedImages)
      if (UnratedImages.length > 0) {
        setFirstPage(true)
      } else {
        // setSecondPage(true)
        setSectionTwoStart(true)
      }
    }
  }, [UnratedImages])

  useEffect(() => {
    if (UnratedImages2) {
      // console.log('Section 1 - UnratedImages2 :', UnratedImages2)
      if (UnratedImages2.length > 0) {
        setSectionTwoStart(true)
      } else {
        // setSecondPage(true)
        // setSectionTwoStart(true)
        navigate('/test-end')
      }
    }
  }, [UnratedImages2])

  useEffect(() => {
    if (UnratedImages && imgLoaded) {
        if (count <=  UnratedImages.length - 1) {
          SetSrcIm(UnratedImages[count])
          setTimeout(() => {
            setCrossPage(false);
            count = (countModal + 1);
            setCountModal(count);
          }, 14000);
          setTimeout(() => {
            setImagesPage(false);
            setRatePage(true);
          }, 6000)
          setTimeout(() => {
            setRatePage(false)
            if (count <= UnratedImages.length - 2) {
              setCrossPage(true);
            }
          }, 12000)
          setRatePage(false);
          setImagesPage(true);
        }
        //After rating all images, turn rate page off
        setTimeout(() => {
          setRatePage(false);
        }, 3000)
    }

  }, [UnratedImages, count, imgLoaded])

  useEffect(() => {
    if (UnratedImages2 && imgLoaded2) {
      console.log('UnratedImages2 :', UnratedImages2)
        if (countIm2 <=  UnratedImages2.length - 1) {
          console.log()
          SetSrcIm(UnratedImages2[countIm2])
          setTimeout(() => {
            setCrossPage(false);
            countIm2 = (countModal + 1);
            setCountModal(countIm2);
          }, 14000);
          setTimeout(() => {
            setImagesPage(false);
            setRatePage(true);
          }, 6000)
          setTimeout(() => {
            setRatePage(false)
            if (countIm2 <= UnratedImages2.length - 2) {
              setCrossPage(true);
            }
          }, 12000)
          setRatePage(false);
          setImagesPage(true);
        }
        //After rating all images, turn rate page off
        setTimeout(() => {
          setRatePage(false);
        }, 3000)
    }

  }, [UnratedImages2, countIm2, imgLoaded2])

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

  //-----Listen to keyboard events

  useEffect(() => {
    document.addEventListener('keydown', detectSpaceBar, true)
  }, [])

  const detectSpaceBar = (e) => {
    SetKeyClicked(e.key);
  }

  useEffect(() => {
    if (ImagesPage) {
      setImgLoaded(true)
    }
  }, [ImagesPage, loaded])

  useEffect(() => {
    if (ImagesPage) {
      setImgLoaded2(true)
    }
  }, [ImagesPage, loadedIm2])

  useEffect(() => {
    if (RatePage) {
      setImgLoadedRating(true)
      }
  }, [RatePage, loadedRating])

  useEffect(() => {
    if (keyClicked === 'Enter' && firstPage) {
      setFirstPage(false);
      setImagesPage(true);
      SetKeyClicked('');
    }
    if (keyClicked === 'Enter' && sectionTwoStart) {
      setSectionTwoStart(false);
      setSectionTwoClickStart(true);
      SetKeyClicked('');
    }
    if (keyClicked === 'Enter' && sectionTwoClickStart) {
      setSectionTwoClickStart(false);
      SetStartSectionTwo(true);
      SetKeyClicked('');
    }
  }, [keyClicked])

  //-------------------------------------------
  const startTest = () => {
    setFirstPage(false);
    setImagesPage(true);
  }
  const nextText = () => {
    setText2(true);
  }

  useEffect(() => {
    console.log('userProfile :', userProfile)
    if (userProfile) {
      GetUnratedImages();
      GetUnratedImages2();
    }
  }, [userProfile])

  const GetUnratedImages = () => {
    if (userProfile._id) {
      const param = {_id: userProfile._id };
      axios.get('/api/test3Images', {params: param})
      .then((res) => {
        const num = Images.length - res.data.Test3Images.length;
        //Filter Images and set unrated images
        const imgs = _.takeRight(Images, num);
        SetUnratedImages(imgs);
      })
      .catch((err) => {
        console.log(err)
      })
    }
  }

  const GetUnratedImages2 = () => {
    if (userProfile._id) {
      const param = {_id: userProfile._id };
      axios.get('/api/test3Images', {params: param})
      .then((res) => {
        // console.log('resdata Test3Images2 :', res.data.Test3Images2)
        const num = Images.length - res.data.Test3Images2.length;
        //Filter Images and set unrated images
        const imgs = _.takeRight(Images2, num);
        SetUnratedImages2(imgs);
      })
      .catch((err) => {
        console.log(err)
      })
    }
  }


  const SendRating = () => {
    const rating = ImageRating ? ImageRating : 0;
    // For interrupted test due to refresh or sign out
    const interr = Images.length - UnratedImages.length;
    const num = interr + 1;
    // console.log('num :', num)
    const key = 'Image'+ num, value = srcIm;
    const obj = {
      [`${key}`]: {src: value, rating: rating}
    }

    const param = {_id: userProfile._id, obj};
    //Make Axios Post
    axios.post('/api/test3imagerating', param)
    .then((res) => {
      console.log(res.data)
      if ((count === UnratedImages.length - 1)) {
        setSecondPage(true)
        setTimeout(() => {
          setSectionTwoStart(true)
        }, 5000)
      //   let complete = {_id: userProfile._id, test3Completion: true};
      //   axios.post('/api/user', complete)
      //   .then((result) => {
      //    console.log('success post test 2 completion', result)
      //   //  setStartTest2(false)
      //    navigate('/test-end')
      //   })
      }
    })
    .catch((err) => {

    })
    setImageRating(null);
  }

  useEffect(() => {
    if(!RatePage && !ImagesPage && firstPage === false) {
      SendRating();
    }
  }, [RatePage])


  const Rate1 = () => {
    setImageRating(1);
  }
  const Rate2 = () => {
    setImageRating(2);
  }
  const Rate3 = () => {
    setImageRating(3);
  }
  const Rate4 = () => {
    setImageRating(4);
  }
  const Rate5 = () => {
    setImageRating(5);
  }
  const Rate6 = () => {
    setImageRating(6);
  }
  const Rate7 = () => {
    setImageRating(7);
  }
  const Rate8 = () => {
    setImageRating(8);
  }
  const Rate9 = () => {
    setImageRating(9);
  }

  const PreSection2 = () => {
    setSectionTwoStart(false);
    setSectionTwoClickStart(true);
  }

  const Section2 = () => {
    SetUnratedImages(false)
    setSectionTwoClickStart(false);
    // SetStartSectionTwo(true);
    setImagesPage(true);
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
              <h1 style={{ color: '#e67373', fontSize: 50, }} >TEST 3</h1>
              <div style={{ fontSize: 30, fontWeight: 700, display: 'flex', flexDirection: 'column', padding: '60px 40px 120px 40px', lineHeight: '1.6', }} >
              You will see some pictures appear on the screen, one after each other. Some pictures will be positive, some will be neutral, and some will be negative. Please note that some pictures may be offensive to sensitive viewers.
              Please look at each picture carefully and try to remember it. <br />
              {!Text2 ?
              <span>
                [Click next to continue]
              </span>
              : null}
              {Text2 ?
              <>
                <span style={{ paddingTop: '70px' }} >
                You will also need to rate how the picture made you feel on a scale of negative-neutral-positive and calm-neutral-excited.
                </span>
                <span style={{ paddingTop: '40px' }} >
                The scales range from 1 - 9 and you must press the number key that corresponds with how the picture made you feel. <br />
                [Press ENTER or click start to begin test.]
                </span>
              </>
              : null}
              </div>
              {!Text2 ?
                <div>
                  <button onClick={nextText} >Next</button>
                </div>
              : null}
              {Text2 ?
                <div>
                  <button onClick={startTest} >Start</button>
                </div>
              : null}

            </div>
            </>
            :
            null}
            {ImagesPage && UnratedImages && imgLoaded ?
            <>
              <div>
                <img
                  src={srcIm}
                  style={imgLoaded ? TestImages : { display: 'none' }}
                  onLoad={() => setLoaded(true)}
                />
              </div>
              {/* <div style={{ display: "inline-block", margin: "4px" }} >
                <button style={{ margin: "8px", background: "#7e1515" }} onClick={RateImage} >Rate</button>
              </div> */}
            </>
            : null}
            {RatePage && UnratedImages && imgLoadedRating ?
            <>
              <div style={{ display: 'flex', flexDirection: 'inline-block', alignItems: 'center', }}>
                <span style={{ color: '#fff', fontSize: '40px', fontWeight: 700, margin: '20px 15px 0 0' }}>Very Negative</span>
                <img
                  alt="Test3-Rating"
                  src='https://res.cloudinary.com/entazesoftware/image/upload/v1668022235/image2_jezpza.webp'
                  style={imgLoadedRating ? TestRatings : { display: 'none' } }
                  onLoad={() => setLoadedRating(true)}
                />
                <span style={{ color: '#fff', fontSize: '40px', fontWeight: 700, margin: '20px 0 0 15px' }}>Very Positive</span>
              </div>
              <div style={{ display: "inline-block", margin: "4px 4px 4px 18px", }} >
                <button style={{ fontWeight: 700, color: "#000", background: "#7e1515", margin: '3px', width: '5.3vw' }} onClick={Rate1} >1</button>
                <button style={{ fontWeight: 700, color: "#000", background: "#7e1515", margin: '3px', width: '5.3vw' }} onClick={Rate2} >2</button>
                <button style={{ fontWeight: 700, color: "#000", background: "#7e1515", margin: '3px', width: '5.3vw' }} onClick={Rate3} >3</button>
                <button style={{ fontWeight: 700, color: "#000", background: "#7e1515", margin: '3px', width: '5.3vw' }} onClick={Rate4} >4</button>
                <button style={{ fontWeight: 700, color: "#000", background: "#7e1515", margin: '3px', width: '5.3vw' }} onClick={Rate5} >5</button>
                <button style={{ fontWeight: 700, color: "#000", background: "#7e1515", margin: '3px', width: '5.3vw' }} onClick={Rate6} >6</button>
                <button style={{ fontWeight: 700, color: "#000", background: "#7e1515", margin: '3px', width: '5.3vw' }} onClick={Rate7} >7</button>
                <button style={{ fontWeight: 700, color: "#000", background: "#7e1515", margin: '3px', width: '5.3vw' }} onClick={Rate8} >8</button>
                <button style={{ fontWeight: 700, color: "#000", background: "#7e1515", margin: '3px', width: '5.3vw' }} onClick={Rate9} >9</button>
              </div>
              {/* <div style={{ display: "inline-block", margin: "4px" }} >
                <button style={{ margin: "8px", background: "#7e1515" }} onClick={RateImage} >Next</button>
              </div> */}
            </>
            : null}
            {CrossPage ?
                <img
                  style={ {width:'190px', height: '140px' } }
                  src="https://res.cloudinary.com/entazesoftware/image/upload/v1662136021/CognitiveApp/X-logo_mnf03d.jpg"
                />
            : null}
          {secondSection ?
            <>
              <span style={{ fontSize: 40, fontWeight: 700, display: 'flex', flexDirection: 'column', padding: '60px 40px 120px 40px', lineHeight: '1.6', }} >That's all the pictures for now. Try to remember them.</span>
            </>
          : null}
          {sectionTwoStart && !UnratedImages ?
          <div style={{ fontSize: 40, fontWeight: 700, display: 'flex', flexDirection: 'column', padding: '60px 40px 120px 40px', lineHeight: '1.6', alignItems: 'center', justifyContent: 'center', }} >
          Welcome back! <br />
          Just like last time you will see some pictures appear on the screen, one after each other. Again some pictures will be positive, some will be neutral and some will be negative.
          However, some pictures will be the same as last time, but some will be new.
          Please try remember the pictures, as you will be asked later which ones you've seen before and which ones are new.
          You will also need to rate how the picture made you feel.
          Click NEXT or Press ENTER to continue. <br />
            <div>
              <button style={{ margin: "8px", background: "#7e1515" }} onClick={PreSection2} >NEXT</button>
            </div>
          </div>
          : null}
          {sectionTwoClickStart && !sectionTwoStart?
          <div style={{ fontSize: 40, fontWeight: 700, display: 'flex', flexDirection: 'column', padding: '60px 40px 120px 40px', lineHeight: '1.6', alignItems: 'center', justifyContent: 'center', }} >
            So now we will begin! <br />
            Click START or Press ENTER. <br />
            <div>
              <button style={{ margin: "8px", background: "#7e1515" }} onClick={Section2} >START</button>
            </div>
          </div>
          : null}
          {ImagesPage && UnratedImages2 && imgLoaded2 ?
            <>
            {console.log('srcIm :', srcIm)}
              <div>
                <img
                  src={srcIm}
                  style={imgLoaded2 ? TestImages : { display: 'none' } }
                  // style={ TestImages  }

                  onLoad={() => setLoadedIm2(true)}
                />
              </div>
               <div>
              <button style={{ margin: "8px", background: "#7e1515" }} >STRT</button>
            </div>
            </>
            : null}
          {/* {startSectionTwo ?
          <>
            <div>
              <button style={{ margin: "8px", background: "#7e1515" }} >STRT</button>
            </div>
          </>
          : null} */}
          </div>
        </>
       :
       null
       }
      </>
    )
}

export default Cognitivetest3


