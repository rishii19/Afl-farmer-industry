import React, { Component } from 'react'
import Navbar from './Navbar'
import SideNavBar from './SideNavBar'

export class SellResidue extends Component {
    state={PassengerCapacity:0}


    Increase(){
       this.setState ({PassengerCapacity:++this.state.PassengerCapacity});
       console.log(this.state.PassengerCapacity);
    }
     Decrease(){
         if(this.state.PassengerCapacity==1)return;
       this.setState ({PassengerCapacity:--this.state.PassengerCapacity});
    }
  render() {
    return (
        <div>
      
        <div id="wrapper" style={{  }}>
           
                <SideNavBar />
           
            <div className="page-content-wrapper pt-3">
                <div className="container">
                <nav class="navbar navbar-light navbar-expand-md bg-white text-center">
    <div className="container-fluid">
        <div className="row flex-fill">
            <div className="col d-xl-flex justify-content-xl-center"><img src="assets/img/AFL.jpg" style={{"width": "88px"}} /></div>
        </div>
    </div>
</nav>
                    <div className="row">
                        <div className="col">
                            <div className="card border-primary border rounded shadow-sm" style={{ "width": "275px" }}>
                                <div className="card-body text-center">
                                    <h4 className="card-title">Buy</h4>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card border-primary border rounded shadow-sm" style={{ "width": "275px" }}>
                                <div className="card-body text-center">
                                    <h4 className="card-title">Sell</h4>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card border-primary border rounded shadow-sm" style={{ "width": "275px" }}>
                                <div className="card-body text-center">
                                    <h4 className="card-title">Connections</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container pt-3" >
    <div className="row">
        <div className="col">
            <div className="card shadow-sm mb-3" style={{'background': 'rgb(241,241,241)'}}>
                <div className="card-body">
                    <h4 className="text-secondary">Car Details</h4>
                    <hr />
                    <form>
                        <div className="form-row">
                            <div className="col-8">
                                <div className="form-group"><label>Title</label><input className="form-control" type="text" /></div>
                            </div>
                            <div className="col">
                                <div className="form-group"><label>Condition</label>
                                    <div className="d-xl-flex align-items-xl-center" style={{"padding: 7px;margin-left": "38px"}}>
                                        <div className="form-check" style={{"margin-right": "35px"}}><input className="form-check-input" type="radio" id="formRadio-1" name="Condition" /><label className="form-check-label" for="formRadio-1">New</label></div>
                                        <div className="form-check"><input className="form-check-input" type="radio" id="formRadio-2" name="Condition" /><label className="form-check-label" for="formRadio-2">Used</label></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="col-4">
                                <div className="form-group"><label>Body Type</label><select className="form-control"><optgroup label="This is a group"><option value="12" selected>This is item 1</option><option value="13">This is item 2</option><option value="14">This is item 3</option></optgroup></select></div>
                            </div>
                            <div className="col-4">
                                <div className="form-group"><label>Brand</label><select className="form-control"><optgroup label="This is a group"><option value="12" selected>This is item 1</option><option value="13">This is item 2</option><option value="14">This is item 3</option></optgroup></select></div>
                            </div>
                            <div className="col-4">
                                <div className="form-group"><label>Model</label><select className="form-control"><optgroup label="This is a group"><option value="12" selected>This is item 1</option><option value="13">This is item 2</option><option value="14">This is item 3</option></optgroup></select></div>
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="col-4">
                                <div className="form-group"><label>Year</label><select className="form-control"><optgroup label="This is a group"><option value="12" selected>This is item 1</option><option value="13">This is item 2</option><option value="14">This is item 3</option></optgroup></select></div>
                            </div>
                            <div className="col-4">
                                <div className="form-group"><label>Passenger Capacity</label>
                                    <div className="input-group">
                                        <div className="input-group-prepend" onClick={()=>this.Decrease()}><span  className="text-white bg-primary input-group-text"><i className="fa fa-minus"></i></span></div>
                                        <input className="form-control" type="text"  defaultValue={this.state.PassengerCapacity} value={this.state.PassengerCapacity}/>
                                        <div className="input-group-append">
                                            <button onClick={()=>this.Increase()} className="btn btn-primary" type="button"><i className="fa fa-plus"></i></button></div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-4">
                                <div className="form-group"><label>Exterior Color</label><select className="form-control"><optgroup label="This is a group"><option value="12" selected>This is item 1</option><option value="13">This is item 2</option><option value="14">This is item 3</option></optgroup></select></div>
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="col">
                                <div className="form-group"><label>Description</label><textarea className="form-control"></textarea></div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
    <div className="row">
        <div className="col">
            <div className="card shadow-sm mb-3" style={{'background': 'rgb(241,241,241)'}}>
                <div className="card-body">
                    <h4 className="text-secondary">Engine Details</h4>
                    <hr />
                    <form>
                        <div className="form-row">
                            <div className="col-4">
                                <div className="form-group"><label>Fuel Type</label><select className="form-control"><optgroup label="This is a group"><option value="12" selected>This is item 1</option><option value="13">This is item 2</option><option value="14">This is item 3</option></optgroup></select></div>
                            </div>
                            <div className="col-4">
                                <div className="form-group"><label>Milage</label>
                                    <div className="input-group"><input className="form-control" type="text" />
                                        <div className="input-group-append"><button className="btn btn-primary" type="button">km</button></div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-4">
                                <div className="form-group"><label>Transmission</label><select className="form-control"><optgroup label="This is a group"><option value="12" selected>This is item 1</option><option value="13">This is item 2</option><option value="14">This is item 3</option></optgroup></select></div>
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="col-4">
                                <div className="form-group"><label>DriveTrain</label><select className="form-control"><optgroup label="This is a group"><option value="12" selected>This is item 1</option><option value="13">This is item 2</option><option value="14">This is item 3</option></optgroup></select></div>
                            </div>
                            <div className="col-4">
                                <div className="form-group"><label>Engine Capacity</label>
                                    <div className="input-group"><input className="form-control" type="text" />
                                        <div className="input-group-append"><button className="btn btn-primary" type="button">cc</button></div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-4">
                                <div className="form-group"><label>Power</label>
                                    <div className="input-group"><input className="form-control" type="text" />
                                        <div className="input-group-append"><button className="btn btn-primary" type="button">hp</button></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
    <div className="row">
        <div className="col">
            <div className="card shadow-sm mb-3" style={{'background': 'rgb(241,241,241)'}}>
                <div className="card-body">
                    <h4 className="text-secondary">Dimensions</h4>
                    <hr />
                    <form>
                        <div className="form-row">
                            <div className="col-3">
                                <div className="form-group"><label>Length</label>
                                    <div className="input-group"><input className="form-control" type="text" />
                                        <div className="input-group-append"><button className="btn btn-primary" type="button">cc</button></div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-3">
                                <div className="form-group"><label>Width</label>
                                    <div className="input-group"><input className="form-control" type="text" />
                                        <div className="input-group-append"><button className="btn btn-primary" type="button">cc</button></div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-3">
                                <div className="form-group"><label>Height</label>
                                    <div className="input-group"><input className="form-control" type="text" />
                                        <div className="input-group-append"><button className="btn btn-primary" type="button">cc</button></div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-3">
                                <div className="form-group"><label>Cargo</label>
                                    <div className="input-group"><input className="form-control" type="text" />
                                        <div className="input-group-append"><button className="btn btn-primary" type="button">cc</button></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
    <div className="row">
        <div className="col">
            <div className="card shadow-sm mb-3" style={{'background': 'rgb(241,241,241)'}}>
                <div className="card-body">
                    <h4 className="text-secondary">Features</h4>
                    <hr />
                    <form>
                        <div className="form-row">
                            <div className="col">
                                <div className="form-group"><label>Search</label><input className="form-control" type="text" /></div>
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="col-3">
                                <div className="form-group">
                                    <div className="form-check"><input className="form-check-input" type="checkbox" id="formCheck-1" /><label className="form-check-label" for="formCheck-1">Power Steering</label></div>
                                </div>
                            </div>
                            <div className="col-3">
                                <div className="form-group">
                                    <div className="form-check"><input className="form-check-input" type="checkbox" id="formCheck-3" /><label className="form-check-label" for="formCheck-3">Heated Seat</label></div>
                                </div>
                            </div>
                            <div className="col-3">
                                <div className="form-group">
                                    <div className="form-check"><input className="form-check-input" type="checkbox" id="formCheck-3" /><label className="form-check-label" for="formCheck-3">Rear Parking Sensor</label></div>
                                </div>
                            </div>
                            <div className="col-3">
                                <div className="form-group">
                                    <div className="form-check"><input className="form-check-input" type="checkbox" id="formCheck-4" /><label className="form-check-label" for="formCheck-4">USB Port</label></div>
                                </div>
                            </div>
                            <div className="col-3">
                                <div className="form-group">
                                    <div className="form-check"><input className="form-check-input" type="checkbox" id="formCheck-5" /><label className="form-check-label" for="formCheck-5">AC</label></div>
                                </div>
                            </div>
                            <div className="col-3">
                                <div className="form-group">
                                    <div className="form-check"><input className="form-check-input" type="checkbox" id="formCheck-6" /><label className="form-check-label" for="formCheck-6">Wifi</label></div>
                                </div>
                            </div>
                            <div className="col-3">
                                <div className="form-group">
                                    <div className="form-check"><input className="form-check-input" type="checkbox" id="formCheck-7" /><label className="form-check-label" for="formCheck-7">Roof Rack</label></div>
                                </div>
                            </div>
                            <div className="col-3">
                                <div className="form-group">
                                    <div className="form-check"><input className="form-check-input" type="checkbox" id="formCheck-8" /><label className="form-check-label" for="formCheck-8">Sound System</label></div>
                                </div>
                            </div>
                            <div className="col-3">
                                <div className="form-group">
                                    <div className="form-check"><input className="form-check-input" type="checkbox" id="formCheck-9" /><label className="form-check-label" for="formCheck-9">Alarm</label></div>
                                </div>
                            </div>
                            <div className="col-3">
                                <div className="form-group">
                                    <div className="form-check"><input className="form-check-input" type="checkbox" id="formCheck-10" /><label className="form-check-label" for="formCheck-10">Cruise Control</label></div>
                                </div>
                            </div>
                            <div className="col-3">
                                <div className="form-group">
                                    <div className="form-check"><input className="form-check-input" type="checkbox" id="formCheck-11" /><label className="form-check-label" for="formCheck-11">Power Windows</label></div>
                                </div>
                            </div>
                            <div className="col-3">
                                <div className="form-group">
                                    <div className="form-check"><input className="form-check-input" type="checkbox" id="formCheck-12" /><label className="form-check-label" for="formCheck-12">Memory Seat</label></div>
                                </div>
                            </div>
                            <div className="col-3">
                                <div className="form-group">
                                    <div className="form-check"><input className="form-check-input" type="checkbox" id="formCheck-13" /><label className="form-check-label" for="formCheck-13">Bluetooth</label></div>
                                </div>
                            </div>
                            <div className="col-3">
                                <div className="form-group">
                                    <div className="form-check"><input className="form-check-input" type="checkbox" id="formCheck-14" /><label className="form-check-label" for="formCheck-14">Front Parking Sensor</label></div>
                                </div>
                            </div>
                            <div className="col-3">
                                <div className="form-group">
                                    <div className="form-check"><input className="form-check-input" type="checkbox" id="formCheck-15" /><label className="form-check-label" for="formCheck-15">SunRoof</label></div>
                                </div>
                            </div>
                            <div className="col-3">
                                <div className="form-group">
                                    <div className="form-check"><input className="form-check-input" type="checkbox" id="formCheck-16" /><label className="form-check-label" for="formCheck-16">Other</label></div>
                                </div>
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="col">
                                <div className="form-group"><label>Description</label><textarea className="form-control"></textarea></div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
    <div class="row">
    <div class="col">
        <div class="card shadow-sm mb-3" style={{'background': 'rgb(241,241,241)'}}>
            <div class="card-body">
                <h4 class="text-secondary">Location</h4>
                <hr />
                <form>
                    <div class="form-row">
                        <div class="col">
                            <div class="form-group"><label>Address</label><input type="text" class="form-control" /></div>
                        </div>
                    </div>
                    <div class="form-row">
                        <div class="col"><iframe allowfullscreen frameborder="0" src="https://www.google.com/maps/embed/v1/place?key=AIzaSyCxUQw87F0UWpLPVY4cZbfSwvZ_4eKWdbQ&amp;q=Paris%2C+France&amp;zoom=11" width="100%" height="400"></iframe></div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>
<div class="row">
    <div class="col">
        <div class="card shadow-sm mb-3" style={{'background': 'rgb(241,241,241)'}}>
            <div class="card-body">
                <h4 class="text-secondary">Vehicle History</h4>
                <hr />
                <form>
                    <div class="form-row">
                        <div class="col">
                            <div class="form-group"><input class="btn btn-info  form-control" type="file" /></div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>
<div class="row">
    <div class="col">
        <div class="card shadow-sm mb-3" style={{'background': 'rgb(241,241,241)'}}>
            <div class="card-body">
                <h4 class="text-secondary">Image &amp; Video</h4>
                <hr />
                <form>
                    <div class="form-row">
                        <div class="col"><button class="btn btn-info" type="button"><i class="fa fa-plus d-xl-flex justify-content-xl-center align-items-xl-center" style={{"width": "120px","height": "120px","font-size": "39px"}}></i></button></div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>
    <div className="row">
        <div className="col">
            <div className="card shadow-sm mb-3" style={{'background': 'rgb(241,241,241)'}}>
                <div className="card-body">
                    <h4 className="text-secondary">Full Price</h4>
                    <hr />
                    <form>
                        <div className="form-row">
                            <div className="col">
                                <div className="form-group">
                                    <div className="input-group">
                                        <div className="input-group-prepend"><span className="input-group-text"><i className="fa fa-dollar"></i></span></div><input className="form-control" type="text" />
                                        <div className="input-group-append"><button className="btn btn-primary" type="button">Go!</button></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form><button className="btn btn-primary btn-block" onClick={()=>{console.log('Sell Button Clicked');}} type="button">Sell My Car</button></div>
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

export default SellResidue