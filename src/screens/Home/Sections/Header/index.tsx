import { Text, TouchableOpacity, View } from "react-native";

import ProfileIcon from "@assets/icons/profile.svg";

import { styles } from "./styles";

export default function Header() {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>Let's Discover</Text>

      <TouchableOpacity activeOpacity={0.6}>
        <ProfileIcon height={45} width={45} />
      </TouchableOpacity>
    </View>
  );
}
