import React from 'react';
import styles from './css/style';
import {Text, View, FlatList} from 'react-native';

const PostsComponent = ({state}) => {
  const ItemView = ({item}) => {
    return (
      <>
        <Text style={styles.itemStyle}>
          {item.id}
          {':'}
          {item.body}
          {'-'}
          <Text style={[styles.itemStyleBold]}>{item.randomNumber}</Text>
        </Text>
      </>
    );
  };

  const ItemSeparatorView = () => {
    return (
      <View
        style={{
          height: 0.5,
          width: '100%',
          backgroundColor: '#C8C8C8',
        }}
      />
    );
  };

  return (
    <FlatList
      data={state.postList}
      keyExtractor={(item, index) => index.toString()}
      ItemSeparatorComponent={ItemSeparatorView}
      renderItem={ItemView}
    />
  );
};
export default PostsComponent;
