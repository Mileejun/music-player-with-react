import React from 'react'
import './header.less'

class Progress extends React.Component{
    constructor(props) {
        super(props);
    }
    changeProgress(e){
        console.log('hi');
        let progressBar = this.refs.progressBar;
        let progress = (e.clientX - progressBar.
            getBoundingClientRect().left) / progressBar.clientWidth;
        console.log(progress);
        this.props.onProgressChange && this.props.
            onProgressChange(progress);
    }
    render(){
        return (
            <div className="components-progress" ref="progressBar"
                 onClick={this.changeProgress.bind(this)}>
                <div className="progress"
                    style={{width: `${this.props.progress}%`, background:this.props.barColor}}
                ></div>
            </div>
        );
    }
}

export default Progress;