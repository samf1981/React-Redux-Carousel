import React from 'react';

class ImageItem extends React.Component
{
    render() {
        const photo = this.props.photo;
        const photoSrc = 'https://farm' + photo.get('farm') + '.staticflickr.com/' + photo.get('server') + '/' + photo.get('id') + '_' + photo.get('secret') + (this.props.large? '.jpg' :'_q.jpg')
        const photoUrl = 'https://www.flickr.com/photos/'+ photo.get('owner') + '/' + photo.get('id');

        return (
            <img src={photoSrc} />
        );
    }
}
export default ImageItem;
