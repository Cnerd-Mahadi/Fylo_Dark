import React from "react";
import pf1 from "./images/profile-1.jpg";
import pf2 from "./images/profile-2.jpg";
import pf3 from "./images/profile-3.jpg";
import dot from "./images/bg-quotes.png";

export const Testimonials = () => {
  return (
    <section id="testimonials" className="bg-gray-100 dark:bg-darkBlue">
      <div className="safe-container both-flex relative w-full space-y-10 pt-10 pb-80 dark:bg-darkBlue dark:text-white md:space-x-10 md:space-y-0 md:pb-96">
        <div className="absolute top-11 left-7 md:-top-5 md:left-6">
          <img src={dot} alt="dot" className="w-10 md:w-20" />
        </div>
        <div className="flex flex-col items-center justify-center space-y-8 rounded-lg bg-gray-200 p-10 dark:bg-darkBlue3 md:w-1/3">
          <p className="text-sm leading-5 md:text-base">
            Fylo has improved our team productivity by an order of magnitude.
            Since making the switch our team has become a well-oiled
            collaboration machine
          </p>
          <div className="flex w-full flex-row">
            <div className="w-12 pr-3">
              <img src={pf1} alt="pf1" className="rounded-full" />
            </div>
            <div>
              <h5 className="text-sm font-semibold">Satish Patel</h5>
              <p className="text-xs">Founder & CEO. Huddle</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center space-y-8 rounded-lg bg-gray-200 p-10 dark:bg-darkBlue3 md:w-1/3">
          <p className="text-sm leading-5 md:text-base">
            Fylo has improved our team productivity by an order of magnitude.
            Since making the switch our team has become a well-oiled
            collaboration machine
          </p>
          <div className="flex w-full flex-row">
            <div className="w-12 pr-3">
              <img src={pf2} alt="pf2" className="rounded-full" />
            </div>
            <div>
              <h5 className="text-sm font-semibold">Bruce McKenzie</h5>
              <p className="text-xs">Founder & CEO. Huddle 2</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center space-y-8 rounded-lg bg-gray-200 p-10 dark:bg-darkBlue3 md:w-1/3">
          <p className="text-sm leading-5 md:text-base">
            Fylo has improved our team productivity by an order of magnitude.
            Since making the switch our team has become a well-oiled
            collaboration machine
          </p>
          <div className="flex w-full flex-row">
            <div className="w-12 pr-3">
              <img src={pf3} alt="pf3" className="rounded-full" />
            </div>
            <div>
              <h5 className="text-sm font-semibold">Eva Boyd</h5>
              <p className="text-xs">Founder & CEO. Huddle 3</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
