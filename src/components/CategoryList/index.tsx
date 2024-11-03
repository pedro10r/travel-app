import { FlatList } from "react-native";

import { Card } from "@components/Card";

import { cardList } from "../../data/mockList";
import { styles } from "./styles";

type CategoryListProps = {};

export function CategoryList({}: CategoryListProps) {
  return (
    <FlatList
      data={cardList}
      keyExtractor={(item, index) => `${item?.id}_${index}`}
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.container}
      renderItem={({ item }) => <Card data={item} />}
    />
  );
}
