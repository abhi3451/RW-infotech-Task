import React from "react";
import "./BillCalc.css";
import { FaUser } from "react-icons/fa";
import useBillContext from "../../store/BillCtx";
const NOP = () => {
  const { Bill, setNOP, NOP, setTip, setBill } = useBillContext();
  return (
    <div>
      <div className="textB">
        <span>Number of People</span>
        {NOP === "0" ? <span className="error">Can't be Zero</span> : null}
      </div>

      <div className="inputBox">
        <div className="hello">
          <FaUser />
        </div>
        <input
          type="number"
          placeholder="0"
          className="input"
          value={NOP}
          onChange={(e) => {
            const value = e.target.value;
            if (/^[0-9]*$/.test(value)) {
              setNOP(value);
            }
          }}
        />
      </div>
    </div>
  );
};

export default NOP;
