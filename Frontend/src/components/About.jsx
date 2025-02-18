import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <>
      <div className="py-10 justify-center flex align-center ">
        <Link
          to="/"
          className="bg-pink-500 text-white rounded-md py-1 px-3 hover:bg-pink-700 duration-200"
        >
          <button>Back</button>
        </Link>
      </div>
    </>
  );
};

export default About;
