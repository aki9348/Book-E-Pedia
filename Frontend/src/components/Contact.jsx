import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

const contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <>
      <div className="flex flex-col ">
        <div className="flex w-screen md:flex-row flex-col py-24 h-max md:h-screen items-center justify-center  shadow-md">
          <div className="w-full ">
            <form onSubmit={handleSubmit(onSubmit)} className=" ">
              <span className="flex flex-col h-auto border-black items-center justify-center  ">
                <h3 className="font-bold text-2xl">Contact Us..</h3>
                <div className="mt-4 space-y-2">
                  <span>Name</span>
                  <br />
                  <input
                    type="text"
                    placeholder="Enter your  full name"
                    className="w-80 px-3 py-1 border rounded outline-none"
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
                    className="w-80 px-3 py-1 border rounded outline-none"
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
                    className="w-80 h-32 px-3 py-1 border rounded outline-none"
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
          <div className="flex w-max md:flex-col flex-col py-24 h-max md:h-screen items-center justify-center ">
            <div className="w-72 h-72">
              <img src="./src/assets/Book-E-Pedia.png" alt="" />
            </div>
            <div className="flex w-max  md:flex-row flex-col items-center justify-center">
              <div className="w-72 h-72">
                <img src="./src/assets/cont.jpg" alt="" />
              </div>
              <div className="flex flex-col justify-center ">
                <h1 className="text-2xl text-center font-bold">Contact Us</h1>
                <div className="flex flex-col ">
                  <h3 className="text-xl text-left py-5 px-10">
                    Address: <span>123, Main St, Anytown, USA</span>
                  </h3>
                  <h3 className="text-xl text-left py-5 px-10">
                    Email:{" "}
                    <span className="underline">Bookepedia@consult.in</span>
                  </h3>
                  <h3 className="text-xl text-left py-5 px-10">
                    Contact.no: <span>+1-304-506-7069</span>
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="py-10 justify-center flex align-center ">
          <Link
            to="/"
            className="bg-pink-500 text-white rounded-md py-1 px-3 hover:bg-pink-700 duration-200"
          >
            <button>Back</button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default contact;
