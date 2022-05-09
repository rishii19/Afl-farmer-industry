import React, { Component } from 'react'

export class MachineDetails extends Component {
  render() {
    return (
      <div>
          <div class="container-fluid" style={{"height": "100%"}}>
        <div class="row">
            <div class="col-9 text-center" style={{"padding": "81px","background": "rgb(248,248,255)"}}>
                <div class="row" style={{"margin-top": "25px"}}>
                    <div class="col"><img class="border rounded shadow-sm" src="assets/img/Teslaa.png" /></div>
                </div>
                <div class="row" style={{"margin-top": "25px"}}>
                    <div class="col">
                        <div class="table-responsive">
                            <table class="table">
                                <tbody>
                                    <tr>
                                        <td rowspan="2">
                                            <h1 class="text-primary">Machine Name</h1>
                                        </td>
                                        <td style={{"width": "322px"}}>
                                            <div class="input-group"><input class="form-control" type="text" readonly />
                                                <div class="input-group-append"><button class="btn btn-success" type="button">View</button></div>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div class="input-group"><input class="form-control" type="text" readonly />
                                                <div class="input-group-append"><button class="btn btn-success" type="button">View</button></div>
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <div class="row" style={{"margin-top": "25px"}}>
                    <div class="col text-center d-xl-flex justify-content-xl-center bg-primary text-white">
                        <div class="table-responsive table-bordered text-left" style={{"width": "553px"}}>
                            <table class="table table-striped table-bordered table-sm">
                                <tbody>
                                    <tr>
                                        <td rowspan="10" style={{"width": "181px"}}><img class="img-fluid" src="assets/img/Star-Full256.png" /></td>
                                        <td>Comfort</td>
                                        <td class="text-white"><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star-empty"></i></td>
                                    </tr>
                                    <tr>
                                        <td>Design</td>
                                        <td class="text-white"><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i></td>
                                    </tr>
                                    <tr>
                                        <td>Performance</td>
                                        <td class="text-white"><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i></td>
                                    </tr>
                                    <tr>
                                        <td>Price</td>
                                        <td class="text-white"><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star-empty"></i></td>
                                    </tr>
                                    <tr>
                                        <td>Reliability</td>
                                        <td class="text-white"><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star-empty"></i></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <div class="row text-left mt-5">
                    <div class="col">
                        <div class="card mb-4">
                            <div class="card-body">
                                <div class="row">
                                    <div class="col-1"><img class="rounded img-fluid" src="assets/img/User_New.png" style={{"width": "56px"}} /></div>
                                    <div class="col">
                                        <h4>&nbsp;Name</h4>
                                        <h6 class="text-muted mb-2">Subtitle</h6>
                                        <p>Nullam id dolor id nibh ultricies vehicula ut id elit. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus.</p><a href="#">Read more</a></div>
                                </div>
                            </div>
                        </div>
                        <div class="card mb-4">
                            <div class="card-body">
                                <div class="row">
                                    <div class="col-1"><img class="rounded img-fluid" src="assets/img/User_New.png" style={{"width": "56px"}}/></div>
                                    <div class="col">
                                        <h4>&nbsp;Name</h4>
                                        <h6 class="text-muted mb-2">Subtitle</h6>
                                        <p>Nullam id dolor id nibh ultricies vehicula ut id elit. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus.</p><a href="#">Read more</a></div>
                                </div>
                            </div>
                        </div>
                        <div class="card mb-4">
                            <p>Your Review</p>
                            <div class="card-body"><textarea class="form-control" placeholder="Add Review"></textarea><button class="btn btn-primary m-3" type="button">Add Review</button>
                                <div class="btn-group" role="group"><button class="btn btn-info" type="button">Add to Cart</button><button class="btn btn-success" type="button">Buy</button></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col" style={{"min-height": "888px"}}><img class="img-fluid" src="assets/img/AFL.jpg"/></div>
        </div>
    </div>
      </div>
    )
  }
}

export default MachineDetails