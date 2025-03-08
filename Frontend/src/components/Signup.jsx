import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";
import Login from "./Login";

const Signup = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    console.log(data);
    const userInfo = {
      fullname: data.fullname,
      email: data.email,
      password: data.password,
    };
    await axios
      .post("http://localhost:4001/user/signup", userInfo)
      .then((res) => {
        console.log(res.data);
        if (res.data) {
          toast.success("Signed up Successfully!");
          navigate(from, { replace: true });
          setTimeout(() => {
            window.location.reload();
            localStorage.setItem("Users".JSON.stringify(res.data.user));
          }, 1000);
        }
        localStorage.setItem("Users", JSON.stringify(res.data.user));
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
      <div className="flex h-screen items-center justify-center  shadow-md dark:bg-slate-800 dark:text-white ">
        <div className=" w-[600px] dark:bg-slate-800 dark:text-white">
          <div className="modal-box  dark:bg-slate-800 dark:text-white duration-300">
            <form onSubmit={handleSubmit(onSubmit)} method="dialog">
              <Link
                to="/"
                className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 "
              >
                ✕
              </Link>

              <h3 className="font-bold text-lg">Signup!</h3>
              <div className="mt-4 space-y-2">
                <span>Name</span>
                <br />
                <input
                  type="text"
                  placeholder="Enter your  full name"
                  className="w-80 px-3 py-1 border rounded outline-none dark:text-black"
                  {...register("fullname", { required: true })}
                />
                {errors.fullname && (
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
                  className="w-80 px-3 py-1 border rounded outline-none dark:text-black"
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
                <span>Password</span>
                <br />
                <input
                  type="password"
                  placeholder="Enter your password"
                  className="w-80 px-3 py-1 border rounded outline-none dark:text-black"
                  {...register("password", { required: true })}
                />
                {errors.password && (
                  <span className="text-sm text-red-700">
                    <br />
                    *This field is required
                  </span>
                )}
              </div>
              <div className="flex justify-around mt-4">
                <button className="bg-pink-500 text-white rounded-md py-1 px-3 hover:bg-pink-700 duration-200">
                  Signup
                </button>
                <p className="text-xl">
                  Have account ?{" "}
                  <button
                    to="/"
                    className="underline text-blue-600 cursor-pointer"
                    onClick={() => navigate(from, { replace: true })}
                  >
                    Login
                  </button>{" "}
                </p>
                <Login />
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
