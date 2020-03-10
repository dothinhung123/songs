import {combineReducers} from 'react';
const songReducers =()=>{
    return[
            {title:'do you remember me',id:4},
            {title:'I hate the way you told me ', id:3},
            {title:'I do love you', id:2}
        ]
    
}

export default combineReducers({
    songs:songReducers

})