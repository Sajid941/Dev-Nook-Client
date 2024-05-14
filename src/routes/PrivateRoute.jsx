import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import PropTypes from 'prop-types'

const PrivateRoute = ({ children }) => {
    const {pathname}=useLocation()
    const { loading, user } = useAuth()
    if (loading) {
        return <div className="flex justify-center items-center w-full h-screen">
            <span className="loading loading-spinner loading-lg"></span>
        </div>
    }
    if (user) {
        return children
    }
    return<Navigate to={'/login'} state={pathname} ></Navigate>
};

export default PrivateRoute;
PrivateRoute.propTypes={
    children:PropTypes.node
}