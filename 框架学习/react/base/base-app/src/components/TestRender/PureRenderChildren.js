import React, {PureComponent} from 'react';

export default class PureC extends PureComponent{
    render(){
        console.log("render PureChildren");

        return (
            <div>
                pure render
                props data: {this.props.data.toString()}
            </div>
        )
    }
}