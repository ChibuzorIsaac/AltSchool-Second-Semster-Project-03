import React from "react";
import "../App.css"
import { useUserContext } from "../context/userContext";

const Home = () => {
    const { user, logOut } = useUserContext()
    return (
        <main className="container">
            <div className="content-box">
                <div className="text">
                <h3>You are now logged in successfully as, {user.name}</h3>
                </div>
            </div>
            <div className="btn-el">
            <button className="btn" onClick={logOut}>Log Out</button>
            </div>
        </main>
    )
}

export default Home