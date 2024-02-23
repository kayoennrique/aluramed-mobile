import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import styles from "./styles";
import Icon from 'react-native-vector-icons/Feather';

export function CardConsultation({ name, photo, time, typeQuery, icon }) {
  return (
    <View style={styles.container}>
      <View style={styles.peopleArea}>
        <Image source={photo} style={styles.photo} />
        <View style={styles.informacoes}>
          <Text style={styles.name}>{name}</Text>
          <View style={styles.consultationArea}>
            <Icon name={icon} size={16} color="#A3A3A3" />
            <Text style={styles.querys}>{typeQuery}</Text>
          </View>
        </View>
      </View>
      <View style={styles.informationSchedule}>
        <Text style={styles.text}>{time}</Text>
        <View style={styles.buttonsArea}>
          {icon === "video" ? 
          <>
            <TouchableOpacity style={[styles.button, { backgroundColor: '#FFB050' }]}>
              <Text style={styles.buttonText}>Ligar por vídeo</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Ligar por áudio</Text>
            </TouchableOpacity>
          </> :
            <TouchableOpacity style={styles.buttonLocation}>
              <Text style={[styles.buttonText, {color: '#FFF'}]}>Ver endereço</Text>
            </TouchableOpacity>
          }
        </View>
      </View>
    </View>
  );
}