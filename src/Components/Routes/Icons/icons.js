import { useState } from "react";
import "../../Styles/icons.scss";
import Bootstrap from "../Bootstrap/Bootstrap";
import Doodle from "../Doodle/Doodle";
import Lucide from "../Lucide/Lucide";
import Classic from "../Classic/Classic";

const Icons = () => {
  const [iconsType, setIconsType] = useState("classic");

  return (
    <div className="icons-container">
      <div className="icons-items">
        <div className="icon-types">
          <div className={iconsType === "classic" ? "icon-type-item-active" : "icon-type-item"} onClick={() => { setIconsType("classic") }}>Classic</div>
          <div className={iconsType === "bootstrap" ? "icon-type-item-active" : "icon-type-item"} onClick={() => { setIconsType("bootstrap") }}>Bootstrap</div>
          <div className={iconsType === "doodle" ? "icon-type-item-active" : "icon-type-item"} onClick={() => { setIconsType("doodle") }}>Doodle</div>
          <div className={iconsType === "lucide" ? "icon-type-item-active" : "icon-type-item"} onClick={() => { setIconsType("lucide") }}>Lucide</div>
        </div>
        <div className="result-icons">
          <div className="all-icons">
            {iconsType === "classic" && <Classic />}
            {iconsType === "bootstrap" && <Bootstrap />}
            {iconsType === "doodle" && <Doodle />}
            {iconsType === "Lucide" && <Lucide />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Icons;
