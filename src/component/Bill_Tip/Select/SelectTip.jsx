import React, { useState } from "react";
import "./Select.css";
import useBillContext from "../../../store/BillCtx";

const tipValues = [5, 10, 15, 20, 30];
const SelectTip = () => {
  const { Tip, tipval, setTipval, setTip } = useBillContext();

  const handleTip = (tip) => {
    if (Tip) {
      setTipval("");
    }
    setTip(parseInt(tip));
  };

  const handleCustomTip = (e) => {
    if (Tip) {
      setTipval("");
    }
    const customTipValue = e.target.value;
    if (customTipValue.length <= 3 || customTipValue > 0) {
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
