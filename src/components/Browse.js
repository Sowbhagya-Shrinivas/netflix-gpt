import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";

const Browse = () => {
  //Fetch data from TMDB API and update store
  useNowPlayingMovies();

  return (
    <div>
      <Header />
      <MainContainer />
      <SecondaryContainer />
      {/*
          Main Container
            - VideoBackground
            - VideoTitle
          Secondary Container
            - MovieList * n
                - cards * n
      */}
    </div>
  );
};

export default Browse;
