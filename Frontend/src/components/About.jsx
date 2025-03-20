import React from "react";
import { Link } from "react-router-dom";
import Blog from "./blog";

const About = () => {
  return (
    <>
      <div className="max-w-screen-2xl flex flex-col md:flex-col md:flex-wrap items-center justify-center py-0 mt-0 md:px-20  px-4 ">
        <div className="w-full flex md:flex-row flex-col items-center justify-center ">
          <div className="flex flex-col items-center my-28">
            <div className="mb-36">
              <h1 className="text-3xl font-bold text-center">About us</h1>
            </div>
            <br />
            <div className="md:w-1/2 w-full flex md:flex-col flex-row align-middle items-start justify-around p-4 ">
              <div>
                <div>
                  <h2 className="text-2xl text-white text-left">
                    What does we do ?
                  </h2>
                </div>
                <br />
                <div>
                  <p className="text-lg  text-gray-600 text-justify text-wrap">
                    We provide an interactive web application platform where
                    everyone can easily get various category of book online in
                    the from of PDFs & DOCXs
                  </p>
                </div>
                <br />
                <div className="">
                  <h2 className="text-2xl text-white text-left ">
                    Why we Only?
                  </h2>
                </div>
                <br />
                <div className="flex flex-col items-center justify-evenly gap-4 ">
                  <ul className="list-disc">
                    <li className="text-lg text-gray-600 text-left">
                      We provide easy and quick access
                    </li>
                    <li className="text-lg text-gray-600 text-left">
                      We provide portable and shareable books
                    </li>
                    <li className="text-lg text-gray-600 text-left">
                      Newly arrived books avails faster
                    </li>
                    <li className="text-lg text-gray-600 text-left">
                      Secured customer's valueable infromation
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 w-full flex flex-col  align-middle md:items-start md:justify-around items-center justify-center p-4">
            <div className="w-72 h-72">
              <img src="./src/assets/Book-E-Pedia.png" alt="" />
            </div>
            <div>
              <h3 className="text-2xl text-white text-left">
                Our Mission Evolving Future
              </h3>
              <br />
            </div>
            <div className="md:w-72 md:h-72">
              <img src="./src/assets/7026.jpg" alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="py-24">
        <div className="flex md:flex-row flex-col">
          <div className="md:w-1/2 w-full flex flex-col items-center justify-center">
            <h1 className="text-3xl font-bold text-center">
              Get Connected With us..
            </h1>
            <div className="py-24 justify-center flex align-center ">
              <Link
                to="/Signup"
                className="bg-pink-500 text-white rounded-md py-1 px-3 hover:bg-pink-700 duration-200"
              >
                <button>Signup</button>
              </Link>
            </div>
          </div>

          <div className="md:w-1/2 w-full flex flex-col items-center justify-center">
            <h1 className="text-3xl font-bold text-center">
              Ask Us your Querries..
            </h1>
            <div className="py-24 justify-center flex align-center ">
              <Link
                to="/Contacts"
                className="bg-pink-500 text-white rounded-md py-1 px-3 hover:bg-pink-700 duration-200"
              >
                <button>Contact Us</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="blogs">
        <Blog />
      </div>
    </>
  );
};

export default About;
