import React, { useEffect } from "react";
import "./App.css";
// import DashBoard from "./updated/dashboard/DashBoard";
import AuthenticationScreen from "./screens/authentication/AuthenticationScreen";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DashBoard from "./screens/dashboard/DashBoard";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          {/* <DashBoard /> */}
          {/* <NavbarWithSidebar /> */}
          <Route path="/" element={<AuthenticationScreen />} />
          <Route index path="login" element={<AuthenticationScreen />} />
          <Route path="dashboard" element={<DashBoard />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
