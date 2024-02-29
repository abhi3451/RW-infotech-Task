import React, { useState } from "react";
import "./Total.css";

import useBillContext from "../../../store/BillCtx";

const Total = () => {
  const { NOP, Tip, Bill, BillPer, TipPer, handleReset } = useBillContext();
  return (
    <div className="layout">
      <div className="main">
        <div className="text">
          Tip Amount
          <span className="txt2">/person</span>
        </div>
        <div className="billText">
          $ {NOP && Tip && Bill ? TipPer.toFixed(2) : 0}
        </div>

        <div className="text">
          Total
          <span className="txt2">/person</span>
        </div>
        <div className="billText">
          $ {NOP && Tip && Bill ? BillPer.toFixed(2) : 0}
        </div>
      </div>
      <div className="footer" onClick={handleReset}>
        <button type="submit" disabled={!BillPer && !TipPer}>
          Reset
        </button>
      </div>
    </div>
  );
};

export default Total;
