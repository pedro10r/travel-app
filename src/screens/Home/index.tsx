import { useState } from "react";
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Text,
  View,
} from "react-native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

import { Input } from "@components/Input";

import { styles } from "./styles";
import { Categories } from "@components/Categories";

export function Home() {
  const [text, onChangeText] = useState("");

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.avoidingViewContainer}
    >
      <ScrollView style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>Let's Discover </Text>

          <MaterialIcons name="account-circle" size={45} />
        </View>

        <View style={styles.content}>
          <Input
            value={text}
            onChangeText={onChangeText}
            placeholder="Search"
          />

          <Categories />
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
