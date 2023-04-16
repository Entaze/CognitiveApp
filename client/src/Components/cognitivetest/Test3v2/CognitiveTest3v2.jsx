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
  width: '90vw',
  height: '50vh',
  background: '#000000',
  color: '#f5f5f5',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  paddingTop: '13%',
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

const TestImages = {
  display: 'flex',
  width: '70vw',
  height: '60vh',
  justifyContent: 'center',
  alignItems: 'center',
  margin: 'auto',
  border: '10px solid #f5f5f0'
}

const TestRatings = {
  display: 'flex',
  width: '50vw',
  height: '46vh',
  justifyContent: 'center',
  alignItems: 'center',
  margin: 'auto',
  paddingTop: '14vh',
  // border: '3px solid blue'
}

const TestRatings2 = {
  display: 'flex',
  width: '50vw',
  height: '46vh',
  justifyContent: 'center',
  alignItems: 'center',
  margin: 'auto',
  paddingTop: '4vh',
}

const CognitiveTest3v2 = () => {
  const token = window.localStorage.getItem('token');
  const { userProfile, cognitiveTest, setCognitiveTest } = useMainContext();
  const [userAuth, setUserAuth] = useState(false);
  const [firstPage, setFirstPage] = useState(null);
  const [ratingExample, setRatingExample] = useState(false);
  const [ratingExample2, setRatingExample2] = useState(false);
  const [RatingFinish, setRatingFinish] = useState(false);
  const [secondSection, setSecondPage] = useState(null);
  const [sectionTwoStart, setSectionTwoStart] = useState(false);
  const [sectionTwoStart2, setSectionTwoStart2] = useState(false);
  const [sectionTwoClickStart, setSectionTwoClickStart] = useState(false);
  const [startSectionTwo, SetStartSectionTwo] = useState(false);
  const [keyClicked, SetKeyClicked] = useState('')
  const navigate = useNavigate();
  const [Text2, setText2] = useState(true);
  const [ImagesPage, setImagesPage] = useState(false);
  const [ImagesPage2, setImagesPage2] = useState(false);
  const [NextImage, SetNextImage] = useState(false);
  const [NextImage2, SetNextImage2] = useState(false);


  const [CrossPage, setCrossPage] = useState(false);
  const [CrossPageCall, setCrossPageCall] = useState(false);
  const [CrossBool, setCrossBool] = useState(false);
  const [RatePage, setRatePage] = useState(false);
  const [RatePageS2, setRatePageS2] = useState(false);
  const [RatePage2, setRatePage2] = useState(false);
  const [RatePage2S2, setRatePage2S2] = useState(false);
  const [Rating1Call, SetRating1Call] = useState(false);
  const [Rating1Call2, SetRating1Call2] = useState(false);

  const [Rating2Call, SetRating2Call] = useState(false);
  const [Rating2Call2, SetRating2Call2] = useState(false);

  const [loaded, setLoaded] = useState(false);
  const [loaded2, setLoaded2] = useState(false);

  const [loadedRating, setLoadedRating] = useState(false);
  const [loadedRating2, setLoadedRating2] = useState(false);

  const [loadedRatingS2, setLoadedRatingS2] = useState(false);
  const [loadedRating2S2, setLoadedRating2S2] = useState(false);

  const [imgLoaded, setImgLoaded] = useState(false);
  const [imgLoaded2, setImgLoaded2] = useState(false);

  const [imgLoadedRating, setImgLoadedRating] = useState(false);
  const [imgLoadedRating2, setImgLoadedRating2] = useState(false);

  const [imgLoadedRatingS2, setImgLoadedRatingS2] = useState(false);
  const [imgLoadedRating2S2, setImgLoadedRating2S2] = useState(false);

  const [ConfirmPage, setConfirmPage] = useState(false);
  const [test3End, setTest3End] = useState(false);

  const [imageNum, setImageNum] = useState(0);
  const [imageNum2, setImageNum2] = useState(0);


  const [Images, SetImages] = useState(
    [
      'https://res.cloudinary.com/entazesoftware/image/upload/v1680708800/VeiledWomanSAAPS_1_emcyeg.jpg',
      'https://res.cloudinary.com/entazesoftware/image/upload/v1680708805/WingWalkerPlaneCarnivalSAAPS_3_mptlnr.jpg',
      'https://res.cloudinary.com/entazesoftware/image/upload/v1680708803/TornadoThreeSAAPS_1_adn2ao.png',
      'https://res.cloudinary.com/entazesoftware/image/upload/v1680708800/SpiderSAAPS_3_wmlauh.jpg',
      'https://res.cloudinary.com/entazesoftware/image/upload/v1680708799/SoldierTwoSAAPS_1_h53m4p.jpg',
      // 'https://res.cloudinary.com/entazesoftware/image/upload/v1680708800/ScarvesSAAPS_3_tzrzlb.jpg',
      // 'https://res.cloudinary.com/entazesoftware/image/upload/v1680708797/SnakeFourSAAPS_1_uafqck.jpg',
      // 'https://res.cloudinary.com/entazesoftware/image/upload/v1680708796/SmokePollutionSAAPS_3_h08rao.jpg',
      // 'https://res.cloudinary.com/entazesoftware/image/upload/v1680708796/SkySurderSAAPS_3_ljvbo9.jpg',
      // 'https://res.cloudinary.com/entazesoftware/image/upload/v1680708805/WaterSkiingSAAPS_1_rpyluc.jpg',

      // 'https://res.cloudinary.com/entazesoftware/image/upload/v1680708795/SkullsSAAPS_1_ep1gbk.jpg',
      // 'https://res.cloudinary.com/entazesoftware/image/upload/v1680708797/SnakesThreeSAAPS_3_dmuwdu.jpg',
      // 'https://res.cloudinary.com/entazesoftware/image/upload/v1680708794/SeaMuizenbergHomesSAAPS_1_frnxjg.jpg',
      // 'https://res.cloudinary.com/entazesoftware/image/upload/v1680708793/SealOneSAAPS_3_pv5vp5.jpg',
      // 'https://res.cloudinary.com/entazesoftware/image/upload/v1680708804/WomanThreeSAAPS_3_b55jbd.jpg',
      // 'https://res.cloudinary.com/entazesoftware/image/upload/v1680708793/RepeatBurnVictimThree_1_erk8yn.jpg',
      // 'https://res.cloudinary.com/entazesoftware/image/upload/v1680708793/SadGirlsSAAPS_1_tfwwmn.jpg',
      // 'https://res.cloudinary.com/entazesoftware/image/upload/v1680708793/RowerSAAPS_2_kizgkd.jpg',
      // 'https://res.cloudinary.com/entazesoftware/image/upload/v1680708800/TornadoFourSAAPS_1_bfdeug.jpg',
      // 'https://res.cloudinary.com/entazesoftware/image/upload/v1680708805/WomanTwoSAAPS_1_xfvnpz.jpg',

      // 'https://res.cloudinary.com/entazesoftware/image/upload/v1680708792/RomanceTwoSAAPS_1_fnnae3.jpg',
      // 'https://res.cloudinary.com/entazesoftware/image/upload/v1680708792/RepeatOctopus_3_qejz74.jpg',
      // 'https://res.cloudinary.com/entazesoftware/image/upload/v1680708792/RepeatTrain_3_bdchcx.jpg',
      // 'https://res.cloudinary.com/entazesoftware/image/upload/v1680708791/RomanceOneSAAPS_1_cztnun.jpg',
      // 'https://res.cloudinary.com/entazesoftware/image/upload/v1680708791/RepeatVomitTwo_3_zccjwx.jpg',
      // 'https://res.cloudinary.com/entazesoftware/image/upload/v1680708803/WomanLyingChairSAAPS_1_ockjcp.jpg',
      // 'https://res.cloudinary.com/entazesoftware/image/upload/v1680708789/RepeatSoldierThree_1_vwtsrj.jpg',
      // 'https://res.cloudinary.com/entazesoftware/image/upload/v1680708788/RepeatSnakeOne_3_w63jw9.jpg',
      // 'https://res.cloudinary.com/entazesoftware/image/upload/v1680708787/RepeatRoach_1_ejodws.jpg',
      // 'https://res.cloudinary.com/entazesoftware/image/upload/v1680708786/RepeatNudeFemaleI_1_t0ca7g.jpg',

      // 'https://res.cloudinary.com/entazesoftware/image/upload/v1680708801/WatermelonSAAPS_3_bir6cz.jpg',
      // 'https://res.cloudinary.com/entazesoftware/image/upload/v1680708785/RepeatMutilationEight_3_lj2s8o.jpg',
      // 'https://res.cloudinary.com/entazesoftware/image/upload/v1680708784/RepeatMutilationCadaver_1_kzlky9.jpg',
      // 'https://res.cloudinary.com/entazesoftware/image/upload/v1680708784/RepeatMushroomOne_3_xusw5g.jpg',
      // 'https://res.cloudinary.com/entazesoftware/image/upload/v1680708782/RepeatBloodyKiss_1_v5abqr.jpg',
      // 'https://res.cloudinary.com/entazesoftware/image/upload/v1680708782/RepeatInfant_3_obnxv0.jpg',
      // 'https://res.cloudinary.com/entazesoftware/image/upload/v1680708781/RepeatHIVTattooOne_1_bvehjs.jpg',
      // 'https://res.cloudinary.com/entazesoftware/image/upload/v1680708781/RepeatCarAccidentOne_3_g2nm4a.jpg',
      // 'https://res.cloudinary.com/entazesoftware/image/upload/v1680708779/RepeatBook_1_pduiwe.jpg',
      // 'https://res.cloudinary.com/entazesoftware/image/upload/v1680708778/RepeatBombTwo_3_ebrb9o.jpg',

      // 'https://res.cloudinary.com/entazesoftware/image/upload/v1680708777/RepeatAbstractArtOne_1_nd1cuh.jpg',
      // 'https://res.cloudinary.com/entazesoftware/image/upload/v1680708777/RaftersSAAPS_3_iptsiv.jpg',
      // 'https://res.cloudinary.com/entazesoftware/image/upload/v1680708777/PoleVaulterSAAPS_1_vr8dny.jpg',
      // 'https://res.cloudinary.com/entazesoftware/image/upload/v1680708776/PoliceTwoSAAPS_3_iug3ic.jpg',
      // 'https://res.cloudinary.com/entazesoftware/image/upload/v1680708776/PoliceBatonSAAPS_3_u7sgq4.jpg',
      // 'https://res.cloudinary.com/entazesoftware/image/upload/v1680708776/OilFiresSAAPS_1_fxgchu.jpg',
      // 'https://res.cloudinary.com/entazesoftware/image/upload/v1680708775/PicnicTableSAAPS_1_qcervw.jpg',
      // 'https://res.cloudinary.com/entazesoftware/image/upload/v1680708775/PancakesSconesSAAPS_3_rdchtm.jpg',
      // 'https://res.cloudinary.com/entazesoftware/image/upload/v1680708774/PaintbrushSAAPS_1_kfbmaj.jpg',
      // 'https://res.cloudinary.com/entazesoftware/image/upload/v1680708774/OilFireSAAPS_3_ifbxco.jpg',

      // 'https://res.cloudinary.com/entazesoftware/image/upload/v1680708773/MountainThreeSAAPS_1_phcjdh.jpg',
      // 'https://res.cloudinary.com/entazesoftware/image/upload/v1680708773/NeutralChildSAAPS_3_huf9ag.jpg',
      // 'https://res.cloudinary.com/entazesoftware/image/upload/v1680708773/NatureSAAPS_1_uifnwd.jpg',
      // 'https://res.cloudinary.com/entazesoftware/image/upload/v1680708773/MutliationFiveSAAPS_3_ymilvq.jpg',
      // 'https://res.cloudinary.com/entazesoftware/image/upload/v1680708772/HangGliderSAAPS_3_zf7j64.jpg',
      // 'https://res.cloudinary.com/entazesoftware/image/upload/v1680708771/MountainLakeSAAPS_3_vlgdfe.jpg',
      // 'https://res.cloudinary.com/entazesoftware/image/upload/v1680708771/MotorCycleSAAPS_1_cj4zwz.jpg',
      // 'https://res.cloudinary.com/entazesoftware/image/upload/v1680708770/MotherSAAPS_3_skyctq.jpg',
      // 'https://res.cloudinary.com/entazesoftware/image/upload/v1680708770/MnMsSAAPS_1_tkhfpk.jpg',
      // 'https://res.cloudinary.com/entazesoftware/image/upload/v1680708770/ManInPoolSAAPS_1_a70h5p.jpg',


      // 'https://res.cloudinary.com/entazesoftware/image/upload/v1680708769/KebabSkewerSAAPS_3_jkf6k0.jpg',
      // 'https://res.cloudinary.com/entazesoftware/image/upload/v1680708769/ManComputerSAAPS_3_gfwymf.jpg',
      // 'https://res.cloudinary.com/entazesoftware/image/upload/v1680708769/MaleSAAPS_1_ymgish.jpg',
      // 'https://res.cloudinary.com/entazesoftware/image/upload/v1680708767/IceCreamOneSAAPS_1_aaz5y8.jpg',
      // 'https://res.cloudinary.com/entazesoftware/image/upload/v1680708767/GymSAAPS_1_moafaq.jpg',
      // 'https://res.cloudinary.com/entazesoftware/image/upload/v1680708767/HorsesOneSAAPS_3_zg23uo.jpg',
      // 'https://res.cloudinary.com/entazesoftware/image/upload/v1680708767/HomelessManSAAPS_1_hqrile.jpg',
      // 'https://res.cloudinary.com/entazesoftware/image/upload/v1680708766/GirlCowSAAPS_3_lusrf7.jpg',
      // 'https://res.cloudinary.com/entazesoftware/image/upload/v1680708766/FireTwoSAAPS_3_spizjp.jpg',
      // 'https://res.cloudinary.com/entazesoftware/image/upload/v1680708765/GangSAAPS_3_nrrnan.jpg',

      // 'https://res.cloudinary.com/entazesoftware/image/upload/v1680708765/FliesOnPieSAAPS_1_tmo8zy.jpg',
      // 'https://res.cloudinary.com/entazesoftware/image/upload/v1680708765/DiverOneSAAPS_1_xovd48.jpg',
      // 'https://res.cloudinary.com/entazesoftware/image/upload/v1680708765/FireFourSAAPS_1_tqzrki.jpg',
      // 'https://res.cloudinary.com/entazesoftware/image/upload/v1680708765/EroticCoupleInBedSAPS_1_ijl9ag.jpg',
      // 'https://res.cloudinary.com/entazesoftware/image/upload/v1680708764/FerryOneSAAPS_1_rxfaem.jpg',
      // 'https://res.cloudinary.com/entazesoftware/image/upload/v1680708764/FatherTwoSAAPS_3_spozwv.jpg',
      // 'https://res.cloudinary.com/entazesoftware/image/upload/v1680708764/EroticCoupleFourSAAPS_3_yurhzg.jpg',
      // 'https://res.cloudinary.com/entazesoftware/image/upload/v1680708763/ElephantsSAAPS_3_xzbddh.jpg',
      // 'https://res.cloudinary.com/entazesoftware/image/upload/v1680708763/CourtyardSAAPS_3_wcj7ty.jpg',
      // 'https://res.cloudinary.com/entazesoftware/image/upload/v1680708763/DimLitRoomNeutralWomanSAAPS_1_jmegqd.jpg',

      // 'https://res.cloudinary.com/entazesoftware/image/upload/v1680708763/DentalExamSAAPS_3_ov2t0c.jpg',
      // 'https://res.cloudinary.com/entazesoftware/image/upload/v1680708762/CemeterySAAPS_1_qlshnu.jpg',
      // 'https://res.cloudinary.com/entazesoftware/image/upload/v1680708762/CoupleOneSAAPS_3_kmgykc.jpg',
      // 'https://res.cloudinary.com/entazesoftware/image/upload/v1680708761/ConcertFansSAAPS_1_mj4zgh.jpg',
      // 'https://res.cloudinary.com/entazesoftware/image/upload/v1680708761/CockpitSAAPS_1_gs2ztv.jpg',
      // 'https://res.cloudinary.com/entazesoftware/image/upload/v1680708760/CakeBirthdaySAAPS_3_f3m67m.jpg',
      // 'https://res.cloudinary.com/entazesoftware/image/upload/v1680708760/CarAccidentFourSAAPS_3_jmuw6u.jpg',
      // 'https://res.cloudinary.com/entazesoftware/image/upload/v1680708759/BrideSAAPS_1_lthhhn.jpg',
      // 'https://res.cloudinary.com/entazesoftware/image/upload/v1680708759/BoyFourSAAPS_3_uqeuk7.jpg',
      // 'https://res.cloudinary.com/entazesoftware/image/upload/v1680708759/BabyFourSAAPS_3_owmsna.jpg',

      // 'https://res.cloudinary.com/entazesoftware/image/upload/v1680708759/BatteredFemaleLyingDownSAAPS_1_m0yjh4.jpg',
      // 'https://res.cloudinary.com/entazesoftware/image/upload/v1680708759/BabyIncubatorSAAPS_3_eq1b1u.jpg',
      // 'https://res.cloudinary.com/entazesoftware/image/upload/v1680708758/AttractiveThreeSAAPS_3_szsoce.jpg',
      // 'https://res.cloudinary.com/entazesoftware/image/upload/v1680708758/AttractiveTwoSAAPS_1_pvuub5.jpg',
      // 'https://res.cloudinary.com/entazesoftware/image/upload/v1680708758/AirplaneTAxiSAAPS_3_rokfpp.jpg',
      // 'https://res.cloudinary.com/entazesoftware/image/upload/v1680708758/AngryFaceThreeSAAPS_1_cojvds.jpg',
      // 'https://res.cloudinary.com/entazesoftware/image/upload/v1680708758/AttackThreeSAAPS_1_jig2tr.jpg',
      // 'https://res.cloudinary.com/entazesoftware/image/upload/v1680708758/AccidentBodiesSAAPS_3_jdmmct.jpg',
      // 'https://res.cloudinary.com/entazesoftware/image/upload/v1680708757/AlcoholicSAAPS_1_jpoixv.jpg',
      // 'https://res.cloudinary.com/entazesoftware/image/upload/v1680708757/AttackFourSAAPS_3_xyjslh.jpg',

     ]
    );

    const [Images2, SetImages2] = useState([
      'https://res.cloudinary.com/entazesoftware/image/upload/v1680705713/AngryFaceTwoSAAPS_1_ambqms.jpg',
      'https://res.cloudinary.com/entazesoftware/image/upload/v1680705715/AttractiveThreeSAAPS_2_tr9k4o.jpg',
      'https://res.cloudinary.com/entazesoftware/image/upload/v1680705715/AccidentSAAPS_1_o6l3ox.jpg',
      'https://res.cloudinary.com/entazesoftware/image/upload/v1680705718/BabyFourSAAPS_2_qvm8pi.jpg',
      'https://res.cloudinary.com/entazesoftware/image/upload/v1680705718/BabyIncubatorSAAPS_2_gti9pi.jpg',
      // 'https://res.cloudinary.com/entazesoftware/image/upload/v1680705720/AttackFourSAAPS_2_aa9map.jpg',
      // 'https://res.cloudinary.com/entazesoftware/image/upload/v1680705723/BoyOneSAAPS_1_zxk0lg.jpg',
      // 'https://res.cloudinary.com/entazesoftware/image/upload/v1680705731/AccidentBodiesSAAPS_2_hsymaz.jpg',
      // 'https://res.cloudinary.com/entazesoftware/image/upload/v1680705733/BoyFourSAAPS_2_bmuo8x.jpg',
      // 'https://res.cloudinary.com/entazesoftware/image/upload/v1680705738/BabyThreeSAAPS_1_xiwio8.jpg',

      // 'https://res.cloudinary.com/entazesoftware/image/upload/v1680705739/CarAccidentFourSAAPS_2_fpb9h2.jpg',
      // 'https://res.cloudinary.com/entazesoftware/image/upload/v1680705740/BarbedWireSAAPS_1_xdad4i.jpg',
      // 'https://res.cloudinary.com/entazesoftware/image/upload/v1680705740/AirplaneTAxiSAAPS_2_gfftkr.jpg',
      // 'https://res.cloudinary.com/entazesoftware/image/upload/v1680705744/ChessSAAPS_1_ffuhj2.jpg',
      // 'https://res.cloudinary.com/entazesoftware/image/upload/v1680705747/CarDamageOneSAAPS_1_vby9p6.jpg',
      // 'https://res.cloudinary.com/entazesoftware/image/upload/v1680705748/ChessOneSAAPS_1_umg6zu.jpg',
      // 'https://res.cloudinary.com/entazesoftware/image/upload/v1680705750/CoupleBikesSAAPS_1_fwi16i.jpg',
      // 'https://res.cloudinary.com/entazesoftware/image/upload/v1680705750/ChildrenSAAPS_1_esu9kq.jpg',
      // 'https://res.cloudinary.com/entazesoftware/image/upload/v1680705755/CoupleThreeSAAPS_1_aehtvh.jpg',
      // 'https://res.cloudinary.com/entazesoftware/image/upload/v1680705757/CakeBirthdaySAAPS_2_aaprwz.jpg',

      // 'https://res.cloudinary.com/entazesoftware/image/upload/v1680705757/CoupleOneSAAPS_2_sod69v.jpg',
      // 'https://res.cloudinary.com/entazesoftware/image/upload/v1680705761/CoupleOldSAAPS_1_lynkjv.jpg',
      // 'https://res.cloudinary.com/entazesoftware/image/upload/v1680705762/DrugAddictOneSAAPS_1_vgjeev.jpg',
      // 'https://res.cloudinary.com/entazesoftware/image/upload/v1680705764/DiverTwoSAAPS_1_dh2eww.jpg',
      // 'https://res.cloudinary.com/entazesoftware/image/upload/v1680705764/DrugAddictTwoSAAPS_1_k24pqi.jpg',
      // 'https://res.cloudinary.com/entazesoftware/image/upload/v1680705768/EroticCoupleFourSAAPS_2_r8wzgj.jpg',
      // 'https://res.cloudinary.com/entazesoftware/image/upload/v1680705770/DentalExamSAAPS_2_cf8yql.jpg',
      // 'https://res.cloudinary.com/entazesoftware/image/upload/v1680705772/CourtyardSAAPS_2_idxqt2.jpg',
      // 'https://res.cloudinary.com/entazesoftware/image/upload/v1680705772/ElephantsSAAPS_2_rg9evs.jpg',
      // 'https://res.cloudinary.com/entazesoftware/image/upload/v1680705772/FatherBabySAAPS_1_yhdiio.jpg',

      // 'https://res.cloudinary.com/entazesoftware/image/upload/v1680705774/EroticCoupleThreeSAAPS_1_ih63nu.jpg',
      // 'https://res.cloudinary.com/entazesoftware/image/upload/v1680705775/FatherTwoSAAPS_2_ztqxbg.jpg',
      // 'https://res.cloudinary.com/entazesoftware/image/upload/v1680705776/FireThreeSAAPS_1_ipedn9.jpg',
      // 'https://res.cloudinary.com/entazesoftware/image/upload/v1680705780/GangSAAPS_2_krusgf.jpg',
      // 'https://res.cloudinary.com/entazesoftware/image/upload/v1680705782/JetSAAPS_1_kkx5qo.jpg',
      // 'https://res.cloudinary.com/entazesoftware/image/upload/v1680705787/GirlCowSAAPS_2_duqfxp.jpg',
      // 'https://res.cloudinary.com/entazesoftware/image/upload/v1680705792/FireTwoSAAPS_2_xraoct.jpg',
      // 'https://res.cloudinary.com/entazesoftware/image/upload/v1680705798/ManComputerSAAPS_2_dpqhvo.jpg',
      // 'https://res.cloudinary.com/entazesoftware/image/upload/v1680705799/HorsesOneSAAPS_2_vsbsq2.jpg',
      // 'https://res.cloudinary.com/entazesoftware/image/upload/v1680705799/HangGliderSAAPS_2_ca0nxb.jpg',

      // 'https://res.cloudinary.com/entazesoftware/image/upload/v1680705801/HouseSAAPS_1_nuuzyy.jpg',
      // 'https://res.cloudinary.com/entazesoftware/image/upload/v1680705802/NeutralChildSAAPS_2_kyawq4.jpg',
      // 'https://res.cloudinary.com/entazesoftware/image/upload/v1680705807/MotherTwoSAAPS_1_yfn0fd.jpg',
      // 'https://res.cloudinary.com/entazesoftware/image/upload/v1680705808/OilFireSAAPS_2_latijr.jpg',
      // 'https://res.cloudinary.com/entazesoftware/image/upload/v1680705809/MotherSAAPS_2_qx8p6w.jpg',
      // 'https://res.cloudinary.com/entazesoftware/image/upload/v1680705809/MutliationFiveSAAPS_2_kiaz2h.jpg',
      // 'https://res.cloudinary.com/entazesoftware/image/upload/v1680705814/PancakesSconesSAAPS_2_osu55p.jpg',
      // 'https://res.cloudinary.com/entazesoftware/image/upload/v1680705817/PoliceBatonSAAPS_2_pnk4j9.jpg',
      // 'https://res.cloudinary.com/entazesoftware/image/upload/v1680705817/MountainLakeSAAPS_2_ny5xpk.jpg',
      // 'https://res.cloudinary.com/entazesoftware/image/upload/v1680705818/KebabSkewerSAAPS_2_xct1fp.jpg',

      // 'https://res.cloudinary.com/entazesoftware/image/upload/v1680705819/PoliceTwoSAAPS_2_zrmw2o.jpg',
      // 'https://res.cloudinary.com/entazesoftware/image/upload/v1680705823/RaftersSAAPS_2_ahm73i.jpg',
      // 'https://res.cloudinary.com/entazesoftware/image/upload/v1680705824/RepeatBombTwo_2_hycrk2.jpg',
      // 'https://res.cloudinary.com/entazesoftware/image/upload/v1680705829/RefugeesSAAPS_1_avopfs.jpg',
      // 'https://res.cloudinary.com/entazesoftware/image/upload/v1680705835/RepeatBurnVictimTwo_1_eirng0.jpg',
      // 'https://res.cloudinary.com/entazesoftware/image/upload/v1680705840/RepeatAbstractArtTwo_1_cnguvw.jpg',
      // 'https://res.cloudinary.com/entazesoftware/image/upload/v1680705841/RepeatInfant_2_it9rcn.jpg',
      // 'https://res.cloudinary.com/entazesoftware/image/upload/v1680705841/PicnicSAAPS_1_dk9src.jpg',
      // 'https://res.cloudinary.com/entazesoftware/image/upload/v1680705841/RepeatCoulds_1_cs6ajv.jpg',
      // 'https://res.cloudinary.com/entazesoftware/image/upload/v1680705856/RepeatCarAccidentOne_2_n1tnvu.jpg',

      // 'https://res.cloudinary.com/entazesoftware/image/upload/v1680705859/RepeatPitBull_1_b76anp.jpg',
      // 'https://res.cloudinary.com/entazesoftware/image/upload/v1680705865/RepeatSnakeOne_2_dzfh4x.jpg',
      // 'https://res.cloudinary.com/entazesoftware/image/upload/v1680705865/RepeatMutilationSeven_1_d8dnuq.jpg',
      // 'https://res.cloudinary.com/entazesoftware/image/upload/v1680705867/RepeatMutilationEight_2_iyewm9.jpg',
      // 'https://res.cloudinary.com/entazesoftware/image/upload/v1680705874/RepeatOctopus_2_f1rhre.jpg',
      // 'https://res.cloudinary.com/entazesoftware/image/upload/v1680705876/RepeatTrain_2_sulylq.jpg',
      // 'https://res.cloudinary.com/entazesoftware/image/upload/v1680705876/RepeatSoldierOne_1_zawzz1.jpg',
      // 'https://res.cloudinary.com/entazesoftware/image/upload/v1680705876/RomanceThreeSAAPS_1_kvkitk.jpg',
      // 'https://res.cloudinary.com/entazesoftware/image/upload/v1680705879/SealOneSAAPS_2_a5s22n.jpg',
      // 'https://res.cloudinary.com/entazesoftware/image/upload/v1680705880/RepeatStilLIfe_1_zwaudv.jpg',

      // 'https://res.cloudinary.com/entazesoftware/image/upload/v1680705884/ShipWaveSAAPS_1_tnv5rb.jpg',
      // 'https://res.cloudinary.com/entazesoftware/image/upload/v1680705885/RunnersSAAPS_1_bhxq79.jpg',
      // 'https://res.cloudinary.com/entazesoftware/image/upload/v1680705887/RepeatMushroomOne_2_zuxa1v.jpg',
      // 'https://res.cloudinary.com/entazesoftware/image/upload/v1680705888/RepeatVomitTwo_2_gtudzx.jpg',
      // 'https://res.cloudinary.com/entazesoftware/image/upload/v1680705889/SkierOneSAAPS_1_nyh69l.jpg',
      // 'https://res.cloudinary.com/entazesoftware/image/upload/v1680705889/SmokePollutionSAAPS_2_v99mwn.jpg',
      // 'https://res.cloudinary.com/entazesoftware/image/upload/v1680705896/SnakesThreeSAAPS_2_yf93da.jpg',
      // 'https://res.cloudinary.com/entazesoftware/image/upload/v1680705903/SkySurderSAAPS_2_ierggf.jpg',
      // 'https://res.cloudinary.com/entazesoftware/image/upload/v1680705906/ScarvesSAAPS_2_fb55k6.jpg',
      // 'https://res.cloudinary.com/entazesoftware/image/upload/v1680705907/SnakeTwoSAAPS_1_pdi2sf.jpg',

      // 'https://res.cloudinary.com/entazesoftware/image/upload/v1680705907/WomanThreeSAAPS_2_k64ot8.jpg',
      // 'https://res.cloudinary.com/entazesoftware/image/upload/v1680705908/WatermelonSAAPS_2_cjlucp.jpg',
      // 'https://res.cloudinary.com/entazesoftware/image/upload/v1680705908/WingWalkerPlaneCarnivalSAAPS_2_siq5xh.jpg',
      // 'https://res.cloudinary.com/entazesoftware/image/upload/v1680705908/SpiderSAAPS_2_vt7owj.jpg',

    ]
    );
  const [ImageRating, setImageRating] = useState(null);
  const [ImageRating2, setImageRating2] = useState(null);

  const [ImageRatingS2, setImageRatingS2] = useState(null);
  const [ImageRating2S2, setImageRating2S2] = useState(null);

  const [Timing1, SetTiming1] = useState(false);
  const [Timing2, SetTiming2] = useState(false);


  const [UnratedImages, SetUnratedImages] = useState(null);
  const [UnratedImages2, SetUnratedImages2] = useState(null);

  const [srcIm, SetSrcIm] = useState();
  const [srcIm2, SetSrcIm2] = useState(null);
  const [srcIm22, SetSrcIm22] = useState(null);


  const [countModal, setCountModal] = useState(0);
  const [countModal2, setCountModal2] = useState(0);

  const [imageConfirm, setImageConfirm] = useState(null);
  const [ImageConfirmed, setImageConfirmed] = useState(false);
  const [AxiosSend, setAxiosSend] = useState(false);
  const [AxiosSend2, setAxiosSend2] = useState(false);


  let count = countModal;
  let count2 = countModal2;
  let imNum = imageNum;



  useEffect(() => {
    if (userProfile) {
      if (UnratedImages && UnratedImages2) {
        // console.log('UnratedImages :', UnratedImages)
        if (UnratedImages.length > 0 ) {
          setFirstPage(true)
        } else if (UnratedImages.length === 0 && UnratedImages2.length > 0) {
          setSectionTwoStart(true)
        }
      }
    }
  }, [UnratedImages, UnratedImages2, userProfile])

  useEffect(() => {
    if (userProfile) {
      if (UnratedImages2 && UnratedImages.length === 0) {
        // console.log('UnratedImages2 :', UnratedImages2)
        if (UnratedImages2.length > 0 ) {
          setSectionTwoStart(true)
        } else {
          setTest3End(true)
        }
      }
    }
  }, [UnratedImages2, userProfile])

  useEffect(()=>{
    if (imageConfirm !== null) {
      setImageConfirmed(true);
    }
  }, [imageConfirm])


  //SECTION 1
  useEffect(() => {
    if (ImageRating) {
      SetRating1Call(true);
    } else {
      SetRating1Call(false);
    }
  }, [ImageRating])

  useEffect(() => {
    if (ImageRating2) {
      SetRating2Call(true);
    } else {
      SetRating2Call(false);
    }
  }, [ImageRating2])

  //SECTION 2
  useEffect(() => {
    if (ImageRatingS2) {
      SetRating1Call2(true);
    }
  }, [ImageRatingS2])

  useEffect(() => {
    if (ImageRating2S2) {
      SetRating2Call2(true);
    }
  }, [ImageRating2S2])

  /*  HOOK CALL FOR UNRATED IMAGES AND RATINGS PAGE's */
  useEffect(() => {
    if (UnratedImages && imgLoaded ) {
        if (count <=  UnratedImages.length - 1) {
          SetSrcIm(UnratedImages[count])

          if (!Rating1Call && !Rating2Call && !RatePage && !RatePage2 && ImagesPage && !CrossPage && !NextImage) {
            setTimeout(() => {
              setImagesPage(false);
              setRatePage(true);
              SetTiming1(true)
            }, 6000)
         }
        if (Rating1Call && !Rating2Call && !ImagesPage && !NextImage) {

            setRatePage(false);
            SetRating1Call(false);
            SetTiming1(false);
            setRatePage2(true);
        }
          if (!Rating1Call && Rating2Call && !ImagesPage) {
            setAxiosSend(true);
            setRatePage2(false)
            SetRating2Call(false)
            SetRating2Call(false);
            if (count <= UnratedImages.length - 2) {
              setCrossPage(true);
              setCrossBool(true);
            }
            if (count === UnratedImages.length - 1) {
              SetNextImage(false);
              setCrossBool(true);
              setSecondPage(true);
              setTimeout(() => {
                setSecondPage(false);
                setSectionTwoStart(true);
              }, 3000)
            }
          }

          // ...............CROSS PAGE WITH TIMEOUT................
          if (!Rating1Call && !Rating2Call && CrossBool && !ImagesPage) {
            setTimeout(() => {
              if (count <= UnratedImages.length - 1) {
                setCrossBool(false);
                setCrossPage(false);
                SetNextImage(true);
                count = (countModal + 1);
                setCountModal(count);
              }
            }, 5000)
          }

          // ...............MOVE TO NEXT IMAGE................
          if (!RatePage && !RatePage2 && !ImagesPage && !CrossPage && NextImage ) {
            SetNextImage(false);
            setImagesPage(true);
          }
        }
    }
  }, [UnratedImages, count, imgLoaded, Rating1Call, Rating2Call, CrossPage, RatePage, RatePage2, ImagesPage, CrossBool, Timing1, Timing2])
//Transition from first section ratings
 useEffect(()=>{
   if (sectionTwoStart) {
    SetNextImage(false)
   }
 }, [NextImage, sectionTwoStart])

  /*  HOOK CALL FOR UNRATED-IMAGES 2 AND RATINGS PAGE's */
  useEffect(() => {
    if (UnratedImages2 && imgLoaded2 ) {
        if (count2 <=  UnratedImages2.length - 1) {
          SetSrcIm2(UnratedImages2[count2])
          if (!Rating1Call2 && !Rating2Call2 && !RatePageS2 && !RatePage2S2 && ImagesPage2 && !CrossPage && !NextImage2) {
            setTimeout(() => {
              setImagesPage2(false);
              // SetSrcIm2(null);
              SetSrcIm22(null);
              setConfirmPage(true);
              SetTiming1(true)
            }, 5000)
         }
        if (ImageConfirmed) {
          setConfirmPage(false);
          setRatePageS2(true);
          setImageConfirmed(false);
        }
        if (Rating1Call2  && !Rating2Call2 && !ImagesPage2 && !NextImage2) {
            setRatePageS2(false);
            SetRating1Call2(false);
            SetTiming1(false);
            setRatePage2S2(true);
        }
          if (!Rating1Call2 && Rating2Call2 && !ImagesPage2) {
            setRatePage2S2(false)
            SetRating2Call2(false)
            // SetRating2Call(false);
            if (count2 <= UnratedImages2.length - 2) {
              setAxiosSend2(true);
              setCrossPage(true);
              setCrossBool(true);
            }
            if (count2 === UnratedImages2.length - 1) {
              setAxiosSend2(true);
              setTimeout(()=>{
                setCrossBool(true);
                setTest3End(true);
                let complete = {_id: userProfile._id, test3Completionv2: true};
                axios.post('/api/user', complete)
                .then((res) => {

                })
                .catch (()=>{

                })
                SetUnratedImages2(null);
              }, 3000)
            }
          }
          // ...............CROSS PAGE WITH TIMEOUT................
          if (!Rating1Call2 && !Rating2Call2 && CrossBool && !ImagesPage2) {
            setTimeout(() => {
              if (count2 <= UnratedImages2.length - 1) {
                setCrossBool(false);
                setCrossPage(false);
                SetNextImage2(true);
                count2 = (countModal2 + 1);
                setCountModal2(count2);
              }
            }, 3000)
          }
          // ...............MOVE TO NEXT IMAGE................
          if (!RatePageS2 && !RatePage2S2 && !ImagesPage2 && !CrossPage && NextImage2 && srcIm22) {
            SetNextImage2(false);
            setImagesPage2(true);
          }
        }
    }
  }, [UnratedImages2, ImageConfirmed, srcIm22, count2, imgLoaded2, NextImage2, Rating1Call2, Rating2Call2, CrossPage, RatePageS2, RatePage2S2, ImagesPage2, CrossBool, Timing1, Timing2])

  useEffect(()=>{
    if (srcIm2) {
      SetSrcIm22(srcIm2)
    }
  }, [srcIm2, countModal2])

  /* HANDLING MEMORY LEAK */
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);
  useEffect(() => {
    return () => {
      setIsMounted(false);
    }
  }, []);

  /*  HOOK CALL FOR USER AUTH */
  useEffect(() => {
    if (userProfile && token) {
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
    if (ImagesPage2) {
      setImgLoaded2(true)
    }
  }, [ImagesPage2, loaded2])

  //IMAGES - TEST 1
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

  //IMAGES - TEST 2
  useEffect(() => {
    if (RatePageS2) {
      setImgLoadedRatingS2(true)
    }
  }, [RatePageS2, loadedRating2S2])

  useEffect(() => {
    if (RatePage2S2) {
      setImgLoadedRating2S2(true)
    }
  }, [RatePage2S2, loadedRating2S2])

  useEffect(() => {
    if (keyClicked === 'Enter' && firstPage) {
      // setFirstPage(false);
      // setImagesPage(true);
      SetKeyClicked('');
      setFirstPage(false);
      setRatingExample(true);
    }
    // if (keyClicked === 'Enter' && sectionTwoStart) {
    //   // setSectionTwoStart(false);
    //   // setSectionTwoStart2(true);
    //   // SetKeyClicked('');
    //   PreSection02();
    // }
    // if (keyClicked === 'Enter' && sectionTwoStart2) {
    //   setSectionTwoStart(false);
    //   setSectionTwoStart2(false);
    //   setSectionTwoClickStart(true);
    //   SetKeyClicked('');
    // }
    // if (keyClicked === 'Enter' && sectionTwoClickStart) {
    //   setSectionTwoClickStart(false);
    //   SetStartSectionTwo(true);
    //   setImagesPage2(true);
    //   SetKeyClicked('');
    // }
    if (keyClicked === 'Enter' && test3End) {
      navigate('/cognitivetest4v2');
    }
  }, [keyClicked])

  //-------------------------------------------
  const showRating = () => {
    setFirstPage(false);
    setRatingExample(true);
  }
  const showRating2 = () => {
    setRatingExample(false);
    setRatingExample2(true);
  }
  const ratinFinish = () => {
    setRatingExample2(false);
    setRatingFinish(true);
  }
  const startTest = () => {
    setRatingFinish(false);
    setImagesPage(true);
  }
  const nextText = () => {
    setText2(true);
  }

  useEffect(() => {
    // console.log('userProfile :', userProfile)
    if (userProfile) {
      GetUnratedImages();
      GetUnratedImages2();
    }
  }, [userProfile])

  const GetUnratedImages = () => {
    let num;
    if (userProfile._id) {
      const param = {_id: userProfile._id };
      axios.get('/api/test3v2Images', {params: param})
      .then((res) => {
        if (res.data.Test3v2Images) {
          num = (Images.length - (res.data.Test3v2Images.length));
          // console.log('res.data.Test3v2Images :', res.data.Test3v2Images )
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

  const GetUnratedImages2 = () => {
    let num;
    if (userProfile._id) {
      const param = {_id: userProfile._id };
      axios.get('/api/test3v2Images', {params: param})
      .then((res) => {
        if (res.data.Test3v2Images) {
          num = (Images2.length - (res.data.Test3v2Images2.length));
          // console.log('res.data.Test3Images2 :', res.data.Test3Images2 )
          // console.log('Images2 :', Images2.length )
        } else {
          num = 0;
        }
        //Filter Images and set unrated images
        const imgs = _.takeRight(Images2, num);
        // console.log('imgs 2:', imgs)
        SetUnratedImages2(imgs);
      })
      .catch((err) => {
        console.log(err)
      })
    }
  }

  useEffect(()=> {
    if (UnratedImages) {
      let interr = Images.length - UnratedImages.length;
      setImageNum(interr)
    }
  }, [UnratedImages])

  useEffect(()=> {
    if (UnratedImages2) {
      let interr = Images2.length - UnratedImages2.length;
      setImageNum2(interr)
    }
  }, [UnratedImages2])

  useEffect(() => {
    if (AxiosSend && UnratedImages) {
      // For interrupted test due to refresh or sign out
      imNum = imageNum + 1;
      const key = 'Image'+ imNum, value = srcIm;
      const obj = {
        [`${key}`]: {src: value, NegativePositiveRating: ImageRating, CalmExcitedRating: ImageRating2 }
      }

      const param = {_id: userProfile._id, obj};
     //Make Axios Post
     axios.post('/api/test3v2imagerating', param)
     .then((res) => {
      //  console.log('res.data confirm :', res.data)
       setAxiosSend(false);
       setImageRating(null);
       setImageRating2(null);
       setImageNum(imageNum + 1);
     })
     .catch((err) => {

     })
    }
  }, [AxiosSend])

  useEffect(() => {
    if (AxiosSend2 && UnratedImages2) {
      // For interrupted test due to refresh or sign out
      imNum = imageNum2 + 1;
      const key = 'Image'+ imNum, value = srcIm2;

      const obj = {
        [`${key}`]: {src: value, YesNo: imageConfirm, NegativePositiveRating: ImageRatingS2, CalmExcitedRating: ImageRating2S2 }
      }

      const param = {_id: userProfile._id, obj};
    // Make Axios Post
     axios.post('/api/test3v2imagerating2', param)
     .then((res) => {
      //  console.log('res.data confirm 2:', res.data)
       setImageConfirm(null);
       setAxiosSend2(false);
       setImageRatingS2(null);
       setImageRating2S2(null);
       setImageNum2(imageNum2 + 1);
     })
     .catch((err) => {

     })

    }
  }, [AxiosSend2])


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
  const Rate11 = () => {
    setImageRating2(1);
  }
  const Rate12 = () => {
    setImageRating2(2);
  }
  const Rate13 = () => {
    setImageRating2(3);
  }
  const Rate14 = () => {
    setImageRating2(4);
  }
  const Rate15 = () => {
    setImageRating2(5);
  }
  const Rate16 = () => {
    setImageRating2(6);
  }
  const Rate17 = () => {
    setImageRating2(7);
  }
  const Rate18 = () => {
    setImageRating2(8);
  }
  const Rate19 = () => {
    setImageRating2(9);
  }
  const Rate1S2 = () => {
    setImageRatingS2(1);
  }
  const Rate2S2 = () => {
    setImageRatingS2(2);
  }
  const Rate3S2 = () => {
    setImageRatingS2(3);
  }
  const Rate4S2 = () => {
    setImageRatingS2(4);
  }
  const Rate5S2 = () => {
    setImageRatingS2(5);
  }
  const Rate6S2 = () => {
    setImageRatingS2(6);
  }
  const Rate7S2 = () => {
    setImageRatingS2(7);
  }
  const Rate8S2 = () => {
    setImageRatingS2(8);
  }
  const Rate9S2 = () => {
    setImageRatingS2(9);
  }
  const Rate11S2 = () => {
    setImageRating2S2(1);
  }
  const Rate12S2 = () => {
    setImageRating2S2(2);
  }
  const Rate13S2 = () => {
    setImageRating2S2(3);
  }
  const Rate14S2 = () => {
    setImageRating2S2(4);
  }
  const Rate15S2 = () => {
    setImageRating2S2(5);
  }
  const Rate16S2 = () => {
    setImageRating2S2(6);
  }
  const Rate17S2 = () => {
    setImageRating2S2(7);
  }
  const Rate18S2 = () => {
    setImageRating2S2(8);
  }
  const Rate19S2 = () => {
    setImageRating2S2(9);
  }

  const PreSection02 = () => {
    setSectionTwoStart(false);
    setSectionTwoStart2(true);
  }

  const PreSection2 = () => {
    setSectionTwoStart(false);
    setSectionTwoStart2(false);
    setSectionTwoClickStart(true);
  }

  const Section2 = () => {
    setSectionTwoClickStart(false);
    setImagesPage2(true);
  }
//-------------------------------------------------------------------------------------------------------------------
  const ImageConfirmYes = () => {
    setImageConfirm(true);
  }

  const ImageConfirmNo = () => {
    setImageConfirm(false);
  }

  const handleStartTest4 = () => {
    navigate('/cognitivetest4v2')
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
              <div style={{ fontSize: 30, fontWeight: 400, display: 'flex', flexDirection: 'column', padding: '40px 40px 60px 40px', lineHeight: '1.6', }} >
              You will see some pictures appear on the screen, one after each other. Some pictures will be positive, some will be neutral, and some will be negative. Please note that some pictures may be offensive to sensitive viewers.
              Please look at each picture carefully and try to remember it. <br />
              {Text2 ?
              <>
                <span style={{ paddingTop: '20px' }} >
                You will also need to rate how the picture made you feel on a scale of negative-neutral-positive and calm-neutral-excited.
                </span>
                <span style={{ paddingTop: '20px' }} >
                The scales range from 1 - 9 and you must click on the number rating that describes how you feel. Let's see how the rating scales look.<br /><br />
                [Press ENTER or click next to see the rating scales.]
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
                  <button onClick={showRating} >Next</button>
                </div>
              : null}

            </div>
            </>
            :
            null}
            {ratingExample ?
            <>
              <div style={{ fontSize: 30, fontWeight: 700, display: 'flex', flexDirection: 'column', padding: '80px 40px 0 40px', lineHeight: '1.6', }} >
              You will see this screen after each picture, and you will have to rate how this picture made you feel from very negative to very positive by clicking on the corresponding number below the image. </div>
              <div style={{ display: 'flex', flexDirection: 'inline-block', alignItems: 'center', }}>
                <img
                  alt="Test3-Rating"
                  src='https://res.cloudinary.com/entazesoftware/image/upload/v1668769653/RatingImage1_beicbl.png'
                  style={TestRatings2 }
                />
              </div>
              <div style={{ display: "inline-block", margin: "4px 4px 4px 5px", }} >
                <button style={{ pointerEvents: 'none', fontSize: 30, fontWeight: 700, color: "#000", background: "#ECB22E", margin: '3px', width: '5.3vw' }} >1</button>
                <button style={{ pointerEvents: 'none', fontSize: 30, fontWeight: 700, color: "#000", background: "#ECB22E", margin: '3px', width: '5.3vw' }} >2</button>
                <button style={{ pointerEvents: 'none', fontSize: 30, fontWeight: 700, color: "#000", background: "#ECB22E", margin: '3px', width: '5.3vw' }} >3</button>
                <button style={{ pointerEvents: 'none', fontSize: 30, fontWeight: 700, color: "#000", background: "#ECB22E", margin: '3px', width: '5.3vw' }} >4</button>
                <button style={{ pointerEvents: 'none', fontSize: 30, fontWeight: 700, color: "#000", background: "#ECB22E", margin: '3px', width: '5.3vw' }} >5</button>
                <button style={{ pointerEvents: 'none', fontSize: 30, fontWeight: 700, color: "#000", background: "#ECB22E", margin: '3px', width: '5.3vw' }} >6</button>
                <button style={{ pointerEvents: 'none', fontSize: 30, fontWeight: 700, color: "#000", background: "#ECB22E", margin: '3px', width: '5.3vw' }} >7</button>
                <button style={{ pointerEvents: 'none', fontSize: 30, fontWeight: 700, color: "#000", background: "#ECB22E", margin: '3px', width: '5.3vw' }} >8</button>
                <button style={{ pointerEvents: 'none', fontSize: 30, fontWeight: 700, color: "#000", background: "#ECB22E", margin: '3px', width: '5.3vw' }} >9</button>
              </div>
              <div style={{ paddingTop: "35px"}}>
                <button onClick={showRating2}>Next</button>
              </div>
            </>
            : null}
            {ratingExample2 ?
            <>
              <div style={{ fontSize: 30, fontWeight: 700, display: 'flex', flexDirection: 'column', padding: '80px 40px 0 40px', lineHeight: '1.6', }} >
              You will also see this screen after each picture, and you will have to rate how this picture made you feel from very calm to very excited by clicking on the corresponding number below the image. </div>
              <div style={{ display: 'flex', flexDirection: 'inline-block', alignItems: 'center', }}>
                <img
                  alt="Test3-Rating"
                  src='https://res.cloudinary.com/entazesoftware/image/upload/v1668770671/RatingImage2_mxxvxp.png'
                  style={TestRatings2}
                />
              </div>
              <div style={{ display: "inline-block", margin: "4px 4px 4px 5px", }} >
                <button style={{ pointerEvents: 'none', fontSize: 30, fontWeight: 700, color: "#000", background: "#2EB67D", margin: '3px', width: '5.3vw' }} >1</button>
                <button style={{ pointerEvents: 'none', fontSize: 30, fontWeight: 700, color: "#000", background: "#2EB67D", margin: '3px', width: '5.3vw' }} >2</button>
                <button style={{ pointerEvents: 'none', fontSize: 30, fontWeight: 700, color: "#000", background: "#2EB67D", margin: '3px', width: '5.3vw' }} >3</button>
                <button style={{ pointerEvents: 'none', fontSize: 30, fontWeight: 700, color: "#000", background: "#2EB67D", margin: '3px', width: '5.3vw' }} >4</button>
                <button style={{ pointerEvents: 'none', fontSize: 30, fontWeight: 700, color: "#000", background: "#2EB67D", margin: '3px', width: '5.3vw' }} >5</button>
                <button style={{ pointerEvents: 'none', fontSize: 30, fontWeight: 700, color: "#000", background: "#2EB67D", margin: '3px', width: '5.3vw' }} >6</button>
                <button style={{ pointerEvents: 'none', fontSize: 30, fontWeight: 700, color: "#000", background: "#2EB67D", margin: '3px', width: '5.3vw' }} >7</button>
                <button style={{ pointerEvents: 'none', fontSize: 30, fontWeight: 700, color: "#000", background: "#2EB67D", margin: '3px', width: '5.3vw' }} >8</button>
                <button style={{ pointerEvents: 'none', fontSize: 30, fontWeight: 700, color: "#000", background: "#2EB67D", margin: '3px', width: '5.3vw' }} >9</button>
              </div>
              <div style={{ paddingTop: "35px"}}>
                <button onClick={ratinFinish}>Next</button>
              </div>
            </>
            : null}
            {RatingFinish ?
              <>
              <div style={{ fontSize: 30, fontWeight: 700, display: 'flex', flexDirection: 'column', padding: '80px 40px 0 40px', lineHeight: '1.6', }} >
              You will now begin the test and see the pictures. Click start when you are ready.</div>
              <div style={{ paddingTop: "35px"}}>
                <button onClick={startTest}>Start</button>
              </div>
            </>
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
          {sectionTwoStart ?
          <div style={{ fontSize: 40, fontWeight: 300, display: 'flex', flexDirection: 'column', padding: '60px 40px 2px 40px', lineHeight: '1.6', alignItems: 'center', justifyContent: 'center', }} >
          Welcome back! <br />
          Just like last time you will see some pictures appear on the screen, one after each other. Again some pictures will be positive, some will be neutral and some will be negative.
          However, some pictures will be the same as last time, but some will be new.
          You need to decide if the pictures are new or ones you've seen before.
          You will also need to rate how the picture made you feel.<br /><br />
          [Click next to continue.] <br />
            <div>
              <button style={{ margin: "8px", background: "#7e1515" }} onClick={PreSection02} >NEXT</button>
            </div>
          </div>
          : null}

         {sectionTwoStart2 ?
          <>
            <div style={{ fontSize: 40, fontWeight: 300, display: 'flex', flexDirection: 'column', padding: '60px 40px 2px 40px', lineHeight: '1.6', alignItems: 'center', justifyContent: 'center', }} >
              REMINDERS: After the picture appears there are three steps:<br />
              1: Decide whether you have seen the picture before or not.<br />
              2: Rate the picture on a scale from positive to negative.<br />
              3: Rate the picture on a scale from calm to excited.<br /><br />

              [Click next to continue.]
            </div>
            <div>
              <button style={{ margin: "8px", background: "#7e1515" }} onClick={PreSection2} >NEXT</button>
            </div>
          </>
          : null}

          {sectionTwoClickStart ?
          <div style={{ fontSize: 40, fontWeight: 700, display: 'flex', flexDirection: 'column', padding: '60px 40px 120px 40px', lineHeight: '1.6', alignItems: 'center', justifyContent: 'center', }} >
            So now we will begin! <br />
            [Click START.] <br />
            <div>
              <button style={{ margin: "8px", background: "#7e1515" }} onClick={Section2} >START</button>
            </div>
          </div>
          : null}

        {ImagesPage2 && UnratedImages2 && imgLoaded2 ?
            <>
              <div>

                <img
                  src={srcIm22}
                  style={imgLoaded2 ? TestImages : { display: 'none' } }
                  onLoad={() => setLoaded(true)}
                />
              </div>
            </>
            : null}
        {ConfirmPage ?
          <div className="confirm-box">
            <p>Have you seen this image before?</p>
            <a onClick={ImageConfirmYes} title="Yes">Yes</a>
            <a onClick={ImageConfirmNo} title="No">No</a>
          </div>
        : null}
            {RatePageS2 && UnratedImages2 && imgLoadedRatingS2 ?
            <>
              <div style={{ fontSize: 30, fontWeight: 700, display: 'flex', flexDirection: 'column', padding: '80px 40px 0 40px', lineHeight: '1.6', }} >
              Rate how this picture made you feel from very negative to very positive. </div>
              <div style={{ display: 'flex', flexDirection: 'inline-block', alignItems: 'center', }}>
                <span style={{ color: '#fff', fontSize: '40px', fontWeight: 700, margin: '5px 15px 0 0' }}>Very Negative</span>
                <img
                  alt="Test3-Rating"
                  src='https://res.cloudinary.com/entazesoftware/image/upload/v1668022235/image2_jezpza.webp'
                  style={imgLoadedRatingS2 ? TestRatings : { display: 'none' } }
                  onLoad={() => setLoadedRatingS2(true)}
                />
                <span style={{ color: '#fff', fontSize: '40px', fontWeight: 700, margin: '20px 0 0 15px' }}>Very Positive</span>
              </div>
              <div style={{ display: "inline-block", margin: "4px 4px 4px 5px", }} >
                <button style={{ fontSize: 30, fontWeight: 700, color: "#000", background: "#ECB22E", margin: '3px', width: '5.3vw' }} onClick={Rate1S2} >1</button>
                <button style={{ fontSize: 30, fontWeight: 700, color: "#000", background: "#ECB22E", margin: '3px', width: '5.3vw' }} onClick={Rate2S2} >2</button>
                <button style={{ fontSize: 30, fontWeight: 700, color: "#000", background: "#ECB22E", margin: '3px', width: '5.3vw' }} onClick={Rate3S2} >3</button>
                <button style={{ fontSize: 30, fontWeight: 700, color: "#000", background: "#ECB22E", margin: '3px', width: '5.3vw' }} onClick={Rate4S2} >4</button>
                <button style={{ fontSize: 30, fontWeight: 700, color: "#000", background: "#ECB22E", margin: '3px', width: '5.3vw' }} onClick={Rate5S2} >5</button>
                <button style={{ fontSize: 30, fontWeight: 700, color: "#000", background: "#ECB22E", margin: '3px', width: '5.3vw' }} onClick={Rate6S2} >6</button>
                <button style={{ fontSize: 30, fontWeight: 700, color: "#000", background: "#ECB22E", margin: '3px', width: '5.3vw' }} onClick={Rate7S2} >7</button>
                <button style={{ fontSize: 30, fontWeight: 700, color: "#000", background: "#ECB22E", margin: '3px', width: '5.3vw' }} onClick={Rate8S2} >8</button>
                <button style={{ fontSize: 30, fontWeight: 700, color: "#000", background: "#ECB22E", margin: '3px', width: '5.3vw' }} onClick={Rate9S2} >9</button>
              </div>
            </>
            : null}
           {RatePage2S2 && UnratedImages2 && imgLoadedRating2S2 ?
            <>
              <div style={{ fontSize: 30, fontWeight: 700, display: 'flex', flexDirection: 'column', padding: '80px 40px 0 40px', lineHeight: '1.6', }} >
              Rate how this picture made you feel from calm to excited. </div>
              <div style={{ display: 'flex', flexDirection: 'inline-block', alignItems: 'center', }}>
                <span style={{ color: '#fff', fontSize: '40px', fontWeight: 700, margin: '5px 70px 0 0' }}>Calm</span>
                <img
                  alt="Test3-Rating"
                  src='https://res.cloudinary.com/entazesoftware/image/upload/v1668770671/RatingImage2_mxxvxp.png'
                  style={imgLoadedRating2S2 ? TestRatings : { display: 'none' } }
                  onLoad={() => setLoadedRating2S2(true)}
                />
                <span style={{ color: '#fff', fontSize: '40px', fontWeight: 700, margin: '20px 0 0 15px' }}>Excited</span>
              </div>
              <div style={{ display: "inline-block", margin: "4px -52px 4px -40px", }} >
                <button style={{ fontSize: 30, fontWeight: 700, color: "#000", background: "#2EB67D", margin: '3px', width: '5.3vw' }} onClick={Rate11S2} >1</button>
                <button style={{ fontSize: 30, fontWeight: 700, color: "#000", background: "#2EB67D", margin: '3px', width: '5.3vw' }} onClick={Rate12S2} >2</button>
                <button style={{ fontSize: 30, fontWeight: 700, color: "#000", background: "#2EB67D", margin: '3px', width: '5.3vw' }} onClick={Rate13S2} >3</button>
                <button style={{ fontSize: 30, fontWeight: 700, color: "#000", background: "#2EB67D", margin: '3px', width: '5.3vw' }} onClick={Rate14S2} >4</button>
                <button style={{ fontSize: 30, fontWeight: 700, color: "#000", background: "#2EB67D", margin: '3px', width: '5.3vw' }} onClick={Rate15S2} >5</button>
                <button style={{ fontSize: 30, fontWeight: 700, color: "#000", background: "#2EB67D", margin: '3px', width: '5.3vw' }} onClick={Rate16S2} >6</button>
                <button style={{ fontSize: 30, fontWeight: 700, color: "#000", background: "#2EB67D", margin: '3px', width: '5.3vw' }} onClick={Rate17S2} >7</button>
                <button style={{ fontSize: 30, fontWeight: 700, color: "#000", background: "#2EB67D", margin: '3px', width: '5.3vw' }} onClick={Rate18S2} >8</button>
                <button style={{ fontSize: 30, fontWeight: 700, color: "#000", background: "#2EB67D", margin: '3px', width: '5.3vw' }} onClick={Rate19S2} >9</button>
              </div>
            </>
            : null}
         {test3End ?
          <>
            <div style={centerScreen} >
            <div style={{ fontSize: 35, fontWeight: 700, display: 'flex', padding: '0px 40px 120px 40px', lineHeight: '1.6', }} >
              Test 3 - IAPS Task Completed. <br /> [Click start or press ENTER to begin Test 4]
              {/* [Click start or press ENTER to begin Test 4] */}
            </div>
            <div>
              <button onClick={handleStartTest4}>
                {/* Start */}
                Start
              </button>
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

export default CognitiveTest3v2


