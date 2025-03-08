import React, { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Cards from "../components/Cards";
import axios from "axios";
import { Link } from "react-router-dom";

const Freebook = () => {
  const [book, setBook] = useState([]);
  useEffect(() => {
    const getBook = async () => {
      try {
        const res = await axios.get("http://localhost:4001/book");
        const data = res.data.filter((data) => data.category === "Free");
        console.log(data);
        setBook(data);
      } catch (error) {
        console.log(error);
      }
    };
    getBook();
  }, []);

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <div className="max-w-screen-2xl h- flex flex-col items-center justify-center py-0 mt-0 md:px-20  px-4 ">
        <div className=" max-w-screen-2xl container mx-auto md:px-5 px-2 ">
          <div>
            <h1 className="font-semibold text-xl pb-2">Free Books available</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
              sapiente quasi, deleniti dolore, tempora accusantium tenetur neque,
              et incidunt ex expedita reprehenderit voluptatem qui ab?
            </p>
          </div>
          <div className="">
            <Slider {...settings}>
              {book.map((item) => (
                <Cards item={item} key={item.id} />
              ))}
            </Slider>
          </div>
          <div className="flex flex-col items-center justify-center mt-20">
            <div>
              <h2>
                Wanna try some more books. <br />
                Tap below!!
              </h2>
            </div>
            <Link to="/Courses">
              <button className="btn btn-secondary mt-6  ">Get more</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Freebook;
