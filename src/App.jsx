import "./App.css";

import {Routes,Route} from "react-router-dom"
import Home from "./pages/Home";
import GetInTouch from "./pages/Getintouch";
import Packages from "./pages/Packages";

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/intouch" element={<GetInTouch/>} />
      <Route path="/packages" element={<Packages/>}/>
    </Routes>
    </>
  );
}

export default App;
