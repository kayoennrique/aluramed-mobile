import React, { useState } from 'react';
import { View, Text, StatusBar, Image, TouchableOpacity, LayoutAnimation } from 'react-native';
import WavyBackground from '../../components/WavyBackground';
import { BackgroundScreen } from '../../components/BackgroundScreen';
import { Form } from '../../components/Form';
import { Carousel } from '../../components/Carousel';
import items from './cards';
import styles from './styles';

export default function Onboarding({ navigation }) {
  const [makeLogin, setMakeLogin] = useState(false);
  const [height, setHeight] = useState(250);

  const animationCustom = {
    duration: 1500,
    create: {
      type: LayoutAnimation.Types.spring,
      property: LayoutAnimation.Properties.scaleXY,
      springDamping: 0.7
    }
  }

  LayoutAnimation.configureNext(animationCustom);

  function advance() {
    if (makeLogin) {
      navigation.navigate('Principal');
    } else {
      setHeight(400);
      LayoutAnimation.linear();
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
            <Carousel data={items} weatherAnimation={2000} />
          )}
        </View>
        <Image
          source={require('../../assets/medica.png')}
          style={styles.medicaImg}
        />
        <WavyBackground height={height}>
          <View style={styles.infoArea}>
            {makeLogin ?
              <Form
                title="Olá! Acesse sua conta"
                text="Entre com suas informações. Senão tiver uma conta ainda crie uma agora"
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