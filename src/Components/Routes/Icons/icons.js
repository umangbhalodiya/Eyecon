import "../../Styles/icons.scss";
import Search from "../../Assets/Images/srch.svg";

const Icons = () => {
  function importAll(r) {
    let images = {};
    r.keys().map((item, index) => {
      images[item.replace("./", "")] = r(item);
    });
    return images;
  }

  const images = importAll(
    require.context("../../Assets/Icons/")
    //  require.context('./images', false, /\.(png|jpe?g|svg)$/);
  );

  console.log("image", images);
  return (
    <div className="icons-container">
      <div className="icons-items">
        <div className="input-search">
          <img src={Search} />
          <input placeholder="Search icons" />
        </div>
        <div className="result-icons">
          <div className="all-icons">
            <div className="result-div">
              {Object.keys(images).map((key) => (
                <div className="image-item">
                  <img src={images[key]} alt="" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Icons;
