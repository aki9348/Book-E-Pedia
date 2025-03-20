import axios from "axios";
import React from "react";

import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

const contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    // console.log(data);
    const feedback = {
      name: data.name,
      email: data.email,
      query: data.query,
    };
    await axios
      .post("http://localhost:4001/feed/doubt", feedback)
      .then((res) => {
        console.log(res.data);
        if (res.data) {
          toast.success("Feedback recorded Sucessfully!");
          setTimeout(() => {
            window.location.reload();
            localStorage.setItem("Feeds".JSON.stringify(res.data.feed));
          }, 1000);
        }
        localStorage.setItem("Feeds", JSON.stringify(res.data.feed));
      })
      .catch((err) => {
        if (err.response) {
          console.log(err);
          toast.error(`Error:${err.response.data.message}`);
        }
      });
  };

  return (
    <>
      <div className="max-w-screen-2xl flex flex-col items-center justify-center py-0 mt-0 md:px-20  px-4 ">
        <div className="mt-28  flex flex-col md:flex-row items-center justify-center">
          <div className="pt-20 md:pl-5 h-auto w-auto ">
            <form onSubmit={handleSubmit(onSubmit)} className="">
              <span className="flex flex-col h-auto border-black items-center justify-center  ">
                <h3 className="font-bold text-4xl"></h3>
                <div className="mt-4 space-y-2">
                  <span>Name</span>
                  <br />
                  <input
                    type="text"
                    placeholder="Enter your  full name"
                    className="dark:text-black w-80 px-3 py-1 border rounded outline-none"
                    {...register("name", { required: true })}
                  />
                  {errors.name && (
                    <span className="text-sm text-red-700">
                      <br />
                      *This field is required
                    </span>
                  )}
                </div>
                <div className="mt-4 space-y-2">
                  <span>Email</span>
                  <br />
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="dark:text-black w-80 px-3 py-1 border rounded outline-none"
                    {...register("email", { required: true })}
                  />
                  {errors.email && (
                    <span className="text-sm text-red-700">
                      <br />
                      *This field is required
                    </span>
                  )}
                </div>
                <div className="mt-4 space-y-2">
                  <span>Query</span>
                  <br />
                  <textarea
                    name="query"
                    id="query"
                    placeholder="Ask us.."
                    className="dark:text-black w-80 h-32 px-3 py-1 border rounded outline-none"
                    {...register("query", { required: true })}
                  ></textarea>
                  {errors.query && (
                    <span className="text-sm text-red-700">
                      <br />
                      *This field is required
                    </span>
                  )}
                </div>

                <div className="flex justify-around mt-4">
                  <button className="bg-pink-500 text-white rounded-md py-1 px-3 hover:bg-pink-700 duration-200">
                    Submit
                  </button>
                </div>
              </span>
            </form>
          </div>
          <div className="flex flex-col px-4 py-4 md:pl-40 items-center justify-center">
            <div className="md:w-72 md:h-72">
              <img src="./src/assets/Book-E-Pedia.png" alt="" />
            </div>
            <div className="flex flex-col md:flex-row items-center justify-around">
              <div className="md:w-72 md:h-72">
                <img src="./src/assets/cont.jpg" alt="" />
              </div>
              <div className="text-xl md:text-2xl py-4 px-4 ">
                <h1 className="py-4 px-4 ">Contact Us</h1>
                <div className="py-4 px-4 ">
                  <h3 className="p-2">
                    Address:{" "}
                    <span>
                      Sambalpur, Odisha,
                      <br />
                      INDIA
                    </span>
                  </h3>
                  <h3 className="p-2">
                    Email:{" "}
                    <span className="underline">Bookepedia@consult.in</span>
                  </h3>
                  <h3 className="p-2">
                    Contact.no: <span>+91-7377201279</span>
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default contact;
