import React from 'react';
import {connect} from 'react-redux'
import {selectSong} from '../actions'
class SongList extends React.Component{
    renderList(){
        return this.props.songs.map(song=>{
            return (
                <div className="item" key={song.title}>
                    <div className="right floated container">
                        <button className="ui button primary" onClick={()=>this.props.selectSong(song)}>
                            Select
                        </button>
                    </div>
                    <div className="ui divided list">{song.title}</div>
                </div>
            )
        })
    }
    render(){
        
        //this.props ==={songs:state.songs}
        return(
            <div>
              {this.renderList()}
            </div>
        )
    }
}
const mapStateToProps =(state)=>{
    console.log(state);
    return {songs:state.songs}

}
export default connect(mapStateToProps,{selectSong})(SongList)