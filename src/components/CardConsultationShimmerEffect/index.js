import React from "react";
import { View, Image } from "react-native";
import styles from "../CardConsultation/styles";
import shimmerGif from '../../assets/shimmer.gif';

export function CardConsultationShimmerEffect() {
  return (
    <View style={styles.container}>
      <View style={styles.peopleArea}>
        <Image source={shimmerGif} style={[styles.photo, { overlayColor: '#FFF' }]} />
        <View style={styles.information}>
          <Image source={shimmerGif} style={{ width: 200, height: 25 }} />
          <View style={styles.consultationArea}>
            <Image source={shimmerGif} style={{ width: 100, height: 15, marginTop: 5 }} />
          </View>
        </View>
      </View>
      <View style={styles.informationSchedule}>
        <Image source={shimmerGif} style={{ width: 100, height: 15 }} />
        <View style={styles.buttonsArea}>
          <Image source={shimmerGif} style={{ width: '100%', height: 50, borderRadius: 10, overlayColor: '#FFF' }} />
        </View>
      </View>
    </View>
  );
}