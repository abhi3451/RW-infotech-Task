import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import BillProvider from "./store/BillCtxProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BillProvider>
      <App />
    </BillProvider>
  </React.StrictMode>
);
