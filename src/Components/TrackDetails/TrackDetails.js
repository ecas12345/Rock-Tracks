import React, { Component } from 'react';
import { connect } from 'react-redux';

import './TrackDetails.css';

class TrackDetails extends Component {
    constructor(props){
        super(props);
        this.rockTrxTime = this.convertMsToTime(this.props.rockTrxIndex.trackTimeMillis);
        this.rockTrxDate = this.formatReleaseDate(this.props.rockTrxIndex.releaseDate);
    }
    convertMsToTime = (trackTimeMS) => 
    {
        var ms = trackTimeMS % 1000;
        trackTimeMS = (trackTimeMS - ms) / 1000;
        var secs = trackTimeMS % 60;
        trackTimeMS = (trackTimeMS - secs) / 60;
        var mins = trackTimeMS % 60;
        return mins + ":" + secs;
    }

    formatReleaseDate = (releaseDate) => 
    {
        var splitDateString = releaseDate.split("-");
        var splitDateStringMonth = splitDateString[2].split("T",1)

        return splitDateString[1] + "-" + splitDateStringMonth + "-" + splitDateString[0];
    }
    render() {
        return (
            <div className="center">
                <div className="center-elements">
                    <img src={this.props.rockTrxIndex.artworkUrl100} alt=""></img>
                    <br />
                    <span className="title-text"><strong>Title:</strong>{this.props.rockTrxIndex.trackName}</span>
                    <br />
                    <span className="artist-text"><strong>Artist:</strong> {this.props.rockTrxIndex.artistName}</span>
                    <br />
                    <strong>Duration:</strong> {this.rockTrxTime}
                    <br />
                    <strong>Release Date:</strong> {this.rockTrxDate}
                    <br />
                    <strong>Track Price:</strong> {this.props.rockTrxIndex.trackPrice}
                    <br />
                    <button className="track-details-button-style" onClick={() => window.open(this.props.rockTrxIndex.trackViewUrl , "_blank")}>More Details</button>
                </div>
            </div>
        )
    }
};

const mapStateToProps = state => {
    return {
        rockTrx: state.rockTracks,
        rockTrxIndex: state.selectedRockTrack
    }
}


export default connect(mapStateToProps)(TrackDetails);