import React from "react";
import Login from "./login"
import Home from "./HomePage"
import { useUserContext } from "../context/userContext";


const Auth = () => {
    const {user} = useUserContext()
    return (
        <div>
            {user.isGuestUser ? <Login /> : <Home />}
        </div>
    )
}

export default Auth