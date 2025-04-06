import React from 'react';
import './App.css'; // Import your CSS file

const App = () => {
  return (
    <div>
      <header>
        <nav>
          <a href="index.html" className="logo">Musafir</a>
          <div className="side">
            <div className="home">
              <i className="fa-solid fa-house" style={{ color: 'wheat' }}></i>
              <a href="index.html">Home</a>
            </div>
            <a className="about" href="about.html">About</a>
            <a className="about" href="contact.html">Contact</a>
            <button className="signIn" onClick={() => window.location.href = 'login.html'}>Sign In</button>
          </div>
        </nav>
      </header>
      <div className="img_1">
        <div className="cover"></div>
        <div className="box_1">
          <h1>Explore the World</h1>
          <h5>Embark on a journey where every destination tells a story. Let the world be your guide</h5>
          <div className="search">
            <div className="glass">
              <i className="fa-solid fa-magnifying-glass" style={{ color: 'wheat', fontWeight: 'bolder' }}></i>
            </div>
            <input placeholder="Exploring Something?" />
          </div>
          <button className="start" onClick={() => window.location.href = 'trips.html'}>
            <div className="start_text">Explore</div>
            <div className="emoji">✈︎</div>
          </button>
        </div>
      </div>
      <div className="divider"></div>
      <main>
        <div className="cards">
          <div className="images_1">
            <img className="img_2" src="pietro-de-grandi-Q5dMq3cKqec-unsplash.jpg" alt="Scenic landscape" />
          </div>
          <div className="images_2">
            <img className="img_3" src="georgy-trofimov-EqC6w0ks5mg-unsplash.jpg" alt="Beautiful city view" />
          </div>
        </div>
        <div className="txt" id="txt_0">
          <h1>Making every trip memorable.</h1>
          <h5>Travel far, travel wide, and discover the extraordinary in every corner of the globe</h5>
        </div>
      </main>
      <div className="divider"></div>
      <main className="main_2">
        <div className="txt" id="txt_1">
          <h1>Make your next event extraordinary.</h1>
          <h5>With a passion for perfection, we bring your vision to life, creating events that are truly memorable.</h5>
        </div>
        <div className="cards_2">
          <div className="images_3">
            <img className="img_4" src="fahim-muntashir-14JOIxmsOqA-unsplash.jpg" alt="Event setup" />
          </div>
          <div className="images_4">
            <img className="img_5" src="antenna-ZDN-G1xBWHY-unsplash.jpg" alt="Conference setup" />
          </div>
        </div>
      </main>
      <div className="divider"></div>
      <main className="main_3">
        <div className="mountain_img">
          <img src="vecteezy_simplicity-mountain-freehand-drawing_13743555.png" alt="Mountain illustration" />
        </div>
      </main>
    </div>
  );
};

export default App;
