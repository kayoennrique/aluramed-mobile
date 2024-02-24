import React, { useState, useRef, useEffect } from "react";
import { View, FlatList, Image } from 'react-native';
import styles from './styles';

export function Carousel({ data }) {
  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={item => item.id}
        renderItem={({ item, index }) => (
          <Image
            source={item.image}
            style={[styles.image,
            index == data.length - 1 ? { marginRight: 200 } : null
            ]}
            resizeMode="contain"
          />
        )}
      />
    </View>
  )
}