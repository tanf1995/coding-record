import React, { Component } from 'react';
import './App.css';

import Base from "./components/base/Base";
import BaseHook from './components/Hook/BaseHook';
import TestRender from './components/TestRender';


class App extends Component {
    render() {
        return (
            <div className="app">
                {/* <Base /> */}
                {/* <BaseHook /> */}
                <TestRender />
            </div>
        );
    }
}

export default App;
