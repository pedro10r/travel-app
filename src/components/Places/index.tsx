import React, { useCallback, useState } from "react";
import {
  ImageBackground,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import { Ionicons } from "@expo/vector-icons";

import { Shortcuts } from "@components/Shortcuts";
import { placesList } from "@data/mockData";
import { theme } from "@styles/theme";

import { styles } from "./styles";

export function Places() {
  const [likedItems, setLikedItems] = useState<{ [key: number]: boolean }>({});

  const handlePressLike = useCallback((index: number) => {
    setLikedItems((prevLikedItems) => ({
      ...prevLikedItems,
      [index]: !prevLikedItems[index],
    }));
  }, []);

  return (
    <View style={styles.container}>
      <Shortcuts onPress={() => {}} />

      <ScrollView contentContainerStyle={styles.scrollView}>
        <View style={styles.row}>
          {placesList?.map((item, index) => {
            const isSelected = likedItems[index] || false;

            return (
              <TouchableOpacity
                activeOpacity={0.8}
                key={index}
                style={styles.column}
              >
                <ImageBackground
                  src={item?.image}
                  style={styles.card}
                  imageStyle={styles.image}
                  resizeMode="stretch"
                >
                  <TouchableOpacity
                    activeOpacity={0.4}
                    style={styles.like}
                    onPress={() => handlePressLike(index)}
                  >
                    <Ionicons
                      name="heart"
                      color={isSelected ? theme.colors.red : theme.colors.white}
                      size={20}
                    />
                  </TouchableOpacity>

                  <View>
                    <Text style={styles.title}>{item?.title}</Text>
                    <Text style={styles.description}>{item?.description}</Text>
                  </View>
                </ImageBackground>
              </TouchableOpacity>
            );
          })}
        </View>
      </ScrollView>
    </View>
  );
}
