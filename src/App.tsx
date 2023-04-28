import React, {useState} from 'react';

import './App.css';

import {Counter} from './components/Counter';

function App() {
    const initialCounterValue = 0;
    const maxCounterValue = 5;

    const [count, setCount] = useState(initialCounterValue)

    const increaseCounter = () => {
        setCount(prev => prev + 1)
    }
    const resetCounter = () => {
        setCount(initialCounterValue)
    }

    const isDisabledIncrease = count >= maxCounterValue
    const isDisabledReset = count < 1

    return (
        <div className="App">
            <Counter
                count={count}
                increaseCallback={increaseCounter}
                resetCallback={resetCounter}
                isDisabledIncrease={isDisabledIncrease}
                isDisabledReset={isDisabledReset}
            />
        </div>
    );
}

export default App;
