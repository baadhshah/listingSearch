import React, {useEffect} from 'react';
import {SafeAreaView, View} from 'react-native';

import SearchComponent from './component/SearchComponent';
import PostsComponent from './component/PostsComponent';
import {fetchData} from './component/api/api';
import {GetReducer} from './reducer/reducer';
import Header from './component/Header';
import styles from './component/css/style';

const App = () => {
  const [state, dispatch] = GetReducer();
  useEffect(() => {
    console.log('state.searchText', state.searchText);
    fetchData(dispatch, state);
  },[]);

  console.log('=====state======', state);
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Header />
        <SearchComponent
          dispatch={dispatch}
          state={state}
          fetchData={fetchData}
        />
        <PostsComponent dispatch={dispatch} state={state} />
      </View>
    </SafeAreaView>
  );
};

export default App;
