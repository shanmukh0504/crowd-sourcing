import React from "react";
import "./footer.css";
const Footer = () => {
  return (
    <>
      <div className="container my-4">
        <div className="row mb-2">
          <div className="col-md-6">
            <div className="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
              <div className="col p-4 d-flex flex-column position-static">
                <strong className="d-inline-block mb-2 text-primary">
                  World
                </strong>
                <h3 className="mb-0">Global Conferences</h3>
                <div className="mb-1 text-muted">Nov 12</div>
                <p className="card-text mb-auto">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content.
                </p>
                <a href="#" className="stretched-link">
                  Continue reading
                </a>
              </div>
              <div className="col-auto d-none d-lg-block">
                <img
                  className="bd-placeholder-img"
                  width="200"
                  height="250"
                  src="https://media.istockphoto.com/id/1335295270/photo/global-connection.jpg?b=1&s=170667a&w=0&k=20&c=mhQMmIK-LgsBIH8flhV9duAntD0wssB3SAvyWuGPTMM="
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
              <div className="col p-4 d-flex flex-column position-static">
                <strong className="d-inline-block mb-2 text-success">
                  Design
                </strong>
                <h3 className="mb-0">Learn Designing</h3>
                <div className="mb-1 text-muted">Nov 11</div>
                <p className="mb-auto">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content.
                </p>
                <a href="#" className="stretched-link">
                  Continue reading
                </a>
              </div>
              <div className="col-auto d-none d-lg-block">
                <img
                  className="bd-placeholder-img"
                  width="200"
                  height="250"
                  src="https://imgs.search.brave.com/EL9QSjpYYTFfOTls0ts4o5WIopU4IZEmSMu4uDuKE0w/rs:fit:500:700:1/g:ce/aHR0cHM6Ly9tZWRp/YS5naXBoeS5jb20v/bWVkaWEvem1ubHN4/cVFFUTA2SS9naXBo/eS5naWY.gif"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
        <div className="row mb-2">
          <div className="col-md-6">
            <div className="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
              <div className="col p-4 d-flex flex-column position-static">
                <strong className="d-inline-block mb-2 text-danger">
                  FrontEnd
                </strong>
                <h3 className="mb-0">Bootstrap Templates</h3>
                <div className="mb-1 text-muted">Nov 12</div>
                <p className="card-text mb-auto">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content.
                </p>
                <a href="#" className="stretched-link">
                  Continue reading
                </a>
              </div>
              <div className="col-auto d-none d-lg-block">
                <img
                  className="bd-placeholder-img"
                  width="200"
                  height="250"
                  src="https://tse1.mm.bing.net/th?id=OIP.mX64NOOqOrUTF0R5AbeQLQHaF7&pid=Api&rs=1&c=1&qlt=95&w=132&h=105"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
              <div className="col p-4 d-flex flex-column position-static">
                <strong className="d-inline-block mb-2 text-warning">
                  Python
                </strong>
                <h3 className="mb-0">Learn Python</h3>
                <div className="mb-1 text-muted">Nov 11</div>
                <p className="mb-auto">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content.
                </p>
                <a href="#" className="stretched-link">
                  Continue reading
                </a>
              </div>
              <div className="col-auto d-none d-lg-block">
                <img
                  className="bd-placeholder-img"
                  width="200"
                  height="250"
                  src="https://tse3.mm.bing.net/th?id=OIP.lQ_qexGXf0AIOmcyNQoEsQHaE8&pid=Api&P=0"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer>
        <div className="flex container">
          <div className="footer-about">
            <h5>About Stated</h5>
            <p style={{ color: "#777" }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
              facere laudantium magnam voluptatum autem. Amet aliquid nesciunt
              veritatis aliquam.
            </p>
          </div>

          <div className="footer-quick-links">
            <h5>Quick Links</h5>
            <ul>
              <li>
                <a href="#">About Us</a>
              </li>
              <li>
                <a href="#">Services</a>
              </li>
              <li>
                <a href="#">Testimonials</a>
              </li>
              <li>
                <a href="#">Contact Us</a>
              </li>
            </ul>
          </div>

          <div className="footer-subscribe">
            <h5>Subscribe to our Newsletter</h5>
            <div id="subscribe-container">
              <input type="text" placeholder="Enter Email" />
              <button className="right-rounded">Send</button>
            </div>

            <h5 className="follow-us"> Follow Us</h5>
            <ul>
              <li>
                <a href="#">
                  <span className="fab fa-facebook-f"> Meta</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <span className="fab fa-twitter"> Twitter</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <span className="fab fa-instagram"> Instagram</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <span className="fab fa-linkedin-in"> LinkedIn</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <small>
          Copyright &copy; 2019 All rights reserved | This template is made with{" "}
          <span className="fa fa-heart"></span> by <a href="/">KMIT</a>
        </small>
      </footer>
    </>
  );
};
export default Footer;
