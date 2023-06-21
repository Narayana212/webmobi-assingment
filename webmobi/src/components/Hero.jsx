import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { main } from "../assets";

function Hero() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Set the duration of the animation (in milliseconds)
      once: true, // Animation only occurs once while scrolling
    });
  }, []);

  return (
    <div className="hero-container p-5">
      <h1 className="mt-3 hero-heading" data-aos="fade-up">
        Welcome to <span>Incubyte</span>
      </h1>
      <p className="hero-para" data-aos="fade-up">
        Building bridges to success in the tech ecosystem.
      </p>
      <img src={main} alt="hello" className="hero-img" data-aos="fade-up" />
    </div>
  );
}

export default Hero;
