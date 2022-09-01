import ReactDOM from 'react-dom';
import React, { useEffect, Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route, Navigate, useParams } from 'react-router-dom';
import WithNavi from './Components/Layout/WithNavigation.jsx';
import WithoutNavi from './Components/Layout/WithoutNavigation.jsx';
import MainProvider from './Components/Providers/MainProvider.jsx';

const appElement = document.getElementById('app');
const Login = lazy(() => import('./Components/Login/Login.jsx'));
const ForgotPassword = lazy(() => import('./Components/Login/ForgotPassword.jsx'));
const ResetPassword = lazy(() => import('./Components/Login/ResetPassword.jsx'));
const CognitiveTest1 = lazy(() => import('./Components/cognitivetest/Test1/CognitiveTest1.jsx'));
const CognitiveTest2 = lazy(() => import('./Components/cognitivetest/Test2/CognitiveTest2.jsx'));

ReactDOM.render(
 <MainProvider>
    <BrowserRouter>
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route element={<WithoutNavi />}>
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="/login" element={<Login />} />
          <Route path="/forgotpassword" element={<ForgotPassword />} />
          <Route path="/resetpassword" element={<ResetPassword />} />
        </Route>
        <Route element={<WithNavi />}>
          <Route path="cognitivetest1" element={<CognitiveTest1 />} />
          <Route path="cognitivetest2" element={<CognitiveTest2 />} />
        </Route>
      </Routes>
    </Suspense>
    </BrowserRouter>
  </MainProvider>,
  appElement
);
