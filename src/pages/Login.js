import React from 'react'
import Template from '../components/Template'
import loginImg from "../assets/joyful-attractive-lady-having-fun-while-pointing-up-with-both-index-fingers-isolated-pink.jpg"

const Login = ({setIsLoggedIn}) => {
  return (
    <Template
      title="Welcome Back"
      image={loginImg}
      formtype="login"
      setIsLoggedIn={setIsLoggedIn}
    />
  )
}

export default Login
