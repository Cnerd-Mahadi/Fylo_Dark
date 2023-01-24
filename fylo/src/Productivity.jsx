import React from "react";
import working from "./images/illustration-stay-productive.png";

export const Productivity = () => {
  return (
    <section id="productivity" className="dark:bg-darkBlue">
      <div className="safe-container both-flex items-center space-x-0 space-y-10 py-24 text-center font-opensans dark:text-white md:space-x-16 md:text-left">
        <div className="md:w-1/2">
          <img src={working} alt="working" />
        </div>
        <div className="flex flex-col items-center space-y-6 md:w-1/2 md:items-start">
          <h3 className="max-w-md text-xl font-bold md:text-4xl">
            Stay productive, wherever you are
          </h3>
          <p className="md:text-lg">
            Never let location be an issue when accessing your files. Fylo has
            you covered for all of your file storage needs
          </p>
          <p className="md:text-lg">
            Securely share files and folders with friends, family and colleagues
            for live collaboration. No email attachments required
          </p>
          <a href="#" className="text-cyan-400">
            See how Flyo works
          </a>
        </div>
      </div>
    </section>
  );
};
