import React, { useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [total, setTotal] = useState(0);

  const getTotal = () => {
    axios
      .get("http://0.0.0.0:5000/chain")
      .then(res => {
        console.log(res.data);
      })
      .catch(error => {
        console.log(error);
      });
  };
  getTotal();

  return (
    <div className="App">
      <h1>Crypto Wallet</h1>
      {/* <h3>Current Balance: {currentBalance} </h3> */}
    </div>
  );
}

export default App;
