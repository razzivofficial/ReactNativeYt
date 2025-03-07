import React from 'react';
import {StyleSheet, View, SafeAreaView, ScrollView} from 'react-native';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      {/* 
        ScrollView: A container that allows scrolling, 
        either vertically or horizontally, through its child components.
        The `horizontal` prop enables horizontal scrolling.
      */}
      <ScrollView contentContainerStyle={styles.scrollViewContent} horizontal>
        {/* 
          Views inside ScrollView will be arranged horizontally due to `flexDirection: 'row'`.
          By default, ScrollView uses vertical scrolling, but setting `horizontal` to true 
          changes this to horizontal scrolling.
        */}
        <View style={styles.box1} />
        <View style={styles.box2} />
        <View style={styles.box3} />
        <View style={styles.box1} />
        <View style={styles.box2} />
        <View style={styles.box3} />
        <View style={styles.box1} />
        <View style={styles.box2} />
        <View style={styles.box3} />
        <View style={[styles.box1, {backgroundColor: 'blue'}]} />
        <View style={[styles.box2, {backgroundColor: 'pink'}]} />
        <View style={[styles.box3, {backgroundColor: 'red'}]} />
        <View style={styles.box1} />
        <View style={styles.box2} />
        <View style={styles.box3} />
        <View style={[styles.box1, {backgroundColor: 'blue'}]} />
        <View style={[styles.box2, {backgroundColor: 'pink'}]} />
        <View style={[styles.box3, {backgroundColor: 'red'}]} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  // SafeAreaView to ensure the content is displayed correctly
  // without being obscured by the status bar or device edges.
  container: {
    flex: 1, // Take up the full available space.
    backgroundColor: 'black',
    padding: 10, // Padding around the SafeAreaView to avoid content touching the edges.
    marginTop: 50, // Optional: Adds a margin at the top to push the content down a bit.
  },

  // contentContainerStyle: Defines the styles of the content within the ScrollView.
  // The `flexDirection: 'row'` ensures that the child elements of ScrollView are laid out horizontally.
  // Without this, the default `flexDirection: 'column'` would cause the boxes to be stacked vertically.
  scrollViewContent: {
    flexDirection: 'row', // Makes ScrollView's children laid out in a horizontal line.
  },

  // Box styles:
  // The boxes are given fixed width and height, and a background color to visually distinguish them.
  box1: {
    width: 100, // Each box has a fixed width of 100 units.
    height: 100, // Each box has a fixed height of 100 units.
    backgroundColor: 'orange', // Background color set to orange for box1.
    borderRadius: 50, // Border radius set to 50 to make the box circular.
    marginRight: 10, // Space between the boxes horizontally.
  },

  box2: {
    width: 100, // Same width as box1.
    height: 100, // Same height as box1.
    backgroundColor: 'white', // Background color set to white for box2.
    borderRadius: 50, // Border radius set to 50 to make the box circular.
    marginRight: 10, // Space between the boxes horizontally.
  },

  box3: {
    width: 100, // Same width as box1.
    height: 100, // Same height as box1.
    backgroundColor: 'green', // Background color set to green for box3.
    borderRadius: 50, // Border radius set to 50 to make the box circular.
    marginRight: 10, // Space between the boxes horizontally.
  },
});
