import React from "react";
import logo from "../../assets/logo.svg";
import { mainColor, catalogArray } from "../../constants";
import instagram from "../../assets/instagram.svg";
import facebook from "../../assets/facebook.svg";
import visas from "../../assets/visas.png";

const Footer = () => {
  return (
    <section className="h-[414px] bg-[#2A2A2A] pt-[59px] px-[130px] pb-[35px] font-poppins text-white">
      <div className=" flex justify-between">
        <div className="w-[214px]">
          <a className="" href="#logo">
            <img src={logo} alt="logo" className="h-[36px]" />
          </a>
          <p className="pt-4 text-sm font-normal">
            г. Москва ст.м. Таганская Малый Дровяной переулок 6
          </p>
        </div>
        <div>
          <p className="text-lg font-bold mb-2 hover:text-[#f9a43f] cursor-pointer">
            Каталог
          </p>
          <ul>
            {catalogArray.map((item) => (
              <li className="text-sm leading-7 hover:text-[#f9a43f] cursor-pointer">
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className={`text-lg font-bold z-10 `}>
          <p className={`leading-10 hover:text-[#f9a43f] cursor-pointer`}>
            Правила клуба
          </p>
          <p className="leading-10 hover:text-[#f9a43f] cursor-pointer">
            Мероприятия
          </p>
          <p className="leading-10 hover:text-[#f9a43f] cursor-pointer">
            О нас
          </p>
          <p className="leading-10 hover:text-[#f9a43f] cursor-pointer">
            Контакты
          </p>
          <p className="leading-10 hover:text-[#f9a43f] cursor-pointer">Блог</p>
        </div>
        <div className="text-lg font-bold">
          <p className="leading-10 hover:text-[#f9a43f] cursor-pointer">
            Оплата и достака
          </p>
          <p className="leading-10 hover:text-[#f9a43f] cursor-pointer">
            Гарантия и возврат
          </p>
        </div>
        <div>
          <button
            className={`h-[51px] text-[${mainColor}] border-[${mainColor}] border-2 rounded-lg w-[150px] hover:bg-white`}
          >
            Заказать звонок
          </button>
          <div className=" text-[10px] text-end">
            <p className="mt-[26px]">+7 771 606 78 44</p>
            <p className="left-auto mt-2">umbetov.syrym@gmail.com</p>
            <div className="flex justify-end items-center mt-2">
              <img src={facebook} alt="facebook" className="cursor-pointer" />
              <img
                src={instagram}
                alt="instagram"
                className="ml-2 cursor-pointer"
              />
            </div>
          </div>
        </div>
      </div>
      <hr className="mt-[66px] mx-[-130px]" />
      <div className="mt-[30px] flex justify-between items-center">
        <p className="opacity-40">
          © 2021 MagicGoldFish.ru Политика конфиденциальности
        </p>
        <div>
          <img src={visas} alt="visas" />
        </div>
        <p className="opacity-40">Содержимое не является публичной офертой</p>
      </div>
    </section>
  );
};

export default Footer;
