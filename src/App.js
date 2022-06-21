import React from 'react';
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
import SettingsI from './Industry/SettingsI';
import ProfileI from './Industry/ProfileI';
import ChangePasswordI from './Industry/ChangePasswordI';
import HomepageFarmer from './Farmer/HomePageFarmer';
import ResidueDetails from './Farmer/ResidueDetails'
import SellResidue from './Farmer/SellResidue'
import ChangePassword from './Farmer/ChangePassword'
import Cart from './Components//Cart/Cart'
import OrderSuccessful from './Components/Cart/OrderSuccessful';
import Connections from './Farmer/Connections'
import MachineFarmer from './Farmer/MachineFarmer'
import Profile from  './Farmer/Profile'
import Request from './Farmer/Request';
import Settings from './Farmer/Settings'
import AddNewMachine from './Farmer/AddNewMachine'
import MyMachines from './Farmer/MyMachines'
import EditMachine from './Farmer/EditMachine'
import EditResidue from './Farmer/EditResidue'
import MoreDetails from './Farmer/MoreDetails';
import Layout from './Industry/Layout';
import SideBar from './Farmer/SideBarFarmer';
import ResidueOrderSuccess from './Industry/ResidueOrderSuccess';
import PageNotFound from './Pages/PageNotFound';
import OrderHistory from './Components/Cart/OrderHistory';
import Protected from './Containers/Protected';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="*" element={<PageNotFound/>} />
        <Route exact path="/contactus" element={<ContactUs />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/industry" element={<Login />} />
        <Route path='homepagei' element={<Layout children={<Protected Cmp ={HomepageI}/>}/>} />
        <Route path="machinelist" element={<Layout children={<Protected Cmp ={MachineList}/>}/>}  />
        <Route path="machines/:id" element= {<Layout children={<Protected Cmp ={Machine}/>}/>} />
        <Route path="addmachine" element= {<Layout children={<Protected Cmp ={AddMachine}/>}/>} />
        <Route path="connections" element= {<Layout children={<Protected Cmp ={Connection}/>}/>} />
        <Route path="settingsI" element= {<Layout children={<Protected Cmp ={Settings}/>}/>} />
        <Route path="profileI" element= {<Layout children={<Protected Cmp ={ProfileI}/>}/>} />
        <Route path="changepasswordi" element= {<Layout children={<Protected Cmp ={ChangePasswordI}/>}/>} />
        <Route path="requestpage" element={<Layout children = {<Protected Cmp={RequestPage}/>}/>} />
        <Route path="residues" element={<Layout children = {<Protected Cmp={Residue}/>}/>}  />
        <Route path="update/:id" element={<Layout children = {<Protected Cmp={Update}/>} />}/> 
        <Route path="residueordersuccess" element={<Layout children = {<Protected Cmp={ResidueOrderSuccess}/>} />}/>

       
        {/* Farmer */}
        <Route path="homepagefarmer" element={<SideBar children={<Protected Cmp={HomepageFarmer}/>} />} />
          <Route path="residuedetails" element={<SideBar children={<Protected Cmp={ResidueDetails}/>} />} />    
          <Route path="sellresidue" element={<SideBar children={<Protected Cmp={SellResidue}/>} />} />
          <Route path="cart" element={<SideBar children={<Protected Cmp={Cart}/>} />} />
          <Route path="connection" element={<SideBar children={<Protected Cmp={Connections}/>} />} />
          <Route path="machine/:id" element={<SideBar children={<Protected Cmp={ MachineFarmer}/>} />} />
          <Route path="profile"element={<SideBar children={<Protected Cmp={Profile}/>} />} />
          <Route path="addnewmachine" element={<SideBar children={<Protected Cmp={AddNewMachine}/>} />} />
          <Route path="mymachines"  element={<SideBar children={<Protected Cmp={MyMachines}/>} />} />
          <Route path="settings" element={<SideBar children={<Protected Cmp={Settings}/>} />}/>
          <Route path="Orderhistory" element={<SideBar children={<Protected Cmp={OrderHistory}/>} />}/>
          <Route path="ordersuccessful" element={<SideBar children = {<Protected Cmp={OrderSuccessful}/>} />}/>
          <Route path="changepassword" element={<SideBar children={<Protected Cmp={ChangePassword}/>} />}/>
          <Route path="requestfarmer" element={<SideBar children={<Protected Cmp={Request}/>} />} />
          <Route path="updatemachine/:id" element={<SideBar children = {<Protected Cmp={EditMachine}/>} />}/> 
          <Route path="editresidue/:id" element={<SideBar children = {<Protected Cmp={EditResidue}/>} />}/> 
          <Route path="moredetails/:id"  element={<SideBar children={<Protected Cmp={MoreDetails}/>} />} />
      </Routes>
    </Router>
  );
}

export default App;