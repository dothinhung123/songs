import React from 'react' ;
import {connect} from 'react-redux';
import {selectSong} from '../actions/index'
class SongList extends React.Component{
      renderList=()=>{
        return <div>
            {this.props.songs.map(song=><div key={song.id}>
                <span>{song.title}</span>
                <button onClick={()=>this.props.selectSong(song)}>Choose</button>
            </div>)}
        </div>
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
return {
    songs:state.songs
}
}
export default connect(mapStateToProps,{selectSong})(SongList)