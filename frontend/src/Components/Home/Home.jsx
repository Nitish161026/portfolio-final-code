import React from "react";
import "./Home.css";
import nky from "../../assets/profile.png";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="home-container">
        <div className="home-left">
          <h1>Welcome to My Portfolio</h1>
          <p>
            I'm a passionate developer building web applications with modern
            tech stacks. Apart from these tech domain I am open to work in non-tech domains. You can explore more to see .
          </p>
          <Link to="/Explore" className="explore-btn">Explore More</Link>
        </div>

        <div className="home-right">
          <img src={nky} alt="Profile 1" className="home-image img1" />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
