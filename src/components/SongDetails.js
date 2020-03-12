import React from 'react';
import {connect} from 'react-redux'
const SongDetails=({selectedSong})=>{
   return selectedSong?<div>{selectedSong.title}</div>:'song is not selected'
}
const mapStateToProps=(state)=>{
    return{
        selectedSong:state.selectedSong
    }
}
export default connect(mapStateToProps)(SongDetails)