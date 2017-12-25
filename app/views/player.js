import React from 'react'
import Progress from '../components/progress'
import './player.less'
import {link} from 'react-router'

let duration = null
class Player extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            progress: 0,
            volume:0,
            isPlay: true
        }
    }
    componentDidMount() {
        $('#player').bind($.jPlayer.event.timeupdate, (e)=> {
            duration = e.jPlayer.status.duration;
            this.setState({
                volume: e.jPlayer.options.volume * 100,
                progress: e.jPlayer.status.currentPercentAbsolute
            });
        });
    }
    componentWillMount() {
        $('#player').unbind($.jPlayer.event.timeupdate);
    }
    progressChangeHandler(progress) {
        $('#player').jPlayer('play', duration * progress);
    }
    changeVolumeHandler(progress) {
        $('#player').jPlayer('volume', progress);
    }
    play(){
        if(this.state.isPlay){
            $('#player').jPlayer('pause');
        }else{
            $('#player').jPlayer('play');
        }

        this.setState({
            isPlay:!this.state.isPlay
        })
    }
    render() {
        return (
            <div className="player-view">
                <h1 className="caption"><Link to="/list">wode yinyue</Link></h1>
                <div className="box mt20 row">
                    <div className="control-wrapper">
                        <h2 className="music-title">{this.props.currentMusicItem.title}</h2>
                        <h3 className="music-artist">{this.props.currentMusicItem.artist}</h3>
                        <div className="row mt20">
                            <div className="left-time -col-auto">-2:00</div>
                            <div className="volume-container">
                                <i className="icon-volume">声音</i>
                                <div className="volume-wrapper">
                                    <Progress
                                        progress={this.state.volume}
                                        onProgressChange={this.changeVolumeHandler}
                                        barColor = '#aaa'>
                                    </Progress> 
                                </div>
                            </div>
                        </div>
                        <div style={{height:10,lineHeight:'10px'}}>
                            <Progress
                                progress={this.state.progress}
                                onProgressChange={this.progressChangeHandler}
                                barColor = '#ff0000'>
                            </Progress> 
                        </div>
                        <div className="icon-box mt35 row">
                            <div>
                                <i className="icon prev">左</i>
                                <i className="icon play" onClick={this.play.bind(this)}>播</i>
                                <i className="icon next">右</i>
                            </div>
                            <div className="-col-auto">
                                <i className="icon repeat-cycle"></i>
                            </div>
                        </div>
                    </div>
                    <div className="-col-auto cover">
                        <img src={this.props.currentMusicItem.cover} alt=""/>
                    </div>
                </div>
                <div id="player"></div>
            </div>
        );
    }
}

export default Player;