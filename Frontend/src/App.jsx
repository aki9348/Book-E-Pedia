import React from "react";
import Home from "./home/Home";
import Courses from "./courses/Courses";
import { Navigate, Route, Routes } from "react-router-dom";
import Signup from "./components/Signup";
import Contacts from "./contact/Contacts";
import Abouts from "./about/Abouts";
import { Toaster } from "react-hot-toast";
import { useAuth } from "./context/AuthProvider";

const App = () => {
  const [authUser, setAuthUser] = useAuth();
  console.log(authUser);

  return (
    <>
      <div className=" dark:bg-slate-800 dark:text-white duration-300 max-w-screen-2xl">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/Courses"
            element={authUser ? <Courses /> : <Navigate to="/Signup" />}
          />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/Contacts" element={<Contacts />} />
          <Route path="/Abouts" element={<Abouts />} />
        </Routes>
        <Toaster />
      </div>
    </>
  );
};

export default App;
