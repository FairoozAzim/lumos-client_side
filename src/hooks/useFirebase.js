import initializeFirebase from "../Pages/Login/Firebase/firebase.init";
import React, { useEffect, useState } from 'react';
import { getAuth, createUserWithEmailAndPassword,updateProfile, signOut, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";

initializeFirebase();

const useFirebase = () => {

const [user, setUser] = useState({});
const [isLoading, setIsLoading] = useState(true);
const [authError, setAUthError] = useState('');
const auth = getAuth();

const registerUser = (email,password, name, history) => {
    setIsLoading(true)
    createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    setAUthError('');
    const newUser = {email, displayName: name};
    setUser(newUser);

        //update profile
    updateProfile(auth.currentUser, {
      displayName: name
    }).then(() => {
    }).catch((error) => {
    });
    history.replace('/');
    
  })
  .catch((error) => {
    setAUthError(error.message);
  
  })
   .finally(() => setIsLoading(false));
  
}

const login = (email,password,location, history) => {
    setIsLoading(true);
    signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    const destination = location?.state?.from || '/';
    history.replace(destination);
    setAUthError('');
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    setAUthError(error.message);
  })
  .finally(() => setIsLoading(false));
}



//observer
useEffect(() => {
   const unsubscribe= onAuthStateChanged(auth, (user) => {
        if (user) {
        
          setUser(user);
        } else {
          
          setUser({})
        }
        setIsLoading(false);
      });
      return () => unsubscribe;
},[])

const logout = () => {
    signOut(auth).then(() => {
        // Sign-out successful.
      }).catch((error) => {
        // An error happened.
      })
      .finally(() => setIsLoading(false));
}

return {
    user,
    isLoading,
    registerUser,
    login,
    logout,
    authError
}

}

export default useFirebase;