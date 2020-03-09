import React from 'react';

import {connect} from 'react-redux'

 const SongDetail =({mySelectedSong})=>{
     
   if(!mySelectedSong){
       return<div>Song is not selected</div>
   }
  else {
      return <div>{mySelectedSong.title}</div>
  }
  
 }
 const mapStateToProps =(state)=>{

    return {mySelectedSong:state.selectedSong}
 }
 export default connect(mapStateToProps)(SongDetail)