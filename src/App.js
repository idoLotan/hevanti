
import Accessibility from "./pages/Accessibility";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="*" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/accessibility" element={<Accessibility />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
