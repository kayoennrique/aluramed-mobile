import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import { BackgroundScreen } from '../../components/BackgroundScreen';
import { UserInformation } from '../../components/UserInformation';
import Icon from 'react-native-vector-icons/MaterialIcons';
import map from '../../assets/mapa.png';
import styles from './styles';
import Animated, { useSharedValue, useAnimatedStyle, withTiming, withRepeat } from 'react-native-reanimated';

export default function Details(props) {
  const datta = props.route.params;
  const rotation = useSharedValue(0);
  const angle = -30;
  const [alreadyAnimated, setAlreadyAnimated] = useState(false);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          rotate: `${rotation.value}deg`
        }
      ]
    }
  });

  function doRotation() {
    rotation.value = withRepeat(withTiming(angle, { duration: 120 }), 6, true)

    setTimeout(() => {
      setAlreadyAnimated(true);
    }, 1000)
  }

  return (
    <BackgroundScreen>
      <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
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
          onPress={doRotation}
        >
          <Text style={styles.buttonText}>Notificar consulta</Text>
          <Animated.View style={[styles.icon, animatedStyle]}>
            <Icon
              name={alreadyAnimated ? 'notifications' : 'notifications-none'}
              size={20}
              color="#FFF"
            />

          </Animated.View>
        </TouchableOpacity>
      </ScrollView>
    </BackgroundScreen>

  )
}