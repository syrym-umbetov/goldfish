import React, { FC } from "react";

type MainPageCatalogProps = {
  randomGame: Game[];
  loading: boolean;
};
const MainPageCatalog: FC<MainPageCatalogProps> = ({ randomGame, loading }) => {
  return (
    <div>
      <div className=" font-poppins text-lg font-bold mb-5 mt-10">Catalog</div>
      {loading && <div>...Loading</div>}
      <div className="grid grid-cols-4 gap-x-16 gap-y-4">
        {randomGame &&
          randomGame.map(({ name, image_url, id }, index) => (
            <div
              key={id}
              className={`w-[100%]  font-poppins {${
                index === 0 ? "col-start-1 col-span-2 row-span-2" : ""
              }`}
            >
              <div className="">
                <img
                  src={image_url}
                  alt="random"
                  className={`border-black border-2 rounded-lg object-cover ${
                    index === 0 ? "h-[412px] w-[100%]" : "h-[175px] w-[175px]"
                  }`}
                />
              </div>
              <div
                className={`border-t-2 bg-[#2A2A2A] text-white ${
                  index === 0 ? "w-[100%]" : "w-[175px]"
                } h-[46px] text-center p-2 rounded-lg`}
              >
                {name}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default MainPageCatalog;
