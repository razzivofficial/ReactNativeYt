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
      <View style={styles.box1} />
      <View style={styles.box2} />
      <View style={styles.box3} />
      <View style={styles.box1} />
      <View style={styles.box2} />
      <View style={styles.box3} />
      <View style={[styles.box1, {backgroundColor: 'blue'}]} />
      <View style={[styles.box2, {backgroundColor: 'pink'}]} />
      <View style={[styles.box3, {backgroundColor: 'red'}]} />
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    // flex: 1 takes up the entire available space
    flex: 1,
    // background color of the entire container is black
    backgroundColor: 'black',
    // flexDirection: 'column' arranges the children (boxes) vertically (default is 'column')
    flexDirection: 'column', // default is column. To make them horizontal, use 'row'

    // justifyContent controls alignment along the main axis (vertical in column, horizontal in row)
    // 'flex-start': Align to the top (or left in row)
    // 'flex-end': Align to the bottom (or right in row)
    // 'center': Align to the center
    // 'space-between': Equal space between items, no space before first or after last item
    // 'space-around': Equal space around each item (including space before the first and after the last)
    // 'space-evenly': Equal space between items and at the edges
    justifyContent: 'flex-start', // Aligns all the child items to the top of the container (since flexDirection is 'column')

    // alignItems controls alignment along the cross axis (horizontal in column, vertical in row)
    // 'flex-start': Align to the start (left in column, top in row)
    // 'flex-end': Align to the end (right in column, bottom in row)
    // 'center': Center the items in the container
    // 'stretch': Stretch the items to fill the cross axis
    // 'baseline': Align items along their text baseline
    alignItems: 'center', // Centers all the child items horizontally (in column mode)

    // alignContent controls the alignment of items when there is more than one line of items
    // This property is only useful when flexWrap is set to 'wrap'
    // 'flex-start': Align all the lines to the top
    // 'flex-end': Align all the lines to the bottom
    // 'center': Align all the lines to the center
    // 'space-between': Distribute lines with equal space between them
    // 'space-around': Distribute lines with equal space around them
    // 'stretch': Stretch the lines to fill the container
    alignContent: 'flex-start', // Aligns the lines of items to the start (top in column mode)

    // flexWrap allows items to wrap onto the next line if they don't fit in the container's main axis
    // 'nowrap' (default): Items will stay in one line and overflow if necessary
    // 'wrap': Items will wrap onto the next line when they don't fit
    flexWrap: 'wrap', // Allows wrapping of child items onto the next line if space runs out
  },
  box1: {
    width: 100,
    height: 100,
    // background color of box1 is orange
    backgroundColor: 'orange',

    // flexGrow defines how much an item should grow relative to other items in the flex container
    // A value of 1 means it will grow to take the available space equally, 0 means it will not grow
    flexGrow: 1, // This box will grow to fill any extra available space equally with the other items
  },
  box2: {
    width: 100,
    height: 100,
    // background color of box2 is white
    backgroundColor: 'white',

    // alignSelf allows overriding alignItems for individual elements (works only for this item)
    // 'auto': Follows the container's alignItems setting
    // 'flex-start': Align to the start (left in column, top in row)
    // 'flex-end': Align to the end (right in column, bottom in row)
    // 'center': Center the item along the cross axis
    // 'stretch': Stretch the item along the cross axis to fill the space
    // 'baseline': Align to the text baseline
    alignSelf: 'flex-start', // Align this box to the top (overrides alignItems for this box)
  },
  box3: {
    width: 100,
    height: 100,
    // background color of box3 is green
    backgroundColor: 'green',

    // alignSelf can override the default alignment set by alignItems
    alignSelf: 'center', // Centers this box horizontally (since alignItems is 'center' for the container)
  },
});
