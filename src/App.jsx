import Hero from "../src/Components/Hero/Hero";
import "./App.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Navbar from "../src/Components/Navbar/Navbar";
import About from "./Components/About/About";
import Achievement from "./Components/Achievements/Achievement";
import Danbortfc from "./Components/Gallery/Danbortfc";
import U172018WAFU from "./Components/Gallery/U172018WAFU";
import Gallery from "./Components/Gallery/Gallery";
import U20AFCON2019 from "./Components/Gallery/U20AFCON2019";
import U20WAFU2020 from "./Components/Gallery/U20WAFU2020";
import U20AFCON2021 from "./Components/Gallery/U20AFCON2021";
import U23AFCON2023 from "./Components/Gallery/U23AFCON2023";
import HammarbyTFF from "./Components/Gallery/HammarbyTFF";
import HammarbyFootboll from "./Components/Gallery/HammarbyFootboll";
import Contact from "./Components/Contact/Contact";

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/About" element={<About />} />
          <Route path="/Achievement" element={<Achievement />}/>
          <Route path="/Contact" element={<Contact />}/>

            <Route exact path="/gallery" element={<Gallery/>}/>
            <Route path="/gallery/Danbort" element={<Danbortfc />} />
            <Route path="/gallery/U172018WAFU" element={<U172018WAFU />} />
            <Route path="/gallery/U20AFCON2019" element={<U20AFCON2019 />} />
            <Route path="/gallery/U20WAFU2020" element={<U20WAFU2020 />} />
            <Route path="/gallery/U20AFCON2021" element={<U20AFCON2021 />} />
            <Route path="/gallery/U23AFCON2023" element={<U23AFCON2023 />} />
            <Route path="/gallery/HammarbyTFF" element={<HammarbyTFF />} />
            <Route path="/gallery/HammarbyFootboll" element={<HammarbyFootboll />} />
         
        </Routes>
      </Router>
    </div>
  );
}

export default App;
