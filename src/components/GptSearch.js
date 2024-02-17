import GptMovieSuggestions from "./GptMovieSuggestions";
import GptSearchBar from "./GptSearchBar";
import { BACKGROUND_LOGO } from "../utils/constants";

const GptSearch = () => {
  return (
    <div>
      <div className="fixed -z-10">
        <img src={BACKGROUND_LOGO} alt="logo" />
      </div>
      <div className="pt-[30%] md:p-0"><GptSearchBar />
      <GptMovieSuggestions /></div>
      
    </div>
  );
};

export default GptSearch;
