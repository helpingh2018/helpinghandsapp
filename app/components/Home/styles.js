import { Dimensions, StyleSheet } from 'react-native'
// import { Colors, Metrics } from '../../Themes/'

const width = Dimensions.get('window').width
const height = Dimensions.get('window').height

export default StyleSheet.create({
  container: {
    flex: 1
  },
  map: {
    flex: 1,
    height: height,
    width: width
  }
})