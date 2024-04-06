import React from "react";
import "./slide.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
// import logo1 from "../assets/logo 1.jpg";
import car1 from "../assets/toy 1.png";
import car2 from "../assets/toy 1.png"

export default function slide() {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  }; 

  return (
    <div className="column slide">
      <div className="col-11">
        <Carousel  responsive={responsive}>
          <div className="card-1">
            <div className="image">
              <img src={car1} alt="" />
            </div>
            <h1>$36.6</h1>
          </div>
          <div className="card-2">
            <div className=" image">
              <img src={car1} alt="" />
            </div>
            <h1>$36.6</h1>
          </div>
          <div className="card-3">  
          <div className="image">
              <img src={car2} alt="" />
            </div>
            <h1>$36.6</h1>
          </div>
          <div className="card-4">
          <div className="image">
              <img src={car2} alt="" />
            </div>
            <h1>$36.6</h1>

          </div>
          <div className="card-4">
          <div className="image">
              <img src={car2} alt="" />
            </div>
            <h1>$36.6</h1>

          </div>
          <div className="card-4">
          <div className="image">
              <img src={car2} alt="" />
            </div>
            <h1>$36.6</h1>

          </div>
          <div className="card-4">
          <div className="image">
              <img src={car2} alt="" />
            </div>
            <h1>$36.6</h1>

          </div>
        </Carousel>
      </div>
    </div>
  );
}
