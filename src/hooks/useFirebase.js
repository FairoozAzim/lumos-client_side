import initializeFirebase from "../Pages/Login/Firebase/firebase.init";
import React, { useEffect, useState } from 'react';
import { getAuth, createUserWithEmailAndPassword,updateProfile, signOut, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";

initializeFirebase();

const useFirebase = () => {

const [user, setUser] = useState({});
//console.log(user.email);
const [isLoading, setIsLoading] = useState(true);
const [authError, setAUthError] = useState('');
const [admin, setAdmin] = useState(false);
const auth = getAuth();

const registerUser = (email,password, name, history) => {
    setIsLoading(true)
    createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    setAUthError('');
    const newUser = {email, displayName: name};
    setUser(newUser);
    saveUser(email,name);
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

//admin check
useEffect(() => {
  fetch(`https://radiant-citadel-36252.herokuapp.com/users/${user?.email}`)
  .then(res => res.json())
  .then(data =>{
    setAdmin(data.admin)
    //console.log(data.admin);
  } )

},[user.email])
const logout = () => {
    signOut(auth).then(() => {
        // Sign-out successful.
      }).catch((error) => {
        // An error happened.
      })
      .finally(() => setIsLoading(false));
}

const saveUser = (email, displayName) => {
  const user = {email, displayName};
  fetch('https://radiant-citadel-36252.herokuapp.com/users', {
    method: 'POST',
    headers: {
      'content-type' : 'application/json'
    },
    body: JSON.stringify(user)
  })
    .then()
}
return {
    user,
    admin,
    isLoading,
    registerUser,
    login,
    logout,
    authError
}

}

export default useFirebase;