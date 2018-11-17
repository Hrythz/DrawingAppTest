/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';

import { Platform, View, Text, StyleSheet, 
  TouchableOpacity, Dimensions, CameraRoll } from 'react-native';
import { connect } from 'react-redux';

import * as Colors from './src/utils/colors';
// import { alert, confirmation } from 'utils/alert';

import ColorBar from './src/components/ColorBar';
// import DrawBoard from './components/DrawBoard';
// import Header from './components/Header';

type Props = {};
class App extends Component<Props> {
  constructor(props) {
    super(props);
    
    /* initialize variable 'state' on global scope */
    this.state = {
      // set state.color to black color
      color: Colors.black
    };
  }

  onChangeColor = (color) => {
    this.setState({ color });
  }

  render() {
    const { container, welcome, secondbar } = styles;
    return (
      <View>
        <ColorBar style={styles.secondbar} onPress={this.onChangeColor} selected={this.state.color} />
        <Text style={styles.welcome}>Drawing App by Harith</Text>
        <Text style={styles.welcome}>{this.state.color.toString()}</Text>
      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  secondbar: {
    width: Dimensions.get('window').width,

  },
});

function mapStateToProps(state) {
  return {
    // map state properties here e.g: state.people, state.counter
    // simple integer can simply map to state, which is equal to state.value
    color: state.color
  }
}

export default connect(mapStateToProps, null)(App);