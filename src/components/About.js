import React from "react";
import Header from "./Header";
import "./About.css";
const About = () => {
  return (
    <>
      <Header />
      <div className="about-section">
        <h1>About Us</h1>
        <p>
          Project school is a platform where students can explore some real time
          projects and work on it.
        </p>
      </div>
      <h2 style={{ textAlign: "center" }}>Our Team</h2>
      <div className="row">
        <div className="column">
          <div className="ard">
            <img
              src="https://imgs.search.brave.com/sU7Ia_RQiNwb9hIoWxjSV2fF4utWpg20a6MhzmgU2mU/rs:fit:466:700:1/g:ce/aHR0cHM6Ly9jZG4u/YWNpZGNvdy5jb20v/cGljcy8yMDE4MDYy/OC9jdXRlX2dpcmxz/XzEyLmpwZw"
              alt="Jane"
              className="j"
              style={{ width: "100%" }}
            />
            <div className="container">
              <h2>Pooja Godse</h2>
              <p className="title">Mentor</p>
              <p>Lorem ipsum dolor sit amet.</p>
              <p>Qui, laboriosam. Hic, reprehenderit cumque.</p>
              <p>pooja@kmit.com</p>
              <p>
                <button className="tt" onclick="window.open('Contact.html');">
                  Contact
                </button>
              </p>
            </div>
          </div>
        </div>

        <div className="column">
          <div className="ard">
            <img
              src="https://imgs.search.brave.com/kz1RU5cGreYHiEzRIaENegYFNdfIvniDaXiN6TsAWjQ/rs:fit:315:225:1/g:ce/aHR0cHM6Ly90c2Ux/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC52/RzlqdktuOXdLS1VC/SWZJU3JBY1NBSGFM/SiZwaWQ9QXBp"
              alt="Mike"
              className="j"
              style={{ width: "100%" }}
            />
            <div className="container">
              <h2>Bilahari</h2>
              <p className="title">Mentor</p>
              <p>Lorem ipsum dolor sit amet.</p>
              <p>Suscipit optio aliquid adipisci ea!</p>
              <p>Bilahari@kmit.com</p>
              <p>
                <button className="tt" onclick="window.open('Contact.html');">
                  Contact
                </button>
              </p>
            </div>
          </div>
        </div>

        <div className="column">
          <div className="ard">
            <img
              src="https://imgs.search.brave.com/vaPv1MgHEDor1crht09U9JV6MAEXaZQtMxX63kzixa8/rs:fit:367:225:1/g:ce/aHR0cHM6Ly90c2Uy/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5x/N1J6WHFnRmRKTHZE/cUtENFJZcWRRSGFK/ayZwaWQ9QXBp"
              alt="John"
              className="j"
              style={{ width: "100%" }}
            />
            <div className="container">
              <h2>Pavan</h2>
              <p className="title">Mentor</p>
              <p>Lorem ipsum dolor sit amet.</p>
              <p>Beatae ad sequi id asperiores?</p>
              <p>pavan@kmit.com</p>
              <p>
                <button className="tt" onclick="window.open('Contact.html');">
                  Contact
                </button>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default About;
