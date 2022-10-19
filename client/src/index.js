import ReactDOM from 'react-dom';
import React, { useEffect, Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route, Navigate, useParams, Switch } from 'react-router-dom';
import WithNavi from './Components/Layout/WithNavigation.jsx';
import WithoutNavi from './Components/Layout/WithoutNavigation.jsx';
import MainProvider from './Components/Providers/MainProvider.jsx';
import App from './Components/App.jsx';


const appElement = document.getElementById('app');
const Login = lazy(() => import('./Components/Login/Login.jsx'));
const ForgotPassword = lazy(() => import('./Components/Login/ForgotPassword.jsx'));
const ResetPassword = lazy(() => import('./Components/Login/ResetPassword.jsx'));
const CognitiveTest1 = lazy(() => import('./Components/cognitivetest/Test1/CognitiveTest1.jsx'));
const CognitiveTest2 = lazy(() => import('./Components/cognitivetest/Test2/CognitiveTest2.jsx'));
const CognitiveTest3 = lazy(() => import('./Components/cognitivetest/Test3/CognitiveTest3.jsx'));
const CognitiveTest4 = lazy(() => import('./Components/cognitivetest/Test4/CognitiveTest4.jsx'));
const Finish = lazy(() => import('./Components/cognitivetest/Finish.jsx'));



ReactDOM.render(
 <MainProvider>
    <BrowserRouter>
    <Suspense fallback={<div>Loading...</div>}>
    {/* <App /> */}
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/login" element={<Login />} />
      <Route path="/forgotpassword" element={<ForgotPassword />} />
      <Route path="/resetpassword" element={<ResetPassword />} />
      <Route path="/cognitivetest4" element={<CognitiveTest4 />} />
      <Route path="/cognitivetest3" element={<CognitiveTest3 />} />
      <Route path="/cognitivetest2" element={<CognitiveTest2 />} />
      <Route path="/cognitivetest1" element={<CognitiveTest1 />} />
      <Route path="/test-end" element={<Finish />} />


      <Route path="/" element={<App />} >
      </Route>
    </Routes>




      {/* <Routes>
        <Route element={<WithoutNavi />}>
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="/login" element={<Login />} />
          <Route path="/forgotpassword" element={<ForgotPassword />} />
          <Route path="/resetpassword" element={<ResetPassword />} />

          <Route path="cognitivetest2" element={<CognitiveTest2 />} />

        </Route>
        <Route element={<WithNavi />}>
          <Route path="cognitivetest1" element={<CognitiveTest1 />} />


        </Route>
      </Routes> */}
    </Suspense>
    </BrowserRouter>
  </MainProvider>,
  appElement
);
