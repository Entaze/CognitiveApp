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
const ConfirmAccount = lazy(() => import('./Components/Login/ConfirmAccount.jsx'));
const ResetPassword = lazy(() => import('./Components/Login/ResetPassword.jsx'));
const CognitiveTest1 = lazy(() => import('./Components/cognitivetest/Test1/CognitiveTest1.jsx'));
const CognitiveTest2 = lazy(() => import('./Components/cognitivetest/Test2/CognitiveTest2.jsx'));
const CognitiveTest3 = lazy(() => import('./Components/cognitivetest/Test3/CognitiveTest3.jsx'));
const CognitiveTest4 = lazy(() => import('./Components/cognitivetest/Test4/CognitiveTest4.jsx'));
const CognitiveTest1Recall = lazy(() => import('./Components/cognitivetest/Test5/CognitiveTest1Recall.jsx'));
const CognitiveTest2Recall = lazy(() => import('./Components/cognitivetest/Test6/CognitiveTest2Recall.jsx'));
const CognitiveTest3Recall = lazy(() => import('./Components/cognitivetest/Test7/CognitiveTest3Recall.jsx'));
const CognitiveTest4Recall = lazy(() => import('./Components/cognitivetest/Test8/CognitiveTest4Recall.jsx'));

const CountdownTimer = lazy(() => import('./Components/cognitivetest/countdownTimer/countdownTimer.jsx'));
const CountdownTimer2 = lazy(() => import('./Components/cognitivetest/countdownTimer2/countdownTimer2.jsx'));
const Welcome = lazy(() => import('./Components/cognitivetest/Welcome.jsx'));
const ExpiredSession = lazy(() => import('./Components/cognitivetest/ExpiredSession.jsx'));
const Finish = lazy(() => import('./Components/cognitivetest/Finish.jsx'));

// Start the mocking conditionally.
// if (process.env.NODE_ENV === 'development') {
//   const { worker } = require('./mocks/browser')
//   // console.log('HERE..', worker)
//   worker.start()
// }

ReactDOM.render(
 <MainProvider>
    <BrowserRouter>
    <Suspense fallback={<div>Loading...</div>}>
    {/* <App /> */}
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/login" element={<Login />} />
      <Route path="/confirmaccount" element={<ConfirmAccount />} />
      <Route path="/forgotpassword" element={<ForgotPassword />} />
      <Route path="/resetpassword" element={<ResetPassword />} />

      <Route path="/countdown" element={<CountdownTimer />} />
      <Route path="/countdown2" element={<CountdownTimer2 />} />

      <Route path="/cognitivetest4" element={<CognitiveTest4 />} />
      <Route path="/cognitivetest3" element={<CognitiveTest3 />} />
      <Route path="/cognitivetest2" element={<CognitiveTest2 />} />
      <Route path="/cognitivetest1" element={<CognitiveTest1 />} />
      <Route path="/cognitivetest1recall" element={<CognitiveTest1Recall />} />
      <Route path="/cognitivetest2recall" element={<CognitiveTest2Recall />} />
      <Route path="/cognitivetest3recall" element={<CognitiveTest3Recall />} />
      <Route path="/cognitivetest4recall" element={<CognitiveTest4Recall />} />

      <Route path="/test-begin" element={<Welcome />} />
      <Route path="/test-end" element={<Finish />} />
      <Route path="/expired-test" element={<ExpiredSession />} />

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
