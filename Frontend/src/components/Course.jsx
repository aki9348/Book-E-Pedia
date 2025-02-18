import React from "react";
import list from "../assets/list.json";
import Cards from "./Cards";
import { Link } from "react-router-dom";

function Course() {
  return (
    <>
      <div className="max-w-screen-2xl container my-24 md:px20 px-4 ">
        <div className="mt-28 items-center justify-center text-center">
          <h1 className="text-2xl md:font-4xl">
            We're delighted to have you{" "}
            <span className="text-pink-500">Here:)</span>
          </h1>
          <p className="mt-12">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
            dolorem quam nam omnis accusantium sed harum laborum, ullam sint
            fugiat iure. Quam eaque quos, est, nemo doloribus beatae fugiat
            officiis laboriosam asperiores voluptate, fugit mollitia libero! Non
            quas impedit ipsam esse quibusdam harum sapiente velit voluptatem
            alias. Pariatur delectus explicabo quod maxime provident natus
            voluptatum tempore minus, labore rem reiciendis.
          </p>
          <Link to="/">
            <button className="bg-pink-500 text-white mt-6 px-4 py-2 rounded-md hover:bg-pink-700">
              Back
            </button>
          </Link>
        </div>
        <div className="flex flex-row flex-wrap justify-center items-end max-w-full-screen">
          {list.map((item) => (
            <Cards key={item.id} item={item} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Course;
