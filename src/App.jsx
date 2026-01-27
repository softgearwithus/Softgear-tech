import "./App.css";

import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import GetInTouch from "./pages/Getintouch";
import Packages from "./pages/Packages";
import DetailsPage from "./pages/DetailsPage";
import CompliancePage from "./pages/ComplinceDetails";
import ConsultationPage from "./pages/ConsultationPage";
import AboutusPage from "./pages/Aboutus";
import Whatwedo from "./pages/Whatwedo";
import Projects from "./pages/Projects";
import WhyERPManufacturing from "./pages/Blogs/WhyERPManufacturing";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/intouch" element={<GetInTouch />} />
        <Route path="/packages" element={<Packages />} />
        <Route path="/details" element={<DetailsPage />} />
        <Route path="/compliance" element={<CompliancePage />} />
        <Route path="/consultation" element={<ConsultationPage />} />
        <Route path="/aboutus" element={<AboutusPage />} />
        <Route path="/whatwedo" element={<Whatwedo />} />
        <Route path="/projects" element={<Projects />} />

        <Route
          path="/blogs/why-erp-is-crucial-for-manufacturing-companies"
          element={<WhyERPManufacturing />}
        />
      </Routes>
    </>
  );
}

export default App;
