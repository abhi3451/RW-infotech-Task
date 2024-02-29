import React from "react";

import BillCal from "./BillCal";
import SelectTip from "./SelectTip";
import NOP from "./NOP";

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
