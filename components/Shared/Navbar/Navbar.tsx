import Link from "next/link";
import React, { useState } from "react";
import useAuth from "../../../hooks/useAuth";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store/store";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Drawer from "react-modern-drawer";
//import styles 👇
import "react-modern-drawer/dist/index.css";
import {
  faCartFlatbed,
  faHeart,
  faMagnifyingGlass,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const { googleLogin } = useAuth();
  const [active, setActive] = useState(false);
  const router = useRouter();
  const user: any = useSelector((state: RootState) => state.users.user);
  console.log(user);
  const [isOpen, setIsOpen] = React.useState(false);
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };
  return (
    <div className="py-3 bg-gray-200">
      <nav className="flex items-center justify-between container mx-auto">
        <div>
          <Link href="/">
            <a className="inline-flex items-center p-2 mr-4 ">
              <svg
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                className="fill-current h-8 w-8 mr-2"
              >
                <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z" />
              </svg>
              <span className="text-xl font-bold uppercase tracking-wide">
                Shop
              </span>
            </a>
          </Link>
        </div>
        <Drawer
          open={isOpen}
          onClose={toggleDrawer}
          direction="right"
          className="bla bla bla"
        >
          <div className="lg:hidden block">
            <Link href="#">
              <a href="">
                <FontAwesomeIcon icon={faMagnifyingGlass} />
              </a>
            </Link>
            <Link href="#">
              <a href="">
                <FontAwesomeIcon icon={faHeart} />
              </a>
            </Link>
            <Link href="#">
              <a href="">
                <FontAwesomeIcon icon={faCartFlatbed} />
              </a>
            </Link>
            <Link href="#">
              <a href="">
                {user.uid?.length > 0 ? (
                  <button onClick={googleLogin} className="">
                    <FontAwesomeIcon icon={faUser} />
                  </button>
                ) : (
                  <button
                    onClick={googleLogin}
                    className="text-sm px-5 py-2 rounded shadow hover:bg-gray-100 font-bold mx-2"
                  >
                    Log In
                  </button>
                )}
              </a>
            </Link>
          </div>
          <div className={`w-full lg:inline-flex lg:flex-grow lg:w-auto`}>
            <div className="lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start  flex flex-col lg:h-auto">
              <Link href="/">
                <a
                  onClick={() => setActive(false)}
                  className={`${
                    router.pathname === "/" ? "active" : ""
                  } lg:inline-flex lg:w-auto w-full px-3 py-2 rounded font-bold items-center justify-center hover:bg-gray-600 hover:text-white`}
                >
                  Home
                </a>
              </Link>
              <Link href="/">
                <a
                  onClick={() => setActive(false)}
                  className={`${
                    router.pathname === "/services" ? "active" : ""
                  } lg:inline-flex lg:w-auto w-full px-3 py-2 rounded font-bold items-center justify-center hover:bg-gray-600 hover:text-white`}
                >
                  Services
                </a>
              </Link>
              <Link href="/about-us">
                <a
                  onClick={() => setActive(false)}
                  className={`${
                    router.pathname === "/about-us" ? "active" : ""
                  } lg:inline-flex lg:w-auto w-full px-3 py-2 rounded font-bold items-center justify-center hover:bg-gray-600 hover:text-white`}
                >
                  About us
                </a>
              </Link>
              <Link href="/">
                <a
                  onClick={() => setActive(false)}
                  className={`${
                    router.pathname === "/contact" ? "active" : ""
                  } lg:inline-flex lg:w-auto w-full px-3 py-2 rounded font-bold items-center justify-center hover:bg-gray-600 hover:text-white`}
                >
                  Contact
                </a>
              </Link>
              <Link href="/dashboard">
                <a
                  onClick={() => setActive(false)}
                  className={`${
                    router.pathname.includes("/dashboard") ? "active" : ""
                  } lg:inline-flex lg:w-auto w-full px-3 py-2 rounded font-bold items-center justify-center hover:bg-gray-600 hover:text-white`}
                >
                  Dashboard
                </a>
              </Link>
            </div>
          </div>
        </Drawer>
        <div className={`w-full lg:inline-flex mx-auto lg:w-auto hidden`}>
          <div className="lg:inline-flex lg:flex-row lg:w-auto w-full lg:items-center items-start  flex flex-col lg:h-auto">
            <Link href="/">
              <a
                onClick={() => setActive(false)}
                className={`${
                  router.pathname === "/" ? "active" : ""
                } lg:inline-flex lg:w-auto w-full px-3 py-2 rounded font-bold items-center justify-center hover:bg-gray-600 hover:text-white`}
              >
                Home
              </a>
            </Link>
            <Link href="/">
              <a
                onClick={() => setActive(false)}
                className={`${
                  router.pathname === "/services" ? "active" : ""
                } lg:inline-flex lg:w-auto w-full px-3 py-2 rounded font-bold items-center justify-center hover:bg-gray-600 hover:text-white`}
              >
                Services
              </a>
            </Link>
            <Link href="/about-us">
              <a
                onClick={() => setActive(false)}
                className={`${
                  router.pathname === "/about-us" ? "active" : ""
                } lg:inline-flex lg:w-auto w-full px-3 py-2 rounded font-bold items-center justify-center hover:bg-gray-600 hover:text-white`}
              >
                About us
              </a>
            </Link>
            <Link href="/">
              <a
                onClick={() => setActive(false)}
                className={`${
                  router.pathname === "/contact" ? "active" : ""
                } lg:inline-flex lg:w-auto w-full px-3 py-2 rounded font-bold items-center justify-center hover:bg-gray-600 hover:text-white`}
              >
                Contact
              </a>
            </Link>
            <Link href="/dashboard">
              <a
                onClick={() => setActive(false)}
                className={`${
                  router.pathname.includes("/dashboard") ? "active" : ""
                } lg:inline-flex lg:w-auto w-full px-3 py-2 rounded font-bold items-center justify-center hover:bg-gray-600 hover:text-white`}
              >
                Dashboard
              </a>
            </Link>
          </div>
        </div>
        <div className="lg:flex hidden">
          <Link href="#">
            <a
              href=""
              className="p-3 w-12 h-12 flex justify-center items-center transition-all rounded-full hover:bg-black hover:text-white"
            >
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </a>
          </Link>
          <Link href="#">
            <a
              href=""
              className="p-3 w-12 h-12 flex justify-center items-center transition-all rounded-full hover:bg-black hover:text-white"
            >
              <FontAwesomeIcon icon={faHeart} />
            </a>
          </Link>
          <Link href="#">
            <a
              href=""
              className="p-3 w-12 h-12 flex justify-center items-center transition-all rounded-full hover:bg-black hover:text-white"
            >
              <FontAwesomeIcon icon={faCartFlatbed} />
            </a>
          </Link>
          <Link href="#">
            <a href="">
              {user.uid?.length > 0 ? (
                <button
                  onClick={googleLogin}
                  className="p-3 w-12 h-12 flex justify-center items-center transition-all rounded-full hover:bg-black hover:text-white"
                >
                  <FontAwesomeIcon icon={faUser} />
                </button>
              ) : (
                <button
                  onClick={googleLogin}
                  className="text-sm px-5 py-2 rounded shadow hover:bg-gray-100 font-bold mx-2"
                >
                  Log In
                </button>
              )}
            </a>
          </Link>
        </div>
        <button
          onClick={toggleDrawer}
          className=" inline-flex p-3 hover:bg-gray-900 rounded lg:hidden ml-auto hover:text-white outline-none"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </nav>
    </div>
  );
};

export default Navbar;
