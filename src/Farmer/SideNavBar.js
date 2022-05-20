import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class SideNavBar extends Component {
  render() {
    return (
    <div >
      <div style={{"backgroundColor":"#172578"}} id="sidebar-wrapper">
           <ul class="sidebar-nav">
              <li class="sidebar-brand" style={{"height": "170px"}}> <a class="text-center text-white" href="#" style={{"padding-top": "35px"}}><img class="img-fluid bg-white border rounded-circle" src="assets/img/User_New.png" style={{"width": "111px"}}/><p>Name</p></a></li>
              <li>
                <br></br>
                <br></br>
              {/* <Link to="/profile"><button className="btn btn-primary m-5" type="button" style={{"border-radius":"25px"}}>Edit Profile&nbsp;<i className="fa fa-pencil" style={{"margin-left": "8px"}}></i></button></Link> */}
              <Link class="text-white" to="/homepagefarmer"><i class="fa fa-pie-chart mr-3"></i>Home</Link>
              <Link class="text-white" to="/residuedetails"><i class="fa fa-calendar-o mr-3"></i>Residue Details</Link>
              <Link class="text-white" to="/connections"><i class="fa fa-users mr-3"></i>Connections</Link>
              <Link class="text-white" to="/settings"><i class="fa fa-gear mr-3"></i>Settings</Link>
              </li>
              <li> </li>
              <li> </li>
          </ul>
      </div>
    </div>
    )
  }
}

export default SideNavBar








// import React, { Component,useState } from 'react'
// import { Link, useNavigate } from 'react-router-dom';
// import { Icon } from 'react-icons-kit';
// import {caretLeft} from 'react-icons-kit/fa/caretLeft'
// import './NewStyleFile/newnavbar.css';
// import {stickyNoteO} from 'react-icons-kit/fa/stickyNoteO'



// const SideNavBar = () => {
//   let navigate = useNavigate();
//   // let [shownav,setShowNav] = useState(false)

//   // function openNav() {
//   //   document.getElementById("mySidenav").style.width = "250px";
//   // }
  
//   // function closeNav() {
//   //   document.getElementById("mySidenav").style.width = "0";
//   // }

//   return (
//     <>  

// <div id="mySidenav" class="sidenav">
//   {/* <a href="javascript:void(0)" class="closebtn" onClick={()=>{closeNav()}}>&times;</a> */}

//   <div className='slideMenuContainerBox'>
//     <div className='imgBox'>
//     <img src="assets/img/User_New.png" />
//     </div>
//    <br></br>
//    <br></br>

//     <div className='sideMenuBox'>
//       <ul>
//         <li onClick={()=>{navigate('/homepagefarmer')}} ><i class="fa fa-pie-chart mr-3"></i> Home</li>
//         <li onClick={()=>{navigate('/residuedetails')}} ><i class="fa fa-calendar-o mr-3"></i> Residue Details</li>
//         <li onClick={()=>{navigate('/connections')}} ><i class="fa fa-users mr-3"></i> Connections</li>
//         <li onClick={()=>{navigate('/settings')}} ><i class="fa fa-gear mr-3"></i> Settings</li>

//       </ul>
//     </div>
//   </div>
 
// </div>

// {/* <span className='OpneBtn' onClick={()=>{openNav()}}>&#9776; </span> */}
       
//        {/* {shownav ?   <div id="sidebar-wrapper"  style={{"backgroundColor":"#172578"}}>
//     <div className='sidetoggle' onClick={()=>{setShowNav(!shownav)}}>
//     <Icon icon={caretLeft} size={35} />
//     </div>

//     <ul class="sidebar-nav" >
//              <li class="sidebar-brand" style={{"height": "270px"}}> <a class="text-center text-white" href="#" style={{"padding-top": "35px"}}><img class="img-fluid bg-white border rounded-circle" src="assets/img/User_New.png" style={{"width": "111px"}}/><p>Name</p></a></li>
//              <li>
//              <Link class="text-white" to="/home"><i class="fa fa-pie-chart mr-3"></i>Home</Link>
//              <Link class="text-white" to="/machinedetails"><i class="fa fa-calendar-o mr-3"></i>Machine Details</Link>
//                  <Link class="text-white" to="/Connections" href="#"><i class="fa fa-users mr-3"></i>Connections</Link>
//              <Link class="text-white" to="/Settings" href="#"><i class="fa fa-gear mr-3"></i>Settings</Link>
//                  </li>
//              <li> </li>
//              <li> </li>
//          </ul>  
       



//      </div> :null } */}
//     </>
//   )
// }

// export default SideNavBar

// // export class SideNavBar extends Component {
// //   render() {


// //     return (
// //     <div >
// //       <div style={{"backgroundColor":"#172578"}} id="sidebar-wrapper">
// //            <ul class="sidebar-nav">
// //               <li class="sidebar-brand" style={{"height": "270px"}}> <a class="text-center text-white" href="#" style={{"padding-top": "35px"}}><img class="img-fluid bg-white border rounded-circle" src="assets/img/User_New.png" style={{"width": "111px"}}/><p>Name</p></a></li>
// //               <li>
// //               {/* <Link to="/profile"><button className="btn btn-primary m-5" type="button" style={{"border-radius":"25px"}}>Edit Profile&nbsp;<i className="fa fa-pencil" style={{"margin-left": "8px"}}></i></button></Link> */}
// //               <Link class="text-white" to="/home"><i class="fa fa-pie-chart mr-3"></i>Home</Link>
// //               <Link class="text-white" to="/machinedetails"><i class="fa fa-calendar-o mr-3"></i>Machine Details</Link>
// //                   <Link class="text-white" to="/Connections" href="#"><i class="fa fa-users mr-3"></i>Connections</Link>
// //               <Link class="text-white" to="/Settings" href="#"><i class="fa fa-gear mr-3"></i>Settings</Link>
// //                   </li>
// //               <li> </li>
// //               <li> </li>
// //           </ul>
// //       </div>
// //     </div>
// //     )
// //   }
// // }

// // export default SideNavBar