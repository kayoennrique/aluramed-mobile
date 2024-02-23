import React from "react";
import { View, Text, Image } from "react-native";
import styles from "./styles";

export function UserInformation({ name, details, photo }) {
  return (
    <View style={styles.container}>
      <Image source={photo} style={styles.photo} />
      <View style={styles.information}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.querys}>{details}</Text>
      </View>
    </View> 
  );
}