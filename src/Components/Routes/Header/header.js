import { useEffect } from "react";
import "../../Styles/header.scss";

const Header = () => {
  useEffect(() => {
    console.log("Header");
  }, []);

  return (
    <div>
      <div className="header-container">
        <div className="header-dection">
          <div className="header-contents">sdsdl</div>
        </div>
      </div>
    </div>
  );
};

export default Header;
