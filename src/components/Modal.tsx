import React, { Dispatch, FC, SetStateAction, ReactNode } from "react";

type ModalProps = {
  setOpenModal: Dispatch<SetStateAction<boolean>>;
  children: ReactNode;
};
const Modal: FC<ModalProps> = ({ setOpenModal, children }) => {
  return (
    <div className="block fixed z-10 left-0 top-0 w-[100%] min-h-screen overflow-auto bg-[rgb(0,0,0,0.4)]">
      <div className="bg-[#fefefe] my-[5%] mx-auto p-5 border-2 rounded-lg border-[#888] w-[500px]">
        {children}
      </div>
    </div>
  );
};

export default Modal;
