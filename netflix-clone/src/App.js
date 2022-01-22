import React, { useState } from "react";
import "./App.css";

function App() {
  var [isOpen, setOpen] = useState(false);

  return (
    <div className="App">
      {isOpen && <header className="App-header"></header>}
    </div>
  );
}

export default App;
