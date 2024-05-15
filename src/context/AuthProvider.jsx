import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types'
import app from './../services/firebase.config';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import useAxiosSecure from "../hooks/useAxiosSecure";

const auth = getAuth(app);
export const AuthContext = createContext({})
const AuthProvider = ({ children }) => { 
    const axiosSecure = useAxiosSecure()
    const googleProvider = new GoogleAuthProvider()
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const logIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const googleLogin = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }

    const logOut = () => {
        setLoading(true)
        return signOut(auth)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            console.log(currentUser)
            const loggedUser = { email: currentUser?.email }
            if (currentUser) {
                axiosSecure.post('/jwt', loggedUser)
                    .then(res => {
                        console.log(res.data);
                    })
            }
            else {
                axiosSecure.post('/logout', loggedUser)
                    .then(res => {
                        console.log(res.data);
                    })
            }
            setLoading(false)
        })
        return () => unsubscribe()
    }, [axiosSecure])

    // Sheared Fetching
    const addWishlist = (data) => {
        return axiosSecure.post('/wishlist', data)
    }

    const authInfo = {
        user,
        loading,
        createUser,
        logIn,
        googleLogin,
        logOut,
        addWishlist,
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
AuthProvider.propTypes = {
    children: PropTypes.node
}