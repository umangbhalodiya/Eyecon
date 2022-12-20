import { useState } from "react";
import "../../Styles/icons.scss";
import Bootstrap from "../Bootstrap/Bootstrap";
import Doodle from "../Doodle/Doodle";
import Normal from "../Normal/Normal";

const Icons = () => {
  const [iconsType, setIconsType] = useState("normal");

  return (
    <div className="icons-container">
      <div className="icons-items">
        <div className="icon-types">
          <div className={iconsType === "normal" ? "icon-type-item-active" : "icon-type-item"} onClick={() => { setIconsType("normal") }}>Normal</div>
          <div className={iconsType === "bootstrap" ? "icon-type-item-active" : "icon-type-item"} onClick={() => { setIconsType("bootstrap") }}>Bootstrap</div>
          <div className={iconsType === "doodle" ? "icon-type-item-active" : "icon-type-item"} onClick={() => { setIconsType("doodle") }}>Doodle</div>
        </div>
        <div className="result-icons">
          <div className="all-icons">
            {iconsType === "normal" && <Normal />}
            {iconsType === "bootstrap" && <Bootstrap />}
            {iconsType === "doodle" && <Doodle />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Icons;
