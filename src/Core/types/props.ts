import { Dispatch, SetStateAction, ReactNode } from "react";

export type ProductCardProps = {
  name: string;
  images: Images;
  price: string;
  players: string;
  playtime: string;
  year_published: number;
  price_text: string;
};

export type BannerProps = {
  title: string;
  img: string;
  advertText: string;
};

export type ButtonProps = {
  name: string;
  contained?: boolean;
};

export type MainPageCatalogProps = {
  randomGame: Game[];
  loading: boolean;
};

export type ModalProps = {
  setOpenModal: Dispatch<SetStateAction<boolean>>;
  children: ReactNode;
};
