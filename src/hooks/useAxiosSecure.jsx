import axios from "axios";
import { useEffect } from "react";
import { getAuth, signOut } from "firebase/auth";
import app from "../services/firebase.config";
const auth = getAuth(app);
const axiosSecure = axios.create({
    baseURL: 'https://a11-dev-nook-server.vercel.app',
    withCredentials: true
})
const useAxiosSecure = () => {
    useEffect(() => {
        axiosSecure.interceptors.response.use((res) => {
            return res;
        }, (error) => {
            console.log(error);
            if (error.response.status === 401 || error.response.status === 403) {
                signOut(auth)
                    .then(() => {
                        window.location.href='/login'
                    })
                    .catch(error => {
                        alert(error.message)
                    })
            }
        })
    }, [])
    return axiosSecure;
};

export default useAxiosSecure;