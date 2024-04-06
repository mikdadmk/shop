import React, { useState } from "react";
import "./home.css";
import kids from "../assets/kids.jpeg";
import kids2 from "../assets/kids2.jpeg";

export default function Home() {
  let [getstart, setgetstart] = useState("purchase");

  function handle() {
    setgetstart((event) => {
      if (event === "Purchase") {
        return "Thank you";
      } else {
        return "Purchase";
      }
    });
  }
  return (
    <div className="column">
        <div className="part-one col-11  ">
          <div className="part-two-1 col-6  ">
            <h1>
              AMAZING TOYS&
              <br />
              STORES
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur,
              <br /> adipisicing elit. Numquam, facilis <br />
              quidem dolorum <br />
            </p>
            <button onClick={handle} className={`button-home`}>
              {getstart}
            </button>
          </div>

          <div className="part-two-2 col-6  ">
            <div className="part-two-2-1">
              <img src={kids} alt="" />
            </div>
            <div className="part-two-2-1">
              <img src={kids2} alt="" />
            </div>
          </div>
          <div className="box-home">
            <h1>
              Free dellvery! <br /> <span>Enjoy</span>
            </h1>
          </div>
        </div>
    </div>
  );
}
