import React from "react";
import "./homePage.css";
import gear from "../assets/gear-removebg-preview.png";
import Navbar from "../components/navbar";
import Footer from "./footer";

const HomePage = () => {
  return (
    <div>
      <Navbar />

      <div className="container">
        <div className="row mi-gear">
          <div className="col-md-4 mt-5">
            <div className="mi-space">
            <h1>
              Mi reality is now <br /> going virtual
            </h1>
            <p>
              Best in class virtual reality gear to make your everyday <br />{" "}
              experience great. Go check it.
            </p>
            <button className="btn btn-success mt-3">Buy Now</button>
            </div>
          </div>
          <div className="col-md-8 mt-5">
            <img src={gear} alt="" width={"100%"} className="gear"/>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
