import React, {useState} from 'react';
import {TextInput} from 'react-native';
import Button from './Button';
import styles from './css/style';

const SearchComponent = ({dispatch, state, fetchData}) => {
  const [search, setSearch] = useState('');

  const searchFilterFunction = text => {
    if (text) {
      const newData = state.masterPostList.filter(function (item) {
        const itemData = item.body ? item.body.toUpperCase() : ''.toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });

      dispatch({type: 'search', data: newData, searchText: text});
      setSearch(text);
    } else {
      dispatch({type: 'blank'});
      setSearch(text);
    }
  };
  const onpress = async () => {
    searchFilterFunction(search);
    if (search === '') {
      fetchData(dispatch);
    }
    if (search !== '') {
      fetchData(dispatch, state);
    }
  };
  return (
    <>
      <TextInput
        style={styles.textInputStyle}
        onChangeText={text => searchFilterFunction(text)}
        value={search}
        underlineColorAndroid="transparent"
        placeholder="Search a text"
      />
      <Button onPress={onpress} />
    </>
  );
};

export default SearchComponent;
