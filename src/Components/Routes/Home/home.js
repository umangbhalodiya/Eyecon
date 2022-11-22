import "../../Styles/home.scss";
import Puzz from "../../Assets/Images/tv.gif";
const Home = () => {
  return (
    <div className="home-container">
      <div className="home-grid">
        <div className="home-content">
          <div>
            <h1>1400+ </h1>
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
          <img alt="giffyimage" src={Puzz} />
        </div>
      </div>
    </div>
  );
};

export default Home;
