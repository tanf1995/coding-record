import React, { Component } from 'react';


class Home extends Component{
    render(){
        return (
            <div>
                首页
                {this.props.children}
            </div>
        )
    }
}

export default Home;