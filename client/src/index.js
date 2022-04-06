import ReactDOM from 'react-dom';
import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import WithNavi from './Components/Layout/WithNavigation.jsx';
import WithoutNavi from './Components/Layout/WithoutNavigation.jsx';
import MainProvider from './Components/Providers/MainProvider.jsx';
import Login from './Components/Login/Login.jsx';

// const App = () => {
//   return (
//     <div>
//       <h1>Cognitive App</h1>
//       <div>
//         <div>
//           <h3>Categories</h3>
//         </div>
//       </div>
//     </div>
//   );
//  }

// ReactDOM.render(<App />, document.getElementById('app'));

const appElement = document.getElementById('app');

ReactDOM.render(
  <MainProvider>
    <BrowserRouter>
      {/* <Typography style={{ fontSize: 30, fontWeight: 700, color: '#ff9800', textAlign: 'center', fontFamily:'Courgette' }}>Pupper</Typography> */}
      <Routes>
        <Route element={<WithoutNavi />}>
          <Route path="/" element={<Navigate to="/login" />} />
          {/* <Route path="/login" element={<Login />} /> */}
        </Route>
        <Route element={<WithNavi />}>
          {/* <Route path="profile" element={<Profile />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  </MainProvider>,
  appElement
);
