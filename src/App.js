import React from 'react';
import './App.css';
import { Blogs } from './Containers';
import { HomePage, SignUp, Login } from './Pages';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AddMachine from './Industry/AddMachine';
import { Homepage, Profile, Dashboard, BuyMachines, SellResidue, MachineDetails } from './Farmer';
import MachineList from './Industry/MachineList';
import Machine from './Industry/Machine';
import Connection from './Industry/Connections/Connection';
import RequestPage from './Industry/RequestPage/RequestPage';
import HomepageI from './Industry/HomepageI';
import SideBar from './Industry/SideBar';


function App() {
  return (
    <Router>
      <div>
        {/* <div className="container mt-2" style={{ marginTop: 40 }}> */}
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/industry" element={<Login />} />
          <Route path='/homepagei' element={<HomepageI />} />
          <Route path='/sidebar' element={<SideBar/>} />
          <Route path="machinelist" element={<MachineList />} />
          <Route path="machine/:id" element={<Machine />} />
          <Route path="addmachine" element={<AddMachine />} />
          <Route path="connections" element={<Connection />} />
          <Route path="request" element={<RequestPage />} />
          <Route path="/farmer" element={<Homepage />}></Route>
          {/* <Route path="login" element={<Login />} />
          <Route path="signup" element={<SignUp />} /> */}
          <Route path="profile" element={<Profile />} />
          <Route path="home" element={<HomePage />} />
          <Route path="" element={<Dashboard />} />
          <Route path="buy" element={<BuyMachines />} />
          <Route path="sell" element={<SellResidue />} />
          <Route path="MachineDetails" element={<MachineDetails />} />
        </Routes>
      </div>

    </Router>
  );
}

export default App;