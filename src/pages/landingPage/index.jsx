import React from "react";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Tab from "./components/Tab";
import Footer from "../../components/Footer";

function index() {
  return (
    <div>
      <Hero />
      <div className="bg-white p-6">
        <div className="bg-white mt-[-9rem] rounded-2xl shadow-xl p-10">
          <Features />
          <Tab />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default index;
