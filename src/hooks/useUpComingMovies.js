import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { useEffect } from "react";
import { addUpComingMovies } from "../utils/movieSlice";

const useUpComingMovies = () => {
  const dispatch = useDispatch();
  const upcomingmovies = useSelector((store) => store.movies.upcomingVideos);

  const upcomingmovie = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();
    console.log("upcoming movies", json);
    dispatch(addUpComingMovies(json.results));
  };

  useEffect(() => {
    !upcomingmovies && upcomingmovie();
  }, []);
};

export default useUpComingMovies;
