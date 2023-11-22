import React from "react";

import {
View,
Text,
SafeAreaView,
StyleSheet,
} from "react-native"


function Login () {
  return (
  <SafeAreaView style={styles.container}>
    <View>
      <Text style={styles.text}>Hi !! </Text>
      <Text style={styles.text}>Welcome to Login Page</Text>
      </View>
  </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems:'center',
    justifyContent:'center',
    backgroundColor: 'white',
  },
  text: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'black'
  },
})

export default Login;