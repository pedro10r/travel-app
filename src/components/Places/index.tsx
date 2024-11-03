import React from "react";
import {
  ImageBackground,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import { Shortcuts } from "@components/Shortcuts";
import { placesList } from "@data/mockList";

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
                <Text style={styles.title}>Pedro é Homem</Text>
                <Text style={styles.description}>
                  Pedro é uma pessoa muito legal porque ele é da igreja e joga
                  futevolei
                </Text>
              </ImageBackground>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </View>
  );
}
