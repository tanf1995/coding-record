import React from 'react';


// function BoilingVerdict(props){
//     return props.celsius >= 100 ? <p>水会烧开</p> : <p>水不会烧开</p>;
// }

const scaleNames = {
    c: 'Celsius',
    f: 'Fahrenheit'
}

function toCelsius(fah){
    return (fah - 32) * 5 / 9;
}

function toFahrenheit(celsius){
    return (celsius * 9 / 5) + 32;
}

function tryConvert(tem, convert){
    const input = parseFloat(tem);
    if(Number.isNaN(input)){
        return "";
    }
    const output = convert(input);
    const rounded = Math.round(output * 1000) / 1000;
    return rounded.toString();
}


class TemperatureInput extends React.Component{
    handleChange = (e) => {
        if(this.props.scale === "c"){
            this.props.changeTem(tryConvert(e.target.value, toFahrenheit));
        }else{
            this.props.changeTem(e.target.value);
        }
    }

    render(){
        return (
            <fieldset>
                <legend>输入一个温度（单位： {scaleNames[this.props.scale]}）</legend>
                <input 
                    value={this.props.temperature}
                    onChange={this.handleChange}
                />
            </fieldset>
        )
    }
}


class Calculator extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            temperature: ""
        }
    }

    handleChange = (new_value) => {
        this.setState({
            temperature: new_value
        })
    }

    render(){
        return (
            <div>
                <TemperatureInput scale="c" temperature={tryConvert(this.state.temperature, toCelsius)} changeTem={this.handleChange} />
                <TemperatureInput scale="f" temperature={this.state.temperature} changeTem={this.handleChange} />
            </div>
        )
    }
}

export default Calculator;