import { Text, TouchableOpacity, View } from "react-native";

import { CategoryList } from "@components/CategoryList";

import { styles } from "./styles";

type CategoriesProps = {};

export function Categories({}: CategoriesProps) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.text}>Categories</Text>

        <TouchableOpacity activeOpacity={0.4}>
          <Text style={[styles.text, styles.button]}>See all</Text>
        </TouchableOpacity>
      </View>

      <CategoryList />
    </View>
  );
}
