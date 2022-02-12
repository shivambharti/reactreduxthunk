import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import {BrowserRouter,Routes,Route,HashRouter} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <HashRouter>
      <Header></Header>
      <Routes>
        <Route exact path="/" element={<Home></Home>}></Route>
        <Route exact path="/About" element={<About></About>} ></Route>
      </Routes>
      
      </HashRouter>
      
    </div>
  );
}

export default App;
