import "./App.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./Components/Routes/router";

function App() {
  return <RouterProvider router={router} />;
}

export default App;
