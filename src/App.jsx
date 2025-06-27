import NavBar from "../components/NavBar";
import Section1Dev from "../sections/Section1Dev";
import { BrowserRouter } from "react-router-dom";
import Section2Dev from "../sections/Section2Dev";
import Section3Dev from "../sections/Section3Dev";
import Section4Dev from "../sections/Section4Dev";

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0">
        <NavBar />
        <div className="pt-20">
          <div className="bg-cover bg-no-repeat bg-center sec1Bg">
            <Section1Dev />
          </div>
          <Section2Dev />
          <Section3Dev />
          <Section4Dev />
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App