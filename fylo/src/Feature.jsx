import React from "react";
import img1 from "./images/icon-access-anywhere.svg";
import img2 from "./images/icon-security.svg";
import img3 from "./images/icon-collaboration.svg";
import img4 from "./images/icon-any-file.svg";

export const Feature = () => {
  return (
    <section id="feature" className="bg-gray-50 pt-10 dark:bg-darkBlue1">
      <div className="safe-container flex flex-col space-y-24 font-opensans dark:bg-darkBlue1 dark:text-white">
        <div className="both-flex w-full space-y-20 md:space-y-0">
          <div className="flex flex-col items-center space-y-2 md:w-1/2 md:justify-end">
            <img src={img1} alt="img1" className="mb-8" />
            <h3 className="text-xl font-bold">
              Access your file from anywhere
            </h3>
            <p className="max-w-md text-center">
              The ability to use a smartphone, tablet, or computer to access
              your account means your files follow you everywhere
            </p>
          </div>
          <div className="flex flex-col items-center space-y-2 md:w-1/2 md:justify-end">
            <img src={img2} alt="img2" className="mb-8" />
            <h3 className="text-xl font-bold">Security you can trust</h3>
            <p className="max-w-md text-center">
              2-factor authentication and user-controlled encryption are just a
              couple of the security features we allow to help secure your files
            </p>
          </div>
        </div>
        <div className="both-flex w-full space-y-20 pb-28 md:space-y-0">
          <div className="flex flex-col items-center md:w-1/2 md:justify-end">
            <img src={img3} alt="img3" className="mb-8" />
            <h3 className="mb-2 text-xl font-bold">
              Access your file from anywhere
            </h3>
            <p className="max-w-md text-center">
              The ability to use a smartphone, tablet, or computer to access
              your account means your files follow you everywhere
            </p>
          </div>
          <div className="flex flex-col items-center md:w-1/2 md:justify-end">
            <img src={img4} alt="img4" className="mb-8" />
            <h3 className="mb-2 text-xl font-bold">Security you can trust</h3>
            <p className="max-w-md text-center">
              2-factor authentication and user-controlled encryption are just a
              couple of the security features we allow to help secure your files
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
