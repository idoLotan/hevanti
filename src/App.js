
import Accessibility from "./pages/Accessibility/Accessibility";
import Home from "./pages/Home/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Lottery from "./pages/Lottery/Lottery";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="*" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/accessibility" element={<Accessibility />} />
          <Route path="/lottery" element={<Lottery />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
