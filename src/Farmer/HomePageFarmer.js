import React, { useState, } from "react";
import ForSale from "./ForSale";
import ForRent from "./ForRent";
import BuyMachines from "./BuyMachines";

const HomePageFarmer = () => {

  const [active, setActive] = useState("buymachines");

  return (
    <>
      <div className="container">
        <div className="row py-4 justify-content-evenly">
          <h1
            className="text-center border border-1 py-4  shadow p-4 mt-3 mb-3 bg-body roundeds"
            style={{ marginTop: 100, color: "#172578 " }}
          >
            Machines
          </h1>
          <div className="buttons d-flex justify-content-center">
            <button
              type="button"
               className="btn btn-outline-dark me-2"
              onClick={() => setActive("buymachines")}
            >
              All
            </button>
            <button
              type="button"
               className="btn btn-outline-dark me-2"
              onClick={() => setActive("forsale")}
            >
              For sale
            </button>
            <button
              type="button"
               className="btn btn-outline-dark me-2"
              onClick={() => setActive("forrent")}
            >
              For rent
            </button>

          </div>
          <div>
            {active === "forsale" && <ForSale />}
            {active === "forrent" && <ForRent />}
            {active === "buymachines" && <BuyMachines />}
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePageFarmer;
