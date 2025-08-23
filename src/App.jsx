import "./App.css";

import {Routes,Route} from "react-router-dom"
import Home from "./pages/Home";
import GetInTouch from "./pages/Getintouch";

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/intouch" element={<GetInTouch/>} />
    </Routes>
    </>
  );
}

export default App;
