import React, { Component } from 'react'
import Navbar from './Navbar'
import SideNavBar from './SideNavBar';

export class HomePage extends Component {
  render() {
    return (
        
      <div>
          <Navbar />
      <div id="wrapper" style={{"margin-top": "57px"}}>
      
         <SideNavBar />
      <div class="page-content-wrapper pt-3">
          <div class="container-fluid">
              <div class="row">
                  <div class="col">
                      <div class="card border-primary border rounded shadow-sm" style={{"width": "275px"}}>
                          <div class="card-body text-center">
                              <h6 class="text-muted card-subtitle mb-2">Buyers</h6>
                              <h4 class="card-title">25</h4>
                          </div>
                      </div>
                  </div>
                  <div class="col">
                      <div class="card border-primary border rounded shadow-sm" style={{"width": "275px"}}>
                          <div class="card-body text-center">
                              <h6 class="text-muted card-subtitle mb-2">Available Machines</h6>
                              <h4 class="card-title">16</h4>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
          <div class="container-fluid pt-3">
              <div class="row">
                  <div class="col">
                      <div class="card shadow-sm">
                          <div class="card-header d-xl-flex align-items-xl-center">
                              <h6 class="flex-fill mb-0">Buyers</h6>
                              <div class="btn-group" role="group">
                                  <button class="btn" type="button"><i class="fa fa-sort-amount-desc"></i> Sort</button>
                              <button class="btn" type="button"><i class="fa fa-filter"></i> Filter</button></div>
                          </div>
                          <div class="table-responsive">
                              <table class="table">
                                  <thead>
                                      <tr>
                                          <th colspan="2">Ticket Details</th>
                                          <th class="text-center" style={{"width": "178px"}}>Place Details</th>
                                          <th style={{"width": "84px"}}>Waiting</th>
                                          <th style={{"width": "56px"}}></th>
                                      </tr>
                                  </thead>
                                  <tbody>
                                  <tr>
                                          <td style={{"width": "75px"}}><img class="border rounded-circle border-white shadow-sm" src="assets/img/Farmer.png" style={{"max-width": "51px"}} /></td>
                                          <td>
                                              <p className='mb-0'><strong>Farmer -1</strong></p><small>Updated 1 day Ago</small></td>
                                          <td class="text-center">
                                              <h6 className='mb-0'>Ludhiyana</h6><small>6:30</small></td>
                                          <td><span class="badge badge-primary" style={{"border-radius": "25px","padding": "10px"}}>High</span></td>
                                          <td>
                                              <div class="dropdown"><button class="btn" data-toggle="dropdown" aria-expanded="false" type="button"><i class="fas fa-ellipsis-v"></i></button>
                                                  <div class="dropdown-menu"><a class="dropdown-item" href="#">First Item</a><a class="dropdown-item" href="#">Second Item</a><a class="dropdown-item" href="#">Third Item</a></div>
                                              </div>
                                          </td>
                                      </tr>
                                      <tr>
                                          <td style={{"width": "75px"}}><img class="border rounded-circle border-white shadow-sm" src="assets/img/Farmer.png" style={{"max-width": "51px"}} /></td>
                                          <td>
                                              <p className='mb-0'><strong>Farmer -1</strong></p><small>Updated 1 day Ago</small></td>
                                          <td class="text-center">
                                              <h6 className='mb-0'>Ludhiyana</h6><small>6:30</small></td>
                                          <td><span class="badge badge-primary" style={{"border-radius": "25px","padding": "10px"}}>High</span></td>
                                          <td>
                                              <div class="dropdown"><button class="btn" data-toggle="dropdown" aria-expanded="false" type="button"><i class="fas fa-ellipsis-v"></i></button>
                                                  <div class="dropdown-menu"><a class="dropdown-item" href="#">First Item</a><a class="dropdown-item" href="#">Second Item</a><a class="dropdown-item" href="#">Third Item</a></div>
                                              </div>
                                          </td>
                                      </tr>
                                    <tr>
                                          <td style={{"width": "75px"}}><img class="border rounded-circle border-white shadow-sm" src="assets/img/Farmer.png" style={{"max-width": "51px"}} /></td>
                                          <td>
                                              <p className='mb-0'><strong>Farmer -1</strong></p><small>Updated 1 day Ago</small></td>
                                          <td class="text-center">
                                              <h6 className='mb-0'>Ludhiyana</h6><small>6:30</small></td>
                                          <td><span class="badge badge-primary" style={{"border-radius": "25px","padding": "10px"}}>High</span></td>
                                          <td>
                                              <div class="dropdown"><button class="btn" data-toggle="dropdown" aria-expanded="false" type="button"><i class="fas fa-ellipsis-v"></i></button>
                                                  <div class="dropdown-menu"><a class="dropdown-item" href="#">First Item</a><a class="dropdown-item" href="#">Second Item</a><a class="dropdown-item" href="#">Third Item</a></div>
                                              </div>
                                          </td>
                                      </tr>
                                    <tr>
                                          <td style={{"width": "75px"}}><img class="border rounded-circle border-white shadow-sm" src="assets/img/Farmer.png" style={{"max-width": "51px"}} /></td>
                                          <td>
                                              <p className='mb-0'><strong>Farmer -1</strong></p><small>Updated 1 day Ago</small></td>
                                          <td class="text-center">
                                              <h6 className='mb-0'>Ludhiyana</h6><small>6:30</small></td>
                                          <td><span class="badge badge-primary" style={{"border-radius": "25px","padding": "10px"}}>High</span></td>
                                          <td>
                                              <div class="dropdown"><button class="btn" data-toggle="dropdown" aria-expanded="false" type="button"><i class="fas fa-ellipsis-v"></i></button>
                                                  <div class="dropdown-menu"><a class="dropdown-item" href="#">First Item</a><a class="dropdown-item" href="#">Second Item</a><a class="dropdown-item" href="#">Third Item</a></div>
                                              </div>
                                          </td>
                                      </tr>
                                    <tr>
                                          <td style={{"width": "75px"}}><img class="border rounded-circle border-white shadow-sm" src="assets/img/Farmer.png" style={{"max-width": "51px"}} /></td>
                                          <td>
                                              <p className='mb-0'><strong>Farmer -1</strong></p><small>Updated 1 day Ago</small></td>
                                          <td class="text-center">
                                              <h6 className='mb-0'>Ludhiyana</h6><small>6:30</small></td>
                                          <td><span class="badge badge-primary" style={{"border-radius": "25px","padding": "10px"}}>High</span></td>
                                          <td>
                                              <div class="dropdown"><button class="btn" data-toggle="dropdown" aria-expanded="false" type="button"><i class="fas fa-ellipsis-v"></i></button>
                                                  <div class="dropdown-menu"><a class="dropdown-item" href="#">First Item</a><a class="dropdown-item" href="#">Second Item</a><a class="dropdown-item" href="#">Third Item</a></div>
                                              </div>
                                          </td>
                                      </tr>
                                    <tr>
                                          <td style={{"width": "75px"}}><img class="border rounded-circle border-white shadow-sm" src="assets/img/Farmer.png" style={{"max-width": "51px"}} /></td>
                                          <td>
                                              <p className='mb-0'><strong>Farmer -1</strong></p><small>Updated 1 day Ago</small></td>
                                          <td class="text-center">
                                              <h6 className='mb-0'>Ludhiyana</h6><small>6:30</small></td>
                                          <td><span class="badge badge-primary" style={{"border-radius": "25px","padding": "10px"}}>High</span></td>
                                          <td>
                                              <div class="dropdown"><button class="btn" data-toggle="dropdown" aria-expanded="false" type="button"><i class="fas fa-ellipsis-v"></i></button>
                                                  <div class="dropdown-menu"><a class="dropdown-item" href="#">First Item</a><a class="dropdown-item" href="#">Second Item</a><a class="dropdown-item" href="#">Third Item</a></div>
                                              </div>
                                          </td>
                                      </tr>
                                    <tr>
                                          <td style={{"width": "75px"}}><img class="border rounded-circle border-white shadow-sm" src="assets/img/Farmer.png" style={{"max-width": "51px"}} /></td>
                                          <td>
                                              <p className='mb-0'><strong>Farmer -1</strong></p><small>Updated 1 day Ago</small></td>
                                          <td class="text-center">
                                              <h6 className='mb-0'>Ludhiyana</h6><small>6:30</small></td>
                                          <td><span class="badge badge-primary" style={{"border-radius": "25px","padding": "10px"}}>High</span></td>
                                          <td>
                                              <div class="dropdown"><button class="btn" data-toggle="dropdown" aria-expanded="false" type="button"><i class="fas fa-ellipsis-v"></i></button>
                                                  <div class="dropdown-menu"><a class="dropdown-item" href="#">First Item</a><a class="dropdown-item" href="#">Second Item</a><a class="dropdown-item" href="#">Third Item</a></div>
                                              </div>
                                          </td>
                                      </tr>
                                    <tr>
                                          <td style={{"width": "75px"}}><img class="border rounded-circle border-white shadow-sm" src="assets/img/Farmer.png" style={{"max-width": "51px"}} /></td>
                                          <td>
                                              <p className='mb-0'><strong>Farmer -1</strong></p><small>Updated 1 day Ago</small></td>
                                          <td class="text-center">
                                              <h6 className='mb-0'>Ludhiyana</h6><small>6:30</small></td>
                                          <td><span class="badge badge-primary" style={{"border-radius": "25px","padding": "10px"}}>High</span></td>
                                          <td>
                                              <div class="dropdown"><button class="btn" data-toggle="dropdown" aria-expanded="false" type="button"><i class="fas fa-ellipsis-v"></i></button>
                                                  <div class="dropdown-menu"><a class="dropdown-item" href="#">First Item</a><a class="dropdown-item" href="#">Second Item</a><a class="dropdown-item" href="#">Third Item</a></div>
                                              </div>
                                          </td>
                                      </tr>
                                    <tr>
                                          <td style={{"width": "75px"}}><img class="border rounded-circle border-white shadow-sm" src="assets/img/Farmer.png" style={{"max-width": "51px"}} /></td>
                                          <td>
                                              <p className='mb-0'><strong>Farmer -1</strong></p><small>Updated 1 day Ago</small></td>
                                          <td class="text-center">
                                              <h6 className='mb-0'>Ludhiyana</h6><small>6:30</small></td>
                                          <td><span class="badge badge-primary" style={{"border-radius": "25px","padding": "10px"}}>High</span></td>
                                          <td>
                                              <div class="dropdown"><button class="btn" data-toggle="dropdown" aria-expanded="false" type="button"><i class="fas fa-ellipsis-v"></i></button>
                                                  <div class="dropdown-menu"><a class="dropdown-item" href="#">First Item</a><a class="dropdown-item" href="#">Second Item</a><a class="dropdown-item" href="#">Third Item</a></div>
                                              </div>
                                          </td>
                                      </tr>
                                    <tr>
                                          <td style={{"width": "75px"}}><img class="border rounded-circle border-white shadow-sm" src="assets/img/Farmer.png" style={{"max-width": "51px"}} /></td>
                                          <td>
                                              <p className='mb-0'><strong>Farmer -1</strong></p><small>Updated 1 day Ago</small></td>
                                          <td class="text-center">
                                              <h6 className='mb-0'>Ludhiyana</h6><small>6:30</small></td>
                                          <td><span class="badge badge-primary" style={{"border-radius": "25px","padding": "10px"}}>High</span></td>
                                          <td>
                                              <div class="dropdown"><button class="btn" data-toggle="dropdown" aria-expanded="false" type="button"><i class="fas fa-ellipsis-v"></i></button>
                                                  <div class="dropdown-menu"><a class="dropdown-item" href="#">First Item</a><a class="dropdown-item" href="#">Second Item</a><a class="dropdown-item" href="#">Third Item</a></div>
                                              </div>
                                          </td>
                                      </tr>
                                   
                                  </tbody>
                              </table>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  </div>
  </div>
    )
  }
}

export default HomePage