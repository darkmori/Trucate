import React from 'react';
import logo from './logo.svg';
import './App.css';
import TruncateText from './TruncateText';

function App() {
    return (
        <div className="App">
            <h1>Truncate Text Example</h1>
            <div>
                <TruncateText text="Short"/>
            </div>
            <div>
                <TruncateText text="ExactlyNine"/>
            </div>
            <div>
                <TruncateText text="1234567890"/>
            </div>
            <div>
                <TruncateText text="123456789っf"/>
            </div>
        </div>
    );
}

export default App;
