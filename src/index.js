import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import './SCP.json';
import './SCP002.json';
import './SCP003.json';
import './SCP004.json';
import './SCP005.json';
import './SCP006.json';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
