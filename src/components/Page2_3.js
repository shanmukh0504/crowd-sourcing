import React from "react";
import "./Page2.css";
export default function Page2_3() {
  return (
    <>
      <div className="x">
        <h5 style={{ marginLeft: "51px", paddingBottom: "1px" }}>Question</h5>
        <form>
          <div className="form-group c">
            <textarea
              className="form-control"
              placeholder="Type your question here..."
              id="exampleFormControlTextarea1"
              rows="6"
            ></textarea>
          </div>
          <input
            className="form-control c"
            style={{
              width: "320px",
              float: "right",
              marginBottom: "14px",
              marginRight: "426px"
            }}
            type="text"
            placeholder="Answer"
          />
          <input
            className="form-control c"
            style={{ width: "320px", marginBottom: "14px" }}
            type="text"
            placeholder="Option 1"
          />
          <input
            className="form-control c"
            style={{ width: "320px", marginBottom: "14px" }}
            type="text"
            placeholder="Option 2"
          />
          <input
            className="form-control c"
            style={{ width: "320px", marginBottom: "14px" }}
            type="text"
            placeholder="Option 3"
          />
          <input
            className="form-control c"
            style={{ width: "320px", marginBottom: "14px" }}
            type="text"
            placeholder="Option 4"
          />
          <div className="btn-group">
            <button type="button" className="btn n btn-outline-primary">
              <img alt="" src="./add-button.png" style={{ width: "35px" }} />
              New
            </button>
            <button type="button" className="btn s btn-outline-success">
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
