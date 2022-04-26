import GlobalStyle from "./components/GlobalStyle";
import Home from "./pages/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Nav from "./components/Nav";

function App() {
  return (
    <div className='App'>
      <Router>
        <GlobalStyle />
        <Nav />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/game/:id' element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
