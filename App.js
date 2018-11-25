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

import ColorBar from './src/components/ColorBar';
import DrawingCanvas from './src/components/DrawingCanvas';

import { getActualPaths, getCurrentStep, addPath } from './src/actions';

type Props = {};
class App extends Component<Props> {
  constructor(props) {
    super(props);
    
    /* initialize variable 'state' on global scope */
    this.state = {
      // set state.color to black color
      color: Colors.black,
      // set state.strokeWidth to 4
      strokeWidth: 4,
      // initialize draw path in state.donePaths
      paths: []
    };

    this.setDonePaths = this.setDonePaths.bind(this);
  }

  // set new path to state.donePaths
  setDonePaths = (paths) => {
    //this.setState({ paths });
    this.props.addPath(paths);
    console.log(paths);
  }

  // set selected color to state.color
  onChangeColor = (color) => {
    this.setState({ color });
  }

  render() {
    console.log("inside render method...");
    console.log(this.props);
    // console.log(this.state);
    console.log('currentStep: ' + this.props.currentStep);
    const { screen, container, title, text, content } = styles;
    return (
      <View style={styles.screen}>
        {/* display text */}
        <Text style={styles.title}>Drawing App by Harith</Text>
        
        {/* display color options bar */}
        <ColorBar onPress={this.onChangeColor} selected={this.state.color} />
        {/* display selected color */}
        <Text style={styles.text}>{this.state.color.toString()}</Text>

        {/* display drawing canvas bar */}
        <DrawingCanvas
          ref={(view) => { this._DrawingCanvas = view; }}
          paths={this.state.paths}
          setDonePaths={this.setDonePaths}
          containerStyle={styles.content}
          width={Dimensions.get('window').width - 20}
          height={Dimensions.get('window').width - 20}
          color={this.state.color}
          strokeWidth={this.state.strokeWidth}
        />
      </View>
    );
  }
}

// set style for each component on app screen
const styles = StyleSheet.create({
  screen: {
    backgroundColor: '#D3D3D3',
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    margin: 10,
    backgroundColor: '#F5FCFF',
  },
  text: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  content: {
    marginTop: 10,
    alignSelf: 'center',
    backgroundColor: '#FFF',
  },
});

/*
function mapStateToProps(state) {
  console.log('inside mapStateToProps function...');
  return {
    // map state.Draw properties from index.js reducer file to each variable here
    // state.Draw represents drawReducer.js as object
    paths: state.Draw.paths,
    currentStep: state.Draw.currentStep
  }
}
*/

const mapStateToProps = store => ({
  paths: getActualPaths(store),
  currentStep: getCurrentStep(store),
});

export default connect(mapStateToProps, { getActualPaths, getCurrentStep, addPath })(App);