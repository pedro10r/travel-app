import { TextInput, TextInputProps, View } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

import { styles } from "./styles";
import { theme } from "@styles/theme";

type SearchProps = TextInputProps & {
  placeholder: string;
};

export function Input({ placeholder }: SearchProps) {
  return (
    <View style={styles.container}>
      <Ionicons
        name="search"
        size={22}
        color={theme.colors.gray2}
        style={styles.icon}
      />
      <TextInput style={styles.input} placeholder={placeholder} />
    </View>
  );
}
