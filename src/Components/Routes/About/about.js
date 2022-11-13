import { useEffect } from "react";

const About = () => {
  useEffect(() => {
    console.log("object");
  }, []);
  return <div>about</div>;
};

export default About;
