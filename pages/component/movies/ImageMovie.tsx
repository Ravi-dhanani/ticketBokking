import React from "react";
import MovieDetail from "./MovieDetail";

export default function ImageMovie() {
  return (
    <div>
      <div className="flex justify-center p-5">
        <div className="flex flex-col justify-start md:flex-row md:w-screen">
          <img
            className=" w-full h-96 md:h-96 object-cover md:w-72   md:rounded-none"
            src="https://mdbootstrap.com/wp-content/uploads/2020/06/vertical.jpg"
            alt=""
          />
          <MovieDetail />
        </div>
      </div>
    </div>
  );
}
