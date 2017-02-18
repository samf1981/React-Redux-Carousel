import Immutable from 'immutable';

const defaultPhotoState = Immutable.fromJS({
    searchText: null,
    photos: [],
    status: null
});

export function photos(state = defaultPhotoState, action) {
    switch (action.type) {
        case 'REQUEST_PENDING':
            return state.merge({
                status: 'PENDING'
            });
            break;
        case 'REQUEST_RESULT':
            var results = action.payload;
            var photos = results.photos;

            return state.merge({
                searchText: results.searchText,
                photos: photos,
                status: 'DONE'
            });
            break;
        default:
            return state;
            break;
    }
};
