import React from "react";
import BillCalc from "./Bill_Tip/BillCalc";
import Total from "./Bill_Tip/Total";
import "./ind.css";
const Index = () => {
  return (
    <div className="container">
      <div className="gridContainer">
        <BillCalc />
        <Total />
      </div>
    </div>
  );
};

export default Index;
