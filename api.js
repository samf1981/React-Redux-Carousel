export default {
  getPhotos(searchText, cb) {
    fetch('https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=ca370d51a054836007519a00ff4ce59e&text=' + searchText + '&format=json&nojsoncallback=1&per_page=40&per_page=4&page=1')
      .then(function(response) {
        return response.json();
      }).then(function(json) {
        cb(null, json.photos.photo);
      }).catch(function(ex) {
        console.log('parsing failed', ex)
      })
  }
};
