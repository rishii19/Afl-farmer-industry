import React, { useState, } from "react";
import ForSale from "./ForSale";
import ForRent from "./ForRent";
import BuyMachines from "./BuyMachines";

const HomePageFarmer = () => {

  const [active, setActive] = useState("buymachines");

  return (
    <>
      <div className="container">
        <div className="row justify-content-evenly">
          <h1
            className="text-center border-bottom shadow-sm mb-4 p-1 bg-body rounded"
            style={{ color: "#172578 " }}
          >
            Machines
          </h1>
          <div className="buttons d-flex justify-content-center"
          >
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
