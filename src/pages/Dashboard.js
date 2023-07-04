import React from 'react'
import { Route, Routes } from "react-router-dom";
import Dashboard2 from "../components/Dashboard";
import GoalForm from '../components/GoalForm';
const Dashboard = (props) => {
  let nam=props.nam;
  let setname=props.setname;
  let selectshop=props.selectshop;
  return (
    <Routes>
    <Route path="/" element={<Dashboard2 selectshop={selectshop} setname={setname} nam={nam}/>} />
    <Route path="/addactivity" element={<GoalForm/>} />
  </Routes>
  )
}

export default Dashboard
