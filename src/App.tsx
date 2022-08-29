import { Route, Routes } from "react-router-dom";
import Navbar from "./Core/components/Navbar";
import HomePage from "./pages/HomePage";
import { AuthProvider } from "./Authorization/contexts/AuthContext";
import Footer from "./Core/components/Footer";

function App() {
  return (
    <AuthProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
      <Footer />
    </AuthProvider>
  );
}

export default App;
