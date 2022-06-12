import React from 'react';
import { Blogs } from './Containers';
import { HomePage, SignUp, Login, ContactUs } from './Pages';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AddMachine from './Industry/AddMachine';
import MachineList from './Industry/MachineList';
import Machine from './Industry/Machine';
import Connection from './Industry/Connections/Connection';
import RequestPage from './Industry/RequestPage/RequestPage';
import HomepageI from './Industry/HomepageI';
import Residue from './Industry/Residue';
import Update from './Industry/Update';
import HomepageFarmer from './Farmer/HomePageFarmer';
import ResidueDetails from './Farmer/ResidueDetails'
import SellResidue from './Farmer/SellResidue'
// import ChangePassword from './Farmer/ChangePassword'
import Cart from './Components//Cart/Cart'
import OrderSuccessful from './Components/Cart/OrderSuccessful';
import Connections from './Farmer/Connections'
import MachineFarmer from './Farmer/MachineFarmer'
import Profile from './Farmer/Profile'
import Request from './Farmer/Request';
import Settings from './Farmer/Settings'
import AddNewMachine from './Farmer/AddNewMachine'
import MyMachines from './Farmer/MyMachines'
import MoreDetails from './Farmer/MoreDetails';
import Layout from './Industry/Layout';
import SideBar from './Farmer/SideBarFarmer';
import PageNotFound from './Pages/PageNotFound';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="*" element={<PageNotFound/>} />
        <Route exact path="/contactus" element={<ContactUs />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/industry" element={<Login />} />
        <Route path='homepagei' element={<Layout children={<HomepageI/>}/>} />
        <Route path="machinelist" element={<Layout children={<MachineList />}/>}  />
        <Route path="machines/:id" element= {<Layout children={<Machine />}/>} />
        <Route path="addmachine" element= {<Layout children={<AddMachine />}/>} />
        <Route path="connections" element= {<Layout children={<Connection/>}/>} />
        <Route path="requestpage" element={<Layout children = {<RequestPage title="Requests" />}/>} />
        <Route path="residues" element={<Layout children = {<Residue title="Residue" />}/>}  />
        <Route path="update/:id" element={<Layout children = {<Update />} />}/>
        <Route path="ordersuccessful" element={<Layout children = {<OrderSuccessful/>} />}/>

       
        {/* Farmer */}
        <Route path="homepagefarmer" element={<SideBar children={<HomepageFarmer />} />} />
          <Route path="residuedetails" element={<SideBar children={<ResidueDetails />} />} />    
          <Route path="sellresidue" element={<SideBar children={<SellResidue/>} />} />
          <Route path="cart" element={<SideBar children={<Cart />} />} />
          <Route path="connection" element={<SideBar children={<Connections />} />} />
          <Route path="machine/:id" element={<SideBar children={<MachineFarmer />} />} />
          <Route path="profile" element={<Profile />} />
          <Route path="addnewmachine" element={<SideBar children={<AddNewMachine />} />} />
          <Route path="mymachines"  element={<SideBar children={<MyMachines/>} />} />
          <Route path="settings" element={<SideBar children={<Settings />} />}/>
          <Route path="requestfarmer" element={<SideBar children={<Request />} />} />
          <Route path="moredetails/:id"  element={<SideBar children={<MoreDetails />} />} />
      </Routes>
    </Router>
  );
}

export default App;