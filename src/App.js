import React from 'react';
import './App.css';
import { Blogs } from './Containers';
import { HomePage, SignUp, Login } from './Pages';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AddMachine from './Industry/AddMachine';
import MachineList from './Industry/MachineList';
import Machine from './Industry/Machine';
import Connection from './Industry/Connections/Connection';
import RequestPage from './Industry/RequestPage/RequestPage';
import HomepageI from './Industry/HomepageI';
import SideBar from './Industry/SideBar';
// import LoginFarmer from './Farmer/LoginFarmer'
// import SignUpFarmer from './Farmer/SignUpFarmer';
// import  HomepageFarmer from './Farmer/HomePageFarmer';
// import BuyMachines from './Farmer/BuyMachines'
// import ResidueDetails from './Farmer/ResidueDetails'
// import SellResidue from './Farmer/SellResidue'
// import ChangePassword from './Farmer/ChangePassword'
// import Cart from './Farmer/Cart'
// import Connections from './Farmer/Connections'
// import MachineFarmer from './Farmer/MachineFarmer'
// import Profile from './Farmer/Profile'
// import Rent from './Farmer/Rent'
// import Settings from './Farmer/Settings'


function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/industry" element={<Login />} />
        <Route path='/homepagei' element={<HomepageI />} />
        <Route path='/sidebar' element={<SideBar />} />
        <Route path="machinelist" element={<MachineList />} />
        <Route path="machine/:id" element={<Machine />} />
        <Route path="addmachine" element={<AddMachine />} />
        <Route path="connections" element={<Connection />} />
        <Route path="request" element={<RequestPage />} />
      
      {/* Farmer */} 
      {/* <Route path="loginfarmer" element={<LoginFarmer />} />
      <Route path="signupfarmer" element={<SignUpFarmer />} />
      <Route path="homepagefarmer" element={<HomepageFarmer />} />
      <Route path="buy" element={<BuyMachines />} />
      <Route path="residuedetails" element={<ResidueDetails />} />
      <Route path="sellresidue" element={<SellResidue />} />
      <Route path="changepassword" element={<ChangePassword />} />
      <Route path="cart" element={<Cart />} />
      <Route path="connections" element={<Connections />} />
      <Route path="machine/:id" element={<MachineFarmer />} />
      <Route path="profile" element={<Profile />} />
      <Route path="rent" element={<Rent />} />
      <Route path="settings" element={<Settings />} /> */}

      </Routes>
    </Router>
  );
}

export default App;