import { FlatList } from "react-native";

import { Card } from "@components/Card";
import { TCard } from "@data/types";

import { styles } from "./styles";

type CategoryListProps = {
  data: TCard[];
};

export function CategoryList({ data }: CategoryListProps) {
  return (
    <FlatList
      data={data}
      keyExtractor={(item, index) => `${item?.id}_${index}`}
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.container}
      renderItem={({ item }) => <Card data={item} />}
    />
  );
}
