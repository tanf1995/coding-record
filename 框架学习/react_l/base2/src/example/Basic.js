import React from 'react';
import { BrowserRouter as Router, Route, Link, NavLink, Switch } from 'react-router-dom';


function BasicExample(){
    return (
        <Router 
            // basename="/tf"
            // forceRefresh
            >
            <div>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">ABOUT</Link>
                    </li>
                    <li>
                        <Link to="/topics">TOPICS</Link>
                    </li>
                    <li>
                        <NavLink 
                            to="/test"
                            activeStyle={{color: "red"}}
                            exact
                        >TEST</NavLink>
                    </li>
                    <li>
                        <NavLink 
                            to="/test/2"
                            activeStyle={{color: "red"}}
                        >TEST2</NavLink>
                    </li>
                </ul>
                <hr />

                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/About" component={About} />
                    <Route path="/topics" component={Topics} />
                    <Route children={() => <h1>hello</h1>} />
                </Switch>
                {/* <Route exact path="/" component={Home} />
                <Route path="/About" component={About} />
                <Route path="/topics" component={Topics} />
                <Route children={() => <h1>hello</h1>} /> */}
            </div>
        </Router>
    )
}

function Home(){
    return (
        <div>Home</div>
    )
}

function About({match, location, history}){
    console.log(location);
    console.log(match);
    console.log(history);
    return (
        <div>
            About
        </div>
    )
}

function Topic({match}){
    return (
        <div>
            <h3>{match.params.topicId}</h3>
        </div>
    )
}

function Topics({match}){
    return (
        <div>
            <h2>Topics</h2>
            <ul>
                <li>
                    <Link to={`${match.url}/rendering`}>Rendering with React</Link>
                </li>
                <li>
                    <Link to={`${match.url}/components`}>Components</Link>
                </li>
                <li>
                    <Link to={`${match.url}/props-v-state`}>Props v. State</Link>
                </li>
            </ul>
            
            <Route path={`${match.path}/:topicId`} component={Topic} />
            <Route 
                exact 
                path={match.path} 
                render={() => <h3>Please select a topic.</h3>} />
        </div>
    )
}

export default BasicExample;