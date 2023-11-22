import React, { useEffect } from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';
import Login from './LoginScreen'; 

const SplashScreen = ({ navigation }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
        console.log("Inside setTimeout()");
      navigation.replace('Login'); 
    }, 10000); 
    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <ImageBackground
      source={require('../Image/React_Hero.png')} 
      style={styles.backgroundImage}
    >
      <View style={styles.container}>
        <Text style={styles.text}>Splash Screen</Text>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'stretch',
  },
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white', 
  },
});

export default SplashScreen;
