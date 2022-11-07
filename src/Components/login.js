import React from "react";
import { useForm } from "react-hook-form";
import '../App.css'
import { useUserContext } from "../context/userContext";
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function Login() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const {logIn} = useUserContext()
  const submit = (data) => {
   logIn(data.username)
 
  }
  return (
    <main className="main-wrapper">
      <div className="container">
        <form onSubmit={ handleSubmit(submit) }>
        <div className="header">LogIn</div>
        <div className="form-group">
          <input
            type="text"
            name="username"
            id="username"
            autoComplete="off"
            placeholder="Enter Username"
            {...register('username', {required: true})}
          />
            {errors.username && <p>Please enter a valid Username </p>}
        </div>
        <div className="form-group">
          <input
            type="password"
            name="password"
            id="password"
            autoComplete="off"
            placeholder="Enter Password"
            {...register('password', {required: true})}
          />
          {errors.password && <p>Please enter a valid password </p>}
        </div>
        <div className="btn-el">
          <button className="btn">Submit</button>
        </div>
        </form>
      </div>
    </main>
  );
}

export default Login;
