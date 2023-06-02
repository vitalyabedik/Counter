import React from 'react';

import './App.css';

import {CounterReact} from './components/CounterReact';
import {CounterRedux} from './components/CounterRedux';

export const App: React.FC = () => {
    return (
        <div className="App">
            {/*<CounterReact/>*/}
            <CounterRedux/>
        </div>
    );
}


