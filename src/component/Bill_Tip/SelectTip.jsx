import React from "react";
import "./BillTotal.css";
import useBillContext from "../../store/BillCtx";

const tipValues = [5, 10, 15, 20, 30];
const SelectTip = () => {
  const { Bill, setNOP, NOP, setTip, setBill } = useBillContext();

  const handleTip = (tip) => {
    setTip(parseInt(tip));
  };

  const handleCustomTip = (e) => {
    const customTipValue = e.target.value;
    setTip(customTipValue ? parseInt(customTipValue) : 0);
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
            onChange={handleCustomTip}
          />
        </span>
      </div>
    </div>
  );
};

export default SelectTip;
