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

const _ = require('lodash')


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

const TestImages = {
  display: 'flex',
  width: '70vw',
  height: '60vh',
  justifyContent: 'center',
  alignItems: 'center',
  margin: 'auto',
  border: '10px solid #f5f5f0',
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


function CognitiveTest3Recall () {
  const token = window.localStorage.getItem('token');
  const { userProfile, cognitiveTest, setCognitiveTest } = useMainContext();
  const [user, setUser] = useState(false);
  const [userAuth, setUserAuth] = useState(false);

  const userloggedIn = JSON.parse(window.localStorage.getItem('userLoggedIn'));

  const [firstPage, setFirstPage] = useState(false);
  const [secondPage, setSecondPage] = useState(false);
  const [UnratedImages, SetUnratedImages] = useState(null);
  const [imgLoaded, setImgLoaded] = useState(false);
  const [imgLoaded2, setImgLoaded2] = useState(false);
  const [imgLoadedRating, setImgLoadedRating] = useState(false);
  const [imgLoadedRating2, setImgLoadedRating2] = useState(false);
  const [countModal, setCountModal] = useState(0);
  const [imageNum, setImageNum] = useState(0);
  const [srcIm, SetSrcIm] = useState();
  const [Rating1Call, SetRating1Call] = useState(false);
  const [Rating2Call, SetRating2Call] = useState(false);
  const [RatePage, setRatePage] = useState(false);
  const [RatePage2, setRatePage2] = useState(false);
  const [CrossPage, setCrossPage] = useState(false);
  const [ImagesPage, setImagesPage] = useState(false);
  const [NextImage, SetNextImage] = useState(false);
  const [Timing1, SetTiming1] = useState(false);
  const [Timing2, SetTiming2] = useState(false);
  const [CrossBool, setCrossBool] = useState(false);
  const [secondSection, setSecondSectn] = useState(null);
  const [loaded, setLoaded] = useState(false);
  const [displayCross, setDisplayCross] = useState(false)
  const [testingStart, setTestingStart] = useState(null)
  const [confirmPage, setConfirmPage] = useState(false)
  const [confirmResponse, setConfirmResponse] = useState(null)
  const [loadedRating, setLoadedRating] = useState(false);
  const [loadedRating2, setLoadedRating2] = useState(false);
  const [ImageRating, setImageRating] = useState(null);
  const [ImageRating2, setImageRating2] = useState(null);
  const [AxiosSend, setAxiosSend] = useState(false);
  const [startT, setStartT] = useState(false);
  const [imageConfirm, setImageConfirm] = useState(null);
  const [ImageConfirmed, setImageConfirmed] = useState(false);

  const [test7End, setTest7End] = useState(false);

  const [userId, setUserId] = useState(null);
  const [nav, setNav] = useState(false);
  const classes = useStyles();
  const navigate = useNavigate();
  const [keyClicked, SetKeyClicked] = useState('');

  const [Images, SetImages] = useState(
    [
    'https://res.cloudinary.com/entazesoftware/image/upload/v1680711001/HomelessManSAAPS_2_lkpx1q.jpg',
    'https://res.cloudinary.com/entazesoftware/image/upload/v1680711001/HarborSkyViewSAAPS_tec0qu.jpg',
    'https://res.cloudinary.com/entazesoftware/image/upload/v1680711002/HorsesThreeSAAPS_dztdic.jpg',
    'https://res.cloudinary.com/entazesoftware/image/upload/v1680711001/GymSAAPS_2_ljttck.jpg',
    'https://res.cloudinary.com/entazesoftware/image/upload/v1680710999/FerryOneSAAPS_2_cqgdte.jpg',
    'https://res.cloudinary.com/entazesoftware/image/upload/v1680710999/GrouperFishSAAPS_y63tr8.jpg',
    'https://res.cloudinary.com/entazesoftware/image/upload/v1680710998/FireFourSAAPS_2_elrsxy.jpg',
    'https://res.cloudinary.com/entazesoftware/image/upload/v1680710998/EroticFemaleThreeSAAPS_jzezlj.jpg',
    'https://res.cloudinary.com/entazesoftware/image/upload/v1680710998/FliesOnPieSAAPS_2_n8aayy.jpg',
    'https://res.cloudinary.com/entazesoftware/image/upload/v1680710998/CemeterySAAPS_2_ttk6os.jpg',

    'https://res.cloudinary.com/entazesoftware/image/upload/v1680710997/DimLitRoomNeutralWomanSAAPS_2_atuikh.jpg',
    'https://res.cloudinary.com/entazesoftware/image/upload/v1680710998/EroticCoupleInBedSAPS_2_s40yww.jpg',
    'https://res.cloudinary.com/entazesoftware/image/upload/v1680710997/BoyThreeSAAPS_dokdue.jpg',
    'https://res.cloudinary.com/entazesoftware/image/upload/v1680710998/DiverOneSAAPS_2_cvfc1j.jpg',
    'https://res.cloudinary.com/entazesoftware/image/upload/v1680710997/CryingBoySAAPS_yyd2bf.jpg',
    'https://res.cloudinary.com/entazesoftware/image/upload/v1680710997/ConcertFansSAAPS_2_n9g998.jpg',
    'https://res.cloudinary.com/entazesoftware/image/upload/v1680710996/CoupleOpenShirtSAAPS_uirm97.jpg',
    'https://res.cloudinary.com/entazesoftware/image/upload/v1680710996/CoupleKissCloseUpSAAPS_gep8fm.jpg',
    'https://res.cloudinary.com/entazesoftware/image/upload/v1680710994/CarRacerSAAPS_oh39p3.jpg',
    'https://res.cloudinary.com/entazesoftware/image/upload/v1680710994/CarTheftSAAPS_dfijss.jpg',

    'https://res.cloudinary.com/entazesoftware/image/upload/v1680710995/CockpitSAAPS_2_lhmdmh.jpg',
    'https://res.cloudinary.com/entazesoftware/image/upload/v1680710993/CakeSAAPS_nf1co1.jpg',
    'https://res.cloudinary.com/entazesoftware/image/upload/v1680710993/BusSAAPS_n88gsr.jpg',
    'https://res.cloudinary.com/entazesoftware/image/upload/v1680710993/BrideSAAPS_2_smmrh0.jpg',
    'https://res.cloudinary.com/entazesoftware/image/upload/v1680710993/BoysWGunsSAAPS_nc0fc7.jpg',
    'https://res.cloudinary.com/entazesoftware/image/upload/v1680710993/BatteredFemaleLyingDownSAAPS_2_asjkab.jpg',
    'https://res.cloudinary.com/entazesoftware/image/upload/v1680710992/BatteredFemaleSAAPS_qn6dry.jpg',
    'https://res.cloudinary.com/entazesoftware/image/upload/v1680710992/BabyOneSAAPS_vx2oe4.jpg',
    'https://res.cloudinary.com/entazesoftware/image/upload/v1680710992/AttackOneSAAPS_ilfcdc.jpg',
    'https://res.cloudinary.com/entazesoftware/image/upload/v1680710992/AngryFaceThreeSAAPS_2_hj0oqq.jpg',

    'https://res.cloudinary.com/entazesoftware/image/upload/v1680710991/AngryFaceOneSAAPS_giuvah.jpg',
    'https://res.cloudinary.com/entazesoftware/image/upload/v1680710991/AlcoholicSAAPS_2_l2tov8.jpg',
    'https://res.cloudinary.com/entazesoftware/image/upload/v1680710991/AttractiveTwoSAAPS_2_frovus.jpg',
    'https://res.cloudinary.com/entazesoftware/image/upload/v1680710991/AttackThreeSAAPS_2_cy5owf.jpg',
    'https://res.cloudinary.com/entazesoftware/image/upload/v1680711003/IceCreamOneSAAPS_2_qz9ilo.jpg',
    'https://res.cloudinary.com/entazesoftware/image/upload/v1680711004/InjectionOneSAAPS_frveuc.jpg',
    'https://res.cloudinary.com/entazesoftware/image/upload/v1680711004/MaleSAAPS_2_en2on0.jpg',
    'https://res.cloudinary.com/entazesoftware/image/upload/v1680711005/ManInPoolSAAPS_2_gnbuwn.jpg',
    'https://res.cloudinary.com/entazesoftware/image/upload/v1680711005/IceCreamTwoSAAPS_bdetap.jpg',
    'https://res.cloudinary.com/entazesoftware/image/upload/v1680711005/MnMsSAAPS_2_jdn1qo.jpg',

    'https://res.cloudinary.com/entazesoftware/image/upload/v1680711007/MountainTwoSAAPS_dts6wf.jpg',
    'https://res.cloudinary.com/entazesoftware/image/upload/v1680711007/MotorCycleSAAPS_2_x4s9dj.jpg',
    'https://res.cloudinary.com/entazesoftware/image/upload/v1680711008/MountainOneSAAPS_rtppzh.jpg',
    'https://res.cloudinary.com/entazesoftware/image/upload/v1680711008/NatureSAAPS_2_sgvarr.jpg',
    'https://res.cloudinary.com/entazesoftware/image/upload/v1680711008/OilFiresSAAPS_2_cn6p1o.jpg',
    'https://res.cloudinary.com/entazesoftware/image/upload/v1680711009/PaintbrushSAAPS_2_qycq6s.jpg',
    'https://res.cloudinary.com/entazesoftware/image/upload/v1680711010/PicnicTableSAAPS_2_tl7tqj.jpg',
    'https://res.cloudinary.com/entazesoftware/image/upload/v1680711010/PoleVaulterSAAPS_2_nx0sr2.jpg',
    'https://res.cloudinary.com/entazesoftware/image/upload/v1680711010/RepeatAbstractArtOne_2_g5i1jd.jpg',
    'https://res.cloudinary.com/entazesoftware/image/upload/v1680711004/ManChillingSAAPS_ufnfbd.jpg',

    'https://res.cloudinary.com/entazesoftware/image/upload/v1680711011/MountainThreeSAAPS_2_tncl95.jpg',
    'https://res.cloudinary.com/entazesoftware/image/upload/v1680711011/RepeatAbstractArtThree_brftjr.jpg',
    'https://res.cloudinary.com/entazesoftware/image/upload/v1680711011/RepeatBloodyKiss_2_eqhb1x.jpg',
    'https://res.cloudinary.com/entazesoftware/image/upload/v1680711013/RepeatBurnVictimThree_2_p0ezvi.jpg',
    'https://res.cloudinary.com/entazesoftware/image/upload/v1680711013/RepeatBook_2_lnqxam.jpg',
    'https://res.cloudinary.com/entazesoftware/image/upload/v1680711014/RepeatGasCan_hqi1gn.jpg',
    'https://res.cloudinary.com/entazesoftware/image/upload/v1680711014/RepeatHIVTattooOne_2_g4fbl8.jpg',
    'https://res.cloudinary.com/entazesoftware/image/upload/v1680711015/RepeatCarAccidentThree_gxd22m.jpg',
    'https://res.cloudinary.com/entazesoftware/image/upload/v1680711015/RepeatMutilationCadaver_2_cfmw7g.jpg',
    'https://res.cloudinary.com/entazesoftware/image/upload/v1680711015/RepeatMutilationTwo_pgwcxq.jpg',

    'https://res.cloudinary.com/entazesoftware/image/upload/v1680711016/RepeatMushroomTwo_h4httl.jpg',
    'https://res.cloudinary.com/entazesoftware/image/upload/v1680711016/RepeatNudeFemaleI_2_hzvfde.jpg',
    'https://res.cloudinary.com/entazesoftware/image/upload/v1680711016/RepeatRoach_2_cbnqve.jpg',
    'https://res.cloudinary.com/entazesoftware/image/upload/v1680711017/RepeatRochesTwo_ctkswr.jpg',
    'https://res.cloudinary.com/entazesoftware/image/upload/v1680711018/RepeatShoes_bwk9ux.jpg',
    'https://res.cloudinary.com/entazesoftware/image/upload/v1680711019/SadGirlsSAAPS_2_mea9nn.jpg',
    'https://res.cloudinary.com/entazesoftware/image/upload/v1680711020/SeaMuizenbergHomesSAAPS_2_sxbxzx.jpg',
    'https://res.cloudinary.com/entazesoftware/image/upload/v1680711019/RomanceTwoSAAPS_2_ihv13i.jpg',
    'https://res.cloudinary.com/entazesoftware/image/upload/v1680711018/RepeatSoldierThree_2_yhb2op.jpg',
    'https://res.cloudinary.com/entazesoftware/image/upload/v1680711019/RomanceOneSAAPS_2_meju8p.jpg',

    'https://res.cloudinary.com/entazesoftware/image/upload/v1680711021/SkullsSAAPS_2_sfc3oo.jpg',
    'https://res.cloudinary.com/entazesoftware/image/upload/v1680711021/SnakeFourSAAPS_2_wcz1ts.jpg',
    'https://res.cloudinary.com/entazesoftware/image/upload/v1680711021/SoldierTwoSAAPS_2_g1wkd6.jpg',
    'https://res.cloudinary.com/entazesoftware/image/upload/v1680711022/TicketSAAPS_wowyxw.jpg',
    'https://res.cloudinary.com/entazesoftware/image/upload/v1680711023/SealSAAPSNew_ljjgkc.jpg',
    'https://res.cloudinary.com/entazesoftware/image/upload/v1680711023/TornadoFourSAAPS_2_lnvvtr.jpg',
    'https://res.cloudinary.com/entazesoftware/image/upload/v1680711024/TornadoThreeSAAPS_2_cwzrz3.png',
    'https://res.cloudinary.com/entazesoftware/image/upload/v1680711024/ToxicWasteSAAPS_dme6jd.jpg',
    'https://res.cloudinary.com/entazesoftware/image/upload/v1680711024/TornadoTwoSAAPS_pzv4yr.jpg',
    'https://res.cloudinary.com/entazesoftware/image/upload/v1680711024/VeiledWomanSAAPS_2_ohi2dt.jpg',

    'https://res.cloudinary.com/entazesoftware/image/upload/v1680711024/VideoTapeSAAPS_oukhxg.jpg',
    'https://res.cloudinary.com/entazesoftware/image/upload/v1680711024/WaterSkiingSAAPS_2_cdh1fu.jpg',
    'https://res.cloudinary.com/entazesoftware/image/upload/v1680711025/WomanLyingChairSAAPS_2_vmfbz2.jpg',
    'https://res.cloudinary.com/entazesoftware/image/upload/v1680711025/WomanReadingOneSAAPS_nf2ak1.jpg',
    'https://res.cloudinary.com/entazesoftware/image/upload/v1680711025/WomanTwoSAAPS_2_yxmemy.jpg',
    'https://res.cloudinary.com/entazesoftware/image/upload/v1671646970/CockpitSAAPS_gfrzog.jpg',

  ]
  );

  let count = countModal;
  let imNum = imageNum;

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
        setUserId(userloggedIn);
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


//Listen to keyboard events
useEffect(() => {
  document.addEventListener('keydown', detectSpaceBar, true)
}, [])

const detectSpaceBar = (e) => {
  SetKeyClicked(e.key);
}

// Detect page navigations with 'enter' key
useEffect(()=>{
  if (keyClicked === 'Enter' && firstPage) {
    setFirstPage(false)
    setSecondPage(true)
    SetKeyClicked('')
  }
  if (keyClicked === 'Enter' && secondPage) {
    setSecondPage(false)
    setTestingStart(true)
    SetKeyClicked('')
  }
  if (keyClicked === 'Enter' && test7End) {
    navigate('/cognitivetest4recall')
  }
}, [keyClicked, confirmPage])


const handleFirst = () => {
  setFirstPage(false)
  setSecondPage(true);
}

const handleSecond = () => {
  setSecondPage(false)
  setTestingStart(true)
}

useEffect(()=>{
  if (testingStart) {
    setStartT(true)
  }
}, [testingStart])


const handleStartTest8 = () => {
  navigate('/cognitivetest4recall')
}

useEffect(() => {
  if (userProfile) {
    GetUnratedImagesRecall();
  }
}, [userProfile])

useEffect(() => {
  if (ImagesPage) {
    setImgLoaded(true)
  }
}, [ImagesPage, loaded])

//For Image number
useEffect(()=> {
  if (UnratedImages) {
    let interr = Images.length - UnratedImages.length;
    setImageNum(interr)
    //If not all images are rated
    if (UnratedImages.length !== 0) {
      setFirstPage(true)
    } else {
      setTest7End(true)
    }
  }
}, [UnratedImages])

const GetUnratedImagesRecall = () => {
  let num;
  if (userProfile._id) {
    const param = {_id: userProfile._id };
    axios.get('/api/test3Images', {params: param})
    .then((res) => {
      // console.log('res.data:', res.data.Test3ImagesRecall )
      if (res.data.Test3ImagesRecall) {
        num = (Images.length - (res.data.Test3ImagesRecall.length));
      } else {
        num = 0;
      }
      //Filter Images and set unrated images
      const imgs = _.takeRight(Images, num);
      // console.log('imgs 1:', imgs)
      SetUnratedImages(imgs);
    })
    .catch((err) => {
      console.log(err)
    })
  }
}

  /*  HOOK CALL FOR UNRATED IMAGES AND RATINGS PAGE's */
  useEffect(()=>{
    if (UnratedImages) {
        if (startT && count <=  UnratedImages.length - 1) {

          SetSrcIm(UnratedImages[count])
          setDisplayCross(true)

          setTimeout(()=>{
            setDisplayCross(false)
            setImagesPage(true)
          }, 2000)

          setTimeout(()=>{
            setImagesPage(false)
            setConfirmPage(true)
          }, 6000)
          setStartT(false)
        }
    }
  }, [startT, UnratedImages, count, ImagesPage, confirmPage, displayCross, confirmResponse])

  useEffect(() => {
    if (RatePage) {
      setImgLoadedRating(true)
      }
  }, [RatePage, loadedRating])

  useEffect(() => {
    if (RatePage2) {
      setImgLoadedRating2(true)
    }
  }, [RatePage2, loadedRating2])

  const Rate1 = () => {
    setRatePage(false)
    setImageRating(1)
    setRatePage2(true)
  }
  const Rate2 = () => {
    setRatePage(false)
    setImageRating(2)
    setRatePage2(true)
  }
  const Rate3 = () => {
    setRatePage(false)
    setImageRating(3)
    setRatePage2(true)
  }
  const Rate4 = () => {
    setRatePage(false)
    setImageRating(4)
    setRatePage2(true)
  }
  const Rate5 = () => {
    setRatePage(false)
    setImageRating(5)
    setRatePage2(true)
  }
  const Rate6 = () => {
    setRatePage(false)
    setImageRating(6)
    setRatePage2(true)
  }
  const Rate7 = () => {
    setRatePage(false)
    setImageRating(7)
    setRatePage2(true)
  }
  const Rate8 = () => {
    setRatePage(false)
    setImageRating(8)
    setRatePage2(true)
  }
  const Rate9 = () => {
    setRatePage(false)
    setImageRating(9)
    setRatePage2(true)
  }
  const Rate11 = () => {
    setImageRating2(1)
    setRatePage2(false)
    setAxiosSend(true)
  }
  const Rate12 = () => {
    setImageRating2(2)
    setRatePage2(false)
    setAxiosSend(true)
  }
  const Rate13 = () => {
    setImageRating2(3)
    setRatePage2(false)
    setAxiosSend(true)
  }
  const Rate14 = () => {
    setImageRating2(4)
    setRatePage2(false)
    setAxiosSend(true)
  }
  const Rate15 = () => {
    setImageRating2(5)
    setRatePage2(false)
    setAxiosSend(true)
  }
  const Rate16 = () => {
    setImageRating2(6)
    setRatePage2(false)
    setAxiosSend(true)
  }
  const Rate17 = () => {
    setImageRating2(7)
    setRatePage2(false)
    setAxiosSend(true)
  }
  const Rate18 = () => {
    setImageRating2(8)
    setRatePage2(false)
    setAxiosSend(true)
  }
  const Rate19 = () => {
    setImageRating2(9)
    setRatePage2(false)
    setAxiosSend(true)
  }

  useEffect(()=>{
    if (AxiosSend) {
      setAxiosSend(false)
      imNum = imageNum + 1;
      const key = 'Image'+ imNum, value = srcIm;
      const obj = {
        [`${key}`]: {src: value, NegativePositiveRating: ImageRating, CalmExcitedRating: ImageRating2, confirmResponse: confirmResponse }
      }
      const param = {_id: userId, obj};
      //Axios send
      axios.post('/api/test3recallimagerating', param)
      .then((res)=>{
        SetKeyClicked('')
        setImageRating(null)
        setImageRating2(null)
       setImageNum(imageNum + 1);
        count = (countModal + 1);
        setCountModal(count)
        if (count <=  UnratedImages.length - 1) {
          setConfirmResponse(null)
          setConfirmPage(false)
          setStartT(true)
        } else {
          setTestingStart(false)
          setTest7End(true)

          let complete = {_id: userId, test3CompletionRecall: true};
          axios.post('/api/user', complete)
          .then((res) => {
            // console.log('completion res :', res);
          })
          .catch (()=>{

          })
        }
      })
      .catch((err)=>{

      })
    }
  }, [AxiosSend, confirmResponse, ImageRating, ImageRating2, srcIm])

  const ImageConfirmYes = () => {
    setImageConfirm(true)
    setConfirmPage(false)
    setConfirmResponse(true)
    setRatePage(true)
  }

  const ImageConfirmNo = () => {
    setImageConfirm(false)
    setConfirmPage(false)
    setConfirmResponse(false)
    setRatePage(true)
  }

  useEffect(()=>{
    if (imageConfirm !== null) {
      setImageConfirmed(true);
    }
  }, [imageConfirm])

  return (
    <>
    {userAuth ?
    <>
      <NavigationBar />
      <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center', height: '100vh', maxWidth: '100vw', background: '#000', color: '#fff', top: 0, bottom: 0, }} >
            {firstPage ?
              <>
              <div style={centerScreen} >
                <h1 style={{ color: '#e67373', fontSize: 50, }} >SESSION B - TEST 3 RECALL</h1>
                <div style={{ fontSize: 34, lineHeight: 1.2, fontWeight: 700, display: 'flex', padding: '50px 0px 0px 0px',  }} >
                Welcome back!<br /><br />
               Just like last time you will see some pictures appear on the screen, one after each other.
               Again some pictures will be positive, some will be neutral and some will be negative.
               However, some pictures will be the same as last time, but some will be new.
              <br />
              You will need to decide if this picture is new or one you've seen before. You will also need to rate how the picture made you feel.
                <br /><br /> [Press ENTER or click next to continue.]
                </div>
                    <button style={{ margin: '75px'}} onClick={handleFirst} >
                      Next
                    </button>
                </div>
              </>
            :
            null}
            {secondPage ?
              <>
              <div style={centerScreen} >
                <h1 style={{ color: '#e67373', fontSize: 50, }} >SESSION B - TEST 3 RECALL</h1>
                <div style={{ fontSize: 35, lineHeight: 1.5, fontWeight: 700, display: 'flex', padding: '60px 0px 0px 0px',  }} >

                REMINDERS:

               After the picture appears there are three steps:<br />

               1: Decide whether you have seen the picture before or not.<br />

               2: Rate the picture on a scale from positive to negative.<br />

               3: Rate the picture on a scale from calm to excited.<br />

               So now we will begin.

                <br /><br /> [Click start or press ENTER to begin.]
                </div>
                    <button style={{ margin: '75px'}} onClick={handleSecond} >
                      Start
                    </button>
                </div>
              </>
            :
            null}
            {testingStart ?
              <>
                {displayCross ?
                  <img style={ {width:'190px', height: '140px' } } src="https://res.cloudinary.com/entazesoftware/image/upload/v1662136021/CognitiveApp/X-logo_mnf03d.jpg" />
                : null}
                {ImagesPage && UnratedImages && imgLoaded ?
                  <>
                    <div>
                      <img
                        src={srcIm}
                        style={imgLoaded ? TestImages : { display: 'none' } }
                        onLoad={() => setLoaded(true)}
                      />
                    </div>
                  </>
                : null}
                {confirmPage ?
                <>
                  {/* <div className="confirm-box">
                    <p>Have you seen this image before? Press '1' if you have and '2' if the picture is new</p>
                  </div> */}
                  <div className="confirm-box">
                    <p>Have you seen this image before?</p>
                    <a onClick={ImageConfirmYes} title="Yes">Yes</a>
                    <a onClick={ImageConfirmNo} title="No">No</a>
                  </div>
                </>
                : null}
              </>
            : null}

            {RatePage && UnratedImages && imgLoadedRating ?
              <>
                <div style={{ fontSize: 30, fontWeight: 700, display: 'flex', flexDirection: 'column', padding: '80px 40px 0 40px', lineHeight: '1.6', }} >
                Rate how this picture made you feel from very negative to very positive. </div>
                <div style={{ display: 'flex', flexDirection: 'inline-block', alignItems: 'center', }}>
                  <span style={{ color: '#fff', fontSize: '40px', fontWeight: 700, margin: '5px 15px 0 0' }}>Very Negative</span>
                  <img
                    alt="Test3-Rating"
                    src='https://res.cloudinary.com/entazesoftware/image/upload/v1668022235/image2_jezpza.webp'
                    style={imgLoadedRating ? TestRatings : { display: 'none' } }
                    onLoad={() => setLoadedRating(true)}
                  />
                  <span style={{ color: '#fff', fontSize: '40px', fontWeight: 700, margin: '20px 0 0 15px' }}>Very Positive</span>
                </div>
                <div style={{ display: "inline-block", margin: "4px 4px 4px 5px", }} >
                  <button style={{ fontSize: 30, fontWeight: 700, color: "#000", background: "#ECB22E", margin: '3px', width: '5.3vw' }} onClick={Rate1} >1</button>
                  <button style={{ fontSize: 30, fontWeight: 700, color: "#000", background: "#ECB22E", margin: '3px', width: '5.3vw' }} onClick={Rate2} >2</button>
                  <button style={{ fontSize: 30, fontWeight: 700, color: "#000", background: "#ECB22E", margin: '3px', width: '5.3vw' }} onClick={Rate3} >3</button>
                  <button style={{ fontSize: 30, fontWeight: 700, color: "#000", background: "#ECB22E", margin: '3px', width: '5.3vw' }} onClick={Rate4} >4</button>
                  <button style={{ fontSize: 30, fontWeight: 700, color: "#000", background: "#ECB22E", margin: '3px', width: '5.3vw' }} onClick={Rate5} >5</button>
                  <button style={{ fontSize: 30, fontWeight: 700, color: "#000", background: "#ECB22E", margin: '3px', width: '5.3vw' }} onClick={Rate6} >6</button>
                  <button style={{ fontSize: 30, fontWeight: 700, color: "#000", background: "#ECB22E", margin: '3px', width: '5.3vw' }} onClick={Rate7} >7</button>
                  <button style={{ fontSize: 30, fontWeight: 700, color: "#000", background: "#ECB22E", margin: '3px', width: '5.3vw' }} onClick={Rate8} >8</button>
                  <button style={{ fontSize: 30, fontWeight: 700, color: "#000", background: "#ECB22E", margin: '3px', width: '5.3vw' }} onClick={Rate9} >9</button>
                </div>
              </>
            : null}
            {RatePage2 && UnratedImages && imgLoadedRating2 ?
            <>
              <div style={{ fontSize: 30, fontWeight: 700, display: 'flex', flexDirection: 'column', padding: '80px 40px 0 40px', lineHeight: '1.6', }} >
              Rate how this picture made you feel from calm to excited. </div>
              <div style={{ display: 'flex', flexDirection: 'inline-block', alignItems: 'center', }}>
                <span style={{ color: '#fff', fontSize: '40px', fontWeight: 700, margin: '5px 70px 0 0' }}>Calm</span>
                <img
                  alt="Test3-Rating"
                  src='https://res.cloudinary.com/entazesoftware/image/upload/v1668770671/RatingImage2_mxxvxp.png'
                  style={imgLoadedRating2 ? TestRatings : { display: 'none' } }
                  onLoad={() => setLoadedRating2(true)}
                />
                <span style={{ color: '#fff', fontSize: '40px', fontWeight: 700, margin: '20px 0 0 15px' }}>Excited</span>
              </div>
              <div style={{ display: "inline-block", margin: "4px -52px 4px -40px", }} >
                <button style={{ fontSize: 30, fontWeight: 700, color: "#000", background: "#2EB67D", margin: '3px', width: '5.3vw' }} onClick={Rate11} >1</button>
                <button style={{ fontSize: 30, fontWeight: 700, color: "#000", background: "#2EB67D", margin: '3px', width: '5.3vw' }} onClick={Rate12} >2</button>
                <button style={{ fontSize: 30, fontWeight: 700, color: "#000", background: "#2EB67D", margin: '3px', width: '5.3vw' }} onClick={Rate13} >3</button>
                <button style={{ fontSize: 30, fontWeight: 700, color: "#000", background: "#2EB67D", margin: '3px', width: '5.3vw' }} onClick={Rate14} >4</button>
                <button style={{ fontSize: 30, fontWeight: 700, color: "#000", background: "#2EB67D", margin: '3px', width: '5.3vw' }} onClick={Rate15} >5</button>
                <button style={{ fontSize: 30, fontWeight: 700, color: "#000", background: "#2EB67D", margin: '3px', width: '5.3vw' }} onClick={Rate16} >6</button>
                <button style={{ fontSize: 30, fontWeight: 700, color: "#000", background: "#2EB67D", margin: '3px', width: '5.3vw' }} onClick={Rate17} >7</button>
                <button style={{ fontSize: 30, fontWeight: 700, color: "#000", background: "#2EB67D", margin: '3px', width: '5.3vw' }} onClick={Rate18} >8</button>
                <button style={{ fontSize: 30, fontWeight: 700, color: "#000", background: "#2EB67D", margin: '3px', width: '5.3vw' }} onClick={Rate19} >9</button>
              </div>
            </>
            : null}
         {test7End ?
          <>
            <div style={centerScreen} >
            <div style={{ fontSize: 35, fontWeight: 700, display: 'flex', padding: '0px 40px 120px 40px', lineHeight: '1.6', }} >
              Test 3 Recall - Completed.  <br /> [Click start or press ENTER to begin Test 4 Recall]
            </div>
            <div>
              <button onClick={handleStartTest8}>Start</button>
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

export default CognitiveTest3Recall





