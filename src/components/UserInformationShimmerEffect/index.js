import React from "react";
import { View, Text, Image } from "react-native";
import styles from "../UserInformation/styles";
import shimmerGif from '../../assets/shimmer.gif';

export function UserInformationShimmerEffect() {
  return (
    <View style={styles.container}>
      <Image source={shimmerGif} style={[styles.photo, { overlayColor: '#FFF' }]} />
      <View style={styles.information}>
        <Image source={shimmerGif} style={{ width: 200, height: 25 }} />
        <Text style={styles.name}></Text>
        <Image source={shimmerGif} style={{ width: 175, height: 18 }} />
        <Text style={styles.querys}></Text>
      </View>
    </View>
  );
}