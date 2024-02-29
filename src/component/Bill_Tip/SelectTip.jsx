import React, { useState } from "react";
import "./BillTotal.css";
import useBillContext from "../../store/BillCtx";

const tipValues = [5, 10, 15, 20, 30];
const SelectTip = () => {
  const { tipval, setTipval, setTip } = useBillContext();

  const handleTip = (tip) => {
    setTip(parseInt(tip));
  };

  const handleCustomTip = (e) => {
    const customTipValue = e.target.value;
    if (customTipValue.length <= 3) {
      setTipval(parseInt(customTipValue));
      setTip(parseInt(customTipValue));
    }
  };
  return (
    <div>
      <div className="texts">Select Tip %</div>
      <div className="tip">
        {tipValues.map((tip, index) => (
          <button key={index} className="tip1" onClick={() => handleTip(tip)}>
            {tip}%
          </button>
        ))}

        <span className="customBox">
          <input
            type="number"
            placeholder="Custom"
            className="custom"
            value={tipval}
            onChange={handleCustomTip}
          />
        </span>
      </div>
    </div>
  );
};

export default SelectTip;
