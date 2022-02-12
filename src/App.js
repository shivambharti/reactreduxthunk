import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import {BrowserRouter,Routes,Route} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header></Header>
      <Routes>
        <Route exact path="/" element={<Home></Home>}></Route>
        <Route exact path="/About" element={<About></About>} ></Route>
      </Routes>
      
      </BrowserRouter>
      
    </div>
  );
}

export default App;
