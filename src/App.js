import './App.css';
import syringe from './image/syringe.png'

function App() {
  return (
    <div className="App">
      <header className="header">
        <div className="container">

            <div className="nav-title">
              <h2 className="main-title">
                Check out our latest article
              </h2>
            </div>
            <div className="news-cards">
              <div className="card-syringe">
                <img className="card-image" src={syringe} alt="" />
                <div className="info-card">
                <h3 className="title-card">Disease detection, check 
                    up in the laboratory</h3>
                  <p className="discription-card">In this case, the role of the health laboratory is very important to do
                  a disease detection...</p>
                  <a href="#" className="link-button">Read more ⇾</a>
                  </div>
              </div>
              <div className="card-syringe">
                <img className="card-image" src={syringe} alt="" />
                <div className="info-card">
                <h3 className="title-card">Disease detection, check 
                    up in the laboratory</h3>
                  <p className="discription-card">In this case, the role of the health laboratory is very important to do
                  a disease detection...</p>
                  <a href="#" className="link-button">Read more ⇾</a>
                  </div>
              </div>
              <div className="card-syringe">
                <img className="card-image" src={syringe} alt="" />
                <div className="info-card">
                <h3 className="title-card">Disease detection, check 
                    up in the laboratory</h3>
                  <p className="discription-card">In this case, the role of the health laboratory is very important to do
                  a disease detection...</p>
                  <a href="#" className="link-button">Read more ⇾</a>
                  </div>
              </div>
            </div>
        </div>
      </header>
    </div>
  );
}

export default App;
