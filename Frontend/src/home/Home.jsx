import React from "react";
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import Freebook from "../components/Freebook";
import Contact from "../components/Contact";
import Blog from "../components/Blog";

const Home = () => {
  return (
    <>
      <Navbar />
      <Banner />
      <Freebook />
      <Contact />
      <Blog />
      <Footer />
    </>
  );
};

export default Home;
