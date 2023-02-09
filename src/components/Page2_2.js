import React from "react";
import "./Page2.css";
export default function Page2_2() {
  return (
    <>
      <div className="x">
        <div
          className="dropdown"
          style={{ padding: "50px 50px 50px 0px", marginLeft: "50px" }}
        >
          <div className="btn-group">
            <select className="custom-select b">
              <option
                defaultValue
                hidden
                style={{ backgroundColor: "white", Color: "black" }}
              >
                -- Subject --
              </option>
              <option
                value="1"
                style={{ backgroundColor: "white", Color: "black" }}
              >
                Subject 1
              </option>
              <option
                value="2"
                style={{ backgroundColor: "white", Color: "black" }}
              >
                Subject 2
              </option>
              <option
                value="3"
                style={{ backgroundColor: "white", Color: "black" }}
              >
                Subject 3
              </option>
            </select>
          </div>
          <input
            className="form-control"
            style={{
              marginRight: "100px",
              float: "right",
              width: "180px",
              height: "45px",
              textAlign: "center"
            }}
            type="text"
            placeholder="#Keyword"
          />
          <select className="custom-select b">
            <option
              defaultValue
              hidden
              style={{ backgroundColor: "white", Color: "black" }}
            >
              -- Difficulty --
            </option>
            <option
              value="1"
              style={{ backgroundColor: "white", Color: "black" }}
            >
              Easy
            </option>
            <option
              value="2"
              style={{ backgroundColor: "white", Color: "black" }}
            >
              Moderate
            </option>
            <option
              value="3"
              style={{ backgroundColor: "white", Color: "black" }}
            >
              Hard
            </option>
          </select>
        </div>
      </div>
    </>
  );
}
