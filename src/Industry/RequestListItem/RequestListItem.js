import React, { useState } from "react";
import "./RequestListItem.css";


const RequestListItem = (props) => {

  const [statusRec, setStatusRec] = useState(props.status || '');
  function HandleChange (status) {
    setStatusRec(status);
  }
  
  return (<div className="itemHolderreq">
            <img src={props.cusImg} alt='NoImage' />
            <div className="nameStatusreq">
              <span>{props.cusName}</span>
              <p>Updated {props.update} ago</p>
            </div>
            <div className="locationTimereq">
              <span>{props.machineName}</span>
            </div>
            
            {statusRec === '' ? (
              <>
                <div onClick={()=>HandleChange('Accepted')} className="acceptreq">Accept</div>
                <div onClick={()=>HandleChange('Rejected')} className="rejectreq">Reject</div>
              </>)
            :
            <div id={statusRec}>{statusRec}</div>}
          </div> 
        )};

export default RequestListItem;
