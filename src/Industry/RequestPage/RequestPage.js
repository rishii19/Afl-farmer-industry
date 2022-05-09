import React, {useRef, useCallback, useState } from "react";
import "./RequestPage.css";
import RequestListItem from "../RequestListItem/RequestListItem";
import RequestListHeader from "../RequestListHeader/RequestListHeader";
import {acceptedItemListArr, pendingItemListArr} from './RequestPageData';

function RequestPage() {
  const myContainer1 = useRef(null);
  const myContainer2 = useRef(null);

  const handleBlockClick = useCallback(
    (id) => () => {
      if (id === 1) {
        setList('Pending')
        myContainer1.current.classList.add("active");
        myContainer2.current.classList.remove("active");
      } else {
        setList('Accepted')
        myContainer2.current.classList.add("active");
        myContainer1.current.classList.remove("active");
      }
    },
    []
  );
 
  const [List , setList] = useState('Pending')

  return (
    <div className="homepage">
      <div className="main_layout">

        <div className="blocks">
          <div
            className="active"
            id="1"
            onClick={handleBlockClick(1)}
            ref={myContainer1}
          >
            <p id="buyersText">Pending Request</p>
            <p id="buyersAmt">{pendingItemListArr.length}</p>
          </div>
          <div id="2" onClick={handleBlockClick(2)} ref={myContainer2}>
            <p id="buyersText">Accepted Request</p>
            <p id="buyersAmt">{acceptedItemListArr.length}</p>
          </div>
        </div>


        <div className="table">

          <div className="table_list">
            <RequestListHeader />
            {List === 'Pending' && pendingItemListArr.map((value, index)=>(
                <RequestListItem 
                    key={index}
                    cusId={value.cusId} 
                    cusImg={value.cusImg} 
                    cusName={value.cusName} 
                    update={value.update} 
                    machineName={value.machineName}
                    status={value.status}
                />
            ))}
            {List === 'Accepted' && acceptedItemListArr.map((value, index)=>(
                <RequestListItem 
                    key={index}
                    cusId={value.cusId} 
                    cusImg={value.cusImg} 
                    cusName={value.cusName} 
                    update={value.update} 
                    machineName={value.machineName}
                    status={value.status}
                />
            ))}  
          </div>
        </div>
      </div>
    </div>
  );
}

export default RequestPage;
