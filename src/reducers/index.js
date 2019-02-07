import { combineReducers } from 'redux';

const songsReducer = () => {
    return [
        { title: 'Smells like a teen sprits', duration: '04:05' },
        { title: 'Like toy soldiers', duration: '02:37' },
        { title: 'What I\'ve done', duration: '05:41' },
        { title: 'Viva la vida', duration: '03:16' }
    ]
};

const selectedSongReducer = (selectedSong = null, action) => {
    if (action.type === 'SONG_SELECTED') {
        return action.payload;
    }

    return selectedSong;
};

export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer
});