import GlobalStyle from "./components/GlobalStyle";
import Home from "./pages/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className='App'>
      <GlobalStyle />
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/game/:id" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
