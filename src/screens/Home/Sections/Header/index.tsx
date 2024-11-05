import { Text, View } from "react-native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

import { styles } from "./styles";

export default function Header() {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>Let's Discover </Text>

      <MaterialIcons name="account-circle" size={45} />
    </View>
  );
}
