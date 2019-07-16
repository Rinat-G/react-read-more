import React from 'react';
import logo from './logo.svg';
import './App.css';
import ReadMore from './ReadMore'
import ReadMoreDivs from "./ReadMoreDivs";

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
                <ReadMore text={"only text"}
                          linkTextExpand={'...more'}
                          linkTextCollapse={'...less'}
                stringLength={10}>
                    some usual not much long text
                </ReadMore>
                <br/>
                <ReadMoreDivs linkTextCollapse={'...less'}
                              linkTextExpand={'...more'}
                              elementsAmount={5}>
                    <div>1</div>
                    <div>2</div>
                    <div>3</div>
                    <div>4</div>
                    <div>5</div>
                    <div>6</div>
                </ReadMoreDivs>
            </header>
        </div>
    );
}

export default App;
