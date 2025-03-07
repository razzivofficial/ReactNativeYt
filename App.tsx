import React from 'react';
import {
  StyleSheet,
  View,
  SafeAreaView,
  Image,
  Text,
  FlatList,
} from 'react-native';

// Dummy data for the FlatList
const dummy = [
  {
    id: 1,
    name: 'John Doe',
    image: 'https://picsum.photos/200/300?random=1',
    email: 'john.doe@example.com',
  },
  {
    id: 2,
    name: 'Jane Smith',
    image: 'https://picsum.photos/200/300?random=2',
    email: 'jane.smith@example.com',
  },
  {
    id: 3,
    name: 'Michael Johnson',
    image: 'https://picsum.photos/200/300?random=3',
    email: 'michael.johnson@example.com',
  },
  {
    id: 4,
    name: 'Emily Brown',
    image: 'https://picsum.photos/200/300?random=4',
    email: 'emily.brown@example.com',
  },
  {
    id: 5,
    name: 'Chris Davis',
    image: 'https://picsum.photos/200/300?random=5',
    email: 'chris.davis@example.com',
  },
  {
    id: 6,
    name: 'Sarah Wilson',
    image: 'https://picsum.photos/200/300?random=6',
    email: 'sarah.wilson@example.com',
  },
  {
    id: 7,
    name: 'David Lee',
    image: 'https://picsum.photos/200/300?random=7',
    email: 'david.lee@example.com',
  },
  {
    id: 8,
    name: 'Olivia Taylor',
    image: 'https://picsum.photos/200/300?random=8',
    email: 'olivia.taylor@example.com',
  },
  {
    id: 9,
    name: 'Liam Moore',
    image: 'https://picsum.photos/200/300?random=9',
    email: 'liam.moore@example.com',
  },
  {
    id: 10,
    name: 'Sophia Harris',
    image: 'https://picsum.photos/200/300?random=10',
    email: 'sophia.harris@example.com',
  },
  {
    id: 11,
    name: 'James Martinez',
    image: 'https://picsum.photos/200/300?random=11',
    email: 'james.martinez@example.com',
  },
  {
    id: 12,
    name: 'Charlotte Clark',
    image: 'https://picsum.photos/200/300?random=12',
    email: 'charlotte.clark@example.com',
  },
  {
    id: 13,
    name: 'Henry Lewis',
    image: 'https://picsum.photos/200/300?random=13',
    email: 'henry.lewis@example.com',
  },
  {
    id: 14,
    name: 'Amelia Walker',
    image: 'https://picsum.photos/200/300?random=14',
    email: 'amelia.walker@example.com',
  },
  {
    id: 15,
    name: 'Lucas Allen',
    image: 'https://picsum.photos/200/300?random=15',
    email: 'lucas.allen@example.com',
  },
  {
    id: 16,
    name: 'Mia Scott',
    image: 'https://picsum.photos/200/300?random=16',
    email: 'mia.scott@example.com',
  },
  {
    id: 17,
    name: 'Ethan Young',
    image: 'https://picsum.photos/200/300?random=17',
    email: 'ethan.young@example.com',
  },
  {
    id: 18,
    name: 'Ella King',
    image: 'https://picsum.photos/200/300?random=18',
    email: 'ella.king@example.com',
  },
  {
    id: 19,
    name: 'Benjamin Perez',
    image: 'https://picsum.photos/200/300?random=19',
    email: 'benjamin.perez@example.com',
  },
  {
    id: 20,
    name: 'Ava Lee',
    image: 'https://picsum.photos/200/300?random=20',
    email: 'ava.lee@example.com',
  },
  {
    id: 21,
    name: 'William Gonzalez',
    image: 'https://picsum.photos/200/300?random=21',
    email: 'william.gonzalez@example.com',
  },
  {
    id: 22,
    name: 'Zoe Harris',
    image: 'https://picsum.photos/200/300?random=22',
    email: 'zoe.harris@example.com',
  },
];

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      {/* FlatList component that renders the list of data */}
      <FlatList
        data={dummy} // Data array passed to FlatList to render
        keyExtractor={item => item.id.toString()} // Unique key extractor for each item
        renderItem={(
          {item}, // Render a custom view for each item in the list
        ) => (
          <View style={styles.card}>
            {/* Displaying the image for the user */}
            <Image style={styles.image} source={{uri: item.image}} />
            <View style={styles.textContainer}>
              {/* Displaying the user's name */}
              <Text style={styles.name}>{item.name}</Text>
              {/* Displaying the user's email */}
              <Text style={styles.email}>{item.email}</Text>
            </View>
          </View>
        )}
      />
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e6e6e6',
    padding: 20,
  },
  card: {
    width: '90%', // Card takes up 90% of the width of the screen
    backgroundColor: '#fff',
    borderRadius: 15,
    padding: 20,
    alignItems: 'center',
    shadowColor: '#000', // Adding shadow to the card for elevation effect
    shadowOffset: {width: 0, height: 2}, // Vertical shadow offset
    shadowOpacity: 0.25, // Shadow opacity
    shadowRadius: 3.5, // Shadow radius
    elevation: 5, // Elevation for Android
    marginBottom: 20, // Spacing between cards
  },
  image: {
    width: 80, // Width of the image
    height: 80, // Height of the image
    borderRadius: 40, // Makes the image circular
    marginBottom: 15, // Space between image and text
  },
  textContainer: {
    alignItems: 'center', // Centers the text inside the container
  },
  name: {
    fontWeight: 'bold', // Makes the name bold
    fontSize: 20, // Font size for the name
    color: '#333', // Color for the name text
    marginBottom: 5, // Space between name and email
  },
  email: {
    fontSize: 16, // Font size for the email
    color: '#777', // Color for the email text
  },
});
