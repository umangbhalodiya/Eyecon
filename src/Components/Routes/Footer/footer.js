import "../../Styles/footer.scss";
import Umang from "../../Assets/Images/me.jpg";

const Footer = () => {
  return (
    <div className="footer-container">
      By <img alt="Myimage" src={Umang} />
      <a
        href="https://github.com/umangbhalodiya"
        rel="noreferrer"
        target="_blank"
      >
        Dev_Umang
      </a>
    </div>
  );
};

export default Footer;
