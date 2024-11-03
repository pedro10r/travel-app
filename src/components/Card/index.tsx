import { Text, TouchableOpacity, Image, View } from "react-native";

import { styles } from "./styles";

type CardProps = {
  data: {
    id: number;
    image: string;
    title: string;
  };
};

export function Card({ data }: CardProps) {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.card} activeOpacity={0.8}>
        <Image
          source={{ uri: data?.image }}
          style={styles.image}
          resizeMode="center"
        />
      </TouchableOpacity>
      <Text style={styles.title}>{data?.title}</Text>
    </View>
  );
}
