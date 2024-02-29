import React from "react";

import BillCal from "./Bill/BillCal";
import SelectTip from "./Select/SelectTip";
import NOP from "./NOP/NOP";

const BillCalc = () => {
  return (
    <div className="rectGrid">
      <div>
        <BillCal />
        <SelectTip />
        <NOP />
      </div>
    </div>
  );
};

export default BillCalc;
