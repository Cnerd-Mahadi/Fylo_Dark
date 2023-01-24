import React, { useEffect, useState } from "react";
import { CTA } from "./CTA";
import { Feature } from "./Feature";
import { Footer } from "./Footer";
import { Hero } from "./Hero";
import { Productivity } from "./Productivity";
import { Testimonials } from "./Testimonials";

export const Fylo = () => {
  return (
    <>
      <Hero />
      <Feature />
      <Productivity />
      <Testimonials />
      <CTA />
      <Footer />
    </>
  );
};
