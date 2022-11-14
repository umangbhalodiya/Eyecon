import "../../Styles/icons.scss";
import Down from "../../Assets/Images/down.png";
import { useState } from "react";

const Icons = () => {
  const [filterName, setFilterName] = useState("");

  function importAll(r) {
    let images = {};
    r.keys().map((item, index) => {
      images[item.replace("./", "")] = r(item);
    });
    return images;
  }

  const images = importAll(require.context("../../Assets/Icons/"));

  function download(source) {
    const fileName = source.split("/").pop();
    var el = document.createElement("a");
    el.setAttribute("href", source);
    el.setAttribute("download", fileName);
    document.body.appendChild(el);
    el.click();
    el.remove();
  }

  return (
    <div className="icons-container">
      <div className="icons-items">
        <div className="result-icons">
          <div className="all-icons">
            <div className="result-div">
              {Object.keys(images).map((key) => (
                <div
                  className="image-item"
                  onClick={() => {
                    download(images[key]);
                  }}
                >
                  <img src={images[key]} alt="" />
                  {images[key].split("/")[3].split("-")[0].split(".")[0]}
                </div>
              ))}
              {/* {console.log(
                "xccc",
                Object.keys(images).map(
                  (key) => images[key].split("/")[3].split("-")[0].split(".")[0]
                )
              )} */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Icons;
