import React, { useState, useContext, useEffect } from 'react';

const MainContext = React.createContext();

export function useMainContext() {
  return useContext(MainContext);
}

export const localUserProfile = localStorage.userProfile && JSON.parse(localStorage.userProfile);

export const localUID = localStorage.uid;

export default function MainProvider({ children }) {
  const [userProfile, setUserProfile] = useState();
  const [cognitiveTest, setCognitiveTest] = useState(false);

  if (!userProfile && localUserProfile) {
    setUserProfile(localUserProfile);
  }

  return (
    <MainContext.Provider value={{userProfile, setUserProfile, cognitiveTest, setCognitiveTest }}>
      {children}
    </MainContext.Provider>
  )
}

