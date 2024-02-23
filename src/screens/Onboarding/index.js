import React, { useState } from 'react';
import { View, Text, StatusBar, Image, TouchableOpacity, FlatList } from 'react-native';
import WavyBackground from '../../components/WavyBackground';
import { BackgroundScreen } from '../../components/BackgroundScreen';
import { Form } from '../../components/Form';
import items from './cards';
import styles from './styles';

export default function Onboarding({ navigation }) {
  const [makeLogin, setMakeLogin] = useState(false);
  const [height, setHeight] = useState(250);

  function advance() {
    if (makeLogin) {
      navigation.navigate('Principal');
    } else {
      setHeight(400);
      setMakeLogin(true);
    }
  }

  return (
    <BackgroundScreen>
      <View style={styles.container}>
        <StatusBar barStyle='dark-content' backgroundColor='#FFF' />
        <Image
          source={require('../../assets/logo.png')}
          style={styles.logo}
        />

        <View style={styles.carrosselArea}>
          {!makeLogin && (
            <FlatList
              data={items}
              horizontal
              showsHorizontalScrollIndicator={false}
              keyExtractor={item => item.id}
              renderItem={({ item }) => (
                <Image
                  source={item.image}
                  style={{ height: '100%', width: 150 }}
                  resizeMode="contain"
                />
              )}
            />)}
        </View>
        <Image
          source={require('../../assets/medica.png')}
          style={styles.medicaImg}
        />
        <WavyBackground height={height}>
          <View style={styles.infoArea}>
            {makeLogin ?
              <Form
                titulo="Olá! Acesse sua conta"
                texto="Entre com suas informações. Senão tiver uma conta ainda crie uma agora"
              />
              :
              <View>
                <Text style={styles.title}>Gerencie as suas consultas</Text>
                <Text style={styles.text}>
                  Você consegue gerenciar todas suas consultas e ver o tempo médio de cada, e a quantidade de consultas realizadas.
                </Text>
              </View>
            }

            <TouchableOpacity style={styles.button} onPress={advance}>
              <Text style={styles.buttonText}>{makeLogin ? 'Entrar' : 'Começar'}</Text>
            </TouchableOpacity>
          </View>
        </WavyBackground>
      </View>
    </BackgroundScreen>
  );
}