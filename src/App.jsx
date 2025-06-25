import NavBar from "../components/NavBar";
import Section1Dev from "../pages/Section1Dev";
import { BrowserRouter } from "react-router-dom";
import Section2Dev from "../pages/Section2Dev";

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
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App