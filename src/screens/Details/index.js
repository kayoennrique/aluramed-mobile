import React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import { BackgroundScreen } from '../../components/BackgroundScreen';
import { UserInformation } from '../../components/UserInformation';
import Icon from 'react-native-vector-icons/MaterialIcons';
import map from '../../assets/mapa.png';
import styles from './styles';

export default function Details(props) {
  const datta = props.route.params;

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