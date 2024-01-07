
import React, { useEffect } from 'react';
import SplashScreen from 'react-native-splash-screen';
import { View, Text, StyleSheet, Image } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';

const Splashscreen = ({navigation}) => {
    useEffect(() => {
        setTimeout(() => {
          navigation.replace('Login');
        }, 5000);
      }, [navigation]);

  return (
    <View style={styles.container}>
      <Image style={styles.icon} source={require('../assets/SplashScreen.png')} />
      <Text style={styles.Icare}>Charitable  {"\n"}           Icare</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  icon: {
    width: 300,
    height: 300,
    resizeMode: 'contain',
  },
  Icare: {
    fontSize: 50,
    fontWeight: 'bold',
  },
});

export default Splashscreen;
