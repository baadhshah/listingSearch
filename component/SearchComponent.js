import React, {useState} from 'react';
import {TextInput} from 'react-native';
import Button from './Button';
import styles from './css/style';

const SearchComponent = ({dispatch, state, fetchData}) => {
  const [search, setSearch] = useState('');

  const searchFilterFunction = text => {
    // Check if searched text is not blank
    if (text) {
      console.log('text changing', text);
      const newData = state.masterPostList.filter(function (item) {
        const itemData = item.body ? item.body.toUpperCase() : ''.toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });

      dispatch({type: 'search', data: newData, searchText: text});
      setSearch(text);
    } else {
      console.log('blank text', state);
      dispatch({type: 'blank'});
      setSearch(text);
    }
  };
  const onpress = async () => {
    console.log('-search-', search);
    searchFilterFunction(search);
    console.log('refresh');
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
