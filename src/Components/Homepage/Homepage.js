import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink, Route, Switch } from 'react-router-dom';

import Tracks from '../Tracks/Tracks';
import TrackDetails from '../TrackDetails/TrackDetails';
import fetchJsonp from 'fetch-jsonp';

import './Homepage.css';

class Homepage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            rockTracks: []
        }
    }
    componentDidMount = () => {
            fetchJsonp('https://itunes.apple.com/search?term=rock&media=music')
            .then(response =>  {
                return response.json()
            })
            .then(jsonTracks => {
                this.props.onGetTracks(jsonTracks.results);
            })
    }

    render() {
        return (
            <div>
                <header>
                    <nav>
                        <ul>
                            <li><NavLink className="nav-link-styles" to="/" exact>Home</NavLink></li>
                        </ul>
                    </nav>
                </header>
                <Switch>
                    <Route path="/rocktracks/:id" component={TrackDetails}></Route>
                    <Route path="/" exact component={Tracks}></Route>
                </Switch>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onGetTracks: (returnedTracks) => dispatch({type: 'GET_TRACKS', rockTracks: returnedTracks})
    };
};

export default connect(null, mapDispatchToProps)(Homepage);