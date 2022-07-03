import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
  },
  itemStyle: {
    padding: 10,
  },
  itemStyleBold: {
    fontWeight: 'bold',
  },
  textInputStyle: {
    height: 40,
    borderWidth: 1,
    paddingLeft: 20,
    margin: 5,
    borderColor: '#000000',
    backgroundColor: '#FFFFFF',
  },
  button: {
    paddingVertical: 8,
    paddingHorizontal: 10,
    marginLeft: 6,
    width: '30%',
    elevation: 3,
    backgroundColor: '#D3D3D3',
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    letterSpacing: 0.25,
    color: 'black',
  },
  imageStyles: {
    resizeMode: 'stretch',
    width: '100%',
  },
});

export default styles;
