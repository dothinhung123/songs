import {combineReducers} from 'redux'
const songsReducer =()=>{
    return [
        {title:'No scrubs',duration:'4:05'},
        {title:'Mascran',  duration:'4:40'},
        {title:'Mascane',  duration:'4:40'},
        {title:'Masrane',  duration:'4:40'},
        {title:'Macrane',  duration:'4:40'}
    ]
}
const selectedSongReducer=(selectedSong =null,action)=>{
    if(action.type ==='SONG_SELECTED'){
    return action.payload;
    }
    else {
        return selectedSong
    }
}

export default combineReducers({
    songs:songsReducer,
    selectedSong:selectedSongReducer
})