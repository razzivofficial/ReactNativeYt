import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  TouchableOpacity,
  StatusBar,
  Alert,
  Pressable,
  SafeAreaView,
} from 'react-native';

const App = () => {
  return (
    <SafeAreaView>
      <Text>Hellooo</Text>
      <Image
        style={{width: 200, height: 300, marginTop: 30}}
        source={{
          uri: 'https://images.pexels.com/photos/16470858/pexels-photo-16470858/free-photo-of-girls-in-apartment-windows.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
        }}
      />

      <Pressable
        style={{padding: 10, backgroundColor: 'green'}}
        onPress={() => Alert.alert('Presssed!')}>
        <Text style={{color: 'white'}}>Button</Text>
      </Pressable>
    </SafeAreaView>
  );
};

export default App;
