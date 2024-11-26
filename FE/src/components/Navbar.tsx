import { Link, NavLink, useNavigate } from "react-router-dom";
import { selectToken, setLogoutUser } from "../pages/user/auth/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { persistor } from "../store/store";
import { toast } from "react-toastify";
import { signOut } from "../pages/user/auth/core/_request";
import { useState } from "react";
// import profilePicture from "../assets/images/profile.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  const [loader, setLoader] = useState<boolean>(false);
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // For the mobile menu toggle
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const token = useSelector(selectToken);

  const toggleMobileMenu = () => setIsMenuOpen(!isMenuOpen); // Toggling mobile menu

  const handleLogout = async () => {
    try {
      setLoader(true);
      const response = await signOut();

      if (response?.status) {
        localStorage.removeItem("authToken");
        localStorage.removeItem("userDetails");
        dispatch(setLogoutUser());
        persistor.purge();
        setLoader(false);
        toast.success(response?.message);
        navigate("/");
      } else {
        setLoader(false);
        toast.error(response?.message);
      }
    } catch (error) {
      setLoader(false);
      toast.error("Error logging out. Please try again.");
      console.error("Logout error:", error);
    }
  };

  const handleAvatarClick = () => {
    if (token) {
      toggleMenu();
    } else {
      navigate("/login");
    }
  };

  const handleProfileClick = () => {
    navigate("/profile");
    closeMenu();
  };

  const handleSettingsClick = () => {
    navigate("/settings");
    closeMenu();
  };

  const handleSignOutClick = () => {
    closeMenu();
    handleLogout();
  };

  console.log(loader, "Loader");

  return (
    <header className="flex bg-white border-b py-4 sm:px-8 px-6 font-[sans-serif] min-h-[80px] tracking-wide relative z-50">
      <div className="flex flex-wrap items-center lg:gap-y-2 gap-4 w-full">
        <Link to="/">
          <img src="../../../images/logo.png" alt="LOGO" className="w-36" />
        </Link>
        <div
          id="collapseMenu"
          className={`lg:ml-10 ${isMenuOpen ? " block" : "hidden"} lg:!block max-lg:before:fixed max-lg:before:bg-black max-lg:before:opacity-50 max-lg:before:inset-0 max-lg:before:z-50`}
        >
          <button
            id="toggleClose"
            onClick={toggleMobileMenu}
            className="lg:hidden fixed top-2 right-4 z-[100] rounded-full bg-white p-3"
          >
            <FontAwesomeIcon icon={faTimes} className="w-3 fill-black" />
          </button>

          <ul className="lg:flex lg:gap-x-3 max-lg:space-y-3 max-lg:fixed max-lg:bg-white max-lg:w-1/2 max-lg:min-w-[300px] max-lg:top-0 max-lg:left-0 max-lg:p-6 max-lg:h-full max-lg:shadow-md max-lg:overflow-auto z-50">
            <li className="mb-6 hidden max-lg:block">
              <NavLink
                to="/"
                className="w-36"
              >
                <img
                  src="images/logo.png"
                  alt="logo"
                  className="w-36"
                />
              </NavLink>
            </li>

            <li className="max-lg:border-b max-lg:py-3 px-3">
              <NavLink
                to="/products?gender=men"
                className={({ isActive }) =>
                  isActive ? "text-[#007bff] font-semibold text-[15px] block" : "text-[#333] hover:text-[#007bff] text-[15px] block font-semibold"
                }
              >
                Men
              </NavLink>
            </li>
            <li className="max-lg:border-b max-lg:py-3 px-3">
              <NavLink
                to="/products?gender=women"
                className={({ isActive }) =>
                  isActive ? "text-[#007bff] font-semibold text-[15px] block" : "text-[#333] hover:text-[#007bff] text-[15px] block font-semibold"
                }
              >
                Women
              </NavLink>
            </li>
            <li className="max-lg:border-b max-lg:py-3 px-3">
              <NavLink
                to="/products?gender=kids"
                className={({ isActive }) =>
                  isActive ? "text-[#007bff] font-semibold text-[15px] block" : "text-[#333] hover:text-[#007bff] text-[15px] block font-semibold"
                }
              >
                Kids
              </NavLink>
            </li>
            <li className="max-lg:border-b max-lg:py-3 px-3">
              <NavLink
                to="/products"
                className={({ isActive }) =>
                  isActive ? "text-[#007bff] font-semibold text-[15px] block" : "text-[#333] hover:text-[#007bff] text-[15px] block font-semibold"
                }
              >
                On Sale
              </NavLink>
            </li>
          </ul>
        </div>

        <div className="flex gap-x-6 gap-y-4 ml-auto">
          <div className="flex border-2 focus-within:border-gray-400 rounded-full px-6 py-3 overflow-hidden max-w-52 max-lg:hidden">
            <input
              type="text"
              placeholder="Search..."
              className="w-full text-sm bg-transparent outline-none pr-2"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 192.904 192.904"
              width="16px"
              className="cursor-pointer fill-gray-600"
            >
              <path d="m190.707 180.101-47.078-47.077c11.702-14.072 18.752-32.142 18.752-51.831C162.381 36.423 125.959 0 81.191 0 36.422 0 0 36.423 0 81.193c0 44.767 36.422 81.187 81.191 81.187 19.688 0 37.759-7.049 51.831-18.751l47.079 47.078a7.474 7.474 0 0 0 5.303 2.197 7.498 7.498 0 0 0 5.303-12.803zM15 81.193C15 44.694 44.693 15 81.191 15c36.497 0 66.189 29.694 66.189 66.193 0 36.496-29.692 66.187-66.189 66.187C44.693 147.38 15 117.689 15 81.193z"></path>
            </svg>
          </div>

          <div className="flex items-center space-x-8">
            <span className="relative">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20px"
                className="cursor-pointer fill-[#333] inline"
                viewBox="0 0 64 64"
              >
                <path
                  d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z"
                  data-original="#000000"
                />
              </svg>
              <span className="absolute left-auto -ml-1 top-0 rounded-full bg-red-500 px-1 py-0 text-xs text-white">
                0
              </span>
            </span>

            {/* Profile dropdown */}
            <div className="relative ml-3">
              <div>
                <button
                  onClick={handleAvatarClick}
                  className="relative flex rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                >
                  <span className="absolute -inset-1.5" />
                  <span className="sr-only">Open user menu</span>

                  <div
                    className={`${token
                      ? "relative w-8 h-8 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600 ring-2 ring-gray-300 dark:ring-gray-500"
                      : "relative w-8 h-8 overflow-hidden bg-gray-300 rounded-full"
                      }`}
                  >
                    {token ? (
                      <img
                        alt="User Avatar"
                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <svg
                        className="absolute w-10 h-10 text-gray-400 -left-1"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    )}
                  </div>
                </button>
              </div>

              {/* Dropdown Menu */}
              {isOpen && (
                <div className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 transition ease-in-out duration-150">
                  <div
                    className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"
                    onClick={handleProfileClick}
                  >
                    Your Profile
                  </div>

                  <div
                    className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"
                    onClick={handleSettingsClick}
                  >
                    Settings
                  </div>

                  <div
                    className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"
                    onClick={handleSignOutClick}
                  >
                    Sign out
                  </div>
                </div>
              )}
            </div>

            <span className="relative">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20px"
                height="20px"
                className="cursor-pointer fill-[#333] inline"
                viewBox="0 0 512 512"
              >
                <path
                  d="M164.96 300.004h.024c.02 0 .04-.004.059-.004H437a15.003 15.003 0 0 0 14.422-10.879l60-210a15.003 15.003 0 0 0-2.445-13.152A15.006 15.006 0 0 0 497 60H130.367l-10.722-48.254A15.003 15.003 0 0 0 105 0H15C6.715 0 0 6.715 0 15s6.715 15 15 15h77.969c1.898 8.55 51.312 230.918 54.156 243.71C131.184 280.64 120 296.536 120 315c0 24.812 20.188 45 45 45h272c8.285 0 15-6.715 15-15s-6.715-15-15-15H165c-8.27 0-15-6.73-15-15 0-8.258 6.707-14.977 14.96-14.996zM477.114 90l-51.43 180H177.032l-40-180zM150 405c0 24.813 20.188 45 45 45s45-20.188 45-45-20.188-45-45-45-45 20.188-45 45zm45-15c8.27 0 15 6.73 15 15s-6.73 15-15 15-15-6.73-15-15 6.73-15 15-15zm167 15c0 24.813 20.188 45 45 45s45-20.188 45-45-20.188-45-45-45-45 20.188-45 45zm45-15c8.27 0 15 6.73 15 15s-6.73 15-15 15-15-6.73-15-15 6.73-15 15-15zm0 0"
                  data-original="#000000"
                ></path>
              </svg>
              <span className="absolute left-auto -ml-1 top-0 rounded-full bg-red-500 px-1 py-0 text-xs text-white">
                0
              </span>
            </span>

            <button id="toggleOpen" className="lg:hidden" onClick={toggleMobileMenu}>
              <svg
                className="w-7 h-7"
                fill="#333"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
