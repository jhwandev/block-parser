import React from "react";
import eth from "../assets/eth_logo.png";

function main() {
  return (
    <div className="App">
      <div className="App-header">
        <p>
          <img src={eth} className="App-logo" alt="logo" />
          <br />
          <br />
          <code>Block Crawler</code>
          <br />
          <code style={{ fontSize: "20px" }}>by RPC Connect</code>
        </p>
      </div>
    </div>
  );
}

export default main;
