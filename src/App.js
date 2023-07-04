import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar"
import Home2 from "./Home2"
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import Dashboard from "./pages/Dashboard"
import Plans from "./Plans"
import Home from "./Home";
import { useEffect, useState } from 'react'
import Contact from "./pages/Contact"

// import PrivateRoute from "./components/PrivateRoute";
import CreateGoal from "./components/CreateGoal";


function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);
 const [nam,setname]= useState("hello");
 const [selectshop, setselectshop] = useState([
  // 0:{},
  // 1:{},
  // 2:{},
  // 3:{},
  // 4:{},
 ])

  return (
    <div className="w-screen h-full bg-richblack-900 flex flex-col">
      <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>

      <Routes>

        <Route path="/" element= {<Home2 isLoggedIn={isLoggedIn}/>} />
        <Route path="/login" element = {<Login  setIsLoggedIn={setIsLoggedIn} setname={setname} nam={nam} />} /> 
        <Route path="/signup" element={<Signup  setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="/plans" element={<Plans selectshop={selectshop} setselectshop={setselectshop} setIsLoggedIn={setIsLoggedIn} isLoggedIn ={isLoggedIn} />} />
        <Route path="/Home" element={<Home setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="/dashboard" element={ <Dashboard selectshop={selectshop} setname={setname} nam={nam}/>} />

        <Route path="/addactivity" element={<CreateGoal/>} />
    <Route path="/contact" element={<Contact />} />



        

        {/* <Route path="/dashboard" element = {
          <PrivateRoute isLoggedIn={isLoggedIn}  >
              <Dashboard setname={setname} nam={nam}/>
          </PrivateRoute>
       
        } /> */}

      </Routes>

    </div>
    )
}

export default App;
