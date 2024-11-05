import React, { useCallback, useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";

import { styles } from "./styles";

type ShortcutsProps = {
  onPress: () => void;
};

export function Shortcuts({ onPress }: ShortcutsProps) {
  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  const opacity = useSharedValue(1);

  const buttons = ["All", "Popular", "Recommended", "More"];

  const handlePress = useCallback(
    (index: number) => {
      if (index !== selectedIndex) {
        opacity.value = 0;
        opacity.value = withTiming(1, { duration: 700 });

        setSelectedIndex(index);
        onPress();
      }
    },
    [selectedIndex, onPress]
  );

  return (
    <View style={styles.shortcuts}>
      {buttons?.map((item, index) => {
        const isSelected = selectedIndex === index;
        const animatedStyle = useAnimatedStyle(() => ({
          opacity: isSelected ? opacity.value : 1,
        }));

        return (
          <TouchableOpacity
            key={index}
            activeOpacity={1}
            onPress={() => handlePress(index)}
          >
            <Animated.View
              style={[
                styles.button,
                isSelected && styles.buttonActive,
                animatedStyle,
              ]}
            >
              <Text
                style={isSelected ? styles.buttonTextActive : styles.buttonText}
              >
                {item}
              </Text>
            </Animated.View>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}
