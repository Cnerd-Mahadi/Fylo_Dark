import React from "react";

export const CTA = () => {
  return (
    <section id="cta" className="">
      <div className="safe-container relative mb-36 dark:text-white">
        <div className="mx-auto -mt-36 flex max-w-4xl flex-col items-center space-y-6 rounded-lg bg-gray-300 py-10 px-6 font-opensans dark:bg-darkBlue3 md:px-16">
          <h4 className="text-center text-2xl font-bold">
            Get early access today
          </h4>
          <p className="text-center text-sm">
            It only takes a minute to sign up and our free starter tier is
            extremely generous. If you have any questions, our support team
            would be happy to help you
          </p>
          <div className="flex w-full flex-col space-y-6 md:flex-row md:space-y-0 md:space-x-8">
            <input
              type="text"
              placeholder="email@example.com"
              className="w-full rounded-full bg-white py-3 pl-6"
            />
            <button className="w-full rounded-full bg-cyan-400 py-3 px-10 md:w-80">
              <a href="#">Get Started for free</a>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
