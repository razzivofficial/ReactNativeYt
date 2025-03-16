import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

type ProfileProps = {
  navigation: {
    navigate: (screen: string) => void;
  };
};

const Profile: React.FC<ProfileProps> = ({ navigation, route }) => {
  const { id, name } = route.params;
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Profile</Text>
      <Text style={styles.title}>id:{id} Name: {name}</Text>
      <Button
        title="Search"
        onPress={() => navigation.navigate('Search')}
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
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  button: {
    marginTop: 20,
  },
});

export default Profile;
