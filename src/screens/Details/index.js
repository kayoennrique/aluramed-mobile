import React, { useEffect, useState } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, Button } from 'react-native';
import { BackgroundScreen } from '../../components/BackgroundScreen';
import { UserInformation } from '../../components/UserInformation';
import Icon from 'react-native-vector-icons/MaterialIcons';
import map from '../../assets/mapa.png';
import styles from './styles';
import Animated, { useSharedValue, useAnimatedStyle, withSpring } from 'react-native-reanimated';

export default function Details(props) {
  const datta = props.route.params;
  const position = useSharedValue(0);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX: withSpring(position.value * 255)
        }
      ]
    }
  });

  function changeBlockPosition() {
    position.value = Math.random() * 255;
  }

  return (
    <BackgroundScreen>
      <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
        <Animated.View style={[{ backgroundColor: 'green', width: 50, height: 50 }, animatedStyle]} />
        <Button title='Mova' onPress={changeBlockPosition} />
        <UserInformation
          name={datta.name}
          details="Cliente desde 2018"
          photo={datta.photo}
        />
        <View style={styles.detailsMedia}>
          <View style={styles.media}>
            <Text style={styles.subtitle}>Tempo médio de cada consulta</Text>
            <View style={[styles.circle, { borderColor: '#FFB050' }]}>
              <Text style={styles.circleText}>52 min</Text>
            </View>
          </View>
          <View style={styles.media}>
            <Text style={styles.subtitle}>Número de consultas</Text>
            <View style={styles.circle}>
              <Text style={styles.circleText}>22</Text>
            </View>
          </View>
        </View>

        <Text style={styles.subtitle}>Anotações sobre a paciente</Text>
        <Text style={styles.details}>{datta.about}</Text>

        <Text style={styles.subtitle}>Endereço</Text>
        <Image style={styles.imageMap} source={map} />
        <Text>{datta.address}</Text>
        <TouchableOpacity
          style={styles.button}
        >
          <Text style={styles.buttonText}>Notificar consulta</Text>
          <Icon
            name={'notifications-none'}
            size={20}
            color="#FFF"
          />
        </TouchableOpacity>
      </ScrollView>
    </BackgroundScreen>

  )
}