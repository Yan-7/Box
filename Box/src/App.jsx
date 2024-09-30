// App.js
import React, { useState } from "react";
import "./App.css";
import Box from "./Box";

function App() {

  const boxes = Array(12).fill(<Box />);


  // const [count, setCount] = useState(0);

  return (
    <>
    
      <div className="grid-container">
            {boxes}
        </div>
      
      
    </>
  );
}

export default App;
