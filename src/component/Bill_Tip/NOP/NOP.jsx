import React from "react";
import "./NOP.css";
import { FaUser } from "react-icons/fa";
import useBillContext from "../../../store/BillCtx";
const NOP = () => {
  const { setNOP, NOP } = useBillContext();
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
            const Peoplevalue = e.target.value;
            if (/^[0-9]*$/.test(Peoplevalue) && Peoplevalue.length <= 6) {
              setNOP(Peoplevalue);
            }
          }}
        />
      </div>
    </div>
  );
};

export default NOP;
