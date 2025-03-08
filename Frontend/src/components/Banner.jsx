import React from "react";
import banner from "/Banner.jpg";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <>
      <div className="max-w-screen-2xl container mx-0 my-10 md:px-20 px-4 flex  md:flex-row flex-col-reverse">
        <div className="w-full md:w-1/2 flex flex-col items-center ">
          <div className="space-y-12 ">
            <h1 className="text-3xl md:text-4xl font-bold mt-12 md:mt-32">
              Hello, welcome here to learn something
              <span className="text-pink-500"> new everyday!!!</span>
            </h1>
            <p className="text-xl">
              This is a website for learning something new every day. You can
              find a variety of topics here Lorem ipsum, dolor sit amet
              consectetur adipisicing elit. Nobis fuga harum tempora officia
              repellat inventore quis nesciunt deleniti dolor.
            </p>
          </div>
          <Link to="/signup">
            <button className="bg-pink-500 text-white mt-6 px-4 py-2 rounded-md hover:bg-pink-700">
              Get Started
            </button>
          </Link>
        </div>
        <div className="w-full md:w-1/2">
          <img src={banner} className="w-4/5 h-100 ml-8 mt-28" alt="" />
        </div>
      </div>
    </>
  );
};

export default Banner;
