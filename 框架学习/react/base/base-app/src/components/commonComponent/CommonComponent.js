import React, { Component } from 'react';


class CommonComponent extends Component{
    render(){
        console.log(this.props.match);

        return (
            <h1>{this.props.content}</h1>
        )
    }
}


export default CommonComponent;