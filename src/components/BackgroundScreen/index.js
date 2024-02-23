import { ImageBackground } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import styles from './styles';

const bg = require('../../assets/fundo.png');

export function BackgroundScreen( { children } ) {
  return (
    <LinearGradient
      colors={['rgba(248,244,255,0.0)', 'rgba(239,240,244,1.0)']}
      style={styles.linearGradient}
    >
      <ImageBackground 
        source={bg} 
        style={styles.image}
        imageStyle={{
          opacity: 0.2,
          resizeMode: "cover",
          height: '70%',
        }}
      >
        {children}
      </ImageBackground>
    </LinearGradient>
  );
}