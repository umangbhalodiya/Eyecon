import "../../Styles/home.scss";
import LineOne from "../Marqs/LineOne";
import LineTwo from "../Marqs/LineTwo";
import LineThree from "../Marqs/LineThree";
import LineFour from "../Marqs/LineFour";
const Home = () => {
  return (
    <div className="home-container">
      <div className="home-grid">
        <div className="home-content">
          <div>
            <h1> 24000+ </h1>
            <h2> Premium icons pack</h2>
            <div className="button-download">
              <button>
                <a
                  href="https://github.com/umangbhalodiya"
                  rel="noreferrer"
                  target="_blank"
                >
                  Download free
                </a>
              </button>
            </div>
          </div>
        </div>
        <div className="home-content-right">
          <div className="home-content-circle">
            <div className="marq-sections">
              <div className="marq-item">
                <marquee>
                  <LineOne />
                </marquee>
                <marquee>
                  <LineTwo />
                </marquee>
                <marquee>
                  <LineThree />
                </marquee>
                <marquee>
                  <LineFour />
                </marquee>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
