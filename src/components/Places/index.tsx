import React from "react";
import {
  ImageBackground,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import { Shortcuts } from "@components/Shortcuts";
import { placesList } from "@data/mockData";

import { styles } from "./styles";

type PlacesProps = {};

export function Places({}: PlacesProps) {
  return (
    <View style={styles.container}>
      <Shortcuts onPress={() => {}} />

      <ScrollView contentContainerStyle={styles.scrollView}>
        <View style={styles.row}>
          {placesList?.map((item, index) => (
            <TouchableOpacity
              activeOpacity={0.8}
              key={index}
              style={styles.column}
            >
              <ImageBackground
                source={item?.image}
                style={styles.card}
                imageStyle={styles.image}
                resizeMode="stretch"
              >
                <Text style={styles.title}>{item?.title}</Text>
                <Text style={styles.description}>{item?.description}</Text>
              </ImageBackground>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </View>
  );
}
