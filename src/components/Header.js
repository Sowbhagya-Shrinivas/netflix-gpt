import React from "react";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { addUser } from "../utils/userSlice";
import { removeUser } from "../utils/userSlice";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { NETFLIX_LOGO, SUPPOPTED_LANGUAGES } from "../utils/constants";
import { toggleGptSearchView } from "../utils/gptSlice";
import { changeLangugage } from "../utils/configSlice";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        navigate("/error");
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
      }
    });
    return () => unsubscribe(); //unsubscribe when component unmounts
  }, []);

  const handleGptSearchClick = () => {
    //toggle GPT Search
    dispatch(toggleGptSearchView());
  };

  const handleLanguageChange = (e) => {
    dispatch(changeLangugage(e.target.value));
  };

  return (
    <div className="absolute z-10 flex justify-between w-screen">
      <img
        className="w-72 px-8 py-2 bg-gradient-to-b from-black"
        alt="Netflix Logo"
        src={NETFLIX_LOGO}
      />
      {user && (
        <div className="flex">
          {showGptSearch && (
            <select
              onChange={handleLanguageChange}
              className="text-white bg-gray-800 w-13 h-12 mx-2"
            >
              {SUPPOPTED_LANGUAGES.map((lang) => (
                <option key={lang.identifier} value={lang.identifier}>
                  {lang.name}
                </option>
              ))}
            </select>
          )}
          <button
            onClick={handleGptSearchClick}
            className="text-white bg-purple-800 rounded-lg w-13 h-12 mx-2"
          >
            {showGptSearch ? "Home Page" : "GPT Search"}
          </button>
          <img className="w-12 h-12" alt="usericon" src={user?.photoURL} />
          <button
            onClick={handleSignOut}
            className="h-12 font-bold text-red-800"
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
