import React from "react";
import ReactDOM from "react-dom/client";
import AppContext from "./Global Context/Context";
import App from "./App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <AppContext>
    <App />
  </AppContext>
);
