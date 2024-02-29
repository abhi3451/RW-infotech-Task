import { createContext, useContext } from "react";

export const Billcontext = createContext();
export default function useBillContext() {
  return useContext(Billcontext);
}
