import React, { useEffect, useState } from "react";
import Cards from "./Cards";
import { Link } from "react-router-dom";
import axios from "axios";

function Course() {
  const [book, setBook] = useState([]);
  useEffect(() => {
    const getBook = async () => {
      try {
        const res = await axios.get("http://localhost:4001/book");
        console.log("res.data");
        setBook(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getBook();
  }, []);

  return (
    <>
      <div className="max-w-screen-2xl flex flex-col md:flex-row md:flex-wrap items-center justify-center py-0 mt-0 md:px-20  px-4 ">
        <div className="mt-28 items-center justify-center text-center">
          <h1 className="text-2xl md:font-4xl pt-20">
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
        </div>
        <div className="flex flex-row flex-wrap justify-center items-end max-w-full-screen">
          {book.map((item) => (
            <Cards key={item.id} item={item} />
          ))}
        </div>
        <div className="flex flex-col items-center justify-center max-h-40 mt-10 pb-10 max-w-72 bordered shadow-md">
          <p>get back to main page</p>
          <Link to="/">
            <button className="bg-pink-500 text-white mt-6 px-4 py-2 rounded-md hover:bg-pink-700">
              Back
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Course;
