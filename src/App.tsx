import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Main from "./pages/Main";
import BreakingBad from "./pages/BreakingBad";
import BreakingBadCharacter from "./pages/BreakingBadCharacter";
import { AuthProvider } from "./Core/contexts/AuthContext";

function App() {
  return (
    <AuthProvider>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/breaking-bad" element={<BreakingBad />} />
          <Route path="/character/:id" element={<BreakingBadCharacter />} />
        </Routes>
      </div>
    </AuthProvider>
  );
}

export default App;
