import React from 'react';
import {StyleSheet, Text, View, StatusBar} from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#4CAF50" />
      <Text style={styles.title}>Hello World</Text>
      <Text style={styles.subtitle}>Welcome to React Native!</Text>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2C3E50',
    padding: 20,
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#E74C3C',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 20,
    color: '#ECF0F1',
  },
});
