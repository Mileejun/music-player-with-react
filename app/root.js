import React from 'react';
import Header from './components/header'
import Player from './views/player'
import List from './views/list'
import {MUSIC_LIST} from './config/musiclist'
import {BrowserRouter, Link, Route, hashHistory} from 'react-router-dom'

class App extends React.Component{
    constructor(props){
        super(props);
        this.state={
            musicList:MUSIC_LIST,
            currentMusicItem: MUSIC_LIST[1]
        }
    }
    componentDidMount() {
        $('#player').jPlayer({
            ready: function() {
                $(this).jPlayer('setMedia', {
                    mp3:'http://dl.stream.qqmusic.qq.com/C400003OUlho2HcRHC.m4a?vkey=AD7332A984D1DBE168B7F3EEB92EC095DEC4164BF8A47FB7F1745C00D42BC7E9582A5574EBB685AE55636B885586F9AC27D7E1B8BFAEC72D&guid=6109134381&uin=0&fromtag=66'
                }).jPlayer('play');
            },
            supplied: 'mp3',
            wmode: 'window'
        });
    }
    render() {
        return (
            <div>
                <Header />
                {/* <div id="player"></div>   */}
                {/* <Player
                    currentMusicItem={this.state.currentMusicItem}>
                </Player> */}
                {/* <List
                    currentMusicItem={this.state.currentMusicItem}
                    musicList={this.state.musicList}>
                </List> */}
                {/* {React.cloneElement(this.props.children, this.state)} */}
                {/* {this.props.children} */}


                {/* <List
                    {...this.states}
                    {...this.props.children} 
                    currentMusicItem={this.state.currentMusicItem}
                    musicList={this.state.musicList} 
                /> */}
            </div>
        );
    }
}

class Root extends React.Component{
    render() {
        return(
            <BrowserRouter history={hashHistory}>
                <Route path="/m" component={App}>
                    <Route path="/player" component={Player}></Route>
                    <Route path="/list" component={List}></Route>
                </Route>
            </BrowserRouter>
        );
    }
}

export default Root;