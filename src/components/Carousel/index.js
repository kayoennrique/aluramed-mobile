import React, { useState, useRef, useEffect } from "react";
import { View, FlatList, Image } from 'react-native';
import styles from './styles';

export function Carousel({ data, weatherAnimation = 1000 }) {
  const carouselRef = useRef();
  const [indication, setIndication] = useState(0);

  function changeObjectPosition() {
    if (indication < data.length - 1) {
      setIndication(indication + 1);
    }
    else {
      setIndication(0);
    }
  }

  useEffect(() => {
    carouselRef.current.scrollToIndex({ index: indication });
    const interval = setInterval(() => {
      changeObjectPosition();
    }, weatherAnimation)
    return () => clearInterval(interval);
  }, [indication]);

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
        ref={carouselRef}
      />
    </View>
  );
}