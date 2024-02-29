import React from "react";
import BillCalc from "./Bill_Tip/Index";
import Total from "./Bill_Tip/Total_Amount/Total";
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
