import React, { createContext, useEffect, useState } from 'react';
import app from '../FireBase/FireBase.config';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';

export const AuthContext = createContext();

const auth = getAuth(app)

const Context = ({ children }) => {

    const [user, setUser] = useState({})
    const [loading, setLoading] = useState(true)

    const googleProvider = new GoogleAuthProvider()


    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const googleSignIn = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }

    const logOut = () => {
        return signOut(auth)
    }


    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            setLoading(false)
            // console.log('auth state', currentUser);
        })

        return () => {
            unsubscribe();
        }
    }, [])

    const authMange = { user, createUser, signIn, logOut, googleSignIn, loading }
    return (
        <AuthContext.Provider value={authMange}>
            {children}
        </AuthContext.Provider>
    )
}
export default Context;