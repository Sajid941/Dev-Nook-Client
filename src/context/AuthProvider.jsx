import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types'
import app from './../services/firebase.config';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signOut } from "firebase/auth";

const auth = getAuth(app);
export const AuthContext = createContext(null)
const AuthProvider = ({children}) => {

    const [user,setUser]=useState(null)
    const [loading,setLoading]=useState(true)

    const createUser = (email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const logOut = ()=>{
        signOut(auth)
    }
    const authInfo = {
        user,
        loading,
        createUser,
        logOut
        
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth , currentUser =>{
            setUser(currentUser);
            console.log(currentUser)
            setLoading(false)
        })
        return ()=> unsubscribe()
    },[])
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
AuthProvider.propTypes={
    children:PropTypes.node
}