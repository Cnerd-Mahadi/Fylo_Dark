import React from "react";
import lcall from "./images/icon-phone.svg";
import lmail from "./images/icon-email.svg";
import fb from "./images/facebook.svg";
import tw from "./images/twitter.svg";
import gram from "./images/instagram.svg";

export const Footer = () => {
  return (
    <section id="footer" className="bg-darkBlue2">
      <div className="safe-container both-flex items-center space-y-20 py-10 font-opensans text-white md:items-start md:justify-between md:space-y-0">
        <div className="flex flex-col space-y-3">
          <div className="flex flex-row space-x-3">
            <img src={lcall} alt="lcall" className="mt-1 h-4 w-4" />
            <p className="text-white">+1-543-123-4567</p>
          </div>
          <div className="flex flex-row space-x-3">
            <img src={lmail} alt="lmail" className="mt-1 h-4 w-4" />
            <p className="text-white">example@fylo.com</p>
          </div>
        </div>
        <div className="both-flex space-y-16 text-center md:space-y-0 md:space-x-16 md:text-left">
          <div className="flex flex-col space-y-2">
            <a href="#" className="hover:text-emerald-500">
              About
            </a>
            <a href="#" className="hover:text-emerald-500">
              Jobs
            </a>
            <a href="#" className="hover:text-emerald-500">
              Press
            </a>
            <a href="#" className="hover:text-emerald-500">
              Blog
            </a>
          </div>
          <div className="flex flex-col space-y-2">
            <a href="#" className="hover:text-emerald-500">
              Contact Us
            </a>
            <a href="#" className="hover:text-emerald-500">
              Terms
            </a>
            <a href="#" className="hover:text-emerald-500">
              Privacy
            </a>
          </div>
        </div>
        <div className="flex flex-row space-x-6">
          <img src={fb} alt="fb" className="ficon w-8" />
          <img src={tw} alt="tw" className="ficon w-8" />
          <img src={gram} alt="gram" className="ficon w-8" />
        </div>
      </div>
    </section>
  );
};
