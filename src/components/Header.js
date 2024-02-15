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
import { NETFLIX_LOGO } from "../utils/constants";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);

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

  return (
    <div className="absolute z-10 flex justify-between w-screen">
      <img
        className="w-72 px-8 py-2 bg-gradient-to-b from-black"
        alt="Netflix Logo"
        src={NETFLIX_LOGO}
      />
      {user && (
        <div className="flex">
          <img className="w-12 h-12" alt="usericon" src={user?.photoURL} />
          <button
            onClick={handleSignOut}
            className="h-12 font-bold text-color-red"
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
