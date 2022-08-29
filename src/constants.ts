import magic from "./assets/centerimage.svg";
import left from "./assets/image1.svg";
import right from "./assets/image2.svg";

export const inputStyle = `border-2 border-gray-500 rounded w-[100%] h-[45px] mt-3 p-2 active:border-red`;

export const dummyJSON = [
  {
    title: "Весь каталог",
    img: right,
    advertText: "Попробуй игры разных жанров",
  },
  {
    title: "Magic the gathering",
    img: magic,
    advertText: "Самая популярная карточная игра",
  },
  {
    title: "Warhammer games",
    img: left,
    advertText: "Настольная игра варгейм",
  },
];

export const navbarArray = [
  "Warhammer",
  "Magic:the Cathering",
  "Events",
  "About Us",
  "Contact",
];

export const arrowIcons =
  "mt-[200px] cursor-pointer hover:scale-150 hover:ease-in-out w-[50px] absolute z-[1]";

export const flexCenter = "flex justify-center items-center";

export const sectionTitles = "text-lg font-bold mb-5 mt-10";

export const mainColor = "#F9A43F";

export const catalogArray = [
  "Warhammer 40000",
  "Настольные игры",
  "Magic: the Gathering",
  "Аксессуары для игр",
  "Краски ",
  "Аксессуары для моделизма",
];
