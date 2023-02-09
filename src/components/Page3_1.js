import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
export default function Page3_1() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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
              <a className="nav-link" style={{ color: "black" }} href="/About">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" style={{ color: "black" }} href="/About">
                Our Teachers
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" style={{ color: "black" }} href="/">
                Generate Paper
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
              <a
                className="nav-link"
                style={{ color: "black" }}
                href="/Contact"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
        <button
          type="button"
          className="btn btn-danger button"
          onClick={handleShow}
          href="/"
        >
          Logout
        </button>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header>
            <Modal.Title>Are you sure?</Modal.Title>
            <button type="button" className="close" onClick={handleClose}>
              <span>×</span>
              <span className="sr-only">Close alert</span>
            </button>
          </Modal.Header>
          <Modal.Body>You are about to Logout</Modal.Body>
          <Modal.Footer>
            <Button variant="primary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="danger" onClick={handleClose}>
              Logout
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </nav>
  );
}
