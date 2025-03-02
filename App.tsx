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
  return (
    // SafeAreaView ensures the UI is displayed within the safe boundaries of the device
    <SafeAreaView style={styles.container}>
      {/* Three boxes with different flex values */}
      <View style={styles.box1} />
      <View style={styles.box2} />
      <View style={styles.box3} />
    </SafeAreaView>
  );
};

export default App;

// total flex = 3 + 2 + 1 = 6
// box1 takes up 3 parts of the total 6 flex, box2 takes 2 parts, and box3 takes 1 part.
// So, the widths will be split like this:
// box1: 3/6 = 50% of the width
// box2: 2/6 = 30% of the width
// box3: 1/6 = 20% of the width

const styles = StyleSheet.create({
  container: {
    // flex: 1 takes up the entire available space
    flex: 1,
    // background color of the entire container is black
    backgroundColor: 'black',
    // flexDirection: 'row' arranges the children (boxes) horizontally (side-by-side)
    flexDirection: 'row',
  },
  box1: {
    // flex: 3 means box1 will take 3 parts of the total available space
    flex: 3,
    // background color of box1 is orange
    backgroundColor: 'orange',
  },
  box2: {
    // flex: 2 means box2 will take 2 parts of the total available space
    flex: 2,
    // background color of box2 is white
    backgroundColor: 'white',
  },
  box3: {
    // flex: 1 means box3 will take 1 part of the total available space
    flex: 1,
    // background color of box3 is green
    backgroundColor: 'green',
  },
});
