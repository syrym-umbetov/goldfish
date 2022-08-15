import logo from "../assets/logo.svg";
import instagram from "../assets/instagram.svg";
import facebook from "../assets/facebook.svg";

import {
  ShoppingCartIcon,
  SearchIcon,
  PhoneIcon,
  UserIcon,
  MenuIcon,
} from "@heroicons/react/solid";

const Navbar = () => {
  const navbarArray = [
    "Catalog",
    "Wharhammer",
    "Magic:the Cathering",
    "Events",
    "About Us",
    "Contact",
  ];
  return (
    <div>
      <nav className="h-[72px] sm:h-[82px] bg-main w-full flex justify-between pt-6 pb-5 lg:px-[130px] items-center ">
        <button className="sm:absolute">
          <MenuIcon className="sm:hidden ml-3 w-[25px] h-[25px] stroke-[#ffffff] mr-2" />
        </button>
        <div className="ml-0">
          <img src={logo} alt="logo" className="w-[137px] h-[37px]" />
        </div>
        <form className="mt-[120px] absolute ml-[5%] w-[90%] sm:m-0 sm:block sm:w-[435px] sm:relative ">
          <button className="absolute flex  inset-y-0 right-0 items-center pr-4">
            <SearchIcon className="h-5 w-5 text-[#2a2a2a]-500" />
          </button>
          <input
            className="rounded-none font-poppins block p-2 w-full text-sm text-gray-900 sm:rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Search games"
          />
        </form>
        <div className="hidden sm:flex items-center">
          <PhoneIcon className="h-5 w-5 stroke-[#ffffff] mr-2" />
          <p className="text-[#ffffff] font-poppins">+7 771 606 78 44</p>
        </div>
        <div className="flex">
          <UserIcon className="h-7 w-7 sm:h-5 sm:w-5 stroke-[#ffffff] mr-2" />
          <ShoppingCartIcon className="mr-3 h-7 w-7 sm:mr-0.5 sm:h-5 sm:w-5 stroke-[#ffffff]" />
        </div>
      </nav>
      <nav className="hidden sm:flex h-[52px] bg-navbar2 w-full justify-between pt-6 pb-5 px-[130px] items-center">
        <button>
          <MenuIcon className="w-[25px] h-[25px] stroke-[#ffffff]" />
        </button>
        <ul className="flex">
          {navbarArray.map((item, index) => (
            <li
              className={`${
                index === navbarArray.length - 1 ? "mr-0" : "mr-10"
              } font-poppins text-base font-bold text-main`}
            >
              {item}
            </li>
          ))}
        </ul>
        <div>as</div>
        <div className="flex">
          <img src={instagram} alt="instagram" className="mr-2" />
          <img src={facebook} alt="facebook" />
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
