import React, {useEffect, useState} from 'react';

import s from './Counter.module.css'

import {ActiveBlock} from './ActiveBlock';
import {SettingsBlock} from './SettingsBlock';

export const Counter: React.FC = () => {
    const initialStartValue = 0;
    const initialMaxValue = 5;

    const [startValue, setStartValue] = useState(initialStartValue)
    const [maxValue, setMaxValue] = useState(initialMaxValue)
    const [count, setCount] = useState(startValue)

    const increaseCounter = () => {
        setCount(prev => prev + 1)
    }
    const resetCounter = () => {
        setCount(startValue)
    }
    const changeStartValue = (newStartValue: number) => {
        setStartValue(newStartValue )
    }
    const changeMaxValue = (newMaxValue: number) => {
        setMaxValue(newMaxValue )
    }
    const setSettings = (newStartValue: number, newMaxValue: number) => {
        setCount(newStartValue)
        changeStartValue(newStartValue)
        changeMaxValue(newMaxValue)
    }

    // useEffect(() => {
    //     setSettings(startValue, maxValue)
    // }, [maxValue, startValue])

    const isDefaultOptionValues = initialStartValue !== startValue || initialMaxValue !== maxValue
    const isCorrectStartValue = startValue < 0
    const isCorrectMaxAndStartValues = startValue < maxValue
    const isCorrectOptionSettings = isCorrectStartValue || isCorrectMaxAndStartValues

    const isDisabledIncrease = count >= maxValue || !isCorrectMaxAndStartValues || isCorrectStartValue
    const isDisabledReset = count < 1
    const isDisabledSet = !isDefaultOptionValues || !isCorrectMaxAndStartValues || isCorrectStartValue

    return (
        <div className={s.root}>
            <SettingsBlock
                startValue={startValue}
                maxValue={maxValue}
                changeStartValue={changeStartValue}
                changeMaxValue={changeMaxValue}
                setSettings={setSettings}
                isDisabledSet={isDisabledSet}
                isCorrectStartValue={isCorrectStartValue}
                isCorrectMaxAndStartValues={isCorrectMaxAndStartValues}
            />
            <ActiveBlock
                count={count}
                increaseCounter={increaseCounter}
                resetCounter={resetCounter}
                isDisabledIncrease={isDisabledIncrease}
                isDisabledReset={isDisabledReset}
                isDefaultOptionValues={isDefaultOptionValues}
                isCorrectOptionSettings={isCorrectOptionSettings}
                isCorrectStartValue={isCorrectStartValue}
                isCorrectMaxAndStartValues={isCorrectMaxAndStartValues}
            />
        </div>
    )
}