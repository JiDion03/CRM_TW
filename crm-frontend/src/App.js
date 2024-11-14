import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Mylogin from "./pages/Mylogin/Mylogin";
import Homepage from "./pages/Homepage/Homepage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Mylogin />} />
        <Route path="/" element={<Homepage />} />
      </Routes>
    </Router>
  );
}

export default App;
