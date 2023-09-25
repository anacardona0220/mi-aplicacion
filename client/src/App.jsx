import { FaAirbnb } from "react-icons/fa";
import { BsFillSearchHeartFill } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineUser } from "react-icons/ai";
import indexPage from "./pages/IndexPage"


import "./App.css";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route index element={indexPage} />
    </Routes>
   
  );
}

export default App;
