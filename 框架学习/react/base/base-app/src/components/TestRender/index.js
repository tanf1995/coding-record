import React, {Component} from 'react';
import ClassChildren from './ClassChildren';
import PureRenderChildren from './PureRenderChildren';
import FunctionChildren from './FunctionChildren';


export default class TestRender extends Component{
    constructor(props){
        super(props);
        this.state = {
            clickCount: 0,
            data: ["h"]
        }
        this.good = false;
    }

    handleClickBtn = () => {
        this.setState({
            clickCount: this.state.clickCount+1,
        })
    }

    handleClickBtn2(){
        this.setState({
            clickCount: this.state.clickCount+1,
            data: this.state.data.concat("1")
        })
    }

    render(){
        console.log("render TestRender");

        return (
            <div>
                <p>click count: {this.state.clickCount}</p>
                <button onClick={this.handleClickBtn}>add</button>
                <br />
                <button onClick={() => this.handleClickBtn2()}>add2</button>

                <ClassChildren data={this.state.data} />

                <PureRenderChildren data={this.state.data} />

                <hr />

                <FunctionChildren>
                    <p>hello</p>
                    <p>world</p>
                </FunctionChildren>
            </div>
        )
    }
}