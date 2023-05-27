import { createContext, useEffect, useState } from "react";


import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from 'firebase/auth'
import app from "../firebase/firebase.config";

export const AuthContext = createContext()
const AuthProvider = ({ children }) => {
    const auth = getAuth(app)
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState();


    const singUp = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email, password)
    }
    const updateUser = (name, photo) => {
        setLoading(true);
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photo
        })
    }
    const signIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth,email, password)
    }
    const logout = () => {
        setLoading(true)
        return signOut(auth);
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth,currentUser =>{
            setLoading(false);
            setUser(currentUser)
        })
        return ()=>{
            unsubscribe();
        }
    },[])

    const authInfo = {
        user,
        loading,
        singUp,
        updateUser,
        signIn,
        logout
    }


    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;