import React, { Component } from 'react';
// reducer
import CountTool from './components/CountTool';  
// test
import Home from './components/Home';
// router
import BasicExample from './example/Basic';
import AuthExample from './example/Redirects';


class App extends Component {
    render(){
        return (
            // <BasicExample />
            // <AuthExample />
            // <Home>hello</Home>
            <CountTool />
        )
    }
}

export default App;
