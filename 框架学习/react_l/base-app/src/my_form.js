import React from 'react';


class MyForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            uname: "",
            desc: "",
            hobby: "football"
        }
    }

    input_name = (e) => {
        this.setState({
            uname: e.target.value
        })
    }

    input_desc = (e) => {
        this.setState({
            desc: e.target.value
        })
    }

    select_hobby = (e) => {
        this.setState({
            hobby: e.target.value
        })
    }

    render(){
        return (
            <div>
                <h2>表单</h2>
                <form>
                    <label>name: </label>
                    <input value={this.state.uname} onChange={this.input_name}></input>
                    <br></br>

                    <label>description: </label>
                    <textarea value={this.state.desc} onChange={this.input_desc}></textarea>

                    <br />
                    <label>hobby: </label>
                    <select value={this.state.hobby} onChange={this.select_hobby}>
                        <option value="basketball">篮球</option>
                        <option value="football">足球</option>
                        <option value="tennis">网球</option>
                    </select>
                </form>
                <p>your name is : {this.state.uname}</p>
                <p>your desc is : {this.state.desc}</p>
                <p>your hobby is : {this.state.hobby}</p>
            </div>
        )
    }
}


export default MyForm;