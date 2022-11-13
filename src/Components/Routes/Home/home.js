import { useEffect } from "react";
import "../../Styles/home.scss";
import Puzz from "../../Assets/Images/tv.gif";
const Home = () => {
  useEffect(() => {
    console.log("object");
  }, []);
  return (
    <div className="home-container">
      <div className="home-grid">
        <div className="home-content">
          <div>
            <h1>1400+ </h1>
            <h2> Premium icons pack</h2>
            <div className="button-download">
              <button>
                <a href="https://github.com/umangbhalodiya" target="_blank">
                  Download free
                </a>
              </button>
            </div>
          </div>
        </div>
        <div className="home-content-right">
          <img src={Puzz} />
        </div>
      </div>
    </div>
  );
};

export default Home;
