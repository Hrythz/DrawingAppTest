import React from 'react';
import { View, PanResponder, StyleSheet } from 'react-native';
import Svg, { G, Path } from 'react-native-svg';
import Reaction from './Reaction';

export default class SignatureView extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      // set state.currentMax to 0
      currentMax: 0,
      // initialize currentPoints of draw on canvas
      currentPoints: [],
      // create new object reaction to state.reaction
      reaction: new Reaction()
    };

    // set up panResponder to act upon drawing actions
    this.panResponder = PanResponder.create({
      onStartShouldSetPanResponder: (evt, gs) => true,
      onMoveShouldSetPanResponder: (evt, gs) => true,
      onPanResponderGrant: (evt, gs) => this.onResponderGrant(evt, gs),
      onPanResponderMove: (evt, gs) => this.onResponderMove(evt, gs),
      onPanResponderRelease: (evt, gs) => this.onResponderRelease(evt, gs)
    });
  }

  // set current point of touch to x and y coordinations
  onTouch(evt) {
    let [x, y] = [evt.nativeEvent.pageX, evt.nativeEvent.pageY];
    const newCurrentPoints = this.state.currentPoints;
    newCurrentPoints.push({ x, y });

    this.setState({
      donePaths: this.props.donePaths,
      currentPoints: newCurrentPoints,
      currentMax: this.state.currentMax
    });
  }

  // when detect touch on pad, this method calls onTouch method
  onResponderGrant(evt) {
    this.onTouch(evt);
  }

  // when move touch along pad, this method calls onTouch method
  onResponderMove(evt) {
    this.onTouch(evt);
  }

  // when touch released, run this method
  onResponderRelease() {
    const newPaths = this.props.donePaths;
    if (this.state.currentPoints.length > 0) {
      // 
      newPaths.push(
        <Path
          key={this.state.currentMax}
          d={this.state.reaction.pointsToSvg(this.state.currentPoints)}
          stroke={this.props.color}
          strokeWidth={this.props.strokeWidth}
          fill="none"
        />
      );
    }

    this.state.reaction.addGesture(this.state.currentPoints);

    // set state.currentPoints and currentMax
    this.setState({
      currentPoints: [],
      currentMax: this.state.currentMax + 1
    });

    this.props.setDonePaths(newPaths);
  }

  onLayoutContainer = (e) => {
    this.state.reaction.setOffset(e.nativeEvent.layout);
  }

  render() {
    return (
      <View
        onLayout={this.onLayoutContainer}
        style={[
          styles.drawContainer,
          this.props.containerStyle,
          { width: this.props.width, height: this.props.height }
        ]}
      >

        <View {...this.panResponder.panHandlers}>
          <Svg
            style={styles.drawSurface}
            width={this.props.width}
            height={this.props.height}
          >
            <G>
              {this.props.donePaths}
              <Path
                key={this.state.currentMax}
                d={this.state.reaction.pointsToSvg(this.state.currentPoints)}
                stroke={this.props.color}
                strokeWidth={this.props.strokeWidth - 1}
                strokeOpacity={0.5}
                fill="none"
              />
            </G>
          </Svg>

          {this.props.children}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  drawContainer: {
    borderWidth: 1,
    borderRadius: 2,
    borderColor: '#ddd',
    borderBottomWidth: 0,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 1
  },

  drawSurface: {
    backgroundColor: 'transparent'
  }
});