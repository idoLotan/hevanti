
import Accessibility from "./pages/Accessibility/Accessibility";
import Home from "./pages/Home/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Lottery from "./pages/Lottery/Lottery";
import Terms from "./pages/Lottery/Sections/Terms";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="*" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/accessibility" element={<Accessibility />} />
          <Route path="/lottery" element={<Lottery />} />
          <Route path="/terms" element={<Terms/>} />
        
        </Routes>
      </Router>
    </div>
  );
}

export default App;
