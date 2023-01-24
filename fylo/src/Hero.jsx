import React, { useEffect, useState } from "react";
import logo from "./images/logo-light-mode.svg";
import logo_dark from "./images/logo-dark-mode.svg";
import hero_light from "./images/illustration-intro.png";
import AnchorLink from "react-anchor-link-smooth-scroll";

export const Hero = () => {
  const [theme, setTheme] = useState("light");

  const handleClick = () => {
    if (theme === "light") setTheme("dark");
    else setTheme("light");
  };

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  return (
    <section
      id="hero"
      className="bg-curvy-light-mode bg-bottom bg-no-repeat dark:bg-darkBlue dark:bg-curvy-dark-mode dark:text-white"
    >
      <nav className="both-flex container mx-auto mt-10 items-center space-y-10 md:justify-between md:space-y-0">
        <img src={logo} alt="logo" className="dark:hidden" />
        <img src={logo_dark} alt="logo_dark" className="hidden dark:flex" />
        <div className="flex flex-row items-center space-x-10 font-opensans font-medium text-gray-900">
          <AnchorLink
            href="#feature"
            className="hover:text-cyan-300 dark:text-white dark:hover:text-cyan-300"
          >
            Features
          </AnchorLink>
          <AnchorLink
            href="#testimonials"
            className="hover:text-cyan-300 dark:text-white  dark:hover:text-cyan-300"
          >
            Testimonials
          </AnchorLink>
          <button
            className="group w-full rounded-lg focus:border-4 focus:border-emerald-400"
            onClick={handleClick}
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/1229/1229467.png"
              alt="moon"
              className="m-2 w-5 dark:hidden mode"
            />
            <img
              src="https://cdn-icons-png.flaticon.com/512/869/869869.png"
              alt="sun"
              className="m-2 hidden w-5 dark:flex"
            />
          </button>
        </div>
      </nav>
      <div className="safe-container flex flex-col items-center space-y-10 pb-52 font-opensans md:pt-20">
        <img src={hero_light} alt="hero_light" />
        <h2 className="max-w-2xl text-center text-3xl font-bold md:text-4xl">
          All your files in one secure location, assessible anywhere
        </h2>
        <p className="max-w-sm text-center text-sm md:max-w-xl md:text-lg">
          Fylo stores all your most important files in one secure location.
          Access them wherever you need, share and collaborate with friends
          family, and co-workers
        </p>
        <button className="rounded-full bg-cyan-300 px-16 py-3 hover:scale-95">
          <a href="#">Get Started</a>
        </button>
      </div>
    </section>
  );
};
