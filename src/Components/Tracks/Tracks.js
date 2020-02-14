import React, { Component } from 'react';
import { connect } from 'react-redux';

import Track from '../Track/Track';

class Tracks extends Component {

    selectedTrackHandler = ( trackIndex ) => {
        this.props.onSelectedTrack(trackIndex);
        this.props.history.push( '/rocktracks/' + trackIndex);
    }

    render() {

        const rockTracks = this.props.rockTrx.map((rockTrack, index) => {
            return <Track
                key={rockTrack.trackId}
                trackName={rockTrack.trackName}
                artist={rockTrack.artistName}
                trackPrice={rockTrack.trackPrice}
                artworkURL={rockTrack.artworkUrl100}
                trackDuration={rockTrack.trackTimeMillis}
                trackReleaseDate={rockTrack.releaseDate} 
                selectedPost={() => this.selectedTrackHandler( index )} />
        })
        return (
            <div>
                {rockTracks}
            </div>
        )
    }
};

const mapStateToProps = state => {
    return {
        rockTrx: state.rockTracks,
        rockTrxIndex: state.selectedRockTrack
    };
}
const mapDispatchToProps = dispatch => {
    return {
        onSelectedTrack: (trackIndex) => dispatch({type: 'SET_TRACK', rockTrackIndex: trackIndex})
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Tracks);