import { TCard, TPlace } from "./types";

export const cardList: TCard[] = [
  {
    id: 1,
    image:
      "https://i.pinimg.com/564x/7c/5f/d2/7c5fd2f269d88445817a45b74fd98e8c.jpg",
    title: "Mountain",
  },
  {
    id: 2,
    image:
      "https://i.pinimg.com/736x/13/6f/4a/136f4a640e31dcb3c7236aba2c20bbc2.jpg",
    title: "Sunset",
  },
  {
    id: 3,
    image:
      "https://i.pinimg.com/736x/46/53/c8/4653c81e1dc28014f812a8dfd66184a9.jpg",
    title: "Camp",
  },
  {
    id: 4,
    image:
      "https://i.pinimg.com/736x/14/1a/a3/141aa3100e8332f14d4fb6e708db39f7.jpg",
    title: "City",
  },
  {
    id: 5,
    image:
      "https://i.pinimg.com/564x/79/9e/9f/799e9fff66e8b4a29faabca7cd93940b.jpg",
    title: "Beach",
  },
  {
    id: 6,
    image:
      "https://i.pinimg.com/736x/5c/10/ba/5c10bacaf3e52e558ac8e202ea90df5d.jpg",
    title: "Forest",
  },
];

export const placesList: TPlace[] = [
  {
    id: 1,
    image: require("@assets/city.jpg"),
    title: "Paris",
    description:
      "Cidade das Luzes, famosa por sua arte, arquitetura, gastronomia e marcos históricos, como a Torre Eiffel",
  },
  {
    id: 2,
    image: require("@assets/sunset.jpg"),
    title: "Dubai",
    description:
      "Cidade futurista no deserto, com arranha-céus, luxo, comércio e atrações inovadoras como o Burj Khalifa",
  },
  {
    id: 3,
    image: require("@assets/camp.jpeg"),
    title: "Londres",
    description:
      "Cidade futurista no deserto, com arranha-céus, luxo, comércio e atrações inovadoras como o Burj Khalifa",
  },
  {
    id: 4,
    image: require("@assets/onboarding.jpeg"),
    title: "Madrid",
    description:
      "Capital da Espanha, rica em cultura, com museus famosos, culinária tradicional e animada vida noturna",
  },
];
