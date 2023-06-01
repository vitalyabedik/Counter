import React from 'react';

import s from './Counter.module.css'

import {ActiveBlock} from './ActiveBlock';
import {SettingsBlock} from './SettingsBlock';

export const Counter: React.FC = () => {
    // useEffect(() => {
    //     getValueFromLocalStorage('startCounterValue', setStartValue)
    //     getValueFromLocalStorage('startCounterValue', setCount)
    //     getValueFromLocalStorage('maxCounterValue', setMaxValue)
    // }, [])

    return (
        <div className={s.root}>
            <SettingsBlock/>
            <ActiveBlock/>
        </div>
    )
}







