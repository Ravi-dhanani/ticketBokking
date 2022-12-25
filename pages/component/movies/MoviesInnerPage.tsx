import React from "react";
import RecomondedMovies from "../common/slider/RecomondedMovies";
import AboutMovie from "./AboutMovie";
import CastInMovie from "./CastInMovie";
import ImageMovie from "./ImageMovie";
import MovieDetail from "./MovieDetail";

export default function MoviesInnerPage() {
  return (
    <div className="bg-white">
      <ImageMovie />
      <AboutMovie />
      <CastInMovie />
      <div className="text-center">
        <h1 className="text-2xl font-semibold">You might also like</h1>
      </div>
      <RecomondedMovies />
    </div>
  );
}
