import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'redux/react';
import * as Actions from '../actions';
import PhotoList from '../components/PhotoList';

class PhotoApp extends React.Component
{
    render() {
        const actions = bindActionCreators(Actions, this.props.dispatch);
        const { photos, status, dispatch } = this.props;

        return (
            <div className="container">
                <PhotoList photos={photos} status={status} actions={actions} />
            </div>
        );
    }
}

function mapStateToProps(state) {
  return {
    photos: state.photos.get('photos'),
    status: state.photos.get('status')
  }
}
export default connect(mapStateToProps)(PhotoApp);
