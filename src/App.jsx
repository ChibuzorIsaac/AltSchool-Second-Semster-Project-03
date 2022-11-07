import React from "react";
import { Routes, Route, Router } from "react-router-dom";
import Header from "./Components/nav"
import Auth from "./Components/Auth"
import  {UserContextProvider} from "./context/userContext"
 
import "./App.css";


export default function App() {
   return (
    <div>
      <UserContextProvider>
      <Header />
      <Auth />
      </UserContextProvider>
    </div>
  );
}
