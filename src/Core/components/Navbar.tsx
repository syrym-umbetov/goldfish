import logo from "../../assets/logo.svg";
import instagram from "../../assets/instagram.svg";
import facebook from "../../assets/facebook.svg";
import { useState } from "react";
import SignUp from "../../Authorization/components/SignUp";
import { useAuth } from "../../Authorization/components/contexts/AuthContext";

import {
  ShoppingCartIcon,
  SearchIcon,
  PhoneIcon,
  UserIcon,
  MenuIcon,
} from "@heroicons/react/solid";
import { gameDatas } from "../api/REST";
import { Link, useNavigate } from "react-router-dom";
import Modal from "./Modal";

const Navbar = () => {
  const navigate = useNavigate();
  const [error, setError] = useState("");
  async function handleLogout() {
    setError("");
    try {
      await logout();
      navigate("/");
    } catch {
      setError("Failed to logout");
    }
  }
  const { currentUser, logout } = useAuth();
  const [openSignUp, setOpenSignUp] = useState(false);

  const [searchInput, setSearchInput] = useState("");
  const [game, setGame] = useState<Game[]>([]);
  const fetchData = () => {
    const fetch = async () => {
      const objectData = await gameDatas("/api/search", {
        name: searchInput,
      });
      setGame(objectData.data.games);
    };

    fetch();
  };

  const searchItems = (searchValue: any) => {
    if (searchValue) {
      setSearchInput(searchValue);
      fetchData();
    } else {
      setSearchInput("");
      setGame([]);
    }
  };

  const navbarArray = [
    "Catalog",
    "Wharhammer",
    "Magic:the Cathering",
    "Events",
    "About Us",
    "Contact",
  ];

  const handleSubmit = (event: any) => {
    event.preventDefault();
  };

  return (
    <div>
      <nav
        className={`h-[72px] sm:h-[82px] bg-main w-full flex justify-between pt-6 pb-5 ${
          currentUser ? "pl-[130px] pr-[30px]" : "lg:px-[130px]"
        } items-center `}
      >
        <button className="sm:absolute">
          <MenuIcon className="sm:hidden ml-3 w-[25px] h-[25px] stroke-[#ffffff] mr-2" />
        </button>
        <Link to="/">
          <div className="ml-0">
            <img src={logo} alt="logo" className="w-[137px] h-[37px]" />
          </div>
        </Link>

        <form
          onSubmit={handleSubmit}
          className="mt-[120px] absolute ml-[5%] w-[90%] sm:m-0 sm:block sm:w-[435px] sm:relative "
        >
          <button
            type="submit"
            className="absolute flex  inset-y-0 right-0 items-center pr-4"
          >
            <SearchIcon className="h-5 w-5 text-[#2a2a2a]-500" />
          </button>
          <input
            type="text"
            value={searchInput}
            className="rounded-none font-poppins block p-2 w-full text-sm text-gray-900 sm:rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Search games"
            onChange={(e) => searchItems(e.target.value)}
            list="browsers"
          />
          {game.length ? (
            <ul className="font-poppins text-sm absolute w-[100%] rounded bg-white">
              {game.map(({ name }) => (
                <>
                  <div className="flex justify-between p-1.5 hover:bg-gray-200">
                    <li className="">{name}</li>
                    <SearchIcon className="h-5 w-5 text-[#2a2a2a]-500 mr-2.5" />
                  </div>
                  <hr />
                </>
              ))}
            </ul>
          ) : null}
        </form>

        <div className="hidden sm:flex items-center">
          <PhoneIcon className="h-5 w-5 stroke-[#ffffff] mr-2" />
          <p className="text-[#ffffff] font-poppins">+7 771 606 78 44</p>
        </div>
        <div className="flex items-center font-poppins text-sm">
          {currentUser ? (
            <div className="text-white mr-2">{currentUser?.email}</div>
          ) : (
            <div
              className="text-white mr-2  cursor-pointer border-2 border-[#f9a43f] bg-[#F9a43f] hover:brightness-125 rounded p-2"
              onClick={() => setOpenSignUp((prev) => !prev)}
            >
              LOG IN
            </div>
          )}
          {currentUser ? (
            <button
              className="text-white  border-2 border-white hover:bg-[#F9a43f] rounded p-2 mr-2"
              onClick={() => handleLogout()}
            >
              Log out
            </button>
          ) : null}
          <UserIcon
            className="hover:stroke-[#F9A43F] h-7 w-7 sm:h-5 sm:w-5 stroke-[#ffffff] mr-2 cursor-pointer"
            onClick={() => setOpenSignUp((prev) => !prev)}
          />
          {openSignUp && (
            <Modal setOpenModal={setOpenSignUp}>
              <SignUp setOpenSignUp={setOpenSignUp} />
            </Modal>
          )}
          <ShoppingCartIcon className="hover:stroke-[#F9A43F] cursor-pointer mr-3 h-7 w-7 sm:mr-0.5 sm:h-5 sm:w-5 stroke-[#ffffff]" />

          {error && <h2>{error}</h2>}
        </div>
      </nav>
      <nav className="hidden sm:flex h-[52px] bg-navbar2 w-full justify-between pt-6 pb-5 px-[130px] items-center">
        <button>
          <MenuIcon className="w-[25px] h-[25px] stroke-[#ffffff]" />
        </button>
        <ul className="flex">
          {navbarArray.map((item, index) => (
            <li
              key={index}
              className={`${
                index === navbarArray.length - 1 ? "mr-0" : "mr-10"
              } font-poppins text-base font-bold text-main`}
            >
              {item}
            </li>
          ))}
        </ul>
        <div className="flex">
          <img src={instagram} alt="instagram" className="mr-2" />
          <img src={facebook} alt="facebook" />
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
