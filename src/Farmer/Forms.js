import React, { Component } from 'react'

export class Forms extends Component {
  render() {
    return (
      <div>
          <div class="container-fluid" style={{"height": "100%"}}>
        <div class="row">
            <div class="col-9 text-center" style={{"padding": "37px","background": "rgb(248,248,255)"}}>
                <h1 class="text-left">Forms</h1>
                <hr/>
                <div class="row">
                    <div class="col"><input type="text" class="form-control pl-4" style={{"border-radius": "15px","border-width": "1px","border-style": "solid"}} placeholder="Machine Name"/></div>
                    <div class="col"><select class="form-control" style={{"border-radius": "19px"}}>
                        <optgroup label="This is a group">
                            <option value="12" selected="">This is item 1</option>
                            <option value="13">This is item 2</option>
                            <option value="14">This is item 3</option>
                    </optgroup></select></div>
                    <div class="col"><input type="text" class="form-control" style={{"border-radius":"15px","border-width":"1px","border-style":"solid","padding-left":"15px"}} placeholder="Insurance"/></div>
                <div class="col"><input type="text" class="form-control" style={{"border-radius":"15px","border-width":"1px","border-style":"solid","padding-left":"15px"}} placeholder="Invoice of the Vehicle"/></div>
            </div>
            <div class="row" style={{"margin-top": "25px"}}>
                <div class="col"><img class="shadow" src="assets/img/Catterpillar%20tractor.png" /></div>
                <div class="col text-left">
                    <div class="table-responsive">
                        <table class="table">
                            <tbody>
                                <tr>
                                    <td>Cell 1</td>
                                    <td style={{"width":"95px"}}><button class="btn btn-success" type="button">View</button></td>
                                </tr>
                                <tr>
                                    <td>Cell 1</td>
                                    <td style={{"width":"95px"}}><button class="btn btn-success" type="button">View</button></td>
                                </tr>
                                <tr>
                                    <td>Cell 1</td>
                                    <td style={{"width":"95px"}}><button class="btn btn-success" type="button">View</button></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <div class="row" style={{"margin-top": "25px"}}>
                <div class="col"><input type="file"/></div>
                <div class="col text-left"><textarea class="form-control" placeholder="Description"></textarea></div>
            </div>
            <div class="row" style={{"margin-top": "25px"}}>
                <div class="col"><button class="btn btn-warning btn-lg text-white" type="button" style={{"border-radius": "23px"}}>Save</button></div>
            </div>
        </div>
        <div class="col" style={{"min-height": "888px"}}><img class="img-fluid" src="assets/img/AFL.jpg"/></div>
    </div>
    </div>

      </div>
    )
  }
}

export default Forms