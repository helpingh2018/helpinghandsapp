import React, { Component } from 'react';
import MapView from 'react-native-maps'
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import styles from './styles'

class Home extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      isMapReady: false,
      region: {
        latitude: 14.4517,
        longitude: 121.0249,
        latitudeDelta: 0.02,
        longitudeDelta: 0.02
      }
    }
  }

  onMapLayout = () => {
    this.setState({ isMapReady: true });
  }

  render () {
    return (
      <View style={styles.container}>
        <MapView
          onPress={e => console.log(e.nativeEvent)}
          style={styles.map}
          provider='google'
          mapType='standard'
          showsScale
          showsCompass
          showsPointsOfInterest
          showsBuildings
          region={this.state.region}
          onLayout={this.onMapLayout}
        >
          { this.state.isMapReady &&
            <MapView.Marker
              title={this.props.title}
              coordinate={{
                latitude: this.state.region.latitude,
                longitude: this.state.region.longitude
              }} />
          }
        </MapView>
      </View>
    )
  }

}
export default Home;