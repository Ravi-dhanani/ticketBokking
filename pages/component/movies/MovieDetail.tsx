import React from "react";

export default function MovieDetail() {
  return (
    <div>
      <div className="p-6 flex flex-col justify-start">
        <h5 className="text-gray-900 text-2xl font-bold mb-2">
          Avatar:The Way Of Water
        </h5>
        <h5>
          <ul className="flex justify-start pb-2 mt-3">
            <li className="flex justify-center items-center">
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="star"
                className="w-5 text-red-500 mr-1"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 576 512"
              >
                <path
                  fill="currentColor"
                  d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"
                ></path>
              </svg>
            </li>
            <li className="flex justify-center items-center">
              <h2 className="text-lg">8.8/10</h2>
            </li>
          </ul>
        </h5>
        <div className="mt-5">
          <div className="bg-white border border-gray-200 p-1">
            <div>
              <h4>2D,3D,3D SCREEN X,4DX 3D,IMAX 3D</h4>
            </div>
          </div>
        </div>
        <div className="mt-5">
          <div className="bg-white border border-gray-200 p-1">
            <div>
              <h4>English,Kannada,Hindi,Tamil,Telugu</h4>
            </div>
          </div>
        </div>
        <p className="text-gray-600 text-base mt-5">3H 12M</p>
        <p className="text-gray-600 text-xs">Last updated 3 mins ago</p>
        <div className="mt-5">
          <button
            type="button"
            className="text-white bg-red-500   font-medium rounded-lg text-sm px-10 py-2.5 mr-2 "
          >
            Book Ticket
          </button>
        </div>
      </div>
    </div>
  );
}
