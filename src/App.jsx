import "./App.css";

import {Routes,Route} from "react-router-dom"
import Home from "./pages/Home";
import GetInTouch from "./pages/Getintouch";
import Packages from "./pages/Packages";
import DetailsPage from "./pages/DetailsPage";
import CompliancePage from "./pages/ComplinceDetails";
import ConsultationPage from "./pages/ConsultationPage";

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/intouch" element={<GetInTouch/>} />
      <Route path="/packages" element={<Packages/>}/>
      <Route path="/details" element={<DetailsPage/>}/>
      <Route path="/compliance" element={<CompliancePage/>}/>
      <Route path="/consultation" element={<ConsultationPage/>}/>
    </Routes>
    </>
  );
}

export default App;
