import { useEffect, useState } from "react";
import { Billcontext } from "./BillCtx";

const BillProvider = ({ children }) => {
  const [Bill, setBill] = useState("");
  const [Tip, setTip] = useState("");
  const [NOP, setNOP] = useState("");
  const [BillPer, setBillPer] = useState(0);
  const [TipPer, setTipPer] = useState(0);
  const [Result, setResult] = useState(0);
  const [tipval, setTipval] = useState("");
  const parseBill = parseInt(Bill);

  const TipCalulate = (parseBill * Tip) / 100;

  const handleSplitTip = () => {
    setTipPer(TipCalulate / NOP);
  };

  const handleBillSplit = () => {
    setBillPer(Result / NOP);
  };

  const handleReset = () => {
    setBill("");
    setTip("");
    setNOP("");
    setResult(0);
    setTipPer(0);
    setBillPer(0);
    setTipval("");
  };

  useEffect(() => {
    if (parseBill && Tip && NOP > 0) {
      const totalValue = () => {
        const TotalAmount = parseBill + TipCalulate;
        setResult(TotalAmount.toFixed(2));
      };
      totalValue();
    }
  }, [Bill, Tip, NOP]);

  useEffect(() => {
    const tipVal = () => {
      if (Tip && NOP > 0 && Bill) {
        handleSplitTip();
      }
    };
    tipVal();
  }, [Tip, NOP, Bill]);

  useEffect(() => {
    const billVal = () => {
      if (Result && NOP > 0 && Bill) {
        handleBillSplit();
      }
    };
    billVal();
  }, [Result, NOP, Bill]);

  const contextValue = {
    Bill,
    setBill,
    Tip,
    setTip,
    Result,
    setNOP,
    NOP,
    TipPer,
    BillPer,
    handleReset,
    tipval,
    setTipval,
  };

  return (
    <Billcontext.Provider value={contextValue}>{children}</Billcontext.Provider>
  );
};

export default BillProvider;
