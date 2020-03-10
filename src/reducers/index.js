import {combineReducers} from 'redux';
const songReducers =()=>{
    return[
            {title:'do you remember me',id:4},
            {title:'I hate the way you told me ', id:3},
            {title:'I do love you', id:2}
        ]
    
}
const selectedSongReducers =(state=null,action)=>{
    switch(action.type){
        case'SELECT_SONG':return action.payload
        default :return state
    }
    
}

export default combineReducers({
    songs:songReducers,
    selectedSong:selectedSongReducers

})