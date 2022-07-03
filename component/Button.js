import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import styles from './css/style';
export default function Button(props) {
  const {onPress, title = 'Re-render'} = props;
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}
