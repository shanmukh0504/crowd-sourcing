import React from "react";
import Header from "./Header";
import "./Contact.css";
const Contact = () => {
  return (
    <div>
      <Header />
      <center>
        <h3>Contact Us</h3>
      </center>
      <div className="cont">
        <form action="/action_page.php">
          <label for="name">Name*:</label>
          <input type="text" id="name" name="name" placeholder="Your name.." />

          <label for="phno">Phone Number:</label>
          <input
            type="text"
            id="phno"
            name="phno"
            placeholder="Your phone number.."
          />

          <label for="mail">Email adress*:</label>
          <input
            type="text"
            id="phno"
            name="phno"
            placeholder="Your phone number.."
          />

          <label for="subject">About your project:</label>
          <textarea
            id="subject"
            name="subject"
            placeholder="Write about your project.."
            style={{ height: "200px" }}
          ></textarea>

          <p>*- required fields</p>

          <center>
            <input type="submit" value="Submit" />
          </center>
        </form>
      </div>
    </div>
  );
};
export default Contact;
