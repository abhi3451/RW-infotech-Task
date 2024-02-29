import React from "react";
import "./BillTotal.css";
import useBillContext from "../../store/BillCtx";
const BillCal = () => {
  const { Bill, setNOP, NOP, setTip, setBill } = useBillContext();
  return (
    <div className="bil">
      <div className="textB">Bill</div>
      <div className="inputBox">
        <div className="hello">$</div>
        <input
          type="number"
          placeholder="0"
          className="input"
          value={Bill}
          onChange={(e) => setBill(e.target.value)}
        />
      </div>
    </div>
  );
};

export default BillCal;
