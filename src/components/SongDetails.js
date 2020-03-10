import React from 'react';
import {connect} from 'react-redux'
class SongDetail extends React.Component{
    renderList(){
        if(this.props.selectedSong=== null){
            return <div>Song is not selected</div>
        }
        else {
            return<div>{this.props.selectedSong.title}</div>
        }

    }
    render(){
        return(
            <div>
                {this.renderList()}

            </div>
        )
    }
}
const mapStateToProps=(state)=>{
       return{
           selectedSong:state.selectedSong
       }
}
export default connect(mapStateToProps)(SongDetail)