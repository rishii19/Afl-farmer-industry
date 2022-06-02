import React, { useEffect } from "react";
import "./Connection.css";
import axios from "../../api/axios";
import SideBar from '../SideBar';
 
const Connection = () => {
  const fetchData = () => {
      axios.get("connections")
          .then(response => {
              console.log("Connection list", response.data);
          });
  }

  useEffect(() => {
      fetchData();
  }, []);

  return (
    <div className="homepage">
      <SideBar />
      <div className="main_layout">
        <div className="table">
          <div className="table_header">
            <p id="tableName">Connections</p>
          </div>
          <div className="table_list">
          </div>
        </div>
      </div>
    </div>
  );
}

export default Connection;
