import React, { useEffect, useState, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
import axios from "axios";
import BlogContent from "./BlogContent";

const Blog = () => {
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

  let sliderRef = useRef(null);
  const play = () => {
    sliderRef.slickPlay();
  };
  const pause = () => {
    sliderRef.slickPause();
  };

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
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
      <div className="max-w-screen-2xl h- flex flex-col items-center justify-center py-0 mt-0 md:px-20  px-4 my-24 ">
        <div className=" max-w-screen-2xl container mx-auto md:px-5 px-2 ">
          <div className="mt-28">
            <h1 className="font-semibold text-xl pb-2">Newly Arrived..</h1>
          </div>
          <div>
            <Slider ref={(slider) => (sliderRef = slider)} {...settings}>
              {book.map((item) => (
                <BlogContent item={item} key={item.id} />
              ))}
            </Slider>
          </div>
          <div className="flex flex-col items-center justify-center mt-20">
            <div></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;
