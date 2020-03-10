import React from 'react';
import {connect} from 'react-redux'
class SongList extends React.Component{

    renderList(){
        return this.props.songs.map(({title,id})=><form key={id} onClick={(e)=>e.preventDefault()}>
           <div className="title">{title}</div>
           <button> Click</button>
            </form>)
    }
    render(){
        console.log(this.props.songs)
        return(
            <div>
                    {this.renderList()}
            </div>
        )
    }
}
const mapStateToProps = (state)=>{
return {
    songs:state.songs
}
}
export default connect(mapStateToProps)(SongList)