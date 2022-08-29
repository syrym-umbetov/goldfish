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
