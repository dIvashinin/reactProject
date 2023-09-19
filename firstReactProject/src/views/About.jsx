import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function About() {
  return (
    <div className="about">
      <h1>FAKE.STORE about</h1>

      <Navbar />

      <section>here you can find some info about the FAKE.STORE</section>
      <img className="fake" src="/pics/fake.jpeg" alt="" />
      {/* <Footer /> */}

    </div>
  );
}

export default About;
