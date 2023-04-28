import React, {useState} from 'react';

import s from './Counter.module.css'

import {ActiveBlock} from './ActiveBlock';
import {SettingsBlock} from './SettingsBlock';

export const Counter: React.FC = () => {
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
        <div className={s.root}>
                <ActiveBlock
                    count={count}
                    increaseCounter={increaseCounter}
                    resetCounter={resetCounter}
                    isDisabledIncrease={isDisabledIncrease}
                    isDisabledReset={isDisabledReset}
                />
                <SettingsBlock
                    count={count}
                    increaseCounter={increaseCounter}
                    resetCounter={resetCounter}
                    isDisabledIncrease={isDisabledIncrease}
                    isDisabledReset={isDisabledReset}
                />
        </div>
)
}