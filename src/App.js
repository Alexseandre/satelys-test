import Qualifications from "./Pages/Qualifications/Qualifications";
import Photovoltaique from "./Pages/Photovoltaique/Photovoltaique";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Aerovoltaique from "./Pages/Aerovoltaique/Aerovoltaique";
import Solutions from "./Pages/Solutions/Solutions";
import Thermo from "./Pages/Thermodynamique/Thermo";
import Isolation from "./Pages/Isolation/Isolation";
import Footer from "./Composants/Footer/Footer";
import Credit from "./Pages/CreditImpot/Credit";
import PompeAE from "./Pages/PompeAE/PompeAE";
import PompeAA from "./Pages/PompeAA/PompeAA";
import Nav from "./Composants/Nav/Nav";
import Home from "./Pages/Home/Home";
import "./App.css";
import Poele from "./Pages/Poele/Poele";
import Contact from "./Pages/Contact/Contact";
import ScrollToTop from "./Composants/ScrollToTop/ScrollToTop";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <ScrollToTop />
        <main>
          <Nav />
          <div className="container-create"></div>
          <Routes>
            <Route path="/solutions" element={<Solutions />} />
            <Route path="/qualifications" element={<Qualifications />} />
            <Route path="/home" element={<Home />} />
            <Route path="*" element={<Home />} />
            <Route path="Photovoltaique" element={<Photovoltaique />} />
            <Route path="pmpaa" element={<PompeAA />} />
            <Route path="pmpae" element={<PompeAE />} />
            <Route path="isolation" element={<Isolation />} />
            <Route path="thermo" element={<Thermo />} />
            <Route path="aerovoltaique" element={<Aerovoltaique />} />

            <Route path="poele" element={<Poele />} />
            <Route path="contact" element={<Contact />} />
            <Route path="credit_impot" element={<Credit />} />
            <Route path="subvention" element={<Credit />} />
          </Routes>
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
