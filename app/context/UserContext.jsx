"use client"
import React, { createContext, useContext, useEffect, useState } from "react";
import { auth } from "@/app/firebase/config.js";
import { onAuthStateChanged } from "firebase/auth";

const UserContext = createContext({ name: null, email: null });

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({ name: null, email: null });

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      if (firebaseUser) {
        setUser({
          name: firebaseUser.displayName || "",
          email: firebaseUser.email || "",
        });
      } else {
        setUser({ name: null, email: null });
      }
    });
    return () => unsubscribe();
  }, []);

  return (
    <UserContext.Provider value={user}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
