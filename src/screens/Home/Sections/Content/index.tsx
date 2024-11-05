import { useState } from "react";
import { View } from "react-native";

import { Categories } from "@components/Categories";
import { Input } from "@components/Input";
import { Places } from "@components/Places";

import { styles } from "./styles";

export default function Content() {
  const [text, onChangeText] = useState("");

  return (
    <View style={styles.container}>
      <Input value={text} onChangeText={onChangeText} placeholder="Search" />

      <Categories />

      <Places />
    </View>
  );
}
