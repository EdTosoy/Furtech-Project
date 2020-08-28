import React from "react";
import Features from "./Features";
import Collection from "./Collection";
import Qoute from "./Qoute";
import Partners from "./Partners";
import Hero from "./Hero";
export default function Home() {
  return (
    <div className="home">
      <Hero />
      <Features />
      <Collection />
      <Qoute />
      <Partners />
    </div>
  );
}
