import React from 'react'
import Template from '../components/Template'
import loginImg from "../assets/joyful-attractive-lady-having-fun-while-pointing-up-with-both-index-fingers-isolated-pink.jpg"

const Login = (props) => {
let setIsLoggedIn=props.setIsLoggedIn;
let nam =props.nam;
let setname=props.setname;
  return (
    <Template
      title="Welcome Back"
      image={loginImg}
      formtype="login"
      setIsLoggedIn={setIsLoggedIn}
      setname={setname}
      nam={nam}
    />
  )
}

export default Login
