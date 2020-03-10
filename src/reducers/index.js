import {combineReducers} from 'redux';
const songsReducers =()=>{
    return [
    {title:'I love you , i hate you',id:1},
    {title:'Do you remember my name',id:2},
    {title:'Do we nedd to talk more',id:3}
    ]
}

export default combineReducers({
songs:songsReducers
})