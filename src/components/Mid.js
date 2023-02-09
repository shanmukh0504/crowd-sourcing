import Carousel from "react-bootstrap/Carousel";
import "./styles.css";

function Mid() {
  return (
    <div
      id="carouselExampleCaptions"
      className="carousel slide"
      data-ride="carousel"
    >
      <Carousel>
        <Carousel.Item interval={3000}>
          <img
            className="d-block w-100"
            src="https://source.unsplash.com/1400x680/?code,python"
            alt="First slide"
          />
          <Carousel.Caption className="d-md-block mleft">
            <h1>Efficient Learning Methods</h1>
            <p style={{ textAlign: "left" }}>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Architecto esse libero reprehenderit! In consectetur sequi
              numquam.
            </p>
            <br />
            <button
              type="button"
              className="btn btn-outline-light round"
              style={{ float: "left" }}
            >
              Let's chat
            </button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={3000}>
          <img
            className="d-block w-100"
            src="https://source.unsplash.com/1400x680/?code,bootstrap"
            alt="Second slide"
          />

          <Carousel.Caption className="d-md-block mleft">
            <h1>Efficient Learning Methods</h1>
            <p style={{ textAlign: "left" }}>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Architecto esse libero reprehenderit! In consectetur sequi
              numquam.
            </p>
            <br />
            <button
              type="button"
              className="btn btn-outline-light round"
              style={{ float: "left" }}
            >
              Let's chat
            </button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={3000}>
          <img
            className="d-block w-100"
            src="https://source.unsplash.com/1400x680/?coffee,laptop"
            alt="Third slide"
          />

          <Carousel.Caption className="d-md-block mleft">
            <h1>Efficient Learning Methods</h1>
            <p style={{ textAlign: "left" }}>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Architecto esse libero reprehenderit! In consectetur sequi
              numquam.
            </p>
            <br />
            <button
              type="button"
              className="btn btn-outline-light round"
              style={{ float: "left" }}
            >
              Let's chat
            </button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={3000}>
          <img
            className="d-block w-100"
            src="https://source.unsplash.com/1400x680/?office,laptop"
            alt="Fourth slide"
          />

          <Carousel.Caption className="d-md-block mleft">
            <h1>Efficient Learning Methods</h1>
            <p style={{ textAlign: "left" }}>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Architecto esse libero reprehenderit! In consectetur sequi
              numquam.
            </p>
            <br />
            <button
              type="button"
              className="btn btn-outline-light round"
              style={{ float: "left" }}
            >
              Let's chat
            </button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={3000}>
          <img
            className="d-block w-100"
            src="https://source.unsplash.com/1400x680/?code"
            alt="Fifth slide"
          />

          <Carousel.Caption className="d-md-block mleft">
            <h1>Efficient Learning Methods</h1>
            <p style={{ textAlign: "left" }}>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Architecto esse libero reprehenderit! In consectetur sequi
              numquam.
            </p>
            <br />
            <button
              type="button"
              className="btn btn-outline-light round"
              style={{ float: "left" }}
            >
              Let's chat
            </button>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Mid;
