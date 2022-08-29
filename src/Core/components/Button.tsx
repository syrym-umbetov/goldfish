import React, { FC } from "react";
import { ShoppingCartIcon } from "@heroicons/react/solid";
import { ButtonProps } from "../types/props";

const Button: FC<ButtonProps> = ({ name, contained }) => {
  return (
    <button
      className={` mt-2 hover:opacity-50 border-[#F9A43F] border-2 rounded-lg w-[100%] flex justify-center items-center py-2 px-3 text-xs ${
        contained ? "bg-[#F9A43F] text-[white]" : "text-[#F9A43F]"
      }`}
    >
      {name}
      {contained ? (
        <ShoppingCartIcon className="h-1 w-1 sm:h-5 sm:w-5 stroke-[#F9A43F] mr-2" />
      ) : null}
    </button>
  );
};

export default Button;
