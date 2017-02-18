import React from 'react';
import ImageItem from './ImageItem';

class PhotoList extends React.Component
{
    constructor(props) {
        super(props);
        this.state = {
            SelectedImage: 'id0'
        }
    }

    componentWillMount() {
        this.props.actions.searchPhotos('beach');
    }

    ImageSelected(e) {
        console.log(e.currentTarget.id);
        this.setState({
              SelectedImage: e.currentTarget.id
        });
    }

    render() {
        const {photos, status} = this.props;
        return (
            <div className="slider">
                {photos.map((photo, i) => {
                    console.log(i);
                return (
                    <span className="holder">
                        <input
                            type="radio"
                            name="slide_switch"
                            id={'id'+i}
                            key={'id'+i}
                            checked={this.state.SelectedImage === 'id'+i}
                            onChange={this.ImageSelected.bind(this)}
                        />
			            <label htmlFor={'id'+i}>
                            <ImageItem key={photo.get('id')} photo={photo} />
                        </label>
                        <ImageItem key={photo.get('id')} photo={photo} large={true} />
                    </span>
                );
                })}
            </div>
        );
    }
}
export default PhotoList;
