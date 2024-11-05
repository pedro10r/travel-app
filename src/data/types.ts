import { ImageSourcePropType } from "react-native";

export type TCard = {
  id: number;
  image: string;
  title: string;
};

export type TPlace = {
  id: number;
  image: ImageSourcePropType;
  title: string;
  description: string;
};
