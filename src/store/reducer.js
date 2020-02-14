const initialState = {
    rockTracks: [],
    selectedRockTrack: {}
}

const reducer = (state = initialState, action) => {
    switch(action.type)
    {
        case 'GET_TRACKS':
        {
            return{
                ...state,
                rockTracks: action.rockTracks
            }
        }
        case 'SET_TRACK':
        {
            return{
                ...state,
                selectedRockTrack: state.rockTracks[action.rockTrackIndex]
            }
        }
        default:
        {
            return state;
        }
    }
};

export default reducer;
 
