import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Mylogin from "./pages/Mylogin/Mylogin";
import Homepage from "./pages/Homepage/Homepage";
import Dashboard from "./pages/Dashboard/Dashboard";
import About from "./pages/About/About";
import Mysignup from "./pages/Mysignup/Mysignup";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<Mylogin />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/about" element={<About />} />
        <Route path="/signup" element={<Mysignup />} />
      </Routes>
    </Router>
  );
}

export default App;
