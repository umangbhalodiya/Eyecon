import { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    console.log("object");
  }, []);
  return <div>Home</div>;
};

export default Home;
