import React from "react";
import "../../style/style.css";
import HeroSection from "./HeroSection";
import AboutSnippet from "./AboutSnippet";
import NewEvents from "./NewEvents";
import NewsUpdates from "./NewsUpdates";
import Footer from "./Footer";
const Home = () => {
  return (
    <div className="home w-100" id="home">
      <HeroSection />
      <AboutSnippet />
      <NewEvents />
      <NewsUpdates />
      <Footer />
    </div>
  );
}

export default Home;
