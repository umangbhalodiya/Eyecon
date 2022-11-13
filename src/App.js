import "./App.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./Components/Routes/router";
import Header from "./Components/Routes/Header/header";
import Footer from "./Components/Routes/Footer/footer";

function App() {
  return (
    <div className="container">
      <Header />
      <RouterProvider router={router} />
      <Footer />
    </div>
  );
}

export default App;
