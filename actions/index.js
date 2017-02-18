import Api from '../api';

const Actions = {
  REQUEST_PENDING: 'REQUEST_PENDING',
  REQUEST_RESULT: 'REQUEST_RESULT',
}

function loadPhotos(dispatch, searchText, page) {
  dispatch({
    type: Actions.REQUEST_PENDING
  });
  Api.getPhotos(searchText, (error, photos) => {
    dispatch({
      type: Actions.REQUEST_RESULT,
      payload: {
        searchText: searchText,
        photos: photos
      }
    });
  });
};

export function searchPhotos(searchText) {
  return (dispatch) => {
    loadPhotos(dispatch, searchText, 1);
  };
};
