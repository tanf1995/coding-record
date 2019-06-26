import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


function TodoList(props){
    let nums = [1, 2, 3, 4];

    return (
        <ul>
            {nums.map( (item, index) => {
                return (
                    <li key={index}>{ item }</li>
                )
            })}
        </ul>
    )
}


function App(){
    return (
        <div>
            <TodoList />
        </div>
    )
}


  ReactDOM.render(
      <App />,
      document.getElementById('root')
  )