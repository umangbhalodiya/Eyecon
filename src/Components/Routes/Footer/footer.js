import { useEffect } from "react";
import "../../Styles/footer.scss";
import Umang from "../../Assets/Images/me.jpg";

const Footer = () => {
  useEffect(() => {
    console.log("object");
  }, []);
  return (
    <div className="footer-container">
      By <img src={Umang} />
      <a
        href="https://github.com/umangbhalodiya"
        rel="noreferrer"
        target="_blank"
      >
        Dev_Uvi
      </a>
    </div>
  );
};

export default Footer;
