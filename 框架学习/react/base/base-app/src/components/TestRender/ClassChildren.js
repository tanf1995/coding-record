import React, {Component} from 'react';


export default class ClassChildren extends Component{
    shouldComponentUpdate(props){
        if(props.data.toString() === this.props.data.toString()) return false;
        return true;
    }

    render(){
        console.log("render ClassChildren");

        return (
            <div>
                test render
                props data: {this.props.data.toString()}
            </div>
        )
    }
}