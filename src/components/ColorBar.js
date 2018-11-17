import React from 'react';
import { StyleSheet, View, TouchableOpacity, Platform } from 'react-native';
import * as Colors from '../utils/colors';

class ColorPalette extends React.Component {
  colorOptions() {
    // assign object Colors from color.js to allColors
    const allColors = Object.keys(Colors);

    return allColors.map(color => (
      // map each color initialized in color.js to palette
      <TouchableOpacity
        key={color}
        style={[styles.option, { backgroundColor: Colors[color] }]}
        onPress={() => this.props.onPress(Colors[color])}
      />
    ));
  }

  render() {
    return (
      <View style={styles.container}>
        {/* call renderOptions method to display colors palette */}
        {this.colorOptions()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'flex-end',
    flexDirection: 'row',
    flexWrap: 'wrap',
    // justifyContent: 'space-between',
    backgroundColor: '#FFF',
    borderBottomWidth: 1,
    borderColor: '#DDD',
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  option: {
    width: 25,
    height: 25,
    borderRadius: 10,
    marginVertical: 5,
    marginHorizontal: 10
  },
});

export default ColorPalette;