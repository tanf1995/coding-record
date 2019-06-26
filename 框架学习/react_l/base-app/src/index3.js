import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


function CreateName(props){
    return (
        <h1>
            your name is : { props.first_name + " " + props.last_name }
        </h1>
    );
}

const user = {
    first_name: "feng",
    last_name: "tan"
}

class Clock extends React.Component {
    constructor(props){
        super(props);
        this.state = { 
            date: new Date(),
            click_times: 0
         };
    }

    tick(){
        this.setState({
            date: new Date()
        })
    }

    add_num = () => {
        this.setState({
            click_times: this.state.click_times + 1
        })
    }

    componentDidMount(){
        this.timerId = setInterval( () => this.tick(), 1000 );
    }
    componentWillUnmount(){
        clearInterval(this.timerId);
    }

    render(){
        return (
            <div>
                <h1>hello clock</h1>
                <h2>current time : {this.state.date.toLocaleTimeString()}</h2>
                <p>click btn times: {this.state.click_times}</p>
                <button onClick={this.add_num}>click me</button>
            </div>
        )
    }
}


function App(){
    return (
        <div>
            <CreateName first_name={user.first_name} last_name={user.last_name} />
            <Clock />
            <Clock />
        </div>
    )
}


  ReactDOM.render(
      <App />,
      document.getElementById('root')
  )