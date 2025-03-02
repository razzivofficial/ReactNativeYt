import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
  SafeAreaView,
  Alert,
  useColorScheme,
} from 'react-native';

const App = () => {
  const theme = useColorScheme();
  const isDarkMode = theme === 'dark';

  return (
    <SafeAreaView
      style={[
        styles.container,
        isDarkMode ? styles.darkContainer : styles.lightContainer,
      ]}>
      <Text
        style={[
          styles.heading,
          isDarkMode ? styles.darkText : styles.lightText,
        ]}>
        Welcome to My App
      </Text>
      <Image
        style={styles.image}
        source={{
          uri: 'https://images.pexels.com/photos/16470858/pexels-photo-16470858/free-photo-of-girls-in-apartment-windows.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
        }}
      />
      <Pressable
        style={[
          styles.button,
          isDarkMode ? styles.darkButton : styles.lightButton,
        ]}
        onPress={() => Alert.alert('Pressed!')}>
        <Text style={styles.buttonText}>Press Me</Text>
      </Pressable>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  lightContainer: {
    backgroundColor: '#D3D3D3',
  },
  darkContainer: {
    backgroundColor: '#333',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  lightText: {
    color: '#333',
  },
  darkText: {
    color: '#FFF',
  },
  image: {
    width: 300,
    height: 200,
    borderRadius: 15,
    marginBottom: 20,
    resizeMode: 'cover',
  },
  button: {
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    elevation: 5, // Adds shadow for Android
    shadowColor: '#000', // iOS shadow effect
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.1,
    shadowRadius: 6,
  },
  lightButton: {
    backgroundColor: '#3498db',
  },
  darkButton: {
    backgroundColor: '#1e2a47',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
  },
});

export default App;
