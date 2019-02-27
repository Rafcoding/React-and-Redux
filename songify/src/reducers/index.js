import { combineReducers } from 'redux';


// Reducers
const songsReducer = () => {
  return [
    {title: 'No Scrubs', duration: '4:05'},
    {title: 'Macarena', duration: '3:05'},
    {title: 'All Star', duration: '3:35'}
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === 'SONG_SELECTED') {
    return action.payload
  }

  return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer
});
