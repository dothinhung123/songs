import {combineReducers} from 'redux';

const songReducers=()=>{
    return [
        {title:'Do you remember my name',id:3},
        {title:'I hate when i miss you',id:4},
        {title:'I should go home',id:2}
    ]
}
const selectedSongReducers=(state=null,action)=>{
    switch(action.type){
        case 'SELECT_SONG':return action.payload
        default:return state
    }

}

export default combineReducers({
    songs:songReducers,
    selectedSong:selectedSongReducers

})