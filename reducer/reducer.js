import {useReducer} from 'react';
const initialState = {postList: null, masterPostList: null, searchText: null};
function reducer(currentState, action) {
  switch (action.type) {
    case 'all':
      return {
        ...currentState,
        postList: action.data,
        masterPostList: action.data,
      };
    case 'search':
      return {
        ...currentState,
        postList: action.data,
        masterPostList: currentState.masterPostList,
        searchText: action.searchText,
      };
    case 'blank':
      return {
        ...currentState,
        postList: currentState.masterPostList,
        masterPostList: currentState.masterPostList,
      };
  }
}
export const GetReducer = () => {
  return useReducer(reducer, initialState);
};
