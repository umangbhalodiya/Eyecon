import "./App.css";

import Header from "./Components/Routes/Header/header";
import Footer from "./Components/Routes/Footer/footer";
import Home from "./Components/Routes/Home/home";
import Icons from "./Components/Routes/Icons/icons";

function App() {
  return (
    <div className="container">
      <Header />
      <Home />
      <Icons />
      <Footer />
    </div>
  );
}

export default App;
