import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import ReactDOM from "react-dom/client";
import Page2 from "./Page2";
import Page3 from "./Page3";
import "./styles.css";
function Goal1() {
  ReactDOM.createRoot(document.getElementById("root")).render(
    <div>
      <Page3 />
    </div>
  );
}

function Goal2() {
  ReactDOM.createRoot(document.getElementById("root")).render(
    <div style={{ backgroundColor: "linear-gradient(120deg,#201f1f,#ffffff)" }}>
      <Page2 />
    </div>
  );
}

function Goal(props) {
  const isGoal = props.isGoal;
  if (isGoal) {
    return <Goal1 />;
  }
  return <Goal2 />;
}

export default function Header() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  let [usname, setUsname] = useState("");
  let [pswd, setPaswd] = useState("");
  const People = [
    {
      username: "Shanmukh",
      password: "shanmukh@1"
    },
    {
      username: "Vishal",
      password: "vishal@2"
    },
    {
      username: "Harini",
      password: "harini@3"
    },
    {
      username: "Vinay",
      password: "vinay@4"
    },
    {
      username: "Rajesh",
      password: "rajesh@5"
    }
  ];
  let flag = 0;
  setPaswd = (event) => {
    pswd = event.target.value;
  };
  setUsname = (event) => {
    usname = event.target.value;
  };
  let onsubmitcheck = () => {
    if (usname === People[0].username && pswd === People[0].password) {
      console.log(usname + " is successfully logged in!!!");
      alert(usname + " Logged in as expert!!");
      flag = 1;
      ReactDOM.createRoot(document.getElementById("root")).render(
        <Goal isGoal={true} />
      );
    } else {
      for (var i = 1; i < People.length; i++) {
        if (usname === People[i].username && pswd === People[i].password) {
          console.log(usname + " is successfully logged in!!!");
          alert(usname + " Logged in successfully!!!");
          flag = 1;
          ReactDOM.createRoot(document.getElementById("root")).render(
            <Goal isGoal={false} />
          );
          break;
        }
      }
    }
    if (flag === 0) {
      console.log("Incorrect username or password");
      alert("Incorrect login credentials!!!");
      console.log(usname, pswd);
    }
  };
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container">
        <a className="navbar-brand" href="/">
          <b>Known</b>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarCollapse"
          aria-controls="navbarCollapse"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <ul className="nav navbar-nav navbar-center">
            <li className="nav-item">
              <a className="nav-link" style={{ color: "black" }} href="/">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" style={{ color: "black" }} href="About">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" style={{ color: "black" }} href="About">
                Our Teachers
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" style={{ color: "black" }} href="/">
                Courses
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" style={{ color: "black" }} href="/">
                Review
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" style={{ color: "black" }} href="Contact">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <Button
          type="button"
          className="btn btn-primary round"
          onClick={handleShow}
          style={{ marginRight: "10px" }}
        >
          Login
        </Button>
        <img
          alt=""
          src="https://imgs.search.brave.com/PIanTkX858wVsrvZdLltUon-EGDEzYigWmLh8p0sd0k/rs:fit:416:416:1/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vdmVjdG9y/cy9waG9uZS1pY29u/LWNhbGwtYXBwbGlj/YXRpb24tc3ltYm9s/LWdyZWVuLXJvdW5k/LWJ1dHRvbi1mbGF0/LWludGVyZmFjZS12/ZWN0b3ItaWQxMjUw/OTExMDI1P2s9NiZt/PTEyNTA5MTEwMjUm/cz0xNzA2NjdhJnc9/MCZoPWZiNXRfOFQz/ckhhS3liYVhzZE5h/a29HZHh1enBPOU9E/VXo1T3NVUGdzTGs9"
          className="some"
          style={{ marginRight: "10px" }}
        />
        <p className="some1">+65 2244 1100</p>

        <Modal show={show} onHide={handleClose}>
          <Modal.Header>
            <Modal.Title>LOGIN</Modal.Title>
            <button type="button" className="close" onClick={handleClose}>
              <span>×</span>
              <span className="sr-only">Close alert</span>
            </button>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>
                  <b>Username*</b>
                </Form.Label>
                <Form.Control
                  type="username"
                  placeholder="Enter Username"
                  autoFocus
                  required
                  onChange={setUsname}
                  controlid="usname"
                />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput2"
              >
                <Form.Label>
                  <b>Password*</b>
                </Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Enter Password"
                  autoFocus
                  pattern="(?=.*\d)(?=.*[\W_]).{7,}"
                  title="Enter minimum 7 characters , have atleast one special character and a digit"
                  required
                  onChange={setPaswd}
                  controlid="pswd"
                />
              </Form.Group>
              <label>
                <input type="checkbox" style={{ marginRight: "10px" }} />
                Remember Me
              </label>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button
              type="button"
              className="btn btn-primary round"
              onClick={() => {
                onsubmitcheck();
                handleClose();
              }}
            >
              Login
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </nav>
  );
}
