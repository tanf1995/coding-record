import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import MyForm from './my_form';
import Calculator from './stateUp';
import FullTree from './combination';



function App(){
    return (
        <div>
            <MyForm />
            <Calculator />
            <FullTree />
        </div>
    )
}


  ReactDOM.render(
      <App />,
      document.getElementById('root')
  )