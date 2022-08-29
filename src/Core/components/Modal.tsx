import { FC } from "react";
import { ModalProps } from "../types/props";

const Modal: FC<ModalProps> = ({ setOpenModal, children }) => {
  return (
    <div className="block fixed z-10 top-0 left-[30%] w-[427px] h-[466px] overflow-auto bg-[rgb(0,0,0,0.4)] bg-[#fefefe] my-[5%] mx-auto p-5 border-2 rounded-lg border-[#888]">
      {children}
    </div>
  );
};

export default Modal;
