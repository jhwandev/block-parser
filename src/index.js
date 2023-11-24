import React from "react";
import ReactDOM from "react-dom/client";
import "./style/index.css";
import "./style/App.css";
import App from "./App";
import Header from "./components/Header";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
