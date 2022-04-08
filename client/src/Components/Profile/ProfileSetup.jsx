import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { Autocomplete, Button, Slider, TextField, TextareaAutosize } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import PersonIcon from '@mui/icons-material/Person';
import InfoIcon from '@mui/icons-material/Info';
import Typography from '@mui/material/Typography';
import { useMainContext } from '../Providers/MainProvider.jsx';
import { LoadingButton } from '@mui/lab';
import SendIcon from '@mui/icons-material/Send';
import CloseIcon from '@mui/icons-material/Close';


const setupContainer = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center'
}

const individialStyleWrapper = {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center'
}

const individialStyleContainer = {
  marginRight: '100px'
}

const buttonStyle = {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  margin: '5%'
}

function ProfileSetup(props) {
  const { userProfile, setUserProfile } = useMainContext();
  const [loading, setLoading] = useState(false);
  const [info, setInfo] = useState({
    age: '',
    gender: '',
    name: '',
    imgUrl: ''
  })
  let navigate = useNavigate();
  let { username } = useParams();

  //Will only happen if user previously set up a profile and has an _id in database
  useEffect(() => {
    console.log('userProfile: ', userProfile._id)
    console.log('info before: ', info)
    if (userProfile._id) {
      const config = { params: {_id: userProfile._id} }
      axios.get('/api/profile', config)
      .then ((res) => {
        console.log('res: ', res)
        setInfo({
          age: res.data.age,
          gender: res.data.gender,
          name: res.data.name,
          imgUrl: res.data.imgUrl

        })
      })
    }
  },[])

  console.log('info after: ', info);


  const ageMarks = [
    {
      value: 0,
      label: 'Youth',
    },
    {
      value: 1,
      label: 'Adult',
    },
    {
      value: 2,
      label: 'Senior',
    },
  ];

  const genderMarks = [
    {
      value: 0,
      label: 'Female',
    },
    {
      value: 1,
      label: 'Male',
    },
  ];


  function ageFormatVal(value) {
    for (let i = 0; i < ageMarks.length; i++) {
      if (ageMarks[i].value === value) {
        return ageMarks[i].label
      }
    }
  }

  function genderFormatVal(value) {
    for (let i = 0; i < genderMarks.length; i++) {
      if (genderMarks[i].value === value) {
        return genderMarks[i].label
      }
    }
  }


  function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    e.persist();
    console.log('E... :', e);
    //If photo uploaded
    if (e.target.photo.files.length === 0) {
      let serverPackage = {
        name: e.target.name.value,
        age: ageFormatVal(Number(e.target.age.value)),
        gender: genderFormatVal(Number(e.target.gender.value)),
        uid: userProfile.uid,
        imgUrl: userProfile.imgUrl,
      };
      axios.post('/api/profile', serverPackage)
          .then((result) => {
            setUserProfile(result.data);
            localStorage.setItem('userProfile', JSON.stringify(result.data));
            localStorage.setItem('uid', result.data.uid);
            props.submitLabel === 'Register' ?
              navigate("/cognitivetest1s1")
              : props.exitOutEdit();
          })
          .catch(err => console.log(`Profile post error:`, err))
    } else {
      const data = new FormData();
      data.append('file', e.target.photo.files[0]);
      data.append('upload_preset', 'ztr1wmou');
      axios.post('https://api.cloudinary.com/v1_1/davidmo/image/upload/', data)
        .then((res) => {
          let serverPackage = {
            name: e.target.name.value,
            age: ageFormatVal(Number(e.target.age.value)),
            gender: genderFormatVal(Number(e.target.gender.value)),
            uid: userProfile.uid,
            imgUrl: res.data.url,
          };
          axios.post('/api/profile', serverPackage)
            .then((result) => {
              setUserProfile(result.data);
              localStorage.setItem('userProfile', JSON.stringify(result.data));
              localStorage.setItem('uid', result.data.uid)
              props.submitLabel === 'Register' ?

              navigate("/cognitivetest1s1")

              : props.exitOutEdit();
            })
            .catch(err => console.log(`Profile post error:`, err))
        })
        .catch((err) => {
          console.log('Cloudinary profile post err:', err);
        });
    }
  }


  return (
    <>
      {/* {props.submitLabel === "Register" && <Typography style={{ fontSize: 30, fontWeight: 700, color: '#4a3d29', textAlign: 'center', fontFamily:'Courgette' }}>Cognitive App</Typography>} */}
      {props.submitLabel === "Save Profile" && <CloseIcon onClick={props.exitOutEdit} sx={{ margin: '4% 0 0 90%', borderStyle: 'double', borderRadius: '50%', fontSize: '20px' }}></CloseIcon>}
      <form onSubmit={handleSubmit}>
        <div style={setupContainer}>

          <div style={individialStyleWrapper} >
            <div style={individialStyleContainer} >
              <PersonIcon sx={{ color: "chocolate", mr: 1, my: 3 }} />
              <TextField id="name" label="My name" variant='standard' defaultValue={userProfile && userProfile.name} />
            </div>
          </div>

      </div>
        <div style={{ marginLeft: "30%", marginRight: "30%", color: 'chocolate' }}>

          <Typography style={{textAlign: "center", marginTop: "10px"}}>Gender</Typography>
          <Slider name="gender" step={1} min={0} max={1}  marks={genderMarks} valueLabelFormat={genderFormatVal} aria-label="Default"  valueLabelDisplay="auto" style={{color: "#ff9800"}} />

          <Typography style={{textAlign: "center"}}>Age</Typography>
          <Slider name="age" step={1} min={0} max={2}  marks={ageMarks} valueLabelFormat={ageFormatVal} aria-label="Default"  valueLabelDisplay="auto" style={{color: "#ff9800"}} />

        </div>
        <div style={buttonStyle}>
          <Button
            variant="contained"
            component="label"
            onClick={() => {console.log('im clicked')}}
            style={{backgroundColor: "#4a3d29"}}
          >
            Upload Profile Pic
            <input
              required={props.submitLabel === "Register" ? true : false}
              id="photo"
              type="file"
              hidden
            />
          </Button>
          <LoadingButton
            type="submit"
            size="medium"
            endIcon={<SendIcon />}
            loading={loading}
            loadingPosition="end"
            variant="contained"
            style={{backgroundColor: "#4a3d29"}}
          >
            {props.submitLabel}
          </LoadingButton>
        </div>
      </form>
    </>
  )
}

export default ProfileSetup;