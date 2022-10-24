import React, { createContext, useEffect, useState } from 'react';
//importing auth
import{createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from 'firebase/auth'
import app from '../../firebase/firebase.config';
// creating context and exporting it
export const AuthContext = createContext();
//accessing auth
const auth = getAuth(app)
//creating values to send
const AuthProvider = ({children}) => {

//declaring state to know users state(login or not)  
const [user, setUser]  = useState(null);

//setting loading state so that login page is not redirects after refresh
const [loading, setLoading] = useState(true);

// google sign in
const providerLogin = (provider) => {
        setLoading(true);
        return signInWithPopup(auth, provider);
    }

//register with email and password
const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password)
}

//sign in with email and password
const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email,password);
}

//updating user info
const updateUserProfile = (profile) =>{
    return updateProfile(auth.currentUser, profile);
}

 // log out button implement
  const logOut = ()  => {
    setLoading(true);
    return signOut(auth);
  }

 //setting an observer using useEffect because of interaction outside > unsubscribe to stop observation when its no longer used
 useEffect ( () => {
  const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
    console.log('user inside state change', currentUser)
    setUser(currentUser);
    //stopping loading
    setLoading(false);
   })
   return () => {
    unsubscribe();
   }
 }, [])   

    //sending values in a variable because need to send a lot of things
const authInfo = {
    user, 
    providerLogin, 
    logOut, 
    createUser, 
    signIn, 
    loading,
    updateUserProfile      
}
    return (
       <AuthContext.Provider value={authInfo} >
        {children}
       </AuthContext.Provider>
    );
};

export default AuthProvider;