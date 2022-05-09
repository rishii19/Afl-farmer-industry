import React, { useRef, useCallback } from "react";
import "./Connection.css";
import ConnectionListItem from "../ConnectionListItem/ConnectionListItem";
import ConnectionHeader from "../ConnectionHeader/ConnectionHeader";

function Connection() {
  const myContainer1 = useRef(null);
  const myContainer2 = useRef(null);

  const handleBlockClick = useCallback(
    (id) => () => {
      if (id === 1) {
        myContainer1.current.classList.add("active");
        myContainer2.current.classList.remove("active");
      } else {
        myContainer2.current.classList.add("active");
        myContainer1.current.classList.remove("active");
      }
    },
    []
  );

  return (
    <div className="homepage">
      {/*<SideBar />
  <TopBar /> */}
      <div className="main_layout">
        <div className="table">
          <div className="table_header">
            <p id="tableName">Connections</p>
          </div>
          <div className="table_list">
            <ConnectionHeader />
            <ConnectionListItem />
            <ConnectionListItem />
            <ConnectionListItem />
            <ConnectionListItem />
            <ConnectionListItem />
            <ConnectionListItem />
            <ConnectionListItem />
            <ConnectionListItem />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Connection;
