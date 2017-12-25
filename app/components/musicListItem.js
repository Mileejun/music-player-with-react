import React from 'react'

class MusicListItem extends React.Component{
    render() {
        let musicItem = this.props.musicItem;
        return(
            <li className={`components-musiclistitem${this.props.focus?'focus':''}`}>
                <p>{musicItem.title} - {musicItem.artist}</p>
                <p className="delete">x</p>
            </li>  
        );
    }
}

export default MusicListItem;