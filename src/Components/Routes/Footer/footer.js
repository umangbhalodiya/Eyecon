import { useEffect } from "react";

const Footer = () => {
  useEffect(() => {
    console.log("object");
  }, []);
  return <div>Footer</div>;
};

export default Footer;
