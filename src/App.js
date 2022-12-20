import { useState } from "react";
import "./App.css";
import Header from "./Components/Routes/Header/header";
import Footer from "./Components/Routes/Footer/footer";
import Home from "./Components/Routes/Home/home";
import Icons from "./Components/Routes/Icons/icons";
import Bootstrapicons from "./Components/Routes/Icons/bootstrapicons";

export default function App() {
  const [iconsType, setIconsType] = useState("mui");
  return (
    <div className="container">
      <Header />
      <Home />
      <Icons />
      <Footer />
    </div>
  );
}


