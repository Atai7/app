import "./App.css";
import syringe from "./image/syringe.png";
import doctor from "./image/doctor.png";
import woman from "./image/woman.png";

function App() {
  return (
    <div className="App">
      <header className="header">
        <div className="container">
          <div className="nav-title">
            <h2 className="main-title">Check out our latest article</h2>
          </div>
          <div className="news-cards">
            <div className="card-syringe">
              <img className="card-image" src={syringe} alt="" />
              <div className="info-card">
                <h3 className="title-card">
                  Disease detection, check up in the laboratory
                </h3>
                <p className="discription-card">
                  In this case, the role of the health laboratory is very
                  important to do a disease detection...
                </p>
                <a href="#" className="link-button">
                  Read more ⇾
                </a>
              </div>
            </div>
            <div className="card-syringe">
              <img className="card-image" src={doctor} alt="" />
              <div className="info-card">
                <h3 className="title-card">
                  Herbal medicines that are safe for consumption
                </h3>
                <p className="discription-card">
                  Herbal medicine is very widely used at this time because of
                  its very good for your health...
                </p>
                <a href="#" className="link-button">
                  Read more ⇾
                </a>
              </div>
            </div>
            <div className="card-syringe">
              <img className="card-image" src={woman} alt="" />
              <div className="info-card">
                <h3 className="title-card">
                  Natural care for healthy facial skin
                </h3>
                <p className="discription-card">
                  A healthy lifestyle should start from now and also for your
                  skin health. There are some...
                </p>
                <a href="#" className="link-button">
                  Read more ⇾
                </a>
              </div>
            </div>
          </div>
          <a href="#" className="btn-view-all">
            View all
          </a>
        </div>
      </header>
    </div>
  );
}

export default App;
