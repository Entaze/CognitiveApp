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
      'https://res.cloudinary.com/entazesoftware/image/upload/v1686735809/AntelopeSAAPS_cb1r0k.jpg',
      'https://res.cloudinary.com/entazesoftware/image/upload/v1686735809/AttractiveFiveSAAPS_vkjqzd.jpg',
      'https://res.cloudinary.com/entazesoftware/image/upload/v1686735809/AimedGunFourIAPS_g3orqm.jpg',
      'https://res.cloudinary.com/entazesoftware/image/upload/v1686735810/AttractiveFemaleSAAPS_aklfug.jpg',
      'https://res.cloudinary.com/entazesoftware/image/upload/v1686735809/AttractiveManSAAPS_lf5zzp.jpg',
      'https://res.cloudinary.com/entazesoftware/image/upload/v1686735809/AssaultOneSAAPS_yozt7a.jpg',
      'https://res.cloudinary.com/entazesoftware/image/upload/v1686735810/BabyTwoSAAPS_ioucsn.jpg',
      'https://res.cloudinary.com/entazesoftware/image/upload/v1686735810/BabyFiveSAAPS_nqzg5a.jpg',
      'https://res.cloudinary.com/entazesoftware/image/upload/v1686735811/BakersSAAPS_b4j7jr.jpg',
      'https://res.cloudinary.com/entazesoftware/image/upload/v1686735811/BombSAAPS_dxjowu.jpg',

      'https://res.cloudinary.com/entazesoftware/image/upload/v1686735811/BeachSAAPS_e2o02b.jpg',
      'https://res.cloudinary.com/entazesoftware/image/upload/v1686735811/BoatOneSAAPS_qvn3r2.jpg',
      'https://res.cloudinary.com/entazesoftware/image/upload/v1686735811/BuildingSAAPS_pndg7j.jpg',
      'https://res.cloudinary.com/entazesoftware/image/upload/v1686735811/BurntBuildingSAAPS_uobhko.jpg',
      'https://res.cloudinary.com/entazesoftware/image/upload/v1686735811/CarWheelMudSAAPS_irfelq.jpg',
      'https://res.cloudinary.com/entazesoftware/image/upload/v1686735811/CandyBarSAAPS_cm6oor.jpg',
      'https://res.cloudinary.com/entazesoftware/image/upload/v1686735812/ChickenOneSAAPS_bnbevw.jpg',
      'https://res.cloudinary.com/entazesoftware/image/upload/v1686735812/ElderlyManSAAPS_ticx5m.jpg',
      'https://res.cloudinary.com/entazesoftware/image/upload/v1686735812/BurnVictimOneSAAPS_cgoo4d.png',
      'https://res.cloudinary.com/entazesoftware/image/upload/v1686735812/CowSAAPS_pgzmu3.jpg',

      'https://res.cloudinary.com/entazesoftware/image/upload/v1686735812/DesertSAAPS_x1ukle.jpg',
      'https://res.cloudinary.com/entazesoftware/image/upload/v1686735812/CoupleTwoSAAPS_c5csjf.jpg',
      'https://res.cloudinary.com/entazesoftware/image/upload/v1686735812/ElderlyWomanSAAPS_iw2wm7.jpg',
      'https://res.cloudinary.com/entazesoftware/image/upload/v1686735813/EroticMaleSAAPS_t7x9ym.jpg',
      'https://res.cloudinary.com/entazesoftware/image/upload/v1686735813/EroticCoupleFiveSAAPS_sielgd.jpg',
      'https://res.cloudinary.com/entazesoftware/image/upload/v1686735813/EroticFemaleTwoSAAPS_j1jftz.jpg',
      'https://res.cloudinary.com/entazesoftware/image/upload/v1686735813/FerryTwoSAAPS_kqyuje.jpg',
      'https://res.cloudinary.com/entazesoftware/image/upload/v1686735813/FlowerProteaSAAPS_f72e89.jpg',
      'https://res.cloudinary.com/entazesoftware/image/upload/v1686735813/EroticCoupleOneSAAPS_khacvx.jpg',
      'https://res.cloudinary.com/entazesoftware/image/upload/v1686735814/GirlandDogSAAPS_ycyftt.jpg',

      'https://res.cloudinary.com/entazesoftware/image/upload/v1686735814/GarbageOneSAAPS_jkfuag.jpg',
      'https://res.cloudinary.com/entazesoftware/image/upload/v1686735814/FoodSAAPS_nqxyj9.jpg',
      'https://res.cloudinary.com/entazesoftware/image/upload/v1686735814/GunOneSAAPS_ucbvta.jpg',
      'https://res.cloudinary.com/entazesoftware/image/upload/v1686735814/HIVTattooTwoSAAPS_png8ql.jpg',
      'https://res.cloudinary.com/entazesoftware/image/upload/v1686735814/HospitalSAAPS_wmwe2z.jpg',
      'https://res.cloudinary.com/entazesoftware/image/upload/v1686735814/GirlReadingSAAPS_akbplf.jpg',
      'https://res.cloudinary.com/entazesoftware/image/upload/v1686735815/InjurySAAPS_kkwesx.jpg',
      'https://res.cloudinary.com/entazesoftware/image/upload/v1686735815/KidsPlayingWaterSAAPS_hadat1.jpg',
      'https://res.cloudinary.com/entazesoftware/image/upload/v1686735815/LiftOffSAAPS_w6kytk.jpg',
      'https://res.cloudinary.com/entazesoftware/image/upload/v1686735815/KidsSAAPS_pypfto.jpg',

      'https://res.cloudinary.com/entazesoftware/image/upload/v1686735816/ManFeedingGiraffeSAPS_ymzj7d.jpg',
      'https://res.cloudinary.com/entazesoftware/image/upload/v1686735816/MoneySAAPS_nybupv.jpg',
      'https://res.cloudinary.com/entazesoftware/image/upload/v1686735816/MudSAAPS_bthcav.jpg',
      'https://res.cloudinary.com/entazesoftware/image/upload/v1686735816/ManFishermanSAAPS_xrmdpy.jpg',
      'https://res.cloudinary.com/entazesoftware/image/upload/v1686735816/MountainStormSAAPS_i9iqmt.jpg',
      'https://res.cloudinary.com/entazesoftware/image/upload/v1686735816/LionTwoSAAPSNew_gqugdh.jpg',
      'https://res.cloudinary.com/entazesoftware/image/upload/v1686735817/MutilationFourSAAPS-Modified_IAPS_o6vbzd.jpg',
      'https://res.cloudinary.com/entazesoftware/image/upload/v1686735817/RepeatAimedGun_xewmrn.jpg',
      'https://res.cloudinary.com/entazesoftware/image/upload/v1686735817/MusicianSAAPS_fvg2rl.jpg',
      'https://res.cloudinary.com/entazesoftware/image/upload/v1686735817/RepeatBoxer_due64a.jpg',

      'https://res.cloudinary.com/entazesoftware/image/upload/v1686735817/NatureTwoSAAPS_wxkcv1.jpg',
      'https://res.cloudinary.com/entazesoftware/image/upload/v1686735817/PoliceArrestSAAPS_mgl66t.jpg',
      'https://res.cloudinary.com/entazesoftware/image/upload/v1686735818/RepeatBucket_wbnqyo.jpg',
      'https://res.cloudinary.com/entazesoftware/image/upload/v1686735818/RepeatCarDamageTwo_xi6z4h.jpg',
      'https://res.cloudinary.com/entazesoftware/image/upload/v1686735818/RepeatButterflyOne_zlfoxl.jpg',
      'https://res.cloudinary.com/entazesoftware/image/upload/v1686735818/RepeatDirtyToilet_pm2rgs.jpg',
      'https://res.cloudinary.com/entazesoftware/image/upload/v1686735818/ParrotsSAAPS_dd28l0.jpg',
      'https://res.cloudinary.com/entazesoftware/image/upload/v1686735818/RepeatButtons_fbq1zs.jpg',
      'https://res.cloudinary.com/entazesoftware/image/upload/v1686735818/RepeatFireOne_oofvqd.jpg',
      'https://res.cloudinary.com/entazesoftware/image/upload/v1686735819/RepeatFlood_zikqnp.jpg',


      'https://res.cloudinary.com/entazesoftware/image/upload/v1686735819/RepeatDog_g7fkb1.jpg',
      'https://res.cloudinary.com/entazesoftware/image/upload/v1686735819/RepeatIceCreamChoc_hgsfbu.jpg',
      'https://res.cloudinary.com/entazesoftware/image/upload/v1686735819/RepeatCat_gufurp.jpg',
      'https://res.cloudinary.com/entazesoftware/image/upload/v1686735820/RepeatInjuredChild_ztkh2y.jpg',
      'https://res.cloudinary.com/entazesoftware/image/upload/v1686735820/RepeatKeyRing_jvrda8.jpg',
      'https://res.cloudinary.com/entazesoftware/image/upload/v1686735819/RepeatGirl_vsdlgv.jpg',
      'https://res.cloudinary.com/entazesoftware/image/upload/v1686735819/RepeatInjuredMan_gm79n9.jpg',
      'https://res.cloudinary.com/entazesoftware/image/upload/v1686735820/RepeatManOneFire_hdbhsa.jpg',
      'https://res.cloudinary.com/entazesoftware/image/upload/v1686735820/RepeatMutilationNine_os3xxc.jpg',
      'https://res.cloudinary.com/entazesoftware/image/upload/v1686735820/RepeatNativeBoy_ywlo7h.jpg',

      'https://res.cloudinary.com/entazesoftware/image/upload/v1686735821/RepeatShadow_jb1rut.jpg',
      'https://res.cloudinary.com/entazesoftware/image/upload/v1686735821/RepeatPollution_wgcqgw.jpg',
      'https://res.cloudinary.com/entazesoftware/image/upload/v1686735821/RepeatShark_fb93jm.jpg',
      'https://res.cloudinary.com/entazesoftware/image/upload/v1686735821/RepeatSpoon_j16xgk.jpg',
      'https://res.cloudinary.com/entazesoftware/image/upload/v1686735821/RepeatSurfer_pbccll.jpg',
      'https://res.cloudinary.com/entazesoftware/image/upload/v1686735822/RepeatTomatoes_gqo6wp.jpg',
      'https://res.cloudinary.com/entazesoftware/image/upload/v1686735822/RepeatVomitThree_xavvil.jpg',
      'https://res.cloudinary.com/entazesoftware/image/upload/v1686735822/RepeatWomanReadingTwo_aio3o0.jpg',
      'https://res.cloudinary.com/entazesoftware/image/upload/v1686735822/RuinsSAAPS_zr2gzy.jpg',

      'https://res.cloudinary.com/entazesoftware/image/upload/v1686735823/RepeatVomitOne_ej67ic.jpg',
      'https://res.cloudinary.com/entazesoftware/image/upload/v1686735823/RepeatSurgeryOpenFinger_opqfk5.jpg',
      'https://res.cloudinary.com/entazesoftware/image/upload/v1686735822/SailingSAAPS_bvgccd.jpg',
      'https://res.cloudinary.com/entazesoftware/image/upload/v1686735823/RollerCoasterSAAPS_d07f2g.jpg',
      'https://res.cloudinary.com/entazesoftware/image/upload/v1686735823/SportsCarSAAPS_ufr2nt.jpg',
      'https://res.cloudinary.com/entazesoftware/image/upload/v1686735823/SushiSAAPS_vthneh.jpg',
      'https://res.cloudinary.com/entazesoftware/image/upload/v1686735823/SkierTwoSAAPS_rvhvyv.jpg',
      'https://res.cloudinary.com/entazesoftware/image/upload/v1686735824/SunsetOneSAAPS_c229ye.jpg',
      'https://res.cloudinary.com/entazesoftware/image/upload/v1686735824/SurfersSAAPS_eeh0w2.jpg',
      'https://res.cloudinary.com/entazesoftware/image/upload/v1686735824/TerroristSAAPS_mjxhax.jpg',

      'https://res.cloudinary.com/entazesoftware/image/upload/v1686735824/ToiletSAAPS_uqyxjw.jpg',
      'https://res.cloudinary.com/entazesoftware/image/upload/v1686735824/TrafficSAAPS_xccvcg.jpg',
      'https://res.cloudinary.com/entazesoftware/image/upload/v1686735824/RepeatPuddle_quvcz5.jpg',
      'https://res.cloudinary.com/entazesoftware/image/upload/v1686735824/TwinsSAAPS_ecwpjz.jpg',
      'https://res.cloudinary.com/entazesoftware/image/upload/v1686735824/WarSAAPS_ou3ych.jpg',
      'https://res.cloudinary.com/entazesoftware/image/upload/v1686735824/ViolingSAAPS_adv6s1.jpg',
      'https://res.cloudinary.com/entazesoftware/image/upload/v1686735825/TornadoOneSAAPS_a1jduv.jpg',
      'https://res.cloudinary.com/entazesoftware/image/upload/v1686735825/WomenDrinksSAAPS_tbnogn.jpg',
      'https://res.cloudinary.com/entazesoftware/image/upload/v1686735825/WeightLiftSAAPS_sqfvdx.jpg',
      'https://res.cloudinary.com/entazesoftware/image/upload/v1686735825/WomanFourSAAPS_nmhdbk.jpg',
      'https://res.cloudinary.com/entazesoftware/image/upload/v1686738897/EroticCoupleFacingSAAPS_r6lkmf.jpg',


     ]
    );

    const [Images2, SetImages2] = useState([
      'https://res.cloudinary.com/entazesoftware/image/upload/v1686738913/LionTwoSAAPSNew_1_hymnbv.jpg',
      'https://res.cloudinary.com/entazesoftware/image/upload/v1686738912/RepeatWomanReadingTwo_1_waafce.jpg',
      'https://res.cloudinary.com/entazesoftware/image/upload/v1686738911/WomenSAAPS_wcvazl.jpg',
      'https://res.cloudinary.com/entazesoftware/image/upload/v1686738911/RepeatSurgeryOpenFinger_1_ejzdn6.jpg',
      'https://res.cloudinary.com/entazesoftware/image/upload/v1686738911/RepeatSpoon_1_v1fsux.jpg',
      'https://res.cloudinary.com/entazesoftware/image/upload/v1686738911/RepeatPuddle_1_taecft.jpg',
      'https://res.cloudinary.com/entazesoftware/image/upload/v1686738910/TwinsSAAPS_1_lwdliy.jpg',
      'https://res.cloudinary.com/entazesoftware/image/upload/v1686738910/SkyDiversSAAPS_sjcusx.jpg',
      'https://res.cloudinary.com/entazesoftware/image/upload/v1686738910/TrafficSAAPS_1_jml53w.jpg',
      'https://res.cloudinary.com/entazesoftware/image/upload/v1686738910/RepeatMutilationOne_v4vklt.jpg',

      'https://res.cloudinary.com/entazesoftware/image/upload/v1686738910/SportsCarSAAPS_1_tfpwyi.jpg',
      'https://res.cloudinary.com/entazesoftware/image/upload/v1686738910/RepeatTissue_mclcer.jpg',
      'https://res.cloudinary.com/entazesoftware/image/upload/v1686738910/SurfersSAAPS_1_h9oarl.jpg',
      'https://res.cloudinary.com/entazesoftware/image/upload/v1686738909/ShoppingSAAPS_h1t27h.jpg',
      'https://res.cloudinary.com/entazesoftware/image/upload/v1686738909/RepeatGunTwo_sgymrm.jpg',
      'https://res.cloudinary.com/entazesoftware/image/upload/v1686738909/TerroristSAAPS_1_rlcomm.jpg',
      'https://res.cloudinary.com/entazesoftware/image/upload/v1686738909/RepeatIceCreamChoc_1_mcw56d.jpg',
      'https://res.cloudinary.com/entazesoftware/image/upload/v1686738909/WomanOneSAAPS_cz4ioy.jpg',
      'https://res.cloudinary.com/entazesoftware/image/upload/v1686738909/WomanFourSAAPS_1_ri2jkv.jpg',
      'https://res.cloudinary.com/entazesoftware/image/upload/v1686738909/RepeatDirtyToilet_1_qy2oil.jpg',

      'https://res.cloudinary.com/entazesoftware/image/upload/v1686738908/TornadoOneSAAPS_1_upfhpw.jpg',
      'https://res.cloudinary.com/entazesoftware/image/upload/v1686738908/SailingSAAPS_1_qnsefy.jpg',
      'https://res.cloudinary.com/entazesoftware/image/upload/v1686738908/RepeatCarDamageTwo_1_g5tgvv.jpg',
      'https://res.cloudinary.com/entazesoftware/image/upload/v1686738908/RepeatTrashCan_km5p7n.jpg',
      'https://res.cloudinary.com/entazesoftware/image/upload/v1686738908/RepeatVomitThree_1_ree44w.jpg',
      'https://res.cloudinary.com/entazesoftware/image/upload/v1686738908/RepeatSunsetTwo_gldblw.jpg',
      'https://res.cloudinary.com/entazesoftware/image/upload/v1686738908/RepeatNativeBoy_1_pnlqu4.jpg',
      'https://res.cloudinary.com/entazesoftware/image/upload/v1686738907/RepeatManOneFire_1_gbnqrb.jpg',
      'https://res.cloudinary.com/entazesoftware/image/upload/v1686738907/RepeatKeyRing_1_zurle9.jpg',
      'https://res.cloudinary.com/entazesoftware/image/upload/v1686738907/RepeatInjuredChild_1_g4gyr9.jpg',

      'https://res.cloudinary.com/entazesoftware/image/upload/v1686738907/RepeatFruit_pgojra.jpg',
      'https://res.cloudinary.com/entazesoftware/image/upload/v1686738907/RepeatFireOne_1_vcx7cm.jpg',
      'https://res.cloudinary.com/entazesoftware/image/upload/v1686738907/RepeatButtons_1_clqjsx.jpg',
      'https://res.cloudinary.com/entazesoftware/image/upload/v1686738906/RepeatBrownie_x9nafc.jpg',
      'https://res.cloudinary.com/entazesoftware/image/upload/v1686738906/RepeatButterflyTwo_aiajtr.jpg',
      'https://res.cloudinary.com/entazesoftware/image/upload/v1686738906/RepeatBoyFive_qwbunt.jpg',
      'https://res.cloudinary.com/entazesoftware/image/upload/v1686738906/RepeatAimedGunThree_sqwncn.jpg',
      'https://res.cloudinary.com/entazesoftware/image/upload/v1686738906/RepeatAimedGun_1_kbf0aa.jpg',
      'https://res.cloudinary.com/entazesoftware/image/upload/v1686738906/ParrotsSAAPS_1_k7mbgb.jpg',
      'https://res.cloudinary.com/entazesoftware/image/upload/v1686738906/PoliceOneSAAPS_ht63ij.jpg',

      'https://res.cloudinary.com/entazesoftware/image/upload/v1686738905/NatureTwoSAAPS_1_qglqc9.jpg',
      'https://res.cloudinary.com/entazesoftware/image/upload/v1686738905/OrangutanSAAPS_y2glrq.jpg',
      'https://res.cloudinary.com/entazesoftware/image/upload/v1686738905/MutilationSixSAAPS_rwmmey.jpg',
      'https://res.cloudinary.com/entazesoftware/image/upload/v1686738905/MutilationFourSAAPS-Modified_IAPS_1_b4rfxl.jpg',
      'https://res.cloudinary.com/entazesoftware/image/upload/v1686738905/MudSAAPS_1_sk5mn2.jpg',
      'https://res.cloudinary.com/entazesoftware/image/upload/v1686738905/MoneySAAPS_1_tuatvf.jpg',
      'https://res.cloudinary.com/entazesoftware/image/upload/v1686738904/KidsSAAPS_1_ikdu6e.jpg',
      'https://res.cloudinary.com/entazesoftware/image/upload/v1686738904/JaguarSAAPS_osh11f.jpg',
      'https://res.cloudinary.com/entazesoftware/image/upload/v1686738904/GunMansBedSAAPS_j9ollq.jpg',
      'https://res.cloudinary.com/entazesoftware/image/upload/v1686738904/HospitalSAAPS_1_iyvxbc.jpg',

      'https://res.cloudinary.com/entazesoftware/image/upload/v1686738904/GunOneSAAPS_1_q9iurl.jpg',
      'https://res.cloudinary.com/entazesoftware/image/upload/v1686738904/GrievingFemaleSAAPS_aeweep.jpg',
      'https://res.cloudinary.com/entazesoftware/image/upload/v1686738903/GarbageTwoSAAPS_oxsgz2.jpg',
      'https://res.cloudinary.com/entazesoftware/image/upload/v1686738903/FoodSAAPS_1_nffz3g.jpg',
      'https://res.cloudinary.com/entazesoftware/image/upload/v1686738903/GirlReadingSAAPS_1_uqfwgs.jpg',
      'https://res.cloudinary.com/entazesoftware/image/upload/v1686738903/FamilyDinnerSAAPS_unf2xt.jpg',
      'https://res.cloudinary.com/entazesoftware/image/upload/v1686738903/FerryTwoSAAPS_1_tikmnb.jpg',
      'https://res.cloudinary.com/entazesoftware/image/upload/v1686738903/FlowersSAAPS_jeqt0y.jpg',
      'https://res.cloudinary.com/entazesoftware/image/upload/v1686738903/EroticNudeMaleSAAPSnew_xey0ww.jpg',
      'https://res.cloudinary.com/entazesoftware/image/upload/v1686738902/EroticMaleSAAPS_1_hofffd.jpg',

      'https://res.cloudinary.com/entazesoftware/image/upload/v1686738902/EroticCoupleOneSAAPS_1_di6u36.jpg',
      'https://res.cloudinary.com/entazesoftware/image/upload/v1686738902/EroticFemaleOneSAAPS_pjfg95.jpg',
      'https://res.cloudinary.com/entazesoftware/image/upload/v1686738897/DessertsSAAPS_gzlpkj.jpg',
      'https://res.cloudinary.com/entazesoftware/image/upload/v1686738897/ElderlyWomanSAAPS_1_qo5tls.jpg',
      'https://res.cloudinary.com/entazesoftware/image/upload/v1686738897/EroticCoupleFacingSAAPS_r6lkmf.jpg',
      'https://res.cloudinary.com/entazesoftware/image/upload/v1686738897/CrochetSAAPS_dumoow.jpg',
      'https://res.cloudinary.com/entazesoftware/image/upload/v1686738897/CryingWomanSAAPS_ygqef0.jpg',
      'https://res.cloudinary.com/entazesoftware/image/upload/v1686738897/BurnVictimOneSAAPS_1_ncqdeg.png',
      'https://res.cloudinary.com/entazesoftware/image/upload/v1686738896/CigarretteSAAPS_liqav5.jpg',
      'https://res.cloudinary.com/entazesoftware/image/upload/v1686738896/CoupleTwoSAAPS_1_qdn3zv.jpg',

      'https://res.cloudinary.com/entazesoftware/image/upload/v1686738896/ChickenTwoSAAPS_gbv1v7.jpg',
      'https://res.cloudinary.com/entazesoftware/image/upload/v1686738896/CarWheelMudSAAPS_1_rvqght.jpg',
      'https://res.cloudinary.com/entazesoftware/image/upload/v1686738896/CandyBarSAAPS_1_j5kc2c.jpg',
      'https://res.cloudinary.com/entazesoftware/image/upload/v1686738896/BakersSAAPS_1_eesenp.jpg',
      'https://res.cloudinary.com/entazesoftware/image/upload/v1686738896/BicyclistSAAPS_wylb8d.jpg',
      'https://res.cloudinary.com/entazesoftware/image/upload/v1686738896/BombSAAPS_1_enhujg.jpg',
      'https://res.cloudinary.com/entazesoftware/image/upload/v1686738896/BeachSAAPS_1_rxjqit.jpg',
      'https://res.cloudinary.com/entazesoftware/image/upload/v1686738895/BabyFiveSAAPS_1_raja2v.jpg',
      'https://res.cloudinary.com/entazesoftware/image/upload/v1686738895/BeachCoupleSAAPS_xilgph.jpg',
      'https://res.cloudinary.com/entazesoftware/image/upload/v1686738895/AttractiveOneSAAPS_ieue0b.jpg',

      'https://res.cloudinary.com/entazesoftware/image/upload/v1686738895/AttractiveFemaleSAAPS_1_k12glg.jpg',
      'https://res.cloudinary.com/entazesoftware/image/upload/v1686738895/AssaultTortureSAAPS_tfjggw.jpg',
      'https://res.cloudinary.com/entazesoftware/image/upload/v1686738894/AntelopeSAAPS_1_ueiph1.jpg',
      'https://res.cloudinary.com/entazesoftware/image/upload/v1686738894/AttackTwoSAAPS_tdfjb4.jpg',
      'https://res.cloudinary.com/entazesoftware/image/upload/v1686735809/AimedGunFourIAPS_g3orqm.jpg',

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
              <div style={{ fontSize: 30, fontWeight: 400, display: 'flex', flexDirection: 'column', padding: '40px 40px 60px 40px', lineHeight: '1.2', }} >
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
                  src='https://res.cloudinary.com/entazesoftware/image/upload/v1668769653/RatingImage1_beicbl.png'
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


