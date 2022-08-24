import React, { useState, useEffect } from "react";
import Banner from "./../components/Banner";
import { gameDatas } from "../Core/api/REST";

import { dummyJSON } from "../dummydata/dummyJSON";
import MainPageCatalog from "../components/MainPageCatalog";

const Main = () => {
  const [randomGame, setRandomGame] = useState<Game[]>([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const fetch = async () => {
      setLoading(true);
      const objectData = await gameDatas("/api/search", { limit: 5 });
      setRandomGame(objectData.data.games);
      setLoading(false);
    };
    fetch();
  }, []);

  return (
    <div>
      <div className="flex space-x-4">
        {dummyJSON.map(({ title, img, advertText }) => (
          <Banner key={title} title={title} img={img} advertText={advertText} />
        ))}
      </div>
      <div className="mt-2 mb-4 ml-[100px]">
        <MainPageCatalog randomGame={randomGame} loading={loading} />
      </div>
    </div>
  );
};

export default Main;
