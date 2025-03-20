import React from "react";

function BlogContent({ item }) {
  return (
    <>
      <div className="flex items-center justify-center ">
        <div className="w-5/6 h-auto flex md:flex-row flex-col items-center justify-center border-2 p-2 rounded-lg">
          <div className="mt-10 mx-5 w-full flex flex-col md:flex-row items-center justify-evenly">
            <div className="card bg-base-100 w-80 shadow-xl  dark:border dark:bg-slate-900  ">
              <figure className="h-48">
                <img src={item.image} alt="" />
              </figure>
              <div className="card-body">
                <h2 className="card-title ">{item.name}</h2>
              </div>
            </div>
            <div className="flex flex-col items-start justify-evenly p-5">
              <div className="my-2">
                <h4 className=" font-bold">Date: {item.date}</h4>
              </div>
              <div className="my-2">
                <h2 className="text-2xl font-light">Name: {item.name}</h2>
              </div>
              <div className="my-2">
                <h4 className="text-xl font-serif">
                  Category: {item.category}
                </h4>
              </div>
              <div className="my-2">
                <h4 className="text-xl font-serif">Price: {item.price}</h4>
              </div>
              <div className="my-2">
                <p className="text-xl font-mono">About: {item.title}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default BlogContent;
