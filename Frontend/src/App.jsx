import React from "react";
import Home from "./home/Home";
import Courses from "./courses/Courses";
import { Route, Routes } from "react-router-dom";
import Signup from "./components/Signup";
import Contacts from "./contact/Contacts";
import Abouts from "./about/Abouts";

const App = () => {
  return (
    <>
      <div className=" dark:bg-slate-800 dark:text-white duration-300">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Courses" element={<Courses />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/Contacts" element={<Contacts />} />
          <Route path="/Abouts" element={<Abouts />} />
        </Routes>
      </div>
    </>
  );
};

export default App;
