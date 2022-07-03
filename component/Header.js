import React from 'react';
import {Image} from 'react-native';
import styles from './css/style';
const SplashGif = require('../assets/doggo_walk.gif');

const Header = () => {
  return <Image source={SplashGif} style={styles.imageStyles} />;
};
export default Header;
