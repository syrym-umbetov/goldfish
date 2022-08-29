import { Route, Routes } from "react-router-dom";
import Navbar from "./Core/components/Navbar";
import HomePage from "./pages/HomePage";
import { AuthProvider } from "./Authorization/components/contexts/AuthContext";

function App() {
  return (
    <AuthProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </AuthProvider>
  );
}

export default App;
