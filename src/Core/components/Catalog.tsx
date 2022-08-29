import { FC, Dispatch, SetStateAction } from "react";
import { XCircleIcon } from "@heroicons/react/solid";
import close from "../../assets/close.svg";

type CatalogProps = {
  setCatalogOpen: Dispatch<SetStateAction<boolean>>;
};

const Catalog: FC<CatalogProps> = ({ setCatalogOpen }) => {
  return (
    <div className="absolute top-[82px] left-[130px] w-[800px] h-[395px] bg-white border-2 border-black py-6 px-[30px]">
      <div className="flex items-center justify-start ">
        <button onClick={() => setCatalogOpen((prev: boolean) => !prev)}>
          <span className="font-bold hover:text-sky-500 hover:cursor-pointer hover:no-underline">
            <img
              className="h-2 w-2 sm:h-[25px] sm:w-[25px]"
              src={close}
              alt="closeicon"
            />
          </span>
        </button>
        <p
          className="text-lg ml-3 font-bold cursor-pointer"
          onClick={() => setCatalogOpen((prev: boolean) => !prev)}
        >
          All categories
        </p>
      </div>
      <hr className="border-t-2 mx-[-30px] mt-2" />
      <hr className="origin-[130px_68px] rotate-90 w-[392px]  border-t-2" />
      <div className="float-left">as</div>
    </div>
  );
};

export default Catalog;
