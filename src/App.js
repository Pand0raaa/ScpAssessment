import React from "react";
import "./App.css";
import Home from "./scp_Home";
import Scp_002 from "./scp_002";
import Scp_003 from "./scp_003";
import Scp_004 from "./scp_004";
import Scp_005 from "./scp_005";
import Scp_006 from "./scp_006";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./Nav";

function App() {
  return (
    <>
      <Router>
        <Nav />
        <foundation />

        <Routes>
          <Route path="/scp_Home" element={<Home />} />
          <Route path="/scp_002" element={<Scp_002 />} />
          <Route path="/scp_003" element={<Scp_003 />} />
          <Route path="/scp_004" element={<Scp_004 />} />
          <Route path="/scp_005" element={<Scp_005 />} />
          <Route path="/scp_006" element={<Scp_006 />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
