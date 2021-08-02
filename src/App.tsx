import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";


import Body from "./components/App/Home/Body";

function App() {
  return (
    <Router>
      <Body />
    </Router>
  );
}

export default App;
