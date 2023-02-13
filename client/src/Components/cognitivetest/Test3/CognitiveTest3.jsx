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
  paddingTop: '23%',
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

const TestRatings2 = {
  display: 'flex',
  width: '50vw',
  height: '46vh',
  justifyContent: 'center',
  alignItems: 'center',
  margin: 'auto',
  paddingTop: '4vh',
}

const Cognitivetest3 = () => {
  const token = window.localStorage.getItem('token');
  const { userProfile, cognitiveTest, setCognitiveTest } = useMainContext();
  const [userAuth, setUserAuth] = useState(false);
  const [firstPage, setFirstPage] = useState(null);
  const [ratingExample, setRatingExample] = useState(false);
  const [ratingExample2, setRatingExample2] = useState(false);
  const [RatingFinish, setRatingFinish] = useState(false);
  const [secondSection, setSecondPage] = useState(null);
  const [sectionTwoStart, setSectionTwoStart] = useState(false);
  const [sectionTwoClickStart, setSectionTwoClickStart] = useState(false);
  // const [startSectionTwo, SetStartSectionTwo] = useState(false);
  const [keyClicked, SetKeyClicked] = useState('')
  const navigate = useNavigate();
  const [Text2, setText2] = useState();
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
    'https://res.cloudinary.com/entazesoftware/image/upload/v1671644477/VeiledWomanSAAPS_v49fkw.jpg',
    'https://res.cloudinary.com/entazesoftware/image/upload/v1671644478/WaterSkiingSAAPS_ylfv32.jpg',
    'https://res.cloudinary.com/entazesoftware/image/upload/v1671644478/TornadoFourSAAPS_x75bkd.jpg',
    'https://res.cloudinary.com/entazesoftware/image/upload/v1671644479/WomanLyingChairSAAPS_ule1fq.jpg',
    'https://res.cloudinary.com/entazesoftware/image/upload/v1671644478/TornadoThreeSAAPS_ivq0iv.png',
    'https://res.cloudinary.com/entazesoftware/image/upload/v1671644479/WingWalkerPlaneCarnivalSAAPS_buainp.jpg',
    'https://res.cloudinary.com/entazesoftware/image/upload/v1671644479/SpiderSAAPS_xx02e9.jpg',
    'https://res.cloudinary.com/entazesoftware/image/upload/v1671644479/WatermelonSAAPS_yfxz6m.jpg',
    'https://res.cloudinary.com/entazesoftware/image/upload/v1671644479/WomanTwoSAAPS_hsyc4j.jpg',
    'https://res.cloudinary.com/entazesoftware/image/upload/v1671644479/WomanThreeSAAPS_djtvab.jpg',

    // 'https://res.cloudinary.com/entazesoftware/image/upload/v1671644970/PoliceTwoSAAPS_eywquv.jpg',
    // 'https://res.cloudinary.com/entazesoftware/image/upload/v1671644970/PoliceBatonSAAPS_lqpxj3.jpg',
    // 'https://res.cloudinary.com/entazesoftware/image/upload/v1671644971/RepeatBloodyKiss_cx3bey.jpg',
    // 'https://res.cloudinary.com/entazesoftware/image/upload/v1671644971/PoleVaulterSAAPS_gbmkyz.jpg',
    // 'https://res.cloudinary.com/entazesoftware/image/upload/v1671644971/RepeatAbstractArtOne_ffshve.jpg',
    // 'https://res.cloudinary.com/entazesoftware/image/upload/v1671644971/RaftersSAAPS_qpi71q.jpg',
    // 'https://res.cloudinary.com/entazesoftware/image/upload/v1671644971/RepeatBombTwo_wwy14o.jpg',
    // 'https://res.cloudinary.com/entazesoftware/image/upload/v1671644972/RepeatInfant_ddluzf.jpg',
    // 'https://res.cloudinary.com/entazesoftware/image/upload/v1671644972/RepeatBook_oayxec.jpg',
    // 'https://res.cloudinary.com/entazesoftware/image/upload/v1671644972/RepeatHIVTattooOne_utbyud.jpg',

    // 'https://res.cloudinary.com/entazesoftware/image/upload/v1671644972/RepeatBurnVictimThree_t4h09f.jpg',
    // 'https://res.cloudinary.com/entazesoftware/image/upload/v1671644972/RepeatCarAccidentOne_ai2he9.jpg',
    // 'https://res.cloudinary.com/entazesoftware/image/upload/v1671644973/RepeatMutilationCadaver_rts2hy.jpg',
    // 'https://res.cloudinary.com/entazesoftware/image/upload/v1671644973/RepeatMushroomOne_wkj5mt.jpg',
    // 'https://res.cloudinary.com/entazesoftware/image/upload/v1671644974/RepeatMutilationEight_ujklvp.jpg',
    // 'https://res.cloudinary.com/entazesoftware/image/upload/v1671644974/RepeatSnakeOne_y7ycod.jpg',
    // 'https://res.cloudinary.com/entazesoftware/image/upload/v1671644974/RepeatNudeFemaleI_aqdfcr.jpg',
    // 'https://res.cloudinary.com/entazesoftware/image/upload/v1671644974/RepeatOctopus_ygjjvf.jpg',
    // 'https://res.cloudinary.com/entazesoftware/image/upload/v1671644975/RepeatTrain_kvdoy1.jpg',
    // 'https://res.cloudinary.com/entazesoftware/image/upload/v1671644975/RepeatVomitTwo_z0v1ev.jpg',

    // 'https://res.cloudinary.com/entazesoftware/image/upload/v1671644975/RepeatSoldierThree_ywsapl.jpg',
    // 'https://res.cloudinary.com/entazesoftware/image/upload/v1671644975/RomanceOneSAAPS_jzhebm.jpg',
    // 'https://res.cloudinary.com/entazesoftware/image/upload/v1671644975/RepeatRoach_xptdif.jpg',
    // 'https://res.cloudinary.com/entazesoftware/image/upload/v1671644975/RowerSAAPS_spdt1n.jpg',
    // 'https://res.cloudinary.com/entazesoftware/image/upload/v1671644975/SadGirlsSAAPS_null0y.jpg',
    // 'https://res.cloudinary.com/entazesoftware/image/upload/v1671644975/RomanceTwoSAAPS_t49uyg.jpg',
    // 'https://res.cloudinary.com/entazesoftware/image/upload/v1671644976/SkullsSAAPS_afmlfv.jpg',
    // 'https://res.cloudinary.com/entazesoftware/image/upload/v1671644976/ScarvesSAAPS_otb4gp.jpg',
    // 'https://res.cloudinary.com/entazesoftware/image/upload/v1671644977/SmokePollutionSAAPS_jcvff7.jpg',
    // 'https://res.cloudinary.com/entazesoftware/image/upload/v1671644977/SeaMuizenbergHomesSAAPS_sgqxhz.jpg',

    // 'https://res.cloudinary.com/entazesoftware/image/upload/v1671644977/SealOneSAAPS_yr4kkb.jpg',
    // 'https://res.cloudinary.com/entazesoftware/image/upload/v1671644977/SkySurderSAAPS_s9okwn.jpg',
    // 'https://res.cloudinary.com/entazesoftware/image/upload/v1671644977/SnakesThreeSAAPS_furkuh.jpg',
    // 'https://res.cloudinary.com/entazesoftware/image/upload/v1671644978/SnakeFourSAAPS_arcpej.jpg',
    // 'https://res.cloudinary.com/entazesoftware/image/upload/v1671644978/SoldierTwoSAAPS_egkut5.jpg',
    // 'https://res.cloudinary.com/entazesoftware/image/upload/v1671646040/DimLitRoomNeutralWomanSAAPS_hxeo0m.jpg',
    // 'https://res.cloudinary.com/entazesoftware/image/upload/v1671646040/EroticCoupleFourSAAPS_mf2sqg.jpg',
    // 'https://res.cloudinary.com/entazesoftware/image/upload/v1671646040/DiverOneSAAPS_lh0s40.jpg',
    // 'https://res.cloudinary.com/entazesoftware/image/upload/v1671646040/ElephantsSAAPS_ptrvrw.jpg',
    // 'https://res.cloudinary.com/entazesoftware/image/upload/v1671646040/EroticCoupleInBedSAPS_k60rvv.jpg',

    // 'https://res.cloudinary.com/entazesoftware/image/upload/v1671646040/DentalExamSAAPS_evjlhl.jpg',
    // 'https://res.cloudinary.com/entazesoftware/image/upload/v1671646040/FireFourSAAPS_ghjy3e.jpg',
    // 'https://res.cloudinary.com/entazesoftware/image/upload/v1671646041/FliesOnPieSAAPS_bfxhdb.jpg',
    // 'https://res.cloudinary.com/entazesoftware/image/upload/v1671646041/FerryOneSAAPS_qvpral.jpg',
    // 'https://res.cloudinary.com/entazesoftware/image/upload/v1671646041/FatherTwoSAAPS_cpb8bx.jpg',
    // 'https://res.cloudinary.com/entazesoftware/image/upload/v1671646041/FireTwoSAAPS_uj45x7.jpg',
    // 'https://res.cloudinary.com/entazesoftware/image/upload/v1671646041/GirlCowSAAPS_bdzm9n.jpg',
    // 'https://res.cloudinary.com/entazesoftware/image/upload/v1671646041/GangSAAPS_wsjpyn.jpg',
    // 'https://res.cloudinary.com/entazesoftware/image/upload/v1671646042/IceCreamOneSAAPS_neocgx.jpg',
    // 'https://res.cloudinary.com/entazesoftware/image/upload/v1671646042/GymSAAPS_nhay3v.jpg',

    // 'https://res.cloudinary.com/entazesoftware/image/upload/v1671646042/HomelessManSAAPS_c1okx2.jpg',
    // 'https://res.cloudinary.com/entazesoftware/image/upload/v1671646042/HorsesOneSAAPS_anchvk.jpg',
    // 'https://res.cloudinary.com/entazesoftware/image/upload/v1671646042/MaleSAAPS_ourwcp.jpg',
    // 'https://res.cloudinary.com/entazesoftware/image/upload/v1671646043/MnMsSAAPS_pdsmu4.jpg',
    // 'https://res.cloudinary.com/entazesoftware/image/upload/v1671646043/KebabSkewerSAAPS_fithux.jpg',
    // 'https://res.cloudinary.com/entazesoftware/image/upload/v1671646043/HangGliderSAAPS_ekjuzl.jpg',
    // 'https://res.cloudinary.com/entazesoftware/image/upload/v1671646043/MotherSAAPS_qlwuum.jpg',
    // 'https://res.cloudinary.com/entazesoftware/image/upload/v1671646044/ManComputerSAAPS_ezgk70.jpg',
    // 'https://res.cloudinary.com/entazesoftware/image/upload/v1671646045/MountainThreeSAAPS_zmxj7w.jpg',
    // 'https://res.cloudinary.com/entazesoftware/image/upload/v1671646045/MountainLakeSAAPS_tfs25t.jpg',

    // 'https://res.cloudinary.com/entazesoftware/image/upload/v1671646045/ManInPoolSAAPS_e7bpn1.jpg',
    // 'https://res.cloudinary.com/entazesoftware/image/upload/v1671646045/NeutralChildSAAPS_eoappc.jpg',
    // 'https://res.cloudinary.com/entazesoftware/image/upload/v1671646045/NatureSAAPS_db9xdy.jpg',
    // 'https://res.cloudinary.com/entazesoftware/image/upload/v1671646045/MutliationFiveSAAPS_ny9pis.jpg',
    // 'https://res.cloudinary.com/entazesoftware/image/upload/v1671646046/MotorCycleSAAPS_bliomo.jpg',
    // 'https://res.cloudinary.com/entazesoftware/image/upload/v1671646046/PancakesSconesSAAPS_h5radg.jpg',
    // 'https://res.cloudinary.com/entazesoftware/image/upload/v1671646046/PaintbrushSAAPS_ksobzg.jpg',
    // 'https://res.cloudinary.com/entazesoftware/image/upload/v1671646046/PicnicTableSAAPS_m6naeu.jpg',
    // 'https://res.cloudinary.com/entazesoftware/image/upload/v1671646046/OilFiresSAAPS_jkbbfv.jpg',
    // 'https://res.cloudinary.com/entazesoftware/image/upload/v1671646046/OilFireSAAPS_q8sqpg.jpg',

    // 'https://res.cloudinary.com/entazesoftware/image/upload/v1671646967/AlcoholicSAAPS_ipejgk.jpg',
    // 'https://res.cloudinary.com/entazesoftware/image/upload/v1671646967/AttackFourSAAPS_aun86q.jpg',
    // 'https://res.cloudinary.com/entazesoftware/image/upload/v1671646968/AccidentBodiesSAAPS_g5z32s.jpg',
    // 'https://res.cloudinary.com/entazesoftware/image/upload/v1671646968/AttackThreeSAAPS_glj5iq.jpg',
    // 'https://res.cloudinary.com/entazesoftware/image/upload/v1671646968/AngryFaceThreeSAAPS_gsice2.jpg',
    // 'https://res.cloudinary.com/entazesoftware/image/upload/v1671646968/AirplaneTAxiSAAPS_wo4yji.jpg',
    // 'https://res.cloudinary.com/entazesoftware/image/upload/v1671646968/AttractiveTwoSAAPS_eky7uk.jpg',
    // 'https://res.cloudinary.com/entazesoftware/image/upload/v1671646968/BabyFourSAAPS_e8rd3j.jpg',
    // 'https://res.cloudinary.com/entazesoftware/image/upload/v1671646968/AttractiveThreeSAAPS_nuq3sy.jpg',
    // 'https://res.cloudinary.com/entazesoftware/image/upload/v1671646968/BatteredFemaleLyingDownSAAPS_igtubv.jpg',

    // 'https://res.cloudinary.com/entazesoftware/image/upload/v1671646968/BabyIncubatorSAAPS_ayiazp.jpg',
    // 'https://res.cloudinary.com/entazesoftware/image/upload/v1671646969/BoyFourSAAPS_iw72db.jpg',
    // 'https://res.cloudinary.com/entazesoftware/image/upload/v1671646969/BrideSAAPS_iduk3y.jpg',
    // 'https://res.cloudinary.com/entazesoftware/image/upload/v1671646969/CarAccidentFourSAAPS_hajmbp.jpg',
    // 'https://res.cloudinary.com/entazesoftware/image/upload/v1671646969/CakeBirthdaySAAPS_j3nzdk.jpg',
    // 'https://res.cloudinary.com/entazesoftware/image/upload/v1671646970/CockpitSAAPS_gfrzog.jpg',
    // 'https://res.cloudinary.com/entazesoftware/image/upload/v1671646970/ConcertFansSAAPS_qkctqq.jpg',
    // 'https://res.cloudinary.com/entazesoftware/image/upload/v1671646970/CemeterySAAPS_yqtkvf.jpg',
    // 'https://res.cloudinary.com/entazesoftware/image/upload/v1671646971/CoupleOneSAAPS_v7xhk6.jpg',
    // 'https://res.cloudinary.com/entazesoftware/image/upload/v1671646971/CourtyardSAAPS_wak6hi.jpg',


     ]
    );

    const [Images2, SetImages2] = useState([
      'https://res.cloudinary.com/entazesoftware/image/upload/v1675958966/WingWalkerPlaneCarnivalSAAPS_1_bd3wkz.jpg',
      'https://res.cloudinary.com/entazesoftware/image/upload/v1675958965/WatermelonSAAPS_1_w66qy3.jpg',
      'https://res.cloudinary.com/entazesoftware/image/upload/v1675958964/SnakeTwoSAAPS_nf1cdi.jpg',
      'https://res.cloudinary.com/entazesoftware/image/upload/v1675958965/WomanThreeSAAPS_1_limu2w.jpg',
      'https://res.cloudinary.com/entazesoftware/image/upload/v1675958964/SpiderSAAPS_1_nqsnjr.jpg',
      'https://res.cloudinary.com/entazesoftware/image/upload/v1675958963/SnakesThreeSAAPS_1_cyeggx.jpg',
      'https://res.cloudinary.com/entazesoftware/image/upload/v1675958963/SmokePollutionSAAPS_1_d9nwfi.jpg',
      'https://res.cloudinary.com/entazesoftware/image/upload/v1675958962/ScarvesSAAPS_1_s3uxft.jpg',
      'https://res.cloudinary.com/entazesoftware/image/upload/v1675958962/SkierOneSAAPS_hh8gos.jpg',
      'https://res.cloudinary.com/entazesoftware/image/upload/v1675958962/SkySurderSAAPS_1_md1xaj.jpg',

      // 'https://res.cloudinary.com/entazesoftware/image/upload/v1675958961/ShipWaveSAAPS_cdgqy6.jpg',
      // 'https://res.cloudinary.com/entazesoftware/image/upload/v1675958961/SealOneSAAPS_1_mxiust.jpg',
      // 'https://res.cloudinary.com/entazesoftware/image/upload/v1675958961/RunnersSAAPS_gqlhow.jpg',
      // 'https://res.cloudinary.com/entazesoftware/image/upload/v1675958957/RomanceThreeSAAPS_hzhrq7.jpg',
      // 'https://res.cloudinary.com/entazesoftware/image/upload/v1675958957/RowerSAAPS_1_expupk.jpg',
      // 'https://res.cloudinary.com/entazesoftware/image/upload/v1675958957/RepeatVomitTwo_1_q7sbu5.jpg',
      // 'https://res.cloudinary.com/entazesoftware/image/upload/v1675958956/RepeatTrain_1_armvzq.jpg',
      // 'https://res.cloudinary.com/entazesoftware/image/upload/v1675958956/RepeatStilLIfe_xd8rsg.jpg',
      // 'https://res.cloudinary.com/entazesoftware/image/upload/v1675958955/RepeatSoldierOne_fy5l8v.jpg',
      // 'https://res.cloudinary.com/entazesoftware/image/upload/v1675958955/RepeatOctopus_1_yzausy.jpg',

      // 'https://res.cloudinary.com/entazesoftware/image/upload/v1675958955/RepeatSnakeOne_1_vj2vlp.jpg',
      // 'https://res.cloudinary.com/entazesoftware/image/upload/v1675958954/RepeatPitBull_wynbef.jpg',
      // 'https://res.cloudinary.com/entazesoftware/image/upload/v1675958953/RepeatCoulds_ddlbsx.jpg',
      // 'https://res.cloudinary.com/entazesoftware/image/upload/v1675958953/RepeatMutilationSeven_wbm7mq.jpg',
      // 'https://res.cloudinary.com/entazesoftware/image/upload/v1675958953/RepeatMutilationEight_1_abh9sv.jpg',
      // 'https://res.cloudinary.com/entazesoftware/image/upload/v1675958952/RepeatMushroomOne_1_yagvy4.jpg',
      // 'https://res.cloudinary.com/entazesoftware/image/upload/v1675958951/RepeatInfant_1_xedwzl.jpg',
      // 'https://res.cloudinary.com/entazesoftware/image/upload/v1675958951/RefugeesSAAPS_g1berj.jpg',
      // 'https://res.cloudinary.com/entazesoftware/image/upload/v1675958951/RepeatCarAccidentOne_1_vzj6yf.jpg',
      // 'https://res.cloudinary.com/entazesoftware/image/upload/v1675958950/RepeatBurnVictimTwo_zajalt.jpg',

      // 'https://res.cloudinary.com/entazesoftware/image/upload/v1675958949/RepeatAbstractArtTwo_spyzsq.jpg',
      // 'https://res.cloudinary.com/entazesoftware/image/upload/v1675958948/PoliceTwoSAAPS_1_ews9ny.jpg',
      // 'https://res.cloudinary.com/entazesoftware/image/upload/v1675958949/RepeatBombTwo_1_q8dxjh.jpg',
      // 'https://res.cloudinary.com/entazesoftware/image/upload/v1675958948/RaftersSAAPS_1_ky2vv2.jpg',
      // 'https://res.cloudinary.com/entazesoftware/image/upload/v1675958947/PoliceBatonSAAPS_1_wumq10.jpg',
      // 'https://res.cloudinary.com/entazesoftware/image/upload/v1675958946/MountainLakeSAAPS_1_hsrcw9.jpg',
      // 'https://res.cloudinary.com/entazesoftware/image/upload/v1675958946/KebabSkewerSAAPS_1_kxbbls.jpg',
      // 'https://res.cloudinary.com/entazesoftware/image/upload/v1675958946/PancakesSconesSAAPS_1_l8rozj.jpg',
      // 'https://res.cloudinary.com/entazesoftware/image/upload/v1675958946/OilFireSAAPS_1_wkleb1.jpg',
      // 'https://res.cloudinary.com/entazesoftware/image/upload/v1675958945/NeutralChildSAAPS_1_wbdku8.jpg',

      // 'https://res.cloudinary.com/entazesoftware/image/upload/v1675958944/MutliationFiveSAAPS_1_e6zl8o.jpg',
      // 'https://res.cloudinary.com/entazesoftware/image/upload/v1675958944/MotherTwoSAAPS_lg9kvl.jpg',
      // 'https://res.cloudinary.com/entazesoftware/image/upload/v1675958944/MotherSAAPS_1_gpcrdv.jpg',
      // 'https://res.cloudinary.com/entazesoftware/image/upload/v1675958943/JetSAAPS_vasxdj.jpg',
      // 'https://res.cloudinary.com/entazesoftware/image/upload/v1675958943/HorsesOneSAAPS_1_ukq9zi.jpg',
      // 'https://res.cloudinary.com/entazesoftware/image/upload/v1675958943/ManComputerSAAPS_1_xd31qn.jpg',
      // 'https://res.cloudinary.com/entazesoftware/image/upload/v1675958943/FireTwoSAAPS_1_gdu7qg.jpg',
      // 'https://res.cloudinary.com/entazesoftware/image/upload/v1675958942/HangGliderSAAPS_1_w59w6u.jpg',
      // 'https://res.cloudinary.com/entazesoftware/image/upload/v1675958942/FireThreeSAAPS_ssvv98.jpg',
      // 'https://res.cloudinary.com/entazesoftware/image/upload/v1675958942/HouseSAAPS_rbp4kz.jpg',

      // 'https://res.cloudinary.com/entazesoftware/image/upload/v1675958940/GangSAAPS_1_nbv6uk.jpg',
      // 'https://res.cloudinary.com/entazesoftware/image/upload/v1675958941/GirlCowSAAPS_1_gnw8kp.jpg',
      // 'https://res.cloudinary.com/entazesoftware/image/upload/v1675958949/PicnicSAAPS_ecyhf1.jpg',
      // 'https://res.cloudinary.com/entazesoftware/image/upload/v1675961228/AngryFaceTwoSAAPS_uaneao.jpg',
      // 'https://res.cloudinary.com/entazesoftware/image/upload/v1675961228/AccidentSAAPS_vfc0yz.jpg',
      // 'https://res.cloudinary.com/entazesoftware/image/upload/v1675961229/AttackFourSAAPS_1_fe4o7h.jpg',
      // 'https://res.cloudinary.com/entazesoftware/image/upload/v1675961229/AttractiveThreeSAAPS_1_rwsfcu.jpg',
      // 'https://res.cloudinary.com/entazesoftware/image/upload/v1675961229/AccidentBodiesSAAPS_1_mhmodl.jpg',
      // 'https://res.cloudinary.com/entazesoftware/image/upload/v1675961230/BabyFourSAAPS_1_slzle4.jpg',
      // 'https://res.cloudinary.com/entazesoftware/image/upload/v1675961231/BabyIncubatorSAAPS_1_dit0jz.jpg',

      // 'https://res.cloudinary.com/entazesoftware/image/upload/v1675961233/BoyFourSAAPS_1_ytlmwn.jpg',
      // 'https://res.cloudinary.com/entazesoftware/image/upload/v1675961233/AirplaneTAxiSAAPS_1_rowaef.jpg',
      // 'https://res.cloudinary.com/entazesoftware/image/upload/v1675961233/BoyOneSAAPS_lwln49.jpg',
      // 'https://res.cloudinary.com/entazesoftware/image/upload/v1675961235/BabyThreeSAAPS_gf2bqw.jpg',
      // 'https://res.cloudinary.com/entazesoftware/image/upload/v1675961235/CarAccidentFourSAAPS_1_gxfjx2.jpg',
      // 'https://res.cloudinary.com/entazesoftware/image/upload/v1675961236/CarDamageOneSAAPS_bqh0s2.jpg',
      // 'https://res.cloudinary.com/entazesoftware/image/upload/v1675961236/ChessOneSAAPS_gj0uaw.jpg',
      // 'https://res.cloudinary.com/entazesoftware/image/upload/v1675961237/CakeBirthdaySAAPS_1_ispvp2.jpg',
      // 'https://res.cloudinary.com/entazesoftware/image/upload/v1675961237/BarbedWireSAAPS_pefbrl.jpg',
      // 'https://res.cloudinary.com/entazesoftware/image/upload/v1675961239/ChessSAAPS_dp5aj0.jpg',

      // 'https://res.cloudinary.com/entazesoftware/image/upload/v1675961239/ChildrenSAAPS_xhqspl.jpg',
      // 'https://res.cloudinary.com/entazesoftware/image/upload/v1675961240/CoupleBikesSAAPS_siphlr.jpg',
      // 'https://res.cloudinary.com/entazesoftware/image/upload/v1675961241/CoupleOldSAAPS_os2yib.jpg',
      // 'https://res.cloudinary.com/entazesoftware/image/upload/v1675961242/CoupleOneSAAPS_1_q6knk0.jpg',
      // 'https://res.cloudinary.com/entazesoftware/image/upload/v1675961244/DiverTwoSAAPS_mwwwby.jpg',
      // 'https://res.cloudinary.com/entazesoftware/image/upload/v1675961245/DrugAddictOneSAAPS_naaz6g.jpg',
      // 'https://res.cloudinary.com/entazesoftware/image/upload/v1675961242/CoupleThreeSAAPS_erpqur.jpg',
      // 'https://res.cloudinary.com/entazesoftware/image/upload/v1675961245/DrugAddictTwoSAAPS_r7dmxh.jpg',
      // 'https://res.cloudinary.com/entazesoftware/image/upload/v1675961246/CourtyardSAAPS_1_qbkjml.jpg',
      // 'https://res.cloudinary.com/entazesoftware/image/upload/v1675961246/DentalExamSAAPS_1_f9dodv.jpg',

      // 'https://res.cloudinary.com/entazesoftware/image/upload/v1675961247/EroticCoupleFourSAAPS_1_gourns.jpg',
      // 'https://res.cloudinary.com/entazesoftware/image/upload/v1675961247/EroticCoupleThreeSAAPS_wzdlho.jpg',
      // 'https://res.cloudinary.com/entazesoftware/image/upload/v1675961247/FatherBabySAAPS_yhpesk.jpg',
      // 'https://res.cloudinary.com/entazesoftware/image/upload/v1675961248/FatherTwoSAAPS_1_gtgvnp.jpg',
      // 'https://res.cloudinary.com/entazesoftware/image/upload/v1675961247/ElephantsSAAPS_1_nlgulf.jpg',
      // '',
      // '',
      // '',
      // '',
      // '',
      // '',
      // '',
      // '',
      // '',
      // '',
      // '',
      // '',
      // '',
      // '',
      // '',
      // '',
      // '',


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
         //  ...............RATE 1 PAGE - WITH TIMEOUT 10 secs AND WITHOUT TIMEOUT................
        // if (RatePage && !RatePage2 && !Rating1Call && !Rating2Call && !ImagesPage && Timing1 && !CrossPage && !NextImage) {
        //   console.log('Timing1 :', Timing1)
        //   setTimeout(()=> {
        //     setRatePage(false);
        //     SetRating1Call(false);
        //     SetTiming1(false);
        //     SetTiming2(true);
        //     setRatePage2(true);
        //   }, 10000)
        // }


        if (Rating1Call && !Rating2Call && !ImagesPage && !NextImage) {

            setRatePage(false);
            SetRating1Call(false);
            SetTiming1(false);
            setRatePage2(true);
        }

         // ...............RATE 2 PAGE - WITH TIMEOUT 10 secs AND WITHOUT TIMEOUT................
          // if (!RatePage && RatePage2 && !Rating1Call && !Rating2Call && !ImagesPage && Timing2) {
          //   setTimeout(()=> {
          //     setRatePage2(false);
          //     SetRating2Call(false);
          //     SetTiming2(false);
          //     setCrossPage(true);
          //     setCrossBool(true);
          //   }, 10000)
          // }
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
            }, 3000)
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
                let complete = {_id: userProfile._id, test3Completion: true};
                axios.post('/api/user', complete)
                .then((res) => {
                  console.log('completion res :', res);
                  // setStartTest2(false)
                  // navigate('/cognitivetest4')

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
    if (keyClicked === 'Enter' && test3End) {
      // navigate('/cognitivetest4');
      navigate('/test-end')
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
      axios.get('/api/test3Images', {params: param})
      .then((res) => {
        if (res.data.Test3Images) {
          num = (Images.length - (res.data.Test3Images.length));
          // console.log('num :', num )
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
      axios.get('/api/test3Images', {params: param})
      .then((res) => {
        if (res.data.Test3Images) {
          num = (Images2.length - (res.data.Test3Images2.length));
          // console.log('num :', res.data.Test3Images2 )
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
     axios.post('/api/test3imagerating', param)
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
     axios.post('/api/test3imagerating2', param)
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

  const PreSection2 = () => {
    setSectionTwoStart(false);
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
    navigate('/test-end')
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
              <div style={{ fontSize: 30, fontWeight: 400, display: 'flex', flexDirection: 'column', padding: '60px 40px 120px 40px', lineHeight: '1.6', }} >
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
                The scales range from 1 - 9 and you must click on the number rating that describes how you feel. Let's see how the rating scales look.<br />
                [Click NEXT to see the rating scales]
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
                <span style={{ color: '#fff', fontSize: '40px', fontWeight: 700, margin: '5px 15px 0 0' }}>Calm</span>
                <img
                  alt="Test3-Rating"
                  src='https://res.cloudinary.com/entazesoftware/image/upload/v1668022235/image2_jezpza.webp'
                  style={imgLoadedRating2 ? TestRatings : { display: 'none' } }
                  onLoad={() => setLoadedRating2(true)}
                />
                <span style={{ color: '#fff', fontSize: '40px', fontWeight: 700, margin: '20px 0 0 15px' }}>Excited</span>
              </div>
              <div style={{ display: "inline-block", margin: "4px 4px 4px -40px", }} >
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
          Please try remember the pictures, as you will be asked later which ones you've seen before and which ones are new.
          You will also need to rate how the picture made you feel.
          Click NEXT or Press ENTER to continue. <br />
            <div>
              <button style={{ margin: "8px", background: "#7e1515" }} onClick={PreSection2} >NEXT</button>
            </div>
          </div>
          : null}
          {sectionTwoClickStart ?
          <div style={{ fontSize: 40, fontWeight: 700, display: 'flex', flexDirection: 'column', padding: '60px 40px 120px 40px', lineHeight: '1.6', alignItems: 'center', justifyContent: 'center', }} >
            So now we will begin! <br />
            Click START or Press ENTER. <br />
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
                <span style={{ color: '#fff', fontSize: '40px', fontWeight: 700, margin: '5px 15px 0 0' }}>Calm</span>
                <img
                  alt="Test3-Rating"
                  src='https://res.cloudinary.com/entazesoftware/image/upload/v1668022235/image2_jezpza.webp'
                  style={imgLoadedRating2S2 ? TestRatings : { display: 'none' } }
                  onLoad={() => setLoadedRating2S2(true)}
                />
                <span style={{ color: '#fff', fontSize: '40px', fontWeight: 700, margin: '20px 0 0 15px' }}>Excited</span>
              </div>
              <div style={{ display: "inline-block", margin: "4px 4px 4px -40px", }} >
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
              Test 3 - IAPS Task Completed. <br />
              {/* [Click start or press ENTER to begin Test 4] */}
            </div>
            <div>
              <button onClick={handleStartTest4}>
                {/* Start */}
                End
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

export default Cognitivetest3


