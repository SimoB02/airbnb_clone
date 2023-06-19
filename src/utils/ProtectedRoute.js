import React from 'react'
import {useSelector} from "react-redux"
import {Navigate, useLocation, Link} from "react-router-dom"

import PersonalArea from "../views/AreaPersonale"

const ProtectedRoute = ({children}) => {
    const user = useSelector((state) => state.user);
    let location = useLocation();

    if(!user.state.isAuthenticated) {
        return <Navigate to="/Login" state={{ from: location}} replace />
    }
 return (
    <Link> <PersonalArea/> </Link>
 )

};

export default ProtectedRoute;