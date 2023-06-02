import React, {useEffect, useState} from 'react';

import s from './Counter.module.css'

import {ActiveBlock} from './ActiveBlock';
import {SettingsBlock} from './SettingsBlock';
import {getValueFromLocalStorage, setValueToLocalStorage} from '../../utils';
import {typeOfDisplay} from './ActiveBlock/Display';

export const CounterReact: React.FC = () => {
    const initialStartValue = 0;
    const initialMaxValue = 5;

    const [startValue, setStartValue] = useState(initialStartValue)
    const [maxValue, setMaxValue] = useState(initialMaxValue)
    const [count, setCount] = useState(startValue)
    const [typeDisplay, setTypeDisplay] = useState<typeOfDisplay>('counter')

    useEffect(() => {
        getValueFromLocalStorage('startCounterValue', setStartValue)
        getValueFromLocalStorage('startCounterValue', setCount)
        getValueFromLocalStorage('maxCounterValue', setMaxValue)
    }, [])

    const increaseCounter = () => {
        setCount(prev => prev + 1)
    }
    const resetCounter = () => {
        setCount(startValue)
    }
    const changeStartValue = (newStartValue: number) => {
        if (newStartValue <= 0 || newStartValue > maxValue){
            setTypeDisplay('error')
            setStartValue(newStartValue )
        }else {
            setStartValue(newStartValue )
            setTypeDisplay('info')
        }

    }
    const changeMaxValue = (newMaxValue: number) => {
        if (newMaxValue < 0 || newMaxValue <= startValue){
            setTypeDisplay('error')
            setMaxValue(newMaxValue )
        }else {
            setMaxValue(newMaxValue )
            setTypeDisplay('info')
        }

    }
    const setSettings = (newStartValue: number, newMaxValue: number) => {
        setCount(newStartValue)
        changeStartValue(newStartValue)
        changeMaxValue(newMaxValue)
        setValueToLocalStorage('startCounterValue', newStartValue)
        setValueToLocalStorage('maxCounterValue', newMaxValue)
        setTypeDisplay('counter')
    }

    // const isDefaultOptionValues = initialStartValue !== startValue || initialMaxValue !== maxValue
    // const isCorrectStartValue = startValue < 0
    // const isCorrectMaxAndStartValues = startValue < maxValue
    // const isCorrectOptionSettings = isCorrectStartValue || isCorrectMaxAndStartValues
    //
    // const isDisabledIncrease = count >= maxValue || !isCorrectMaxAndStartValues || isCorrectStartValue
    // const isDisabledReset = count < 1
    // const isDisabledSet = !isDefaultOptionValues || !isCorrectMaxAndStartValues || isCorrectStartValue
    const isDefaultOptionValues = initialStartValue !== startValue || initialMaxValue !== maxValue
    const isCorrectStartValue = startValue < 0
    const isCorrectMaxAndStartValues = startValue < maxValue

    const isDisabledIncrease = count >= maxValue || typeDisplay === 'error' || typeDisplay === 'info'
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
                typeDisplay={typeDisplay}
                isDisabledIncrease={isDisabledIncrease}
                isDisabledReset={isDisabledReset}
                resetCounter={resetCounter}
                increaseCounter={increaseCounter}
            />
        </div>
    )
}