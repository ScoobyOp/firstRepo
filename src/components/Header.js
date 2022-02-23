import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { HiMenuAlt4 } from "react-icons/hi";
import { FaApple } from "react-icons/fa";
import {BsBag} from "react-icons/bs";
import {BiSearch} from "react-icons/bi"

function Header() {
  const NavItems = [
    {
      title: "Store",
      route: "/",
    },
    {
      title: "Pubg",
      route: "/pubg",
    },
    {
      title: "Mac",
      route: "/about",
    },
    {
      title: "iPhone",
      route: "/about",
    },
    {
      title: "Watch",
      route: "/about",
    },
    {
      title: "Airpods",
      route: "/about",
    },
    {
      title: "TV & Home",
      route: "/about",
    },
    {
      title: "Only on Apple",
      route: "/about",
    },
    {
      title: "Accessories",
      route: "/about",
    },
    {
      title: "Support",
      route: "/about",
    }
  ];

  const styles = {
    section: {
      maxHeight: "0vh",
      overflow:"hidden",
      transition: "all 0.5s ease-in",
     
    },
    expand:{
      transition: "all 0.5s ease-out",
      maxHeight:"100vh"
    }
  };
  
  const [showMenu, setShowMenu] = useState("md:hidden");
  let pathName = window.location.pathname;
  return (
    <div className=" text-white fixed top-0 left-0 right-0 z-50">
      {/* Mobile Screen Icons */}
      <div className="flex bg-black xl:hidden lg:hidden 2xl:hidden p-2 md:flex justify-between items-center">
        <div className="text-lg">
          <HiMenuAlt4
            onClick={() => {
              if (showMenu == "md:hidden") {
                setShowMenu("");
              } else {
                setShowMenu("md:hidden");
              }
            }}
          ></HiMenuAlt4>
        </div>
        <div>
          <Link to={"/"}>
            <div className="text-xl">
              <FaApple></FaApple>
            </div>
          </Link>
        </div>
        <div className="text-lg">
          <BsBag></BsBag>
        </div>
      </div>
      <div
        className={`flex bg-black justify-center items-center p-2 ${
          showMenu == "" && "md:flex-col"
        }`}
      >
        {/*Desktop Screen Nav Items and Icons */}
        <div className="flex md:hidden ">
          <Link to={"/"}>
            <div className="text-lg m-2 px-3 flex justify-center items-center">
              <FaApple></FaApple>
            </div>
          </Link>
          {NavItems.map((page) => {
            return (
              <li
                className={`list-none text-xs px-3 m-2 text-gray-400 ${
                  page.route == pathName && "text-white"
                }`}
              >
                <Link to={page.route}> {page.title}</Link>
              </li>
            );
          })}
          <div className="text-base m-2 px-3 flex justify-center items-center">
            <BiSearch></BiSearch>
          </div>
          <div className="text-sm m-2 px-3 flex justify-center items-center">
            <BsBag></BsBag>
          </div>
        </div>
        {/*Mobile Screen Nav Items*/}
        <div
          className={`md:flex justify-start w-full h-screen flex-col xl:hidden lg:hidden 2xl:hidden`}
          style={showMenu == "md:hidden" ? styles.section: styles.expand}
        >
          <div>
            {/* Mobile view search-bar */}
            <div className="flex justify-center items-center p-3">
              <div className="bg-myColor flex justify-center items-center h-10 pl-2 rounded-tl-lg rounded-bl-lg">
                <BiSearch></BiSearch>
              </div>
              <input
                type={"search"}
                className="bg-myColor w-full rounded-tr-lg rounded-br-lg p-2 placeholder:text-gray-500 focus:outline-none"
                placeholder="Search apple.com"
              ></input>
            </div>
          </div>
          {/* Mobile view header items */}
          <div>
            <hr className="text-white border-x-0"></hr>
          </div>
          <div className="px-5">
            {NavItems.map((page, i) => {
              return (
                <li
                  className={`list-none text-lg p-2 text-gray-400 ${
                    page.route == pathName && "text-white"
                  }`}
                >
                  <Link to={page.route}> {page.title}</Link>
                  {NavItems.length - 1 == i ? (
                    ""
                  ) : (
                    <div>
                      <hr className="text-gray-500 border-x-0"></hr>
                    </div>
                  )}
                </li>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
