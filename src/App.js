import "./App.css";
import Header from "./Components/Routes/Header/header";
import Footer from "./Components/Routes/Footer/footer";
import Home from "./Components/Routes/Home/home";
import Icons from "./Components/Routes/Icons/icons";
import Bootstrapicons from "./Components/Routes/Icons/bootstrapicons";

function App() {
  return (
    <div className="container">
      <Header />
      <Home />
      <Icons />
      <Bootstrapicons />
      <Footer />
    </div>
  );
}

export default App;
