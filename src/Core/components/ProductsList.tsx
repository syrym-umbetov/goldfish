import React, { useState, useEffect, useContext } from "react";
import ProductCard from "./ProductCard";
import { gameDatas } from "../api/REST";
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/solid";
import Loader from "../../utils/Loader";
import "../utils/hideScrollbar.css";
import { arrowIcons, sectionTitles } from "../../constants";
import { flexCenter } from "./../../constants";

const LeftArrow = () => {
  const { scrollPrev } = useContext(VisibilityContext);

  return (
    <ChevronLeftIcon className={arrowIcons} onClick={() => scrollPrev()} />
  );
};

const RightArrow = () => {
  const { scrollNext } = useContext(VisibilityContext);

  return (
    <ChevronRightIcon
      className={`${arrowIcons} right-[20px] `}
      onClick={() => scrollNext()}
    />
  );
};

const ProductsList = () => {
  const [game, setGame] = useState<Game[]>([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const fetch = async () => {
      setLoading(true);
      const objectData = await gameDatas("/api/search", { skip: 5 });
      setGame(objectData.data.games);
      setLoading(false);
    };
    fetch();
  }, []);
  return (
    <div>
      <div className={sectionTitles}>Be first to buy</div>
      <div className={flexCenter}>{loading && <Loader />}</div>
      <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
        {game.map((item) => (
          <ProductCard key={item.id} {...item} />
        ))}
      </ScrollMenu>

      <div className={sectionTitles}>Special offers</div>
      <div className={flexCenter}>{loading && <Loader />}</div>
      <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
        {game.reverse().map((item) => (
          <ProductCard key={item.id} {...item} />
        ))}
      </ScrollMenu>
    </div>
  );
};

export default ProductsList;
