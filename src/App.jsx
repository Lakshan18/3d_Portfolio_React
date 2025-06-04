import NavBar from "../components/NavBar";
import Section1Dev from "../components/Section1Dev";
import { BrowserRouter } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 min-h-screen">
        <div className="bg-cover bg-no-repeat bg-center sec1Bg">
          <NavBar/>
          <Section1Dev />
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App