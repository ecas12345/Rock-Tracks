import React from 'react';
import './Track.css';
const Track = (props) => {

    return (
        <div>
            <div className="center-tracks">
                    <img src={props.artworkURL} alt={props.artworkURL}></img>
                    <br />
                    <span className="tracks-artist">Artist: {props.artist}</span>
                    <br />
                    <span className="tracks-name">Track Name: {props.trackName}</span>
                    <br />
                    <span className="price-name">Price:${props.trackPrice}</span> 
                    <br />
                    <button className="button-style" onClick={props.selectedPost}>Song Details</button>
            </div>
            <hr></hr>
        </div>
    )
}

export default Track;