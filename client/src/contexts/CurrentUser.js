import axios from 'axios';
import { createContext, useState, useEffect } from 'react';
import React from 'react';

export const CurrentUser = createContext({});

export function CurrentUserProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  useEffect(() => {
    if (!currentUser) {
      axios.get('/profile').then(({ data }) => {
        setCurrentUser(data);
      });
    }
  });
  return (
    <CurrentUser.Provider value={{ currentUser, setCurrentUser }}>
      {children}
    </CurrentUser.Provider>
  );
}
