import {randomNumber} from '../utils';
export const fetchData = (dispatch, state) => {
  let post = null;
  const list = [];
  fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(responseJson => {
      for (let i = 0; i < 30; i++) {
        responseJson.map((data, index) => {
          post = {
            id: data.id,
            body: data.body,
            randomNumber: randomNumber(1000000000, 9000000000),
          };
          list.push(post);
        });
      }
      dispatch({type: 'all', data: list});
      if (state !== undefined && state.searchText !== null) {
        const newData = state.masterPostList.filter(function (item) {
          const itemData = item.body
            ? item.body.toUpperCase()
            : ''.toUpperCase();
          const textData = state.searchText.toUpperCase();
          return itemData.indexOf(textData) > -1;
        });
        dispatch({type: 'search', data: newData, searchText: state.searchText});
      }
    })
    .catch(error => {
      console.error(error);
    });
};
