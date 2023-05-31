import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/img/logo.svg";
import { AuthContext } from "../Provider/AuthProvider";
const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.log(error));
  };
  return (
    <header className="py-6 mb-12 border-b">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo  */}
        <Link to="/">
          <img src={Logo} alt="Logo" />
        </Link>
        {/* buttons */}
        <div className="flex items-center gap-6">
          {user ? (
            <>
              <img
                title={user?.displayName}
                className="w-12 h-12 rounded-full ring-2 ring-offset-4 dark:bg-gray-500 ring-violet-400 ring-offset-gray-800"
                src={user?.photoURL}
              />
              <button
                onClick={handleLogOut}
                className="bg-rose-800 hover:bg-violet-800 text-white px-4 py-3 rounded-lg transition"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link
                className="bg-violet-700 hover:bg-violet-800 text-white px-4 py-3 rounded-lg transition"
                to="/login"
              >
                LogIn
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
