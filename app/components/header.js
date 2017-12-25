import React from 'react'
import './header.less'

class Header extends React.Component{
    render(){
        return (
            <div className="components-header row">
                <img src="/static/images/logo.jpg" width="40" alt="" className="-col-auto"/>
                <h1 className="caption">react music player</h1>
            </div>
        );
    }
}

export default Header;