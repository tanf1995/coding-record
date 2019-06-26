import React, { Component } from 'react';
import './App.css';

import Base from "./components/base/Base";
import BaseHook from './components/Hook/BaseHook';


class App extends Component {
    render() {
        return (
            <div>
                {/* <Base /> */}
                <BaseHook />
            </div>
        );
    }
}

export default App;
