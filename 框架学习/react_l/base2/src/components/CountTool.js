import React, {Component} from 'react';
import store from '../redux/index';
import { connect } from 'react-redux';


class CountTool extends Component{
    constructor(props){
        super(props);
        this.state = {
            new_todo: "",
            // todo_list: store.getState()
        }
    }

    set_new_todo = (e) => {
        this.setState({
            new_todo: e.target.value
        })
    }

    add_new_todo = () => {
        store.dispatch({
            type: "ADD_TODO",
            payload: this.state.new_todo
        });
        this.setState({
            new_todo: ""
        })
    }

    delete_todo = (index) => {
        store.dispatch({
            type: "DELETE_TODO",
            payload: {
                index: index
            }
        })
    }
    componentDidMount(){
        store.subscribe(() => {
            this.setState({
                todo_list: store.getState()
            })
        })
    }

    render(){
        return (
            <>
                <ul>
                    {this.props.todo_list.map( (item, index) => {
                        return (
                            <li key={index}>
                                待办: {item} <button onClick={() => this.delete_todo(index)}>×</button>
                            </li>
                        )
                    } )}
                </ul>
                <input value={this.state.new_todo} onChange={this.set_new_todo} />
                <button onClick={this.add_new_todo}>添加</button>

                <div>
                    {this.props.todos}
                </div>
            </>
        )
    }
}

const mapStateToProps = state => {
    return {
        todo_list: state
    };
}


export default connect(mapStateToProps)(CountTool);