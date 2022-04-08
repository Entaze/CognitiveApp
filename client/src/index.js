import ReactDOM from 'react-dom';
import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import WithNavi from './Components/Layout/WithNavigation.jsx';
import WithoutNavi from './Components/Layout/WithoutNavigation.jsx';
import MainProvider from './Components/Providers/MainProvider.jsx';
import Login from './Components/Login/Login.jsx';
import Profile from './Components/Profile/Profile.jsx';
import Cognitivetest from './Components/cognitivetest/Cognitivetest.jsx';
import Cognitivetest1s2 from './Components/cognitivetest/Cognitivetest1s2.jsx';

const appElement = document.getElementById('app');

ReactDOM.render(
  <MainProvider>
    <BrowserRouter>
      {/* <Typography style={{ fontSize: 30, fontWeight: 700, color: '#ff9800', textAlign: 'center', fontFamily:'Courgette' }}>Pupper</Typography> */}
      <Routes>
        <Route element={<WithoutNavi />}>
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="/login" element={<Login />} />
        </Route>
        <Route element={<WithNavi />}>
          {/* <Route path="profile" element={<Profile />} /> */}
          <Route path="cognitivetest1s1" element={<Cognitivetest />} />
          <Route path="cognitivetest1s2" element={<Cognitivetest1s2 />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </MainProvider>,
  appElement
);
