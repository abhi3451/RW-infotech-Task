import React from "react";
import "./BillTotal.css";
import useBillContext from "../../store/BillCtx";
const BillCal = () => {
  const { Bill, setBill } = useBillContext();
  let length = 6;
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
          onChange={(e) => {
            const inputValue = e.target.value;
            if (inputValue.length <= length) {
              setBill(inputValue);
            }
          }}
        />
      </div>
    </div>
  );
};

export default BillCal;
