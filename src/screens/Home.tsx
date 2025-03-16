import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

type HomeProps = {
  navigation: {
    navigate: (screen: string) => void;
  };
};

const Home: React.FC<HomeProps> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Home</Text>
      <Button
        title="Profile"
        onPress={() => navigation.navigate('Profile', { id: 1, name: 'Raziv' })}
        style={styles.button}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: '500',
    marginBottom: 20,
  },
  button: {
    marginTop: 20,
  },
});

export default Home;
